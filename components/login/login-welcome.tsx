"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Check } from "lucide-react";

const features = [
  "Track every application in one place",
  "See new AI-matched roles daily",
  "Chat with your job agent on WhatsApp",
];

export function LoginWelcome() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Staggered fade-up for header elements
      const headerElements =
        containerRef.current.querySelectorAll(".anime-login-fade");
      if (headerElements.length > 0) {
        animate(headerElements, {
          opacity: [0, 1],
          translateY: [20, 0],
          ease: "outCubic",
          duration: 800,
          delay: stagger(100, { start: 200 }),
        });
      }

      // Feature bullets stagger with checkmark pop
      const bulletItems =
        containerRef.current.querySelectorAll(".anime-login-bullet");
      if (bulletItems.length > 0) {
        animate(bulletItems, {
          opacity: [0, 1],
          translateX: [-15, 0],
          ease: "outCubic",
          duration: 700,
          delay: stagger(100, { start: 500 }),
        });
      }

      // Checkmark pop effect
      const checkmarks =
        containerRef.current.querySelectorAll(".anime-check-pop");
      if (checkmarks.length > 0) {
        animate(checkmarks, {
          scale: [0, 1],
          ease: "outBack(2)",
          duration: 500,
          delay: stagger(100, { start: 600 }),
        });
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center gap-6 max-w-xl text-left"
    >
      {/* 1. Welcome Back Badge */}
      <div
        className="anime-login-fade inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#733e0a] text-xs sm:text-sm font-semibold w-fit"
        style={{ opacity: 0 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#f0b100]" />
        <span>Welcome back</span>
      </div>

      {/* 2. Headline & Subheading */}
      <div className="flex flex-col gap-3">
        <h1
          className="anime-login-fade text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05]"
          style={{ opacity: 0 }}
        >
          <span>Log in to </span>
          <span className="relative inline-block px-2.5 py-0.5 my-0.5 rounded-lg bg-[#f0b100] text-amber-950 shadow-xs transform -rotate-1">
            jobfirst
          </span>
        </h1>

        <p
          className="anime-login-fade text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg mt-1"
          style={{ opacity: 0 }}
        >
          Pick up where you left off — your applications, matches, and messages
          are waiting.
        </p>
      </div>

      {/* 3. Feature Bullets */}
      <div className="flex flex-col gap-3.5 pt-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="anime-login-bullet flex items-center gap-3 text-sm sm:text-base font-medium text-zinc-900"
            style={{ opacity: 0 }}
          >
            <span
              className="anime-check-pop shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 border border-amber-300/60"
              style={{ transform: "scale(0)" }}
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* 4. Trust Footnote */}
      <p
        className="anime-login-fade text-xs sm:text-sm text-zinc-500 font-medium pt-4 border-t border-amber-200/50"
        style={{ opacity: 0 }}
      >
        Trusted by 1M+ professionals across India
      </p>
    </div>
  );
}
