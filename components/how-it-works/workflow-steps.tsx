"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import { ArrowRight } from "lucide-react";

interface Step {
  num: string;
  title: string;
  isActive?: boolean;
}

const steps: Step[] = [
  { num: "01", title: "Find your best matches", isActive: true },
  { num: "02", title: "Tailor your resume" },
  { num: "03", title: "Apply for you" },
  { num: "04", title: "Track your inbox" },
];

export function WorkflowSteps() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stepElements = containerRef.current.querySelectorAll(".anime-step-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = Number(el.dataset.stepIndex || 0);

            // Staggered sequential entrance when scrolled into view
            animate(el, {
              opacity: [0, 1],
              translateY: [24, 0],
              scale: [0.92, 1],
              ease: "outCubic",
              duration: 650,
              delay: index * 140,
            });

            // Animate step number fade and count
            const numEl = el.querySelector(".anime-step-num");
            if (numEl) {
              animate(numEl, {
                opacity: [0, 1],
                scale: [0.7, 1],
                ease: "outBack(1.5)",
                duration: 500,
                delay: index * 140 + 80,
              });
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-4 px-2"
    >
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div
            data-step-index={idx}
            className={`anime-step-item flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
              step.isActive
                ? "bg-[#f0b100] text-amber-950 shadow-sm"
                : "bg-white text-zinc-700 border border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50/50"
            }`}
            style={{ opacity: 0 }}
          >
            <span
              className={`anime-step-num inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${
                step.isActive
                  ? "bg-amber-950 text-[#f0b100]"
                  : "bg-zinc-100 text-zinc-600"
              }`}
              style={{ opacity: 0 }}
            >
              {step.num}
            </span>
            <span>{step.title}</span>
          </div>
          {idx < steps.length - 1 && (
            <ArrowRight className="w-4 h-4 text-zinc-400 hidden sm:inline-block shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
