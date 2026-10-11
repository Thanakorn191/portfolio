"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  title: string;
  images: string[];
};

export const iconButton =
  "grid size-10 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";

export function ProjectGallery({ title, images }: Props) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  // Images that fail to load are dropped instead of showing a placeholder.
  const valid = images.filter((image) => !failed.includes(image));
  const current = Math.min(index, valid.length - 1);
  const src = valid[current];
  const hasMany = valid.length > 1;
  const go = (step: number) => setIndex((i) => (i + step + valid.length) % valid.length);

  // Arrow keys work wherever focus is inside the open modal.
  useEffect(() => {
    if (!hasMany) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  if (valid.length === 0) return null;

  return (
    <div className="bg-foreground/5">
      <div className="relative aspect-video">
        <Image
            key={src}
            src={src}
            alt={`${title}, image ${current + 1} of ${valid.length}`}
            fill
            sizes="(min-width: 672px) 672px, 100vw"
            className="object-contain"
            onError={() => setFailed((list) => [...list, src])}
          />
        {hasMany && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${iconButton} absolute left-3 top-1/2 -translate-y-1/2`}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${iconButton} absolute right-3 top-1/2 -translate-y-1/2`}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </>
        )}
      </div>
      {hasMany && (
        <ul className="flex gap-2 p-3" aria-label="Choose image">
          {valid.map((image, i) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === current}
                className={`relative block h-12 w-16 overflow-hidden rounded border-2 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${i === current ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <Image src={image} alt="" fill sizes="64px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
