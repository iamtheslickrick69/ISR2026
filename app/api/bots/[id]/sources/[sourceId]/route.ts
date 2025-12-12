import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// DELETE /api/bots/[id]/sources/[sourceId] - Delete a knowledge source
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; sourceId: string }> }
) {
  try {
    const { id, sourceId } = await params
    const supabase = await createClient()

    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify bot ownership
    const { data: bot } = await supabase
      .from('bots')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.id)
      .single()

    if (!bot) {
      return NextResponse.json({ error: 'Bot not found' }, { status: 404 })
    }

    // Delete associated chunks first (cascade should handle this, but just in case)
    await supabase
      .from('knowledge_chunks')
      .delete()
      .eq('source_id', sourceId)

    // Delete source
    const { error } = await supabase
      .from('knowledge_sources')
      .delete()
      .eq('id', sourceId)
      .eq('bot_id', id)

    if (error) {
      console.error('Error deleting source:', error)
      return NextResponse.json({ error: 'Failed to delete source' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/bots/[id]/sources/[sourceId]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
