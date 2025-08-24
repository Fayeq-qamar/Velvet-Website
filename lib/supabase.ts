import { createClient } from '@supabase/supabase-js'
import { env } from '../env.mjs'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a placeholder client if environment variables are not available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number
          name?: string
          email: string
          created_at: string
          referral_source?: string
        }
        Insert: {
          name?: string
          email: string
          referral_source?: string
        }
        Update: {
          name?: string
          email?: string
          referral_source?: string
        }
      }
    }
  }
}