"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const freeFeatures = [
  "AI job matching across 15+ boards",
  "Tailored resume for every application",
  "Full application tracking",
  "Cancel anytime, no card required upfront",
];

const proFeatures = [
  "ATS friendly",
  "ATS resume maker",
  "One-time online interview to match their skills",
  "AI job matching across 15+ boards",
  // "Tailored resume for every application",
  // "Priority application tracking & alerts",
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const proCardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const freeCountRef = useRef<HTMLSpanElement>(null);
  const priceCountRef = useRef<HTMLSpanElement>(null);
  const subPriceCountRef = useRef<HTMLSpanElement>(null);

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

            // 2. Cards Entrance
            const cards = sectionRef.current.querySelectorAll(".anime-pricing-card");
            if (cards.length > 0) {
              animate(cards, {
                opacity: [0, 1],
                translateY: [35, 0],
                scale: [0.96, 1],
                ease: "outCubic",
                duration: 800,
                delay: stagger(150, { start: 200 }),
              });
            }

            // Subtle continuous glow/shadow pulse on Pro card to draw the eye
            if (proCardRef.current) {
              animate(proCardRef.current, {
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

            // 3. "Most popular" badge does a small one-time pop-rotate on entrance
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
                if (subPriceCountRef.current) {
                  subPriceCountRef.current.textContent = `₹${Math.round(countState.price)}`;
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
                delay: stagger(60, { start: 500 }),
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
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
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
          <span ref={subPriceCountRef} className="font-bold text-zinc-900">
            ₹0
          </span>{" "}
          a month — no card upfront, cancel the day you get hired.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-6 items-stretch">
          {/* Card 1: Free Trial */}
          <div
            className="anime-pricing-card relative w-full bg-white rounded-3xl border-2 border-zinc-200/90 hover:border-amber-300 p-6 sm:p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-lg transition-all duration-300"
            style={{ opacity: 0 }}
          >
            <div>
              {/* Top Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider">
                Free Trial
              </div>

              {/* Card Header */}
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-zinc-500 uppercase">
                  Starter Plan
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1 flex items-baseline gap-1.5">
                  <span ref={freeCountRef} className="tabular-nums text-4xl text-[#f0b100] font-black">
                    0
                  </span>
                  <span>free applications</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  100% free to start • No credit card required
                </p>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3.5 border-t border-zinc-100 pt-5 mt-6">
                {freeFeatures.map((feature, idx) => (
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
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full py-3.5 px-5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200/80 font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free — Let jobfirst Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Pro ₹999 Plan */}
          <div
            ref={proCardRef}
            className="anime-pricing-card relative w-full bg-white rounded-3xl border-2 border-[#f0b100] p-6 sm:p-8 flex flex-col justify-between text-left transition-all duration-300"
            style={{ opacity: 0 }}
          >
            {/* Pop-Rotate "Most Popular" Badge */}
            <div
              ref={badgeRef}
              className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#f0b100] text-amber-950 text-xs font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1 origin-center"
              style={{ opacity: 0 }}
            >
              <Sparkles className="w-3 h-3" />
              <span>Most Popular</span>
            </div>

            <div>
              {/* Top Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                Full Access
              </div>

              {/* Card Header */}
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6400] uppercase">
                  Pro Monthly
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1 flex items-baseline gap-1.5">
                  <span ref={priceCountRef} className="tabular-nums text-4xl text-[#f0b100] font-black">
                    ₹0
                  </span>
                  <span className="text-lg text-zinc-600 font-bold">/ month</span>
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Billed monthly • Cancel anytime
                </p>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3.5 border-t border-zinc-100 pt-5 mt-6">
                {proFeatures.map((feature, idx) => (
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
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-sm shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Started — ₹999/mo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

