import type { Metadata } from "next";
import Script from "next/script";
import {
  SITE_URL,
  UMAMI_WEBSITE_ID,
  UMAMI_SCRIPT_URL,
  GOOGLE_SITE_VERIFICATION,
  GOOGLE_BUSINESS_URL,
} from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "João Victor Magalhães | Desenvolvedor Freelancer em Manaus",
    template: "%s | João Victor Magalhães",
  },
  description:
    "Desenvolvedor freelancer em Manaus: sites e landing pages, sistemas web sob medida, aplicativos e automações para pequenas empresas. Orçamento sem compromisso pelo WhatsApp.",
  keywords: [
    "desenvolvedor freelancer Manaus",
    "criação de sites Manaus",
    "sistema web sob medida",
    "desenvolvimento de aplicativos Manaus",
    "automação n8n",
    "desenvolvedor full stack",
    "João Victor Magalhães",
    "Next.js",
    "PHP",
  ],
  authors: [{ name: "João Victor Pinheiro Magalhães" }],
  creator: "João Victor Pinheiro Magalhães",
  alternates: { canonical: "/" },
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: "João Victor Magalhães | Desenvolvedor Freelancer em Manaus",
    description:
      "Sites, sistemas web, aplicativos e automações para pequenas empresas de Manaus — do orçamento à entrega.",
    url: "/",
    siteName: "Atlas — Portfólio de João Victor",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "João Victor Magalhães — desenvolvedor freelancer em Manaus: sites, sistemas, apps e automações",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Victor Magalhães | Desenvolvedor Freelancer em Manaus",
    description: "Sites, sistemas web, aplicativos e automações para pequenas empresas de Manaus.",
    images: ["/og.png"],
  },
};

// Dados estruturados (schema.org) para o Google entender que é um prestador
// de serviços local. Telefone e e-mail são os mesmos já públicos na seção Contato.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "João Victor Magalhães — Desenvolvedor Freelancer",
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  description:
    "Sites, sistemas web sob medida, aplicativos e automações para pequenas empresas de Manaus.",
  telephone: "+55-92-98433-7079",
  email: "jv43291@gmail.com",
  areaServed: { "@type": "City", name: "Manaus" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  founder: { "@type": "Person", name: "João Victor Pinheiro Magalhães" },
  sameAs: [
    GOOGLE_BUSINESS_URL,
    "https://github.com/jv43291-boop",
    "https://www.linkedin.com/in/joão-victor-pinheiro-magalhães-246060226",
  ],
  makesOffer: [
    "Sites e landing pages",
    "Sistemas web sob medida",
    "Aplicativos mobile",
    "Automações e integrações",
    "Manutenção e evolução de sistemas",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-lg bg-blue-600 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        {children}
        <Footer />
        {UMAMI_WEBSITE_ID && (
          <Script
            src={UMAMI_SCRIPT_URL}
            data-website-id={UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
