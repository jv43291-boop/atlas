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
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/20">
      <div className="group relative aspect-[16/10]overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>
      </div>
    </article>
  );
}