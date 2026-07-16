"use client";

import { useState } from "react";
import ProjectGalleryItem from "@/components/project/ProjectGalleryItem";
import ImageModal from "@/components/project/ImageModal";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

type ProjectGalleryProps = {
  title: string;
  items: GalleryItem[];
};

export default function ProjectGallery({
  title,
  items,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const selectedItem =
    selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="text-left"
              >
                <ProjectGalleryItem
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        open={selectedItem !== null}
        image={selectedItem?.image ?? ""}
        title={selectedItem?.title ?? ""}
        description={selectedItem?.description ?? ""}
        currentIndex={selectedIndex ?? 0}
        total={items.length}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}