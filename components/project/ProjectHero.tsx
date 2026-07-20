import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
};

export default function ProjectHero({
  title,
  subtitle,
  badge,
  image,
}: ProjectHeroProps) {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-6xl">

        <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          {badge}
        </span>

        <h1 className="mt-6 text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          {subtitle}
        </p>

        {image && (
          <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-zinc-800">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

      </div>
    </section>
  );
}