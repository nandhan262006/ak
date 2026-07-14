"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface CardImageSliderProps {
  images: { src: string; alt: string }[];
  badge?: string;
}

export default function CardImageSlider({ images, badge }: CardImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const len = images.length;

  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + len) % len),
    [len]
  );
  const next = useCallback(
    () => setCurrent((p) => (p + 1) % len),
    [len]
  );

  useEffect(() => {
    if (isPaused || len <= 1) return;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, len]);

  if (len === 0) return null;

  return (
    <div
      className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchMove={(e) => {
        touchEnd.current = e.touches[0].clientX;
      }}
      onTouchEnd={() => {
        const diff = touchStart.current - touchEnd.current;
        if (Math.abs(diff) > 50) {
          if (diff > 0) next();
          else prev();
        }
      }}
    >
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}

      <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-surface bg-gold/90 px-3 py-1">
            {badge}
          </span>
        </div>
      )}

      {len > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-5" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
