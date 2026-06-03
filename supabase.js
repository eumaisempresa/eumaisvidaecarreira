const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...';
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY );
window.supabase = supabase;
