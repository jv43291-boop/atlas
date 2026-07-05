type ProjectTechnologiesProps = {
  title: string;
  technologies: string[];
};

export default function ProjectTechnologies({
  title,
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/20"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}