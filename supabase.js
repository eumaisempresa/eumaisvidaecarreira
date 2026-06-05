/**
 * Configuração Central do Supabase - Ecossistema EU+ Vida e Carreira
 */

(function () {
    const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

    if (typeof supabase === 'undefined') {
        console.error("Erro Crítico: A biblioteca CDN do Supabase não foi carregada antes do arquivo supabase.js.");
        return;
    }

    // Inicialização segura no escopo global (window.supabase)
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: true,       // Mantém o usuário logado
            autoRefreshToken: true,     // Renova o token automaticamente
            detectSessionInUrl: true    // ESSENCIAL: Captura o token do e-mail link
        },
        global: {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        }
    });

    console.log("Ambiente 'eumaisvidaecarreira' inicializado e protegido.");
})();
