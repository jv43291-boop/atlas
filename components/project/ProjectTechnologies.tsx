type ProjectTechnologiesProps = {
  title: string;
  technologies: string[];
};

export default function ProjectTechnologies({
  title,
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        <h2 className="text-4xl text-white">
          {title}
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="border border-blue-400/20 bg-blue-950/20 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-blue-300 transition hover:border-blue-400"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}
