import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  badge: string;
  href: string;
  sourceUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  badge,
  href,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30">

      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">

        <span className="mb-4 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/20">
          {badge}
        </span>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 transition-colors duration-300 group-hover:bg-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
          <Link
            href={href}
            className={`block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50 ${sourceUrl ? "" : "sm:col-span-2"}`}
          >
            Ver Projeto
          </Link>
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border border-zinc-700 py-3 text-center font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Ver Código
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
