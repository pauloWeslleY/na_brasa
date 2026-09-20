"use client";

import "./image-gallery.sass";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

export function ImageGallery({
  images,
  currentIndex,
  onChange,
  onClose,
}: ImageGalleryProps) {
  const isOpen = currentIndex !== null;
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  function handleNext() {
    if (currentIndex === null) return;
    onChange((currentIndex + 1) % images.length);
  }

  function handlePrevious() {
    if (currentIndex === null) return;
    onChange((currentIndex - 1 + images.length) % images.length);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          handleNext();
          break;

        case "ArrowLeft":
          handlePrevious();
          break;
      }
    }

    document.body.classList.add("lightbox-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex]);

  if (!currentImage) {
    return null;
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
      onClick={onClose}
    >
      <div className="content" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="close"
          aria-label="Fechar galeria"
          onClick={onClose}
        >
          <X size={40} />
        </button>

        {images.length > 1 && (
          <button
            type="button"
            className="navigation previous"
            aria-label="Imagem anterior"
            onClick={handlePrevious}
          >
            <ChevronLeft size={60} />
          </button>
        )}

        <figure className="figure">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="image"
            priority
          />

          <figcaption className="caption">{currentImage.alt}</figcaption>
        </figure>

        {images.length > 1 && (
          <button
            type="button"
            className="navigation next"
            aria-label="Próxima imagem"
            onClick={handleNext}
          >
            <ChevronRight size={60} />
          </button>
        )}
      </div>
    </div>
  );
}
