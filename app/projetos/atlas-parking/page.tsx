import type { Metadata } from "next";
import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";

export const metadata: Metadata = {
  title: "Atlas Parking — Gestão Corporativa de Estacionamentos",
  description:
    "Conheça o Atlas Parking, plataforma corporativa para gestão de estacionamentos, acessos, indicadores, auditoria e integrações LPR.",
  alternates: { canonical: "/projetos/atlas-parking" },
  openGraph: {
    title: "Atlas Parking | João Victor Magalhães",
    description:
      "Plataforma corporativa em PHP e MySQL para gestão de estacionamentos e integrações LPR.",
    url: "/projetos/atlas-parking",
    images: ["/images/projects/atlas-parking/02-dashboard.png"],
  },
};

export default function AtlasParkingPage() {
  return (
    <main id="conteudo" className="project-page min-h-screen">
      <ProjectHero
        badge="🚘 Plataforma Corporativa"
        title="Atlas Parking"
        subtitle="Plataforma corporativa para gestão de estacionamentos, movimentações, cadastros, indicadores, Business Intelligence e auditoria operacional, preparada para integração com sistemas LPR externos."
        image="/images/projects/atlas-parking/02-dashboard.png"
      />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-4xl text-white">Sobre o Projeto</h2>
          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            O Atlas Parking centraliza a operação de estacionamentos em uma
            aplicação multiempresa. O sistema reúne controle de entrada e saída,
            cadastros, ocupação de vagas, histórico, indicadores executivos e uma
            trilha de auditoria. A arquitetura também disponibiliza uma API segura
            para receber eventos de leitura de placas sem depender do fornecedor
            das câmeras.
          </p>
        </div>
      </section>

      <ProjectTechnologies
        title="Tecnologias Utilizadas"
        technologies={[
          "PHP 8.2",
          "MVC próprio",
          "Service Layer",
          "Repository Pattern",
          "MySQL 8.4",
          "Bootstrap 5",
          "JavaScript",
          "Docker",
          "Nginx",
          "API REST",
        ]}
      />

      <ProjectFeatures
        title="Principais Funcionalidades"
        features={[
          "Dashboard executivo com indicadores operacionais",
          "Controle de entradas, saídas e ocupação de vagas",
          "Cadastros de funcionários, visitantes e veículos",
          "Histórico pesquisável de movimentações",
          "Business Intelligence e exportação de relatórios",
          "Auditoria corporativa com rastreabilidade",
          "Autenticação, sessões e permissões granulares",
          "API para integração com sistemas LPR externos",
          "Isolamento multiempresa",
          "Ambiente conteinerizado com Docker",
        ]}
      />

      <ProjectGallery
        title="Galeria do Projeto"
        items={[
          {
            title: "Acesso Corporativo",
            description: "Login protegido para acesso aos módulos operacionais e administrativos.",
            image: "/images/projects/atlas-parking/01-login.png",
          },
          {
            title: "Atlas Command Center",
            description: "Dashboard com ocupação, fluxo diário e indicadores operacionais em tempo real.",
            image: "/images/projects/atlas-parking/02-dashboard.png",
          },
          {
            title: "Central de Entradas",
            description: "Fluxo para registrar veículos, vagas, setores e motivos de acesso.",
            image: "/images/projects/atlas-parking/03-registro-entrada.png",
          },
          {
            title: "Histórico de Movimentações",
            description: "Consulta auditável de entradas e saídas com filtros por período, tipo e status.",
            image: "/images/projects/atlas-parking/04-historico.png",
          },
          {
            title: "Central de Indicadores",
            description: "Business Intelligence com ocupação, movimentações e análise de fluxo.",
            image: "/images/projects/atlas-parking/05-indicadores.png",
          },
          {
            title: "Auditoria Corporativa",
            description: "Métricas e rastreabilidade para governança e decisões administrativas.",
            image: "/images/projects/atlas-parking/06-auditoria.png",
          },
          {
            title: "Gestão de Vagas",
            description: "Controle de vagas por bloco, tipo, prioridade e situação operacional.",
            image: "/images/projects/atlas-parking/07-vagas.png",
          },
        ]}
      />

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
          <a
            href="https://github.com/jv43291-boop/Atlas-Parking"
            target="_blank"
            rel="noopener noreferrer"
            className="atlas-button-primary"
          >
            Ver código no GitHub
          </a>
          <Link href="/#projects" className="atlas-button-secondary">
            ← Voltar aos projetos
          </Link>
        </div>
      </section>
    </main>
  );
}
