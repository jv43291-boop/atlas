import ProjectCard from "@/components/ui/ProjectCard";
import FeaturedProject from "@/components/ui/FeaturedProject";

export default function Projects() {
  return (
    <section
      id="projects"
      className="atlas-section px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">05 / Projetos</p>
        <h2 className="atlas-display atlas-section-title mt-5">Projetos que<br/><span className="text-blue-500">marcam evolução.</span></h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Alguns sistemas que construí, do controle de acesso de um órgão
          público a uma plataforma de gestão com cobrança e integração com
          câmeras. Clique em cada um pra ver telas e detalhes.
        </p>

        <div className="mt-16">
          <FeaturedProject
            title="Atlas Parking"
            badge="⭐ Projeto em destaque"
            description="Plataforma SaaS multiempresa para gestão de estacionamentos: portaria com leitura de placas (LPR), mensalistas com cobrança e Pix automático, várias unidades por empresa, auditoria, LGPD e permissões por perfil. É o projeto mais completo que construí até agora — e continua em evolução."
            image="/images/projects/atlas-parking/painel.webp"
            href="/projetos/atlas-parking"
            sourceUrl="https://github.com/jv43291-boop/Atlas-Parking"
            technologies={[
              "PHP 8.2",
              "MySQL 8.4",
              "Docker",
              "API REST",
              "Playwright",
              "GitHub Actions",
            ]}
            stats={[
              { value: "v2.2", label: "Versão" },
              { value: "20+", label: "Módulos" },
              { value: "2FA", label: "Segurança" },
            ]}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <ProjectCard
            title="Sistema Escolar"
            badge="🎓 Gestão escolar"
            description="Sistema para escolas: cadastro de alunos, professores e disciplinas, lançamento de notas e painel de acompanhamento."
            image="/images/projects/escolar.webp"
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
            badge="🏛️ Em uso no CREA-AM"
            description="Controle de acesso ao estacionamento do CREA-AM: funcionários, visitantes, registro de entrada e saída e auditoria. Em produção."
            image="/images/projects/crea.webp"
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
            badge="💼 Este site"
            description="Este site: portfólio e página de serviços feita em Next.js, publicada no GitHub Pages com deploy automático a cada alteração."
            image="/images/projects/Atlas.webp"
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
