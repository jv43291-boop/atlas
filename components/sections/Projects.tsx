import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold">
          Meus Projetos
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-zinc-400">
          Cada projeto representa uma etapa da minha evolução como
          desenvolvedor, aplicando novas tecnologias, boas práticas e
          soluções para desafios cada vez maiores.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard
            title="Sistema Escolar"
            badge="🟢 Primeiro Projeto"
            description="Meu primeiro sistema completo utilizando arquitetura MVC para gerenciamento de alunos, professores, disciplinas e notas."
            image="/images/projects/escolar.png"
            href="/projetos/sistema-escolar"
            technologies={[
              "PHP (MVC)",
              "MySQL",
              "PDO",
              "Bootstrap 5",
            ]}
          />

          <ProjectCard
            title="Sistema de Estacionamento - CREA-AM"
            badge="🔵 Primeiro Projeto Real"
            description="Sistema desenvolvido para gerenciamento de funcionários, visitantes e controle de acesso ao estacionamento do CREA-AM."
            image="/images/projects/crea.png"
            href="/projetos/sistema-crea"
            technologies={[
              "PHP",
              "MySQL",
              "PDO",
              "Bootstrap 5",
              "Singleton",
            ]}
          />

          <ProjectCard
            title="Atlas"
            badge="⭐ Projeto Atual"
            description="Meu portfólio profissional desenvolvido em Next.js, criado para apresentar meus projetos e acompanhar minha evolução como desenvolvedor."
            image="/images/projects/Atlas.png"
            href="/projetos/atlas"
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ]}
          />

        </div>

      </div>
    </section>
  );
}