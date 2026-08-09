import Image from "next/image";

type ProjectGalleryItemProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectGalleryItem({
  title,
  description,
  image,
}: ProjectGalleryItemProps) {
  return (
    <article className="atlas-panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">
      <div className="group relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="border-t border-blue-400/15 p-6">
        <h3 className="text-xl font-black uppercase tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}
