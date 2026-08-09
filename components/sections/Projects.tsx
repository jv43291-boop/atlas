import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="atlas-section px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">03 / Projetos</p>
        <h2 className="atlas-display atlas-section-title mt-5">Projetos que<br/><span className="text-blue-500">marcam evolução.</span></h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Cada projeto representa uma etapa da minha evolução como
          desenvolvedor, aplicando novas tecnologias, boas práticas e
          soluções para desafios cada vez maiores.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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
            sourceUrl="https://github.com/jv43291-boop/atlas"
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
