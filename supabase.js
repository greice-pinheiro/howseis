const { createClient } = supabase;

const SUPABASE_URL = 'https://bqikwdtndanhsedypzlk.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxaWt3ZHRuZGFuaHNlZHlwemxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMDI5MzAsImV4cCI6MjA2MjU3ODkzMH0.U3uD274qOaxlMCzjz7MNGOxNh0LNS17dAopCO7nO7rU'; 

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);