"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function EarlyAccessHeader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Badge fades & slides up
    const badge = containerRef.current.querySelector(".anime-ea-badge");
    if (badge) {
      animate(badge, {
        opacity: [0, 1],
        translateY: [16, 0],
        ease: "outCubic",
        duration: 600,
        delay: 50,
      });
    }

    // 2. Headline words stagger up with blur-to-sharp effect
    const headlineWords = containerRef.current.querySelectorAll(".anime-ea-word");
    if (headlineWords.length > 0) {
      animate(headlineWords, {
        opacity: [0, 1],
        translateY: [24, 0],
        filter: ["blur(8px)", "blur(0px)"],
        ease: "outCubic",
        duration: 750,
        delay: stagger(70, { start: 180 }),
      });
    }

    // 3. Subheading fades in
    const subhead = containerRef.current.querySelector(".anime-ea-subhead");
    if (subhead) {
      animate(subhead, {
        opacity: [0, 1],
        translateY: [16, 0],
        filter: ["blur(6px)", "blur(0px)"],
        ease: "outCubic",
        duration: 700,
        delay: 520,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center max-w-[640px] mx-auto w-full gap-5 sm:gap-6"
    >
      {/* 1. Badge */}
      <div
        className="anime-ea-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0b100]/10 border border-[#f0b100]/25 text-[#a16207] text-xs sm:text-sm font-semibold shadow-2xs"
        style={{ opacity: 0 }}
      >
        <span className="h-2 w-2 rounded-full bg-[#f0b100] animate-pulse" />
        <span>Limited early access</span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15] max-w-[620px]">
        <span className="anime-ea-word inline-block mr-2" style={{ opacity: 0 }}>
          Be
        </span>
        <span className="anime-ea-word inline-block mr-2" style={{ opacity: 0 }}>
          first
        </span>
        <span className="anime-ea-word inline-block mr-2" style={{ opacity: 0 }}>
          in
        </span>
        <span className="anime-ea-word inline-block mr-2" style={{ opacity: 0 }}>
          line
        </span>
        <span className="anime-ea-word inline-block mr-2" style={{ opacity: 0 }}>
          for
        </span>
        <span
          className="anime-ea-word inline-block relative px-2.5 py-0.5 rounded-lg bg-[#f0b100] text-amber-950 font-bold shadow-xs transform -rotate-1"
          style={{ opacity: 0 }}
        >
          jobfirst
        </span>
      </h1>

      {/* 3. Subheading */}
      <p
        className="anime-ea-subhead text-base sm:text-lg text-zinc-600 max-w-[600px] leading-relaxed font-normal"
        style={{ opacity: 0 }}
      >
        Join the waitlist and get priority access before we open jobfirst to
        everyone. Early members get 3 months of premium free.
      </p>
    </div>
  );
}
