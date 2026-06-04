const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZnZwbWVvZG9ubHZlZXllcWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMTUzOTUsImV4cCI6MjA5NDg5MTM5NX0.6ShcqgT7br4EvVnyJIaXX0apN8VlqJMPAJIRTrtZ5Ho';

const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

window.supabase = supabase;

// Listener global de autenticação
supabase.auth.onAuthStateChange((event, session) => {
  console.log('🔐 Supabase Auth Event:', event);

  if (event === 'SIGNED_OUT') {
    const protectedPages = ['dashboard', 'diario', 'diagnostico', 'perfil'];
    if (protectedPages.some(page => window.location.href.includes(page))) {
      window.location.href = 'login.html';
    }
  }
});

// Funções auxiliares úteis
window.getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

window.isLoggedIn = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
};

console.log('✅ Supabase client carregado com sucesso (versão completa)');
