import { createClient } from '@supabase/supabase-js'

// 🔑 Replace these with your real Supabase values
const supabaseUrl = "https://jyhjcfallblihmxocqiv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aGpjZmFsbGJsaWhteG9jcWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODgyNTksImV4cCI6MjA2Mzc2NDI1OX0.aZ_hcHO5Jv23IqqxoQcENcdQ_1B9ocdsDoNAw7-H0MI"

export const supabase = createClient(supabaseUrl, supabaseKey)
