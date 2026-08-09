export default function Stack() {
  const frontend = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ];

  const backend = [
    "PHP",
    "MySQL",
    "PDO",
    "Arquitetura MVC",
  ];

  const ferramentas = [
    "Git",
    "GitHub",
    "VS Code",
    "XAMPP",
  ];

  return (
    <section
      id="stack"
      className="atlas-section atlas-grid px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="atlas-kicker">02 / Stack</p>
        <h2 className="atlas-display atlas-section-title mt-5">Ferramentas para<br/><span className="text-blue-500">construir o todo.</span></h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Estas são as principais tecnologias e ferramentas que utilizo
          atualmente no desenvolvimento dos meus projetos.
        </p>

        <div className="mt-16 grid gap-px border border-blue-400/15 bg-blue-400/15 md:grid-cols-3">

          <div className="bg-[#030b14] p-8 transition hover:bg-[#071528]">
            <h3 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              01 — Front-end
            </h3>

            <div className="flex flex-wrap gap-3">
              {frontend.map((tech) => (
                <span
                  key={tech}
                  className="border border-blue-400/15 bg-blue-950/20 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/60 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#030b14] p-8 transition hover:bg-[#071528]">
            <h3 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              02 — Back-end
            </h3>

            <div className="flex flex-wrap gap-3">
              {backend.map((tech) => (
                <span
                  key={tech}
                  className="border border-blue-400/15 bg-blue-950/20 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/60 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#030b14] p-8 transition hover:bg-[#071528]">
            <h3 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              03 — Ferramentas
            </h3>

            <div className="flex flex-wrap gap-3">
              {ferramentas.map((tech) => (
                <span
                  key={tech}
                  className="border border-blue-400/15 bg-blue-950/20 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/60 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
