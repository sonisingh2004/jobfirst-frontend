"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection = "how-it-works" }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrolledRef = useRef(false);

  useEffect(() => {
    // 1. On page load: pill nav drops in from slightly above with a fade
    if (navRef.current) {
      animate(navRef.current, {
        opacity: [0, 1],
        translateY: [-24, 0],
        ease: "outCubic",
        duration: 750,
        delay: 100,
      });

      // 2. Links stagger in one after another by 60ms (within 50-80ms requirement)
      const navLinks = navRef.current.querySelectorAll(".anime-nav-item");
      if (navLinks.length > 0) {
        animate(navLinks, {
          opacity: [0, 1],
          translateY: [-6, 0],
          ease: "outCubic",
          duration: 600,
          delay: stagger(60, { start: 280 }),
        });
      }

      // 3. Right CTA button entrance with slight scale pop
      const ctaBtn = navRef.current.querySelector(".anime-nav-cta");
      if (ctaBtn) {
        animate(ctaBtn, {
          opacity: [0, 1],
          scale: [0.9, 1],
          ease: "outBack",
          duration: 600,
          delay: 520,
        });
      }
    }

    // Scroll listener for background blur / shadow transition triggered by scroll listener,
    // animating the shadow opacity / style with anime when threshold is crossed.
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== prevScrolledRef.current) {
        prevScrolledRef.current = scrolled;
        setIsScrolled(scrolled);

        if (navRef.current) {
          animate(navRef.current, {
            boxShadow: scrolled
              ? "0 18px 30px -6px rgba(0, 0, 0, 0.08), 0 8px 12px -6px rgba(0, 0, 0, 0.04)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.03)",
            ease: "outQuad",
            duration: 350,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-4 z-50 mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border px-6 py-3 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-zinc-200/90"
          : "bg-white/80 backdrop-blur-sm border-zinc-200/60"
      }`}
      style={{ opacity: 0 }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-125 transition-transform" />
        <span className="text-lg font-bold tracking-tight text-zinc-900">
          jobfirst
        </span>
      </Link>

      {/* Nav Links (Desktop with staggered items) */}
      <div className="hidden md:flex items-center gap-7">
        <Link
          href="#how-it-works"
          className={`anime-nav-item text-sm font-semibold transition-colors ${
            activeSection === "how-it-works"
              ? "text-zinc-950 font-bold"
              : "text-zinc-600 hover:text-zinc-950"
          }`}
          style={{ opacity: 0 }}
        >
          How it works
        </Link>
        <Link
          href="#pricing"
          className={`anime-nav-item text-sm font-medium transition-colors ${
            activeSection === "pricing"
              ? "text-zinc-950 font-bold"
              : "text-zinc-600 hover:text-zinc-950"
          }`}
          style={{ opacity: 0 }}
        >
          Pricing
        </Link>
        <Link
          href="#faq"
          className={`anime-nav-item text-sm font-medium transition-colors ${
            activeSection === "faq"
              ? "text-zinc-950 font-bold"
              : "text-zinc-600 hover:text-zinc-950"
          }`}
          style={{ opacity: 0 }}
        >
          FAQ
        </Link>
        <Link
          href="#success-stories"
          className={`anime-nav-item text-sm font-medium transition-colors ${
            activeSection === "success-stories"
              ? "text-zinc-950 font-bold"
              : "text-zinc-600 hover:text-zinc-950"
          }`}
          style={{ opacity: 0 }}
        >
          Success Stories
        </Link>
      </div>

      {/* Auth & CTA */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="anime-nav-item text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          style={{ opacity: 0 }}
        >
          Log in
        </Link>
        <Link
          href="/early-access"
          className="anime-nav-cta rounded-full bg-[#f0b100] hover:bg-[#e5a800] px-5 py-2 text-sm font-semibold text-amber-950 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer inline-block text-center"
          style={{ opacity: 0 }}
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}
