"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
  span?: "wide" | "tall";
}

export default function GalleryClient({ images }: { images: ImageItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", ...new Set(images.map((i) => i.category))];
  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((i) => i.category === activeCategory);

  const open = (index: number) => setLightboxIndex(index);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((p) =>
        p !== null ? (p - 1 + filtered.length) % filtered.length : null
      ),
    [filtered.length]
  );
  const next = useCallback(
    () =>
      setLightboxIndex((p) =>
        p !== null ? (p + 1) % filtered.length : null
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <div className="wrapper pb-8">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 rounded-sm ${
                activeCategory === c
                  ? "bg-primary text-surface shadow-lg shadow-primary/20"
                  : "text-muted hover:text-primary border border-transparent hover:border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[auto]">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              onClick={() => open(i)}
              className="group relative overflow-hidden cursor-pointer animate-fade-in aspect-[3/4]"
              style={{ animationDelay: `${i * 50}ms`, animationDuration: "0.5s" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-1">
                  {img.category}
                </span>
                <p className="text-xs md:text-sm text-surface font-[family-name:var(--font-serif)] leading-tight">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
          onClick={close}
          style={{ animation: "fade-in 0.3s ease-out" }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-5 right-5 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white z-10 transition-colors"
            aria-label="Close"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white z-10 transition-colors"
            aria-label="Previous"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white z-10 transition-colors"
            aria-label="Next"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={filtered[lightboxIndex].width}
              height={filtered[lightboxIndex].height}
              className="w-full h-full object-contain select-none"
              sizes="90vw"
              draggable={false}
            />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <p className="text-surface/70 text-xs md:text-sm font-[family-name:var(--font-serif)]">
                {filtered[lightboxIndex].title}
              </p>
              <span className="text-surface/30 text-[10px] uppercase tracking-[0.1em]">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
