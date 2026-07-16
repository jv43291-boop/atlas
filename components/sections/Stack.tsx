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
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-bold">
          Minha Stack
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Estas são as principais tecnologias e ferramentas que utilizo
          atualmente no desenvolvimento dos meus projetos.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-6 text-xl font-semibold text-blue-400">
              Front-end
            </h3>

            <div className="flex flex-wrap gap-3">
              {frontend.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-800 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-6 text-xl font-semibold text-blue-400">
              Back-end
            </h3>

            <div className="flex flex-wrap gap-3">
              {backend.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-800 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-6 text-xl font-semibold text-blue-400">
              Ferramentas
            </h3>

            <div className="flex flex-wrap gap-3">
              {ferramentas.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-800 px-4 py-2 text-sm"
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