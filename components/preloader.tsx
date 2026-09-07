"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isMounted, setIsMounted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoLockupRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLSpanElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Logo scales and fades in with a slight bounce (easeOutElastic)
    if (logoLockupRef.current) {
      animate(logoLockupRef.current, {
        opacity: [0, 1],
        scale: [0.7, 1],
        ease: "outElastic(1, .7)",
        duration: 900,
      });
    }

    // 2. The dot pulses continuously on a loop
    if (dotRef.current) {
      animate(dotRef.current, {
        scale: [1, 1.45],
        opacity: [1, 0.65],
        ease: "inOutSine",
        duration: 650,
        loop: true,
        alternate: true,
      });
    }

    // 3. Background watermark subtle ambient drift
    if (watermarkRef.current) {
      animate(watermarkRef.current, {
        translateY: [0, -18],
        ease: "linear",
        duration: 2800,
      });
    }

    // 4. Subtext fades in after a delay
    if (subtextRef.current) {
      animate(subtextRef.current, {
        opacity: [0, 1],
        translateY: [8, 0],
        ease: "outCubic",
        duration: 600,
        delay: 500,
      });
    }

    // 5. Progress bar fills width from 0 to 65% while percentage counter
    // animates numerically in sync using anime's innerHTML / round trick,
    // then smoothly accelerates to 100% on complete.
    const progressData = { value: 0 };
    if (progressFillRef.current && counterRef.current) {
      animate(progressData, {
        value: 65,
        ease: "inOutQuad",
        duration: 1300,
        delay: 200,
        onRender: () => {
          const rounded = Math.round(progressData.value);
          if (progressFillRef.current) {
            progressFillRef.current.style.width = `${rounded}%`;
          }
          if (counterRef.current) {
            counterRef.current.innerHTML = `${rounded}%`;
          }
        },
      }).then(() => {
        // Complete the fill to 100%
        animate(progressData, {
          value: 100,
          ease: "outQuad",
          duration: 450,
          delay: 150,
          onRender: () => {
            const rounded = Math.round(progressData.value);
            if (progressFillRef.current) {
              progressFillRef.current.style.width = `${rounded}%`;
            }
            if (counterRef.current) {
              counterRef.current.innerHTML = `${rounded}%`;
            }
          },
        }).then(() => {
          // 6. On load-complete: whole screen scales down slightly and fades out
          if (containerRef.current) {
            animate(containerRef.current, {
              opacity: [1, 0],
              scale: [1, 0.94],
              ease: "inQuad",
              duration: 400,
              delay: 80,
            }).then(() => {
              setIsMounted(false);
              if (onComplete) onComplete();
            });
          }
        });
      });
    }
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FFFCF5] overflow-hidden select-none pointer-events-auto"
    >
      {/* Center Content Stack */}
      <div className="relative z-10 flex flex-col items-center w-[280px]">
        {/* 1. Logo Lockup */}
        <div
          ref={logoLockupRef}
          className="flex items-center gap-2.5"
          style={{ opacity: 0 }}
        >
          <span
            ref={dotRef}
            className="w-3 h-3 rounded-full bg-[#F5B400] shrink-0 shadow-sm"
          />
          <span className="text-4xl font-extrabold tracking-tight text-[#171717] leading-none">
            jobfirst
          </span>
        </div>

        {/* 2. Progress Bar Track */}
        <div className="w-[280px] h-1.5 bg-[#F0EBDD] rounded-full overflow-hidden mt-6 shadow-inner">
          <div
            ref={progressFillRef}
            className="h-full bg-[#F5B400] rounded-full w-0 transition-all"
          />
        </div>

        {/* 3. Percentage Counter */}
        <span
          ref={counterRef}
          className="text-sm font-semibold text-[#77736B] tabular-nums mt-4 tracking-tight"
        >
          0%
        </span>

        {/* 4. Subtitle Text */}
        <span
          ref={subtextRef}
          className="text-xs italic font-medium text-[#969188] mt-2.5 whitespace-nowrap text-center tracking-wide"
          style={{ opacity: 0 }}
        >
          Preparing your next opportunity...
        </span>
      </div>

      {/* 5. Decorative Background Watermark */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-3rem] sm:bottom-[-5rem] left-1/2 -translate-x-1/2 text-amber-950/[0.07] [-webkit-text-stroke:2px_rgba(217,119,6,0.2)] font-extrabold text-[10rem] sm:text-[14rem] md:text-[18rem] tracking-tighter leading-none whitespace-nowrap z-0 select-none will-change-transform"
      >
        jobfirst.
      </div>
    </div>
  );
}
