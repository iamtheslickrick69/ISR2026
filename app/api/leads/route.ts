import { NextRequest, NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/lib/supabase/server'

// GET /api/leads - List leads for authenticated user's bots
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const botId = searchParams.get('bot_id')
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Get user's bot IDs
    const { data: bots } = await supabase
      .from('bots')
      .select('id')
      .eq('user_id', user.id)

    const botIds = (bots as any)?.map((b: any) => b.id) || []

    if (botIds.length === 0) {
      return NextResponse.json({ leads: [], total: 0 })
    }

    // Build query
    let query = supabase
      .from('leads')
      .select('*, bots!inner(name)', { count: 'exact' })
      .in('bot_id', botIds)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (botId) {
      query = query.eq('bot_id', botId)
    }

    if (status) {
      query = query.eq('status', status)
    }

    const { data: leads, error, count } = await query

    if (error) {
      console.error('Error fetching leads:', error)
      return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
    }

    return NextResponse.json({ leads, total: count })
  } catch (error) {
    console.error('Error in GET /api/leads:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/leads - Create a lead (public endpoint for embed widget)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { botId, conversationId, name, email, phone, customFields, sourcePage } = body

    if (!botId) {
      return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 })
    }

    // Use admin client for public access
    const supabase = createAdminClient()

    // Verify bot exists and is active
    const { data: bot } = await supabase
      .from('bots')
      .select('id, is_published, status')
      .eq('id', botId)
      .eq('is_published', true)
      .eq('status', 'active')
      .single()

    if (!bot) {
      return NextResponse.json({ error: 'Bot not found or inactive' }, { status: 404 })
    }

    // Create lead
    const { data: lead, error } = await supabase
      .from('leads')
      .insert({
        bot_id: botId,
        conversation_id: conversationId || null,
        name: name || null,
        email: email || null,
        phone: phone || null,
        custom_fields: customFields || {},
        source_page: sourcePage || null,
      } as any)
      .select()
      .single()

    if (error) {
      console.error('Error creating lead:', error)
      return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
    }

    const leadData = lead as any

    // Update conversation with lead ID
    if (conversationId) {
      await (supabase
        .from('conversations')
        .update as any)({ lead_id: leadData.id })
        .eq('id', conversationId)
    }

    // Set CORS headers for embed widget
    const response = NextResponse.json({ lead }, { status: 201 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  } catch (error) {
    console.error('Error in POST /api/leads:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}
