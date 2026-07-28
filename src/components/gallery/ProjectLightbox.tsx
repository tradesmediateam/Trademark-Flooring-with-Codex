"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/lib/projects";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";
import { CloseIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * Image grid for a single project + a full-screen lightbox. Handles hundreds
 * of images gracefully since it only renders a lightweight grid until a
 * photo is opened.
 */
export function ProjectLightbox({
  images,
  projectTitle,
}: {
  images: ProjectImage[];
  projectTitle: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
              i === 0 && "col-span-2 row-span-2 aspect-[4/3] sm:aspect-[16/10]"
            )}
            aria-label={`View photo: ${img.alt}`}
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <ProjectImagePlaceholder />
            )}
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} photo viewer`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
          >
            <ChevronRightIcon className="h-6 w-6 rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="relative flex max-h-[80vh] w-full max-w-4xl flex-col items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-900">
              {images[openIndex].src ? (
                <Image
                  src={images[openIndex].src!}
                  alt={images[openIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <ProjectImagePlaceholder />
              )}
            </div>
            <p className="mt-4 max-w-2xl text-center text-sm text-ink-200">
              {images[openIndex].alt}
            </p>
            <p className="mt-1 text-xs text-ink-500">
              Photo {openIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
