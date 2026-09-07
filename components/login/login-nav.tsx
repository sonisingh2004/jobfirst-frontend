"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import Link from "next/link";

export function LoginNav() {
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
      className="sticky top-4 z-50 mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md px-6 py-3 shadow-md"
      style={{ opacity: 0 }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-110 transition-transform" />
        <span className="text-lg font-bold tracking-tight text-zinc-900">
          jobfirst
        </span>
      </Link>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/#product"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          Product
        </Link>
        <Link
          href="/#how-it-works"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          How it works
        </Link>
        <Link
          href="/#pricing"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/#faq"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          FAQ
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="#signup"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors hidden sm:inline-block"
        >
          New here? Sign up
        </Link>
        <Link
          href="/early-access"
          className="rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-5 py-2 text-sm font-semibold text-amber-950 shadow-xs transition-all hover:scale-105 active:scale-95"
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}
