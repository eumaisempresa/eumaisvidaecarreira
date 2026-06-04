// Configurações do seu projeto Supabase (Extraídas das suas imagens de configuração)
const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

// Inicialização do cliente de forma global e segura
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Torna o cliente acessível em todo o projeto
window.supabase = supabase;

/**
 * ROTEADOR DE ACESSO (Conforme Tutorial v2.0 - Bloco 5)
 * Esta função monitora o login e direciona o cliente para o dashboard 
 * correto com base na coluna 'plano' da tabela 'usuarios'.
 */
supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('Evento de Autenticação:', event);

  if (session && session.user) {
    const emailUsuario = session.user.email;

    try {
      [span_5](start_span)// Consulta a tabela 'usuarios' que já possui a coluna 'plano'[span_5](end_span)
      const { data, error } = await supabase
        .from('usuarios')
        .select('plano')
        .eq('email', emailUsuario)
        .single();

      if (error || !data) {
        console.warn("Plano não encontrado, direcionando para Free.");
        redirecionar('free');
        return;
      }

      redirecionar(data.plano);
    } catch (err) {
      console.error("Erro ao validar plano:", err);
    }
  }
});

// Função auxiliar para organizar as URLs de destino
function redirecionar(plano) {
  const p = plano.toLowerCase();
  
  // Só redireciona se o usuário estiver na página de login ou index
  const paginasIniciais = ['login.html', 'index.html', ''];
  const pathAtual = window.location.pathname.split("/").pop();

  if (paginasIniciais.includes(pathAtual)) {
    if (p === 'executivo' || p === 'personalizado') {
      window.location.href = 'dashboard-executivo.html';
    } else if (p === 'premium') {
      window.location.href = 'dashboard-premium.html';
    } else if (p === 'basico') {
      window.location.href = 'dashboard-basico.html';
    } else {
      window.location.href = 'dashboard-gratuito.html';
    }
  }
}

console.log('✅ Supabase configurado e pronto para o Plano de Execução v2.0');
