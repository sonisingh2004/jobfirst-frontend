"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { StatusBadge } from "./status-badge";
import { Sparkles } from "lucide-react";

interface ApplicationItem {
  company: string;
  role: string;
  status: string;
  variant: "yellow" | "neutral" | "success";
}

const applications: ApplicationItem[] = [
  {
    company: "Corebank",
    role: "Senior Product Analyst",
    status: "Applied",
    variant: "yellow",
  },
  {
    company: "Nova Health",
    role: "Growth Marketing Manager",
    status: "Interview",
    variant: "neutral",
  },
  {
    company: "Fintrust",
    role: "Financial Operations Lead",
    status: "Tailored resume ready",
    variant: "yellow",
  },
  {
    company: "Lumen Labs",
    role: "Product Designer",
    status: "Applied",
    variant: "yellow",
  },
];

export function DashboardPreview() {
  const counterRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Dashboard card enters last with a bigger delay (950ms), sliding up and in
    if (cardRef.current) {
      animate(cardRef.current, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.95, 1],
        ease: "outCubic",
        duration: 900,
        delay: 950,
      }).then(() => {
        // Slow continuous floating loop: translateY back and forth over 3.5s so the page feels alive at rest
        if (cardRef.current) {
          animate(cardRef.current, {
            translateY: [-6, 6],
            ease: "inOutSine",
            duration: 3500,
            loop: true,
            alternate: true,
          });
        }
      });

      // 2. Rows stagger in
      const rows = cardRef.current.querySelectorAll(".dashboard-row");
      if (rows.length > 0) {
        animate(rows, {
          opacity: [0, 1],
          translateX: [-12, 0],
          ease: "outCubic",
          duration: 600,
          delay: stagger(90, { start: 1150 }),
        });
      }

      // 3. Internal status pills pop in one by one staggered
      const badges = cardRef.current.querySelectorAll(".dashboard-badge");
      if (badges.length > 0) {
        animate(badges, {
          opacity: [0, 1],
          scale: [0, 1],
          ease: "outBack(1.6)",
          duration: 500,
          delay: stagger(100, { start: 1350 }),
        });
      }
    }

    // 4. Numerical counter animation from 0 to 247
    const countObj = { count: 0 };
    if (counterRef.current) {
      animate(countObj, {
        count: 247,
        ease: "outExpo",
        duration: 2000,
        delay: 1050,
        onRender: () => {
          if (counterRef.current) {
            counterRef.current.textContent = `${Math.round(countObj.count)} applications sent`;
          }
        },
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 text-left transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
      style={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
            Today&apos;s Applications
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span
            ref={counterRef}
            className="text-sm font-medium text-zinc-600 tabular-nums"
          >
            0 applications sent
          </span>
        </div>
      </div>

      {/* Application Rows */}
      <div className="divide-y divide-zinc-100">
        {applications.map((item, index) => (
          <div
            key={index}
            className="dashboard-row grid grid-cols-1 sm:grid-cols-[1.1fr_1.5fr_auto] items-center gap-2 sm:gap-6 py-4 transition-colors hover:bg-zinc-50/70 rounded-lg px-2 -mx-2"
            style={{ opacity: 0 }}
          >
            <span className="font-semibold text-zinc-900 text-sm md:text-base">
              {item.company}
            </span>
            <span className="text-sm text-zinc-500">{item.role}</span>
            <div className="dashboard-badge flex sm:justify-end" style={{ opacity: 0 }}>
              <StatusBadge text={item.status} variant={item.variant} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
