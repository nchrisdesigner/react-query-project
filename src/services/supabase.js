
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bqozxswquzfhdlftzlgn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxb3p4c3dxdXpmaGRsZnR6bGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2ODU1NDcsImV4cCI6MjAxMjI2MTU0N30.U5GmMDTHFmAOq4botWVpVC76zmdHke9dyHirk1GXEEY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase