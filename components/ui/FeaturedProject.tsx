import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { withBasePath } from "@/lib/site";

type Stat = {
  value: string;
  label: string;
};

type FeaturedProjectProps = {
  title: string;
  badge: string;
  description: string;
  image: string;
  href: string;
  sourceUrl?: string;
  technologies: string[];
  stats: Stat[];
};

export default function FeaturedProject({
  title,
  badge,
  description,
  image,
  href,
  sourceUrl,
  technologies,
  stats,
}: FeaturedProjectProps) {
  return (
    <article className="atlas-panel group relative overflow-hidden border border-blue-500/40 transition duration-300 hover:border-blue-400/80">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col p-8 lg:p-12">
          <span className="atlas-kicker mb-6 w-fit border-l-2 border-blue-500 pl-3">
            {badge}
          </span>

          <h3 className="atlas-display text-[clamp(2.4rem,5vw,4.5rem)] text-white">
            {title}
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            {description}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-px border border-blue-400/15 bg-blue-400/15">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#030b14] px-3 py-5 sm:px-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-blue-400/15 bg-blue-950/20 px-3 py-1 font-mono text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
            <Link href={href} className="atlas-button-primary">
              Ver projeto completo <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="atlas-button-secondary"
              >
                Ver código
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden border-t border-blue-400/15 lg:min-h-0 lg:border-l lg:border-t-0">
          <Image
            src={withBasePath(image)}
            alt={`Tela do ${title}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-left-top transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02070d]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#02070d]/60" />
        </div>
      </div>
    </article>
  );
}
