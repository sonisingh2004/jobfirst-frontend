"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalNavProps {
  currentPage: "terms" | "privacy";
}

export function LegalNav({ currentPage }: LegalNavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        ease: "outCubic",
        duration: 700,
        delay: 50,
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-4 z-50 mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md px-5 sm:px-6 py-3 shadow-md"
      style={{ opacity: 0 }}
    >
      {/* Brand / Home Link */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
          title="Back to Home"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Home</span>
        </Link>
        <span className="text-zinc-300">|</span>
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="h-2 w-2 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-125 transition-transform" />
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            jobfirst
          </span>
        </Link>
      </div>

      {/* Switch Between Legal Docs & Links */}
      <div className="flex items-center gap-3 sm:gap-6">
        <Link
          href="/terms"
          className={`text-xs sm:text-sm transition-colors ${
            currentPage === "terms"
              ? "font-bold text-zinc-950 border-b-2 border-[#f0b100] pb-0.5"
              : "font-medium text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className={`text-xs sm:text-sm transition-colors ${
            currentPage === "privacy"
              ? "font-bold text-zinc-950 border-b-2 border-[#f0b100] pb-0.5"
              : "font-medium text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Privacy
        </Link>
        <Link
          href="/early-access"
          className="rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-950 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}
