"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Very slow ambient drift on the background wordmark
    if (watermarkRef.current) {
      animate(watermarkRef.current, {
        translateX: [-30, 30],
        translateY: [-10, 10],
        ease: "inOutSine",
        duration: 14000,
        loop: true,
        alternate: true,
      });
    }

    // 2. Footer links and brand column fade up staggered when scrolled into view
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && footerRef.current) {
            const footerItems = footerRef.current.querySelectorAll(".anime-footer-item");
            if (footerItems.length > 0) {
              animate(footerItems, {
                opacity: [0, 1],
                translateY: [20, 0],
                ease: "outCubic",
                duration: 650,
                delay: stagger(45, { start: 100 }),
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white border-t border-zinc-200/90 pt-16 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Info Column */}
          <div className="anime-footer-item lg:col-span-2 flex flex-col gap-3" style={{ opacity: 0 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <span className="h-3 w-3 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-125 transition-transform" />
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                jobfirst
              </span>
            </Link>
            <p className="text-sm text-zinc-600 max-w-xs leading-relaxed font-normal">
              India&apos;s first AI Job Agent — trusted by 1M+ professionals.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Product */}
            <div className="anime-footer-item flex flex-col gap-3" style={{ opacity: 0 }}>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Product
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Get Early Access
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Features */}
            <div className="anime-footer-item flex flex-col gap-3" style={{ opacity: 0 }}>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Features
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    AI Job Matching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Auto-Apply
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Referrals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="anime-footer-item flex flex-col gap-3" style={{ opacity: 0 }}>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Company
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="anime-footer-item flex flex-col gap-3" style={{ opacity: 0 }}>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                Social
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-950 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="anime-footer-item border-t border-zinc-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500" style={{ opacity: 0 }}>
          <p>© 2025 jobfirst Technologies Pvt Ltd</p>
          <a
            href="mailto:hello@jobfirst.ai"
            className="hover:text-zinc-800 transition-colors"
          >
            hello@jobfirst.ai
          </a>
        </div>
      </div>

      {/* Giant Typography Background Wordmark with Ambient Drift Loop */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 text-zinc-100/80 font-extrabold text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-none whitespace-nowrap opacity-50 z-0 will-change-transform"
      >
        jobfirst.
      </div>
    </footer>
  );
}
