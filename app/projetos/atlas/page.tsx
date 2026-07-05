import Link from "next/link";
import Image from "next/image";

export default function AtlasPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="text-blue-400 transition hover:text-blue-300"
        >
          ← Voltar ao Atlas
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/images/projects/atlas.png"
            alt="Projeto Atlas"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <span className="mt-10 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          ⭐ Projeto Atual
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Atlas
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          O Atlas é meu portfólio profissional e também o projeto mais
          importante da minha trajetória até o momento. Além de apresentar
          meus trabalhos, ele registra minha evolução como desenvolvedor,
          recebendo constantemente novas funcionalidades, melhorias e projetos.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Tecnologias Utilizadas
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Git",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-800 px-4 py-2 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            O que estou aprendendo
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            Durante o desenvolvimento do Atlas estou aprofundando meus
            conhecimentos em React, Next.js, TypeScript, componentização,
            arquitetura de aplicações Front-end, responsividade, animações,
            Git e organização de projetos modernos.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            O que este projeto representa
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            O Atlas representa minha evolução contínua como desenvolvedor.
            Ele foi criado para crescer junto comigo, documentando novos
            aprendizados, projetos e experiências ao longo da minha carreira.
          </p>
        </section>

      </div>
    </main>
  );
}