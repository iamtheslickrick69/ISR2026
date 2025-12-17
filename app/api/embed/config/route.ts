import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

// GET /api/embed/config - Get bot configuration for embed widget (public)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const botId = searchParams.get('bot_id')

    if (!botId) {
      return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 })
    }

    // Use admin client for public access
    const supabase = createAdminClient()

    // Get bot with appearance and lead capture settings
    const { data: bot, error } = await supabase
      .from('bots')
      .select(`
        id,
        bot_name,
        welcome_message,
        fallback_message,
        is_published,
        status,
        bot_appearance (
          avatar_type,
          avatar_url,
          avatar_preset,
          primary_color,
          secondary_color,
          background_color,
          text_color,
          user_bubble_color,
          bot_bubble_color,
          position,
          widget_size,
          show_powered_by,
          custom_css
        ),
        lead_capture_settings (
          is_enabled,
          collect_name,
          name_required,
          collect_email,
          email_required,
          collect_phone,
          phone_required,
          custom_fields,
          trigger_type,
          trigger_after_messages,
          form_title,
          form_description,
          submit_button_text,
          privacy_policy_url
        )
      `)
      .eq('id', botId)
      .eq('is_published', true)
      .eq('status', 'active')
      .single()

    if (error || !bot) {
      return NextResponse.json({ error: 'Bot not found or inactive' }, { status: 404 })
    }

    const botData = bot as any

    // Transform to camelCase for frontend
    const config = {
      id: botData.id,
      name: botData.bot_name,
      welcomeMessage: botData.welcome_message,
      fallbackMessage: botData.fallback_message,
      appearance: botData.bot_appearance ? {
        avatarType: botData.bot_appearance.avatar_type,
        avatarUrl: botData.bot_appearance.avatar_url,
        avatarPreset: botData.bot_appearance.avatar_preset,
        primaryColor: botData.bot_appearance.primary_color,
        secondaryColor: botData.bot_appearance.secondary_color,
        backgroundColor: botData.bot_appearance.background_color,
        textColor: botData.bot_appearance.text_color,
        userBubbleColor: botData.bot_appearance.user_bubble_color,
        botBubbleColor: botData.bot_appearance.bot_bubble_color,
        position: botData.bot_appearance.position,
        widgetSize: botData.bot_appearance.widget_size,
        showPoweredBy: botData.bot_appearance.show_powered_by,
        customCss: botData.bot_appearance.custom_css,
      } : null,
      leadCapture: botData.lead_capture_settings ? {
        enabled: botData.lead_capture_settings.is_enabled,
        collectName: botData.lead_capture_settings.collect_name,
        nameRequired: botData.lead_capture_settings.name_required,
        collectEmail: botData.lead_capture_settings.collect_email,
        emailRequired: botData.lead_capture_settings.email_required,
        collectPhone: botData.lead_capture_settings.collect_phone,
        phoneRequired: botData.lead_capture_settings.phone_required,
        customFields: botData.lead_capture_settings.custom_fields,
        triggerType: botData.lead_capture_settings.trigger_type,
        triggerAfterMessages: botData.lead_capture_settings.trigger_after_messages,
        formTitle: botData.lead_capture_settings.form_title,
        formDescription: botData.lead_capture_settings.form_description,
        submitButtonText: botData.lead_capture_settings.submit_button_text,
        privacyPolicyUrl: botData.lead_capture_settings.privacy_policy_url,
      } : null,
    }

    // Set CORS headers for embed widget
    const response = NextResponse.json(config)
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  } catch (error) {
    console.error('Error in GET /api/embed/config:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}
