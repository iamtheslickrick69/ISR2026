import OpenAI from 'openai'

// OpenAI client for chat completions and embeddings (lazy-loaded)
let openaiInstance: OpenAI | null = null

export function getOpenAI(): OpenAI {
  if (!openaiInstance) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.')
    }
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  }
  return openaiInstance
}

// For backwards compatibility
export const openai = new Proxy({} as OpenAI, {
  get(target, prop) {
    return getOpenAI()[prop as keyof OpenAI]
  }
})

// Generate embeddings for text
export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })
  return response.data[0].embedding
}

// Generate chat completion with context
export async function generateChatResponse({
  messages,
  context,
  botConfig,
}: {
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
  context: string
  botConfig: {
    botName: string
    tone: string
    customInstructions?: string
    fallbackMessage: string
    model?: string
    temperature?: number
    maxTokens?: number
  }
}): Promise<{ content: string; tokensUsed: number }> {
  const systemPrompt = buildSystemPrompt(botConfig, context)

  const response = await openai.chat.completions.create({
    model: botConfig.model || 'gpt-4o-mini',
    temperature: botConfig.temperature || 0.7,
    max_tokens: botConfig.maxTokens || 500,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
  })

  return {
    content: response.choices[0]?.message?.content || botConfig.fallbackMessage,
    tokensUsed: response.usage?.total_tokens || 0,
  }
}

function buildSystemPrompt(
  botConfig: {
    botName: string
    tone: string
    customInstructions?: string
    fallbackMessage: string
  },
  context: string
): string {
  const toneInstructions = {
    professional: 'Communicate in a professional, business-like manner. Be concise and informative.',
    friendly: 'Be warm, approachable, and helpful. Use a conversational tone while remaining informative.',
    casual: 'Be relaxed and conversational. Feel free to use casual language and be personable.',
    custom: botConfig.customInstructions || '',
  }

  return `You are ${botConfig.botName}, an AI assistant for a business website.

PERSONALITY & TONE:
${toneInstructions[botConfig.tone as keyof typeof toneInstructions] || toneInstructions.friendly}

KNOWLEDGE BASE:
Use the following information to answer questions. Only use this information - do not make up facts.
If you cannot answer based on the provided context, say: "${botConfig.fallbackMessage}"

---
${context}
---

GUIDELINES:
1. Be helpful and accurate
2. Keep responses concise but complete
3. If asked about pricing, hours, or specific details not in context, suggest contacting the business directly
4. Do not mention that you are an AI or that you're using a knowledge base
5. Stay in character as ${botConfig.botName}
6. If the user wants to speak with a human, acknowledge their request and let them know someone will follow up`
}

// Split text into chunks for embedding
export function chunkText(text: string, maxChunkSize: number = 1000): string[] {
  const sentences = text.split(/[.!?]+\s+/)
  const chunks: string[] = []
  let currentChunk = ''

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > maxChunkSize) {
      if (currentChunk) {
        chunks.push(currentChunk.trim())
      }
      currentChunk = sentence
    } else {
      currentChunk += (currentChunk ? ' ' : '') + sentence
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim())
  }

  return chunks.filter(chunk => chunk.length > 50) // Filter out very short chunks
}
