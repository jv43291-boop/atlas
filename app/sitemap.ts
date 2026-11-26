import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Necessário para o "output: export" (GitHub Pages)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  // Com barra no final, igual às URLs canônicas (trailingSlash: true no next.config.ts);
  // sem ela, cada link do sitemap passaria por um redirecionamento.
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projetos/sistema-escolar/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/sistema-crea/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/atlas/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/atlas-parking/`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
