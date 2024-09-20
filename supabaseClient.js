// frontend/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY; // Use anon key for client-side operations

export const supabase = createClient(supabaseUrl, supabaseAnonKey);