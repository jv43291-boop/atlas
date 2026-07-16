import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectNavigation from "@/components/project/ProjectNavigation";

export default function SistemaEscolarPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

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
        technologies={[
          "PHP",
          "MySQL",
          "Arquitetura MVC",
          "Bootstrap 5",
          "HTML5",
          "PDO",
        ]}
      />

      <ProjectFeatures
        title="Principais Funcionalidades"
        features={[
          "CRUD completo de alunos",
          "CRUD completo de professores",
          "Cadastro de disciplinas",
          "Lançamento de notas",
          "Cálculo automático da média",
          "Arquitetura MVC",
          "Integração com MySQL",
          "Interface com Bootstrap 5",
        ]}
      />

      <ProjectGallery
        title="Galeria do Projeto"
        items={[
          {
            title: "Dashboard",
            description: "Tela inicial do sistema.",
            image: "/images/projects/escolar/dashboard.png",
          },
          {
            title: "Gerenciamento de Alunos",
            description: "Listagem dos alunos.",
            image: "/images/projects/escolar/alunos.png",
          },
          {
            title: "Cadastro de Alunos",
            description: "Cadastro de novos alunos.",
            image: "/images/projects/escolar/cadastrar-alunos.png",
          },
          {
            title: "Gerenciamento de Professores",
            description: "Painel de professores.",
            image: "/images/projects/escolar/professores.png",
          },
          {
            title: "Gerenciamento de Disciplinas",
            description: "Listagem das disciplinas.",
            image: "/images/projects/escolar/disciplinas.png",
          },
          {
            title: "Cadastro de Disciplinas",
            description: "Cadastro de disciplinas.",
            image: "/images/projects/escolar/cadastrar-disciplinas.png",
          },
          {
            title: "Lançamento de Notas",
            description: "Notas e cálculo da média.",
            image: "/images/projects/escolar/notas.png",
          },
          {
            title: "Edição de Registros",
            description: "Atualização de dados.",
            image: "/images/projects/escolar/editar.png",
          },
        ]}
      />

      <ProjectNavigation
        next={{
          title: "Sistema de Estacionamento - CREA-AM",
          href: "/projetos/sistema-crea",
        }}
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