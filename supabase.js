/**
 * Configuração Central do Supabase - Ecossistema EU+ Vida e Carreira
 * Este arquivo deve ser importado em todos os HTMLs antes dos scripts de lógica.
 */

const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7Fo4zVSx-DZQa5dinQse8w_V4XkETiM';

// Inicialização da instância global do cliente Supabase
// As opções de 'auth' garantem que o login via e-mail (Magic Link) 
// seja capturado automaticamente no mobile e desktop.
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: true,      // Mantém o Protagonista logado ao fechar o navegador
        autoRefreshToken: true,    // Renova o acesso automaticamente
        detectSessionInUrl: true   // ESSENCIAL: Lê o token que vem do link do e-mail
    }
});

// Mensagem de log para conferência no console do navegador (F12)
console.log("Sistema EU+ Vida e Carreira: Conectado ao Supabase.");
