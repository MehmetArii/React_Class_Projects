import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ibcibyvvwqxxpdnzqtni.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliY2lieXZ2d3F4eHBkbnpxdG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NTA1NDksImV4cCI6MjA3MTAyNjU0OX0.nTjw5y6t1zDshQjB7f36PLyWwa9hXFDfjbT3J1O1Ynk')