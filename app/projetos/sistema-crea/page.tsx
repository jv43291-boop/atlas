import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";

export const metadata: Metadata = {
  title: "Sistema de Estacionamento — CREA-AM",
  description: "Estudo de caso do sistema de controle de acesso e estacionamento desenvolvido para o CREA-AM.",
  alternates: { canonical: "/projetos/sistema-crea" },
  openGraph: {
    title: "Sistema de Estacionamento — CREA-AM | João Victor Magalhães",
    description: "Sistema em PHP e MySQL para controle de acesso e estacionamento do CREA-AM.",
    url: "/projetos/sistema-crea",
    images: ["/og.png"],
  },
};

export default function SistemaEstacionamentoPage() {
  return (
    <main id="conteudo" className="project-page min-h-screen">

      <ProjectHero
        badge="🔵 Primeiro Projeto Real"
        title="Sistema de Estacionamento - CREA-AM"
        subtitle="Sistema desenvolvido para o CREA-AM com foco no controle de acesso ao estacionamento, gerenciamento de funcionários, visitantes e auditoria administrativa."
        image="/images/projects/crea/dashboard.webp"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            Sobre o Projeto
          </h2>

      <p className="mt-6 max-w-4xl leading-8 text-slate-400">
  Desenvolvido inicialmente como um projeto acadêmico, o Sistema de
  Estacionamento do CREA-AM evoluiu para uma solução utilizada pela
  instituição. O sistema foi projetado para gerenciar o controle de acesso
  de veículos, cadastro de usuários e administração de vagas, utilizando uma
  arquitetura modular em PHP e controle de permissões por perfil.
  Durante sua evolução, foi integrada a API institucional do CREA-AM para
  autenticação de funcionários, permitindo a validação automática de usuários
  e tornando o processo de acesso mais seguro e integrado aos sistemas da
  organização.
</p>


        </div>
      </section>

      <ProjectTechnologies
        title="Tecnologias Utilizadas"
        technologies={[
          "PHP",
          "MySQL",
          "PDO",
          "Arquitetura Modular",
          "Bootstrap 5",
          "HTML5",
          "Controle de Sessões",
        ]}
      />

      <ProjectFeatures
        title="Principais Funcionalidades"
        features={[
          "Login com níveis de acesso",
          "Cadastro de funcionários",
          "Cadastro de visitantes",
          "Controle de entrada e saída",
          "Auditoria administrativa",
          "Múltiplos veículos por funcionário",
          "Transações SQL",
          "Controle de permissões",
        ]}
      />

      <ProjectGallery
        title="Galeria do Projeto"
        items={[
          {
            title: "Tela de Login",
            description: "Autenticação do sistema.",
            image: "/images/projects/crea/login.webp",
          },
          {
            title: "Dashboard",
            description: "Painel principal.",
            image: "/images/projects/crea/dashboard.webp",
          },
          {
            title: "Funcionários",
            description: "Gerenciamento de funcionários.",
            image: "/images/projects/crea/funcionarios.webp",
          },
          {
            title: "Visitantes",
            description: "Controle de visitantes.",
            image: "/images/projects/crea/visitantes.webp",
          },
          {
            title: "Auditoria",
            description: "Histórico das ações administrativas.",
            image: "/images/projects/crea/auditoria.webp",
          },
        ]}
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="atlas-button-secondary"
          >
            ← Voltar ao Atlas
          </Link>

        </div>
      </section>

    </main>
  );
}
import type { Metadata } from "next";
