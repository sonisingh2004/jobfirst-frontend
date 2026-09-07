"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { MessageCircle, CheckCheck } from "lucide-react";

export function WhatsappLoopSection() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            // 1. Text content entrance on scroll
            const textContent = sectionRef.current.querySelector(".anime-loop-text");
            if (textContent) {
              animate(textContent, {
                opacity: [0, 1],
                translateX: [-24, 0],
                ease: "outCubic",
                duration: 800,
                delay: 100,
              });
            }

            // 2. Phone frame entrance + slow continuous float loop
            if (phoneRef.current) {
              animate(phoneRef.current, {
                opacity: [0, 1],
                scale: [0.92, 1],
                translateY: [30, 0],
                ease: "outCubic",
                duration: 850,
                delay: 200,
              }).then(() => {
                if (phoneRef.current) {
                  animate(phoneRef.current, {
                    translateY: [-8, 8],
                    ease: "inOutSine",
                    duration: 3200,
                    loop: true,
                    alternate: true,
                  });
                }
              });
            }

            // 3. Individual chat bubbles appear one at a time with delay, mimicking messages arriving live
            const chatBubbles = sectionRef.current.querySelectorAll(".anime-chat-bubble");
            if (chatBubbles.length > 0) {
              animate(chatBubbles, {
                opacity: [0, 1],
                translateY: [24, 0],
                scale: [0.95, 1],
                ease: "outCubic",
                duration: 600,
                delay: stagger(380, { start: 450 }),
              });
            }

            // 4. Action reply chips appear after messages
            const actionChips = sectionRef.current.querySelectorAll(".anime-chat-chip");
            if (actionChips.length > 0) {
              animate(actionChips, {
                opacity: [0, 1],
                scale: [0.85, 1],
                ease: "outBack(1.4)",
                duration: 500,
                delay: stagger(100, { start: 1650 }),
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
      ref={sectionRef}
      className="w-full bg-[#1A1A1A] text-white py-16 md:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <div
          className="anime-loop-text max-w-xl flex flex-col gap-6 text-left"
          style={{ opacity: 0 }}
        >
          {/* WhatsApp Badge */}
          <div className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-100">
            <div className="p-1.5 rounded-full bg-[#f0b100]/20 text-[#f0b100]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span>Your job agent, accessible on WhatsApp</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            You&apos;re always in the{" "}
            <span className="text-[#f0b100]">loop.</span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-lg">
            Get timely updates, interview reminders, and new opportunities
            wherever you are, without ever having to refresh a job board.
          </p>
        </div>

        {/* Right Phone Mockup with Floating Animation & Staggered Chat */}
        <div className="relative flex justify-center items-center py-4">
          <div
            ref={phoneRef}
            className="w-[280px] sm:w-[310px] min-h-[460px] bg-[#111111] rounded-[2.5rem] border-8 border-zinc-700/80 shadow-2xl p-4 flex flex-col justify-between relative overflow-hidden"
            style={{ opacity: 0 }}
          >
            {/* Top Notch Speaker */}
            <div className="w-20 h-4 bg-zinc-800 rounded-full mx-auto mb-3 shrink-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full"></div>
            </div>

            {/* Chat Area & WhatsApp Message Bubbles arriving live */}
            <div className="mt-auto w-full flex flex-col gap-2.5 pb-2">
              {/* Message 1 */}
              <div
                className="anime-chat-bubble bg-white text-zinc-900 rounded-2xl rounded-bl-xs p-3.5 shadow-md text-xs sm:text-sm leading-snug"
                style={{ opacity: 0 }}
              >
                <p className="font-semibold text-zinc-900">
                  🎯 Found 3 perfect matches today!
                </p>
                <p className="text-zinc-600 text-xs mt-1">
                  Senior Frontend role at Zepto (₹35–55 LPA). 96% match with your profile.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-400 font-medium mt-1.5">
                  <span>11:02 AM</span>
                  <CheckCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>

              {/* Message 2 */}
              <div
                className="anime-chat-bubble bg-[#DCF8C6] text-zinc-900 rounded-2xl rounded-br-xs p-3 shadow-md text-xs sm:text-sm leading-snug ml-6"
                style={{ opacity: 0 }}
              >
                <p className="font-medium text-zinc-800 text-xs">
                  Yes, tailor resume and apply please!
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-500 font-medium mt-1">
                  <span>11:03 AM</span>
                  <CheckCheck className="w-3 h-3 text-blue-600" />
                </div>
              </div>

              {/* Message 3 */}
              <div
                className="anime-chat-bubble bg-white text-zinc-900 rounded-2xl rounded-bl-xs p-3.5 shadow-md text-xs sm:text-sm leading-snug"
                style={{ opacity: 0 }}
              >
                <p className="font-semibold text-amber-950 flex items-center gap-1.5">
                  <span>✨ Applied successfully!</span>
                </p>
                <p className="text-zinc-600 text-xs mt-0.5">
                  Tailored resume highlighting React & GraphQL sent.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-400 font-medium mt-1">
                  <span>11:03 AM</span>
                  <CheckCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>

              {/* Action reply chips */}
              <div className="flex gap-2 pt-1">
                <span
                  className="anime-chat-chip px-3 py-1 rounded-full bg-[#f0b100] text-amber-950 text-xs font-bold shadow-xs cursor-pointer hover:bg-[#e5a800] transition-colors"
                  style={{ opacity: 0 }}
                >
                  View status
                </span>
                <span
                  className="anime-chat-chip px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-xs font-medium cursor-pointer hover:bg-zinc-700 transition-colors"
                  style={{ opacity: 0 }}
                >
                  Adjust criteria
                </span>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-28 h-1 bg-zinc-700 rounded-full mx-auto mt-2 shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
