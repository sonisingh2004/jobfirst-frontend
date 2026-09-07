"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import Link from "next/link";

export function EarlyAccessNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current, {
        opacity: [0, 1],
        translateY: [-24, 0],
        ease: "outCubic",
        duration: 750,
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      data-anime="fade-down"
      className="anime-nav sticky top-4 z-50 mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md px-6 py-3 shadow-lg"
      style={{ opacity: 0 }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-1.5 group">
        <span className="h-2 w-2 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-125 transition-transform" />
        <span className="text-lg font-semibold tracking-tight text-zinc-900">
          jobfirst
        </span>
      </Link>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/#product"
          className="anime-nav-link relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Product
        </Link>
        <Link
          href="/#how-it-works"
          className="anime-nav-link relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          How it works
        </Link>
        <Link
          href="/#pricing"
          className="anime-nav-link relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/#faq"
          className="anime-nav-link relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          FAQ
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:inline-block"
        >
          New here? Sign up
        </Link>
        <button
          type="button"
          className="anime-hover-scale rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-5 py-2 text-sm font-semibold text-amber-950 shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}
