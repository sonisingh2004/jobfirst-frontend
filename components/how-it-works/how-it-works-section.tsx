"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { RoleCardStack } from "./role-card-stack";
import { WorkflowSteps } from "./workflow-steps";

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            // 1. Animate Section Header
            const headerElements =
              sectionRef.current.querySelectorAll(".anime-hw-header");
            if (headerElements.length > 0) {
              animate(headerElements, {
                opacity: [0, 1],
                translateY: [24, 0],
                ease: "outCubic",
                duration: 750,
                delay: stagger(100, { start: 100 }),
              });
            }

            // 2. Each job-match card staggers in from below with rotation settling, like dealt cards
            const cards = sectionRef.current.querySelectorAll(".how-it-works-card");
            cards.forEach((cardEl, idx) => {
              const htmlEl = cardEl as HTMLElement;
              const rotateFrom = Number(htmlEl.dataset.rotateFrom || (idx === 0 ? -14 : idx === 1 ? 8 : 14));
              const rotateTo = Number(htmlEl.dataset.rotateTo || (idx === 0 ? -2 : idx === 1 ? 0 : 2));

              animate(htmlEl, {
                opacity: [0, 1],
                translateY: [100, 0],
                rotate: [rotateFrom, rotateTo],
                scale: [0.92, 1],
                ease: "outCubic",
                duration: 850,
                delay: 250 + idx * 160,
              });
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center text-center gap-8 md:gap-12"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <p
          className="anime-hw-header text-xs md:text-sm font-bold tracking-[0.2em] text-[#E6A800] uppercase"
          style={{ opacity: 0 }}
        >
          HOW IT WORKS
        </p>
        <h2
          className="anime-hw-header text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight"
          style={{ opacity: 0 }}
        >
          Five roles, ranked for you.
        </h2>
      </div>

      {/* 3-Card Stack with Card-Dealing Entrance */}
      <RoleCardStack />

      {/* 4-Step Pipeline Steps with Scroll-triggered count/fade */}
      <div className="w-full">
        <WorkflowSteps />
      </div>
    </section>
  );
}
