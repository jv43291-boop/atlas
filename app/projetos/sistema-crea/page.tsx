import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";

export default function SistemaEstacionamentoPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <ProjectHero
        badge="🔵 Primeiro Projeto Real"
        title="Sistema de Estacionamento - CREA-AM"
        subtitle="Sistema desenvolvido para o CREA-AM com foco no controle de acesso ao estacionamento, gerenciamento de funcionários, visitantes e auditoria administrativa."
        image="/images/projects/crea/dashboard.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            Sobre o Projeto
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            Este foi meu primeiro projeto desenvolvido para um ambiente real.
            Durante seu desenvolvimento aprimorei conceitos de organização do
            código, segurança, autenticação de usuários, permissões de acesso,
            auditoria e arquitetura modular utilizando PHP e MySQL.
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
            image: "/images/projects/crea/login.png",
          },
          {
            title: "Dashboard",
            description: "Painel principal.",
            image: "/images/projects/crea/dashboard.png",
          },
          {
            title: "Funcionários",
            description: "Gerenciamento de funcionários.",
            image: "/images/projects/crea/funcionarios.png",
          },
          {
            title: "Visitantes",
            description: "Controle de visitantes.",
            image: "/images/projects/crea/visitantes.png",
          },
          {
            title: "Auditoria",
            description: "Histórico das ações administrativas.",
            image: "/images/projects/crea/auditoria.png",
          },
        ]}
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500 hover:text-blue-400"
          >
            ← Voltar ao Atlas
          </Link>

        </div>
      </section>

    </main>
  );
}