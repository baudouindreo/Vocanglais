// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byrleehfokkitqstpyby.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5cmxlZWhmb2traXRxc3RweWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MzcwMjIsImV4cCI6MjA1MzExMzAyMn0.t-5fTQ6_H8J76-fFtRQ0nuzcOY9TUQCFFN3s59UDhio';

export const supabase = createClient(supabaseUrl, supabaseKey);
