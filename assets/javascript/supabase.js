





// assets/javascript/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { supabaseUrl, supabaseKey } from '../../credentials.js';

export const supabase = createClient(supabaseUrl, supabaseKey);
