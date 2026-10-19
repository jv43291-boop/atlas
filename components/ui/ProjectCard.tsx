import Image from "next/image";
import { withBasePath } from "@/lib/site";
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
    <article className="atlas-panel group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">

      <div className="relative h-64 overflow-hidden border-b border-blue-400/15">
        <Image
          src={withBasePath(image)}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-80 saturate-[0.75] transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">

        <span className="atlas-kicker mb-6 w-fit border-l-2 border-blue-500 pl-3">
          {badge}
        </span>

        <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border border-blue-400/15 bg-blue-950/20 px-3 py-1 font-mono text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
          <Link
            href={href}
            className={`atlas-button-primary w-full ${sourceUrl ? "" : "sm:col-span-2"}`}
          >
            Ver Projeto
          </Link>
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="atlas-button-secondary w-full"
            >
              Ver Código
            </a>
          )}
        </div>

      </div>
    </article>
  );
}
