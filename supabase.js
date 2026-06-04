/**
 * Configuração Central do Supabase - Ecossistema EU+ Vida e Carreira
 * 
 * ATENÇÃO PARA O FUNCIONAMENTO CORRETO:
 * Em todos os seus arquivos HTML, este script DEVE ser importado EXATAMENTE nesta ordem:
 * 1. <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 * 2. <script src="Supabase.js"></script>
 * 3. <script> // Sua lógica da página utilizando a variável 'supabase' </script>
 */

(function () {
    // Credenciais do projeto Supabase
    const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

    if (typeof supabase === 'undefined') {
        console.error("Erro Crítico: A biblioteca CDN do Supabase não foi carregada antes do arquivo Supabase.js.");
        return;
    }

    // Inicialização da instância global 'supabase' com proteção de cabeçalho
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: true,       // Mantém o usuário logado ao recarregar a página
            autoRefreshToken: true,     // Renova os tokens de acesso de forma automática
            detectSessionInUrl: true    // ESSENCIAL: Captura o token do link mágico enviado por e-mail
        },
        global: {
            headers: {
                // Força o cabeçalho de autenticação em 100% das requisições imediatas
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        }
    });

    console.log("Ambiente 'eumaisvidaecarreira' inicializado com sucesso e protegido contra falhas de API key.");
})();
