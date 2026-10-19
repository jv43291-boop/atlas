"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/site";
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

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
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose, onNext, onPrevious]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="atlas-panel relative w-full max-w-6xl overflow-hidden shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Fechar galeria"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 border border-blue-400/20 bg-[#06101d] p-2 transition hover:border-blue-400"
        >
          <X size={22} />
        </button>

        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={onPrevious}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 border border-blue-400/20 bg-[#06101d] p-3 transition hover:border-blue-400"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={onNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 border border-blue-400/20 bg-[#06101d] p-3 transition hover:border-blue-400"
        >
          <ChevronRight />
        </button>

        <div className="relative aspect-video bg-black">
          <Image
            src={withBasePath(image)}
            alt={title}
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="border-t border-blue-400/15 p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 id={titleId} className="text-2xl font-bold text-white">{title}</h2>
            <p className="font-mono text-xs text-blue-300">
              {currentIndex + 1} of {total}
            </p>
          </div>
          <p id={descriptionId} className="text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
