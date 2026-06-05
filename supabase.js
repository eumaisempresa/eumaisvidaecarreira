/**
 * Configuração Central e Blindada do Supabase - EU+ Vida e Carreira
 */

(function () {
    // Credenciais do projeto Supabase
    const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

    // 1. Verifica se a biblioteca CDN foi carregada corretamente pelo HTML
    if (typeof supabase === 'undefined' && typeof window.supabase === 'undefined') {
        console.error("❌ Erro Crítico: A biblioteca CDN do Supabase não foi encontrada.");
        return;
    }

    // Guardamos uma referência segura da biblioteca carregada via CDN
    const supabaseLib = window.supabase || supabase;

    // 2. Inicialização injetando direto no escopo global do navegador (window.supabase)
    window.supabase = supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: true,       // Mantém o usuário logado no navegador
            autoRefreshToken: true,     // Atualiza os tokens automaticamente
            detectSessionInUrl: true    // Captura o token do link vindo do e-mail
        },
        global: {
            headers: {
                // Injeção explícita e forçada das chaves para evitar o erro "No API key found"
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        }
    });

    console.log("✅ Conexão com Supabase restabelecida e chaves de API blindadas globalmente.");
})();
