import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { generateEmbedding, generateChatResponse } from '@/lib/anthropic'

// POST /api/chat - Handle chat messages (public endpoint for embed widget)
export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const body = await request.json()
    const { botId, sessionId, message, messages = [] } = body

    if (!botId || !message) {
      return NextResponse.json(
        { error: 'Bot ID and message are required' },
        { status: 400 }
      )
    }

    // Use admin client for public access (service role)
    const supabase = createAdminClient()

    // Get bot configuration
    const { data: bot, error: botError } = await supabase
      .from('bots')
      .select(`
        *,
        bot_appearance (*),
        lead_capture_settings (*)
      `)
      .eq('id', botId)
      .eq('is_published', true)
      .eq('status', 'active')
      .single()

    if (botError || !bot) {
      return NextResponse.json({ error: 'Bot not found or inactive' }, { status: 404 })
    }

    // Check conversation limit
    const { data: profile } = await supabase
      .from('profiles')
      .select('conversation_limit, conversations_used')
      .eq('id', bot.user_id)
      .single()

    if (profile && profile.conversations_used >= profile.conversation_limit) {
      return NextResponse.json(
        { error: 'Conversation limit reached', content: bot.fallback_message },
        { status: 429 }
      )
    }

    // Get or create conversation
    let conversationId: string

    if (sessionId) {
      const { data: existingConversation } = await supabase
        .from('conversations')
        .select('id')
        .eq('session_id', sessionId)
        .eq('bot_id', botId)
        .single()

      if (existingConversation) {
        conversationId = existingConversation.id
      } else {
        const { data: newConversation } = await supabase
          .from('conversations')
          .insert({
            bot_id: botId,
            session_id: sessionId,
            visitor_user_agent: request.headers.get('user-agent') || undefined,
            visitor_referrer: request.headers.get('referer') || undefined,
          })
          .select()
          .single()

        conversationId = newConversation!.id

        // Increment conversations used
        await supabase.rpc('increment_conversations_used', {
          user_id: bot.user_id,
        })
      }
    } else {
      const newSessionId = crypto.randomUUID()
      const { data: newConversation } = await supabase
        .from('conversations')
        .insert({
          bot_id: botId,
          session_id: newSessionId,
          visitor_user_agent: request.headers.get('user-agent') || undefined,
          visitor_referrer: request.headers.get('referer') || undefined,
        })
        .select()
        .single()

      conversationId = newConversation!.id
    }

    // Store user message
    await supabase.from('messages').insert({
      conversation_id: conversationId,
      role: 'user',
      content: message,
    })

    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(message)

    // Search for similar chunks using vector similarity
    const { data: chunks } = await supabase.rpc('search_similar_chunks', {
      p_bot_id: botId,
      p_query_embedding: queryEmbedding,
      p_match_threshold: 0.7,
      p_match_count: 5,
    })

    // Build context from retrieved chunks
    const context = chunks && chunks.length > 0
      ? chunks.map((chunk: { content: string }) => chunk.content).join('\n\n')
      : 'No specific information found in the knowledge base.'

    // Prepare chat history
    const chatHistory = messages.slice(-10).map((msg: { role: string; content: string }) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }))
    chatHistory.push({ role: 'user' as const, content: message })

    // Generate AI response
    const { content: responseContent, tokensUsed } = await generateChatResponse({
      messages: chatHistory,
      context,
      botConfig: {
        botName: bot.bot_name,
        tone: bot.tone,
        customInstructions: bot.custom_instructions || undefined,
        fallbackMessage: bot.fallback_message,
        model: bot.model,
        temperature: bot.temperature,
        maxTokens: bot.max_tokens,
      },
    })

    const latencyMs = Date.now() - startTime

    // Store assistant message
    await supabase.from('messages').insert({
      conversation_id: conversationId,
      role: 'assistant',
      content: responseContent,
      model: bot.model,
      tokens_used: tokensUsed,
      latency_ms: latencyMs,
      source_chunks: chunks?.map((c: { id: string }) => c.id) || [],
    })

    // Update conversation
    await supabase
      .from('conversations')
      .update({
        message_count: messages.length + 2,
        last_message_at: new Date().toISOString(),
      })
      .eq('id', conversationId)

    return NextResponse.json({
      content: responseContent,
      conversationId,
      sessionId: sessionId || conversationId,
    })
  } catch (error) {
    console.error('Error in POST /api/chat:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
