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
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:border-blue-500">

      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {description}
        </p>

      </div>

    </div>
  );
}