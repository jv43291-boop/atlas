import type { Metadata } from "next";
import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";

export const metadata: Metadata = {
  title: "Sistema Escolar",
  description: "Estudo de caso de um sistema escolar em PHP, MVC, PDO e MySQL desenvolvido por João Victor Magalhães.",
  alternates: { canonical: "/projetos/sistema-escolar" },
  openGraph: {
    title: "Sistema Escolar | João Victor Magalhães",
    description: "Sistema escolar desenvolvido com PHP, arquitetura MVC, PDO e MySQL.",
    url: "/projetos/sistema-escolar",
    images: ["/og.png"],
  },
};

export default function SistemaEscolarPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-zinc-950 text-white">

      <ProjectHero
        badge="🟢 Primeiro Projeto"
        title="Sistema Escolar"
        subtitle="Sistema de gerenciamento escolar desenvolvido utilizando PHP seguindo a arquitetura MVC. O projeto permite gerenciar alunos, professores, disciplinas e notas através de um CRUD completo integrado ao MySQL."
        image="/images/projects/escolar/dashboard.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            Sobre o Projeto
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            Este foi o primeiro sistema completo que desenvolvi utilizando
            arquitetura MVC. Durante sua construção aprendi conceitos como
            separação de responsabilidades, comunicação com banco de dados
            utilizando PDO e organização de aplicações web em PHP.
          </p>

        </div>
      </section>

      <ProjectTechnologies
        title="Tecnologias Utilizadas"
        technologies={["PHP", "Arquitetura MVC", "MySQL", "PDO", "Bootstrap 5", "HTML5", "CSS3"]}
      />

      <ProjectFeatures
        title="Principais Funcionalidades"
        features={[
          "Cadastro e gerenciamento de alunos",
          "Cadastro e gerenciamento de professores",
          "Organização de disciplinas",
          "Registro e edição de notas",
          "Dashboard administrativo",
          "Operações CRUD integradas ao MySQL",
        ]}
      />

      <ProjectGallery
        title="Galeria do Projeto"
        items={[
          { title: "Dashboard", description: "Visão geral do sistema escolar.", image: "/images/projects/escolar/dashboard.png" },
          { title: "Alunos", description: "Listagem e gerenciamento de alunos.", image: "/images/projects/escolar/alunos.png" },
          { title: "Cadastro de alunos", description: "Formulário para inclusão de alunos.", image: "/images/projects/escolar/cadastro-alunos.png" },
          { title: "Professores", description: "Listagem e gerenciamento de professores.", image: "/images/projects/escolar/professores.png" },
          { title: "Disciplinas", description: "Organização das disciplinas cadastradas.", image: "/images/projects/escolar/disciplinas.png" },
          { title: "Notas", description: "Registro e acompanhamento de notas.", image: "/images/projects/escolar/notas.png" },
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
