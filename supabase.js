const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

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

console.log('✅ Supabase client carregado com sucesso (versão estável)');
