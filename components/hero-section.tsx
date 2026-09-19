"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DashboardPreview } from "./dashboard-preview";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    try {
      // 1. Badge fades and slides up
      const badge = heroRef.current.querySelector(".anime-hero-badge");
      if (badge) {
        animate(badge, {
          opacity: [0, 1],
          translateY: [16, 0],
          ease: "outCubic",
          duration: 600,
        });
      }

      // 2. Headline words stagger up
      const headlineWords = heroRef.current.querySelectorAll(".anime-hero-word");
      if (headlineWords.length > 0) {
        animate(headlineWords, {
          opacity: [0, 1],
          translateY: [20, 0],
          ease: "outCubic",
          duration: 700,
          delay: stagger(60, { start: 100 }),
        });
      }

      // 3. Subheading follows
      const subhead = heroRef.current.querySelector(".anime-hero-subhead");
      if (subhead) {
        animate(subhead, {
          opacity: [0, 1],
          translateY: [16, 0],
          ease: "outCubic",
          duration: 650,
          delay: 400,
        });
      }

      // 4. CTA buttons
      const ctaButtons = heroRef.current.querySelectorAll(".anime-hero-cta");
      if (ctaButtons.length > 0) {
        animate(ctaButtons, {
          opacity: [0, 1],
          scale: [0.92, 1],
          translateY: [12, 0],
          ease: "outBack(1.4)",
          duration: 600,
          delay: stagger(100, { start: 550 }),
        });
      }

      // 5. Trust guarantee text
      const trustText = heroRef.current.querySelector(".anime-hero-trust");
      if (trustText) {
        animate(trustText, {
          opacity: [0, 1],
          translateY: [10, 0],
          ease: "outCubic",
          duration: 500,
          delay: 700,
        });
      }
    } catch (e) {
      console.error("Hero animation error:", e);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full -mt-20 pt-28 md:pt-36 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Full-bleed Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/assets/images/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Soft bottom fade to seamlessly blend into page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#FFF8E1]" />
      </div>

      {/* Centered Hero Content Stack on top of Background */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* 1. India's #1 AI Job Agent Badge */}
        <div className="anime-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-300/70 text-amber-950 text-xs md:text-sm font-semibold shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#f0b100] animate-pulse"></span>
          <span>India&apos;s #1 AI Job Agent</span>
        </div>

        {/* 2. Main Headline */}
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] max-w-4xl">
          <span className="block">
            <span className="anime-hero-word inline-block mr-3">
              You
            </span>
            <span className="anime-hero-word inline-block">
              dream it.
            </span>
          </span>
          <span className="block mt-1 sm:mt-2">
            <span className="anime-hero-word inline-block relative px-3 py-0.5 my-1 mx-1.5 rounded-xl bg-[#f0b100] text-amber-950 transform -rotate-1 shadow-sm font-bold">
              jobfirst
            </span>
            <span className="anime-hero-word inline-block mr-2.5">
              makes
            </span>
            <span className="anime-hero-word inline-block">
              it
            </span>
          </span>
          <span className="block mt-1 sm:mt-2">
            <span className="anime-hero-word inline-block">
              happen.
            </span>
          </span>
        </h1>

        {/* 3. Subheading */}
        <p className="anime-hero-subhead mt-6 text-base sm:text-lg md:text-xl text-zinc-800 max-w-2xl leading-relaxed font-medium">
          One AI agent that finds, tailors, and applies to jobs for you — across
          15+ job boards, 24/7.
        </p>

        {/* 4. CTA Buttons with slight overshoot entrance and hover scale-up + shadow-grow */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            type="button"
            className="anime-hero-cta group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-7 py-3.5 text-sm md:text-base font-bold text-amber-950 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Start Free — Let jobfirst Apply</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            className="anime-hero-cta w-full sm:w-auto flex items-center justify-center rounded-full border-2 border-zinc-900 bg-white/90 backdrop-blur-sm hover:bg-white px-7 py-3.5 text-sm md:text-base font-bold text-zinc-900 shadow-xs hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            See how it works
          </button>
        </div>

        {/* 5. Trust Text */}
        <p className="anime-hero-trust mt-4 text-xs md:text-sm text-zinc-700 font-semibold">
          No credit card required · 20 free applications
        </p>

        {/* 6. Product / Dashboard Mockup Card */}
        <DashboardPreview />
      </div>
    </section>
  );
}
