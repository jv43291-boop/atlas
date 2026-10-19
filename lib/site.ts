/**
 * Configuração central do endereço do site.
 *
 * O site é publicado no GitHub Pages em https://jv43291-boop.github.io/atlas,
 * ou seja, numa subpasta. Por isso existe o BASE_PATH: o Next aplica ele
 * sozinho em <Link> e nas rotas, mas NÃO em src de imagens nem em href de
 * arquivos estáticos (PDF, etc.) — nesses casos use withBasePath().
 *
 * Se um dia o site for para a raiz (jv43291-boop.github.io) ou para um
 * domínio próprio, basta trocar BASE_PATH para "" e SITE_URL aqui e em
 * next.config.ts.
 */
export const BASE_PATH = "/atlas";
export const SITE_URL = "https://jv43291-boop.github.io/atlas";

/**
 * Analytics (Umami Cloud — https://cloud.umami.is, plano gratuito, sem cookie).
 * Cole aqui o "Website ID" que o Umami mostra ao cadastrar o site.
 * Enquanto estiver vazio, nenhum script de analytics é carregado.
 */
export const UMAMI_WEBSITE_ID = "47a2cb4d-9b1a-4e76-87e3-e13c1da5c47d";
export const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
