import type { NextConfig } from "next";

// Deploy no GitHub Pages (https://jv43291-boop.github.io/atlas):
// - output: "export" gera o site estático na pasta out/
// - basePath: o site fica na subpasta /atlas do domínio
// - images.unoptimized: o Pages não tem servidor para otimizar imagens
// Se trocar o basePath, troque também BASE_PATH/SITE_URL em lib/site.ts.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atlas",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
