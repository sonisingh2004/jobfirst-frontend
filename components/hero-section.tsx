"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // 1. Badge fades and slides up first
    const badge = heroRef.current.querySelector(".anime-hero-badge");
    if (badge) {
      animate(badge, {
        opacity: [0, 1],
        translateY: [20, 0],
        ease: "outCubic",
        duration: 650,
        delay: 50,
      });
    }

    // 2. Headline words stagger up with blur-to-sharp effect
    const headlineWords = heroRef.current.querySelectorAll(".anime-hero-word");
    if (headlineWords.length > 0) {
      animate(headlineWords, {
        opacity: [0, 1],
        translateY: [28, 0],
        filter: ["blur(10px)", "blur(0px)"],
        ease: "outCubic",
        duration: 750,
        delay: stagger(75, { start: 200 }),
      });
    }

    // 3. Subheading follows
    const subhead = heroRef.current.querySelector(".anime-hero-subhead");
    if (subhead) {
      animate(subhead, {
        opacity: [0, 1],
        translateY: [20, 0],
        filter: ["blur(6px)", "blur(0px)"],
        ease: "outCubic",
        duration: 700,
        delay: 600,
      });
    }

    // 4. Two CTA buttons scale in with a slight overshoot (outBack)
    const ctaButtons = heroRef.current.querySelectorAll(".anime-hero-cta");
    if (ctaButtons.length > 0) {
      animate(ctaButtons, {
        opacity: [0, 1],
        scale: [0.85, 1],
        translateY: [18, 0],
        ease: "outBack(1.4)",
        duration: 650,
        delay: stagger(110, { start: 780 }),
      });
    }

    // 5. Trust guarantee text
    const trustText = heroRef.current.querySelector(".anime-hero-trust");
    if (trustText) {
      animate(trustText, {
        opacity: [0, 1],
        translateY: [10, 0],
        ease: "outCubic",
        duration: 600,
        delay: 950,
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative max-w-5xl mx-auto flex flex-col items-center text-center pt-8 md:pt-14 pb-16 px-4 sm:px-6"
    >
      {/* 1. India's #1 AI Job Agent Badge */}
      <div
        className="anime-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-300/50 text-amber-950 text-xs md:text-sm font-semibold shadow-xs"
        style={{ opacity: 0 }}
      >
        <span className="h-2 w-2 rounded-full bg-[#f0b100] animate-pulse"></span>
        <span>India&apos;s #1 AI Job Agent</span>
      </div>

      {/* 2. Main Headline with split word blur-to-sharp stagger */}
      <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] max-w-4xl">
        <span className="block">
          <span className="anime-hero-word inline-block mr-3" style={{ opacity: 0 }}>
            You
          </span>
          <span className="anime-hero-word inline-block" style={{ opacity: 0 }}>
            dream it.
          </span>
        </span>
        <span className="block mt-1 sm:mt-2">
          <span
            className="anime-hero-word inline-block relative px-3 py-0.5 my-1 mx-1.5 rounded-xl bg-[#f0b100] text-amber-950 transform -rotate-1 shadow-sm"
            style={{ opacity: 0 }}
          >
            jobfirst
          </span>
          <span className="anime-hero-word inline-block mr-2.5" style={{ opacity: 0 }}>
            makes
          </span>
          <span className="anime-hero-word inline-block" style={{ opacity: 0 }}>
            it
          </span>
        </span>
        <span className="block mt-1 sm:mt-2">
          <span className="anime-hero-word inline-block" style={{ opacity: 0 }}>
            happen.
          </span>
        </span>
      </h1>

      {/* 3. Subheading */}
      <p
        className="anime-hero-subhead mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed font-normal"
        style={{ opacity: 0 }}
      >
        One AI agent that finds, tailors, and applies to jobs for you — across
        15+ job boards, 24/7.
      </p>

      {/* 4. CTA Buttons with slight overshoot entrance and hover scale-up + shadow-grow */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
        <button
          type="button"
          className="anime-hero-cta group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-7 py-3.5 text-sm md:text-base font-bold text-amber-950 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          style={{ opacity: 0 }}
        >
          <span>Start Free — Let jobfirst Apply</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          className="anime-hero-cta w-full sm:w-auto flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white hover:bg-zinc-50 px-7 py-3.5 text-sm md:text-base font-bold text-zinc-900 shadow-xs hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          style={{ opacity: 0 }}
        >
          See how it works
        </button>
      </div>

      {/* 5. Trust Text */}
      <p
        className="anime-hero-trust mt-4 text-xs md:text-sm text-zinc-500 font-medium"
        style={{ opacity: 0 }}
      >
        No credit card required · 20 free applications
      </p>

      {/* 6. Product / Dashboard Mockup Card */}
      <DashboardPreview />
    </section>
  );
}
