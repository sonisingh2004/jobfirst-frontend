"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, createTimeline, stagger } from "animejs";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function EarlyAccessCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [field, setField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    // 1. Card container entrance: slide up and fade in
    animate(cardRef.current, {
      opacity: [0, 1],
      translateY: [24, 0],
      ease: "outCubic",
      duration: 800,
      delay: 350,
    });

    // 2. Form fields stagger in top-to-bottom by 60ms
    const fields = cardRef.current.querySelectorAll(".anime-form-field");
    if (fields.length > 0) {
      animate(fields, {
        opacity: [0, 1],
        translateY: [14, 0],
        ease: "outCubic",
        duration: 600,
        delay: stagger(60, { start: 500 }),
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);

    // Cross-fade animation using anime timeline
    if (formRef.current) {
      animate(formRef.current, {
        opacity: [1, 0],
        translateY: [0, -12],
        ease: "outQuad",
        duration: 300,
        onComplete: () => {
          setIsSubmitted(true);
          setIsSubmitting(false);

          // Animate confirmation state entrance
          setTimeout(() => {
            if (successRef.current) {
              const tl = createTimeline({
                defaults: { ease: "outCubic" },
              });

              const checkIcon = successRef.current.querySelector(".anime-success-icon");
              const title = successRef.current.querySelector(".anime-success-title");
              const text = successRef.current.querySelector(".anime-success-text");
              const link = successRef.current.querySelector(".anime-success-link");

              if (checkIcon) {
                tl.add(checkIcon, {
                  opacity: [0, 1],
                  scale: [0.2, 1.15, 1],
                  duration: 650,
                  ease: "outBack(1.8)",
                });
              }

              if (title) {
                tl.add(
                  title,
                  {
                    opacity: [0, 1],
                    translateY: [16, 0],
                    duration: 500,
                  },
                  "-=350"
                );
              }

              if (text) {
                tl.add(
                  text,
                  {
                    opacity: [0, 1],
                    translateY: [12, 0],
                    duration: 500,
                  },
                  "-=350"
                );
              }

              if (link) {
                tl.add(
                  link,
                  {
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 450,
                  },
                  "-=300"
                );
              }
            }
          }, 40);
        },
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="w-full max-w-[640px] mx-auto bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-[0_20px_50px_-15px_rgba(240,177,0,0.35)] p-6 sm:p-10 text-left transition-all"
      style={{ opacity: 0 }}
    >
      {!isSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {/* Field 1: Full Name */}
          <div
            className="anime-form-field flex flex-col gap-2"
            style={{ opacity: 0 }}
          >
            <label
              htmlFor="full-name"
              className="text-sm font-semibold text-zinc-900"
            >
              Full name
            </label>
            <input
              id="full-name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full h-12 px-4 rounded-xl border border-zinc-200/90 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/25 transition-all"
            />
          </div>

          {/* Field 2: Email Address */}
          <div
            className="anime-form-field flex flex-col gap-2"
            style={{ opacity: 0 }}
          >
            <label
              htmlFor="email"
              className="text-sm font-semibold text-zinc-900"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full h-12 px-4 rounded-xl border border-zinc-200/90 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/25 transition-all"
            />
          </div>

          {/* Field 3: Current Status Dropdown */}
          <div
            className="anime-form-field flex flex-col gap-2"
            style={{ opacity: 0 }}
          >
            <label
              htmlFor="status"
              className="text-sm font-semibold text-zinc-900"
            >
              Current status
            </label>
            <div className="relative">
              <select
                id="status"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-zinc-200/90 bg-white text-sm text-zinc-900 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/25 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select your status
                </option>
                <option value="Employed">Employed</option>
                <option value="Open to work">Open to work</option>
                <option value="Student">Student</option>
                <option value="Freelancer">Freelancer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Field 4: Field of Interest Dropdown */}
          <div
            className="anime-form-field flex flex-col gap-2"
            style={{ opacity: 0 }}
          >
            <label
              htmlFor="field"
              className="text-sm font-semibold text-zinc-900"
            >
              Field of interest
            </label>
            <div className="relative">
              <select
                id="field"
                required
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-zinc-200/90 bg-white text-sm text-zinc-900 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/25 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select your field
                </option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button with hover scale */}
          <div
            className="anime-form-field pt-2 flex flex-col items-center gap-3"
            style={{ opacity: 0 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="anime-hover-scale w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-base shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-75"
            >
              <span>{isSubmitting ? "Joining..." : "Join the Waitlist"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Microcopy below button */}
            <p className="text-center text-xs sm:text-sm text-zinc-500 font-medium">
              No spam. We&apos;ll email you the moment your access is ready.
            </p>
          </div>
        </form>
      ) : (
        /* Confirmation State */
        <div
          ref={successRef}
          className="py-6 sm:py-8 flex flex-col items-center text-center gap-4"
        >
          {/* Scale-bounce checkmark badge */}
          <div
            className="anime-success-icon w-16 h-16 rounded-full bg-[#f0b100]/15 flex items-center justify-center text-[#f0b100] ring-4 ring-[#f0b100]/20 shadow-xs"
            style={{ opacity: 0 }}
          >
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <h2
              className="anime-success-title text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950"
              style={{ opacity: 0 }}
            >
              You&apos;re on the list
            </h2>
            <p
              className="anime-success-text text-base text-zinc-600 max-w-sm"
              style={{ opacity: 0 }}
            >
              We&apos;ll be in touch with your access details soon. Early members
              get 3 months of premium free.
            </p>
          </div>

          <div
            className="anime-success-link mt-3 pt-3 border-t border-zinc-100 w-full flex justify-center"
            style={{ opacity: 0 }}
          >
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#f0b100]" />
              <span>Follow us on X for updates</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
