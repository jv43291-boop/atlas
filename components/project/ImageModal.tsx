"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ImageModalProps = {
  open: boolean;
  image: string;
  title: string;
  description: string;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function ImageModal({
  open,
  image,
  title,
  description,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrevious,
}: ImageModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onNext, onPrevious]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-lg bg-zinc-800 p-2 transition hover:bg-zinc-700"
        >
          <X size={22} />
        </button>

        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-zinc-800 p-3 transition hover:bg-zinc-700"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-zinc-800 p-3 transition hover:bg-zinc-700"
        >
          <ChevronRight />
        </button>

        <div className="relative aspect-video bg-black">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="border-t border-zinc-800 p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-sm text-zinc-400">
              {currentIndex + 1} of {total}
            </p>
          </div>
          <p className="text-zinc-300">{description}</p>
        </div>
      </div>
    </div>
  );
}