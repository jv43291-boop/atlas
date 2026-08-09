import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlas-eosin-five.vercel.app";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projetos/sistema-escolar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/sistema-crea`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/atlas`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projetos/atlas-parking`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
