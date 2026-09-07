"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            const heading = sectionRef.current.querySelector(".anime-cta-heading");
            if (heading) {
              animate(heading, {
                opacity: [0, 1],
                translateY: [24, 0],
                ease: "outCubic",
                duration: 750,
              });
            }

            if (buttonRef.current) {
              animate(buttonRef.current, {
                opacity: [0, 1],
                scale: [0.85, 1],
                translateY: [18, 0],
                ease: "outBack(1.4)",
                duration: 650,
                delay: 200,
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1A1A1A] py-16 md:py-24 px-6 sm:px-12 text-center flex flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <h2
        className="anime-cta-heading text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight max-w-2xl"
        style={{ opacity: 0 }}
      >
        no more <span className="text-[#f0b100]">solo job hunting.</span>
      </h2>

      <button
        ref={buttonRef}
        type="button"
        className="group py-3.5 px-8 rounded-full bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-sm md:text-base shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
        style={{ opacity: 0 }}
      >
        <span>Apply To Your First Job</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </section>
  );
}
