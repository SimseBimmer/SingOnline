// assets/javascript/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
export const supabaseUrl = 'https://dwlsrpthgagqbhnvqmfy.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bHNycHRoZ2FncWJobnZxbWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNzM3MjMsImV4cCI6MjA0NTg0OTcyM30.8_swmop4TYBESiydA4-Ni44yTjVlWAl_X-wVguMiMbs';

export const supabase = createClient(supabaseUrl, supabaseKey);
