"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "AI job matching across 15+ boards",
  "Tailored resume for every application",
  "Full application tracking",
  "Cancel anytime, no card required upfront",
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const freeCountRef = useRef<HTMLSpanElement>(null);
  const priceCountRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            // 1. Header elements
            const headers = sectionRef.current.querySelectorAll(".anime-price-header");
            if (headers.length > 0) {
              animate(headers, {
                opacity: [0, 1],
                translateY: [24, 0],
                ease: "outCubic",
                duration: 750,
                delay: stagger(100, { start: 50 }),
              });
            }

            // 2. Card Entrance
            if (cardRef.current) {
              animate(cardRef.current, {
                opacity: [0, 1],
                translateY: [35, 0],
                scale: [0.96, 1],
                ease: "outCubic",
                duration: 800,
                delay: 200,
              }).then(() => {
                // Subtle continuous glow/shadow pulse to draw the eye
                if (cardRef.current) {
                  animate(cardRef.current, {
                    boxShadow: [
                      "0 10px 25px -5px rgba(240, 177, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                      "0 22px 50px 0px rgba(240, 177, 0, 0.42), 0 10px 15px -3px rgba(240, 177, 0, 0.2)",
                    ],
                    ease: "inOutSine",
                    duration: 2200,
                    loop: true,
                    alternate: true,
                  });
                }
              });
            }

            // 3. "Most popular / Free trial" badge does a small one-time pop-rotate on entrance
            if (badgeRef.current) {
              animate(badgeRef.current, {
                opacity: [0, 1],
                scale: [0, 1.12, 1],
                rotate: [-18, 4, 0],
                ease: "outBack(1.8)",
                duration: 700,
                delay: 450,
              });
            }

            // 4. Price numbers count up from 0 to final value on scroll-into-view
            const countState = { freeApps: 0, price: 0 };
            animate(countState, {
              freeApps: 20,
              price: 999,
              ease: "outExpo",
              duration: 2000,
              delay: 350,
              onRender: () => {
                if (freeCountRef.current) {
                  freeCountRef.current.textContent = `${Math.round(countState.freeApps)}`;
                }
                if (priceCountRef.current) {
                  priceCountRef.current.textContent = `₹${Math.round(countState.price)}`;
                }
              },
            });

            // 5. Feature items stagger in
            const featureItems = sectionRef.current.querySelectorAll(".anime-price-feature");
            if (featureItems.length > 0) {
              animate(featureItems, {
                opacity: [0, 1],
                translateX: [-15, 0],
                ease: "outCubic",
                duration: 600,
                delay: stagger(80, { start: 550 }),
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Glowing Title Box */}
        <div className="relative w-full max-w-2xl px-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 bg-amber-300/30 blur-2xl rounded-full pointer-events-none" />
          <h2
            className="anime-price-header relative text-3xl sm:text-4xl md:text-5xl font-serif italic font-bold text-zinc-950 tracking-tight"
            style={{ opacity: 0 }}
          >
            Your first 20 applications are on us.
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="anime-price-header text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed"
          style={{ opacity: 0 }}
        >
          After that it&apos;s{" "}
          <span ref={priceCountRef} className="font-bold text-zinc-900">
            ₹0
          </span>{" "}
          a month — no card upfront, cancel the day you get hired.
        </p>

        {/* Featured Card with Glow/Shadow Pulse Loop */}
        <div
          ref={cardRef}
          className="relative w-full max-w-md mt-6 bg-white rounded-3xl border-2 border-[#f0b100] p-6 sm:p-8 flex flex-col gap-6 text-left transition-all duration-300"
          style={{ opacity: 0 }}
        >
          {/* Pop-Rotate "Most Popular" / "Free Trial" Badge */}
          <div
            ref={badgeRef}
            className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#f0b100] text-amber-950 text-xs font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1 origin-center"
            style={{ opacity: 0 }}
          >
            <Sparkles className="w-3 h-3" />
            <span>Most Popular</span>
          </div>

          {/* Card Header */}
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6400] uppercase">
              Free Trial
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1 flex items-baseline gap-1.5">
              <span ref={freeCountRef} className="tabular-nums text-4xl text-[#f0b100]">
                0
              </span>
              <span>free applications</span>
            </h3>
          </div>

          {/* Features List */}
          <ul className="flex flex-col gap-3.5 border-t border-zinc-100 pt-5">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="anime-price-feature flex items-start gap-3"
                style={{ opacity: 0 }}
              >
                <div className="mt-0.5 p-0.5 rounded-full bg-amber-100 text-amber-800 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-zinc-800">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            type="button"
            className="w-full mt-2 py-3.5 px-5 rounded-2xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-sm shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Free — Let jobfirst Apply</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
