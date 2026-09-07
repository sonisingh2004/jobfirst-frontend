"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import { Check } from "lucide-react";

export function EarlyAccessTrust() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        translateY: [12, 0],
        ease: "outCubic",
        duration: 700,
        delay: 650,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-6 mt-4 w-full text-center"
      style={{ opacity: 0 }}
    >
      {/* Trust badge */}
      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500">
        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#f0b100]/20 text-[#a16207]">
          <Check className="w-3 h-3 stroke-[3]" />
        </span>
        <span>Trusted by 1M+ professionals across India</span>
      </div>

      {/* Footer text */}
      <footer className="pt-2 pb-6 text-xs text-zinc-400 font-normal">
        © 2024 jobfirst. All rights reserved.
      </footer>
    </div>
  );
}
