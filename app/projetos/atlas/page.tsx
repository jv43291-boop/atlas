import Link from "next/link";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import Image from "next/image";

export default function AtlasPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <ProjectHero
        badge="🌍 Projeto Atual"
        title="Atlas"
        subtitle="O Atlas é meu portfólio profissional e também o projeto mais ambicioso que desenvolvi até o momento. Ele reúne meus projetos, demonstra minha evolução como desenvolvedor e continua sendo atualizado conforme adquiro novos conhecimentos e experiências."
    
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            Sobre o Projeto
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            O Atlas foi criado para representar minha trajetória como
            desenvolvedor. Mais do que um simples portfólio, ele funciona
            como um ambiente onde aplico novas tecnologias, boas práticas
            de desenvolvimento, componentização, organização de código e
            melhorias constantes de interface e experiência do usuário.
          </p>

        </div>
      </section>

      <ProjectTechnologies
        title="Tecnologias Utilizadas"
        technologies={[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Git",
          "GitHub",
          "Lucide React",
        ]}
      />

      <ProjectFeatures
        title="Principais Características"
        features={[
          "Portfólio responsivo",
          "Arquitetura baseada em componentes",
          "Galeria de projetos",
          "Modal para visualização de imagens",
          "Navegação entre páginas",
          "Design moderno",
          "Código organizado",
          "Projeto em evolução contínua",
        ]}
      />

      <section className="px-6 py-16">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-3xl font-bold">
      Preview do Projeto
    </h2>

    <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
      Abaixo está a tela inicial do Atlas. Como este projeto é o próprio
      portfólio que você está navegando, uma única prévia é suficiente para
      apresentar sua identidade visual e organização.
    </p>

    <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">

      <Image
        src="/Images/projects/atlas/Atlas.png"
        alt="Tela inicial do Atlas"
        fill
        sizes="100vw"
        className="object-cover"
      />

    </div>

  </div>

</section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">

          <h2 className="text-3xl font-bold text-white">
            🚀 Desenvolvimento Contínuo
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            O Atlas é um projeto de longo prazo. Sempre que aprendo uma nova
            tecnologia, desenvolvo uma nova solução ou concluo um novo projeto,
            ele é atualizado para refletir minha evolução como desenvolvedor.
            Dessa forma, este portfólio permanece vivo e acompanha meu
            crescimento profissional.
          </p>

        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex rounded-xl border border-zinc-700 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            ← Voltar ao Atlas
          </Link>

        </div>
      </section>

    </main>
  );
}