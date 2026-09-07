"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

const logos = [
  { name: "LinkedIn", type: "Platform" },
  { name: "Naukri", type: "Platform" },
  { name: "Foundit", type: "Platform" },
  { name: "Greenhouse", type: "ATS" },
  { name: "Lever", type: "ATS" },
  { name: "Wellfound", type: "Platform" },
  { name: "Indeed", type: "Platform" },
  { name: "Razorpay", type: "Company" },
  { name: "Zepto", type: "Company" },
  { name: "Swiggy", type: "Company" },
  { name: "Zomato", type: "Company" },
  { name: "Groww", type: "Company" },
  { name: "Flipkart", type: "Company" },
];

export function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logo row scrolls infinitely using a translateX loop set to linear easing with no delay,
    // duplicating the logo set so it loops seamlessly.
    if (trackRef.current) {
      animate(trackRef.current, {
        translateX: ["0%", "-50%"],
        ease: "linear",
        duration: 28000,
        loop: true,
      });
    }

    // Fade in when entering view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && containerRef.current) {
            animate(containerRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
              ease: "outCubic",
              duration: 800,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate the list once for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto py-8 md:py-12 px-4 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <div className="text-center mb-6">
        <p className="text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-widest">
          Applies across 15+ job boards & hiring platforms
        </p>
      </div>

      {/* Marquee Track with gradient masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div
          ref={trackRef}
          className="flex items-center gap-8 sm:gap-12 w-max whitespace-nowrap will-change-transform py-2"
        >
          {duplicatedLogos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/60 border border-zinc-200/60 shadow-xs hover:border-amber-400/60 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#f0b100]/80" />
              <span className="text-sm md:text-base font-bold text-zinc-800 tracking-tight">
                {item.name}
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
