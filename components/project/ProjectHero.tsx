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
    <section className="atlas-grid relative overflow-hidden px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
      <div className="atlas-grid-fade absolute inset-0" />
      <div className="relative mx-auto max-w-[1440px]">

        <span className="atlas-kicker inline-block border-l-2 border-blue-500 pl-3">
          {badge}
        </span>

        <h1 className="atlas-display mt-8 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] text-white">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>

        {image && (
          <div className="relative mt-14 aspect-video overflow-hidden border border-blue-400/25 bg-[#06101d] shadow-[0_30px_100px_rgba(17,88,220,0.12)]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

      </div>
    </section>
  );
}
