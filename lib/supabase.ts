import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// null when the env vars aren't configured (e.g. a build without them set)
// so the app degrades gracefully instead of crashing.
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

export interface DbReview {
  id: string
  name: string | null
  quote: string
  rating: number
  approved: boolean
  created_at: string
}
