"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % items.length);
  }, [items.length]);

  const goTo = (i: number) => {
    setCurrent(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  return (
    <div className="relative text-center max-w-3xl mx-auto">
      <div className="text-gold text-8xl font-[family-name:var(--font-serif)] leading-none mb-8 opacity-30">&ldquo;</div>

      <div className="relative min-h-[180px]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ${
              i === current
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <p className="text-lg md:text-2xl leading-relaxed text-primary font-[family-name:var(--font-serif)] italic">
              {item.text}
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-primary">{item.name}</p>
              <p className="text-xs text-muted mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-border hover:bg-muted"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
