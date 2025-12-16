import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/database'

// Demo mode fallback URL (valid URL format required by Supabase SDK)
const DEMO_SUPABASE_URL = 'https://demo.supabase.co'
const DEMO_SUPABASE_KEY = 'demo_key'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  // Check if using placeholder/demo credentials
  const isDemo = !url || url.includes('placeholder') || !key || key.includes('placeholder')

  return createBrowserClient<Database>(
    isDemo ? DEMO_SUPABASE_URL : url,
    isDemo ? DEMO_SUPABASE_KEY : key
  )
}

export function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  return url && !url.includes('placeholder') && key && !key.includes('placeholder')
}
