import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas-eosin-five.vercel.app"),
  title: {
    default: "João Victor Magalhães | Desenvolvedor Full Stack",
    template: "%s | João Victor Magalhães",
  },
  description:
    "Portfólio de João Victor Magalhães, desenvolvedor Full Stack e Mobile com projetos em Next.js, React, TypeScript, PHP e MySQL.",
  keywords: [
    "João Victor Magalhães",
    "desenvolvedor full stack",
    "desenvolvedor mobile",
    "Next.js",
    "React",
    "TypeScript",
    "PHP",
    "Manaus",
  ],
  authors: [{ name: "João Victor Pinheiro Magalhães" }],
  creator: "João Victor Pinheiro Magalhães",
  alternates: { canonical: "/" },
  openGraph: {
    title: "João Victor Magalhães | Desenvolvedor Full Stack",
    description:
      "Projetos, trajetória e competências de João Victor Magalhães em desenvolvimento Full Stack e Mobile.",
    url: "/",
    siteName: "Atlas — Portfólio de João Victor",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "João Victor Pinheiro Magalhães — Full Stack e Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Victor Magalhães | Desenvolvedor Full Stack",
    description: "Conheça meus projetos e minha trajetória em desenvolvimento.",
    images: ["/og.png"],
  },
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
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-lg bg-blue-600 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
