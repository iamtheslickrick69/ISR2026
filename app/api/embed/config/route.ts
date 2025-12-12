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

    // Transform to camelCase for frontend
    const config = {
      id: bot.id,
      name: bot.bot_name,
      welcomeMessage: bot.welcome_message,
      fallbackMessage: bot.fallback_message,
      appearance: bot.bot_appearance ? {
        avatarType: bot.bot_appearance.avatar_type,
        avatarUrl: bot.bot_appearance.avatar_url,
        avatarPreset: bot.bot_appearance.avatar_preset,
        primaryColor: bot.bot_appearance.primary_color,
        secondaryColor: bot.bot_appearance.secondary_color,
        backgroundColor: bot.bot_appearance.background_color,
        textColor: bot.bot_appearance.text_color,
        userBubbleColor: bot.bot_appearance.user_bubble_color,
        botBubbleColor: bot.bot_appearance.bot_bubble_color,
        position: bot.bot_appearance.position,
        widgetSize: bot.bot_appearance.widget_size,
        showPoweredBy: bot.bot_appearance.show_powered_by,
        customCss: bot.bot_appearance.custom_css,
      } : null,
      leadCapture: bot.lead_capture_settings ? {
        enabled: bot.lead_capture_settings.is_enabled,
        collectName: bot.lead_capture_settings.collect_name,
        nameRequired: bot.lead_capture_settings.name_required,
        collectEmail: bot.lead_capture_settings.collect_email,
        emailRequired: bot.lead_capture_settings.email_required,
        collectPhone: bot.lead_capture_settings.collect_phone,
        phoneRequired: bot.lead_capture_settings.phone_required,
        customFields: bot.lead_capture_settings.custom_fields,
        triggerType: bot.lead_capture_settings.trigger_type,
        triggerAfterMessages: bot.lead_capture_settings.trigger_after_messages,
        formTitle: bot.lead_capture_settings.form_title,
        formDescription: bot.lead_capture_settings.form_description,
        submitButtonText: bot.lead_capture_settings.submit_button_text,
        privacyPolicyUrl: bot.lead_capture_settings.privacy_policy_url,
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
