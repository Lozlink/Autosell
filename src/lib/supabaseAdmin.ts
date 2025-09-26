import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')
}

// This file is meant to be imported only in server-side code (API routes, server actions)
export const supabaseAdmin = serviceKey
  ? createClient(supabaseUrl, serviceKey)
  : null
