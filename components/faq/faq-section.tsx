"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Does this actually work?",
    answer:
      "1M+ professionals use jobfirst. Over 500K applications have been processed by the jobfirst agent across Naukri, LinkedIn, Foundit, Greenhouse, Lever and 15 other platforms — every move still approved by you.",
  },
  {
    id: "faq2",
    question: "Will a recruiter be able to tell an AI applied?",
    answer:
      "Not at all. Every resume is customized specifically for the target job description using professional industry formatting. Applications are submitted naturally with proper candidate credentials.",
  },
  {
    id: "faq3",
    question: "Is my data safe?",
    answer:
      "Yes. We use bank-grade 256-bit encryption. Your personal information, career history, and credentials are never sold or shared with unauthorized third parties.",
  },
  {
    id: "faq4",
    question: "Will I be in control of everything?",
    answer:
      "Absolutely. You can review and approve applications before submission, set strict blacklist filters for specific companies, and pause or resume your agent anytime via dashboard or WhatsApp.",
  },
  {
    id: "faq5",
    question: "How do I track my applications?",
    answer:
      "You get a real-time live dashboard plus instant WhatsApp and email notifications for submitted applications, recruiter replies, and interview invitations.",
  },
  {
    id: "faq6",
    question: "What does it cost, and how do I start?",
    answer:
      "Your first 20 applications are 100% free with no credit card required. Afterwards, it is just ₹999/month, and you can cancel anytime with a single click.",
  },
];

function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (isOpen && contentRef.current) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.opacity = "1";
      }
      return;
    }

    const duration = 360;
    const ease = "outCubic";

    if (contentRef.current && iconRef.current) {
      if (isOpen) {
        const fullHeight = contentRef.current.scrollHeight;
        // Answer panel expands with a height auto-tween (maxHeight) and chevron rotates 180 degrees in sync
        animate(contentRef.current, {
          maxHeight: [`0px`, `${fullHeight}px`],
          opacity: [0, 1],
          ease,
          duration,
        });

        animate(iconRef.current, {
          rotate: [0, 180],
          ease,
          duration,
        });
      } else {
        const currentHeight = contentRef.current.scrollHeight;
        animate(contentRef.current, {
          maxHeight: [`${currentHeight}px`, `0px`],
          opacity: [1, 0],
          ease,
          duration,
        });

        animate(iconRef.current, {
          rotate: [180, 0],
          ease,
          duration,
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="anime-faq-card w-full bg-white rounded-2xl border border-zinc-200/90 shadow-sm transition-shadow hover:shadow-md overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-zinc-50/60 transition-colors select-none"
      >
        <span className="text-base sm:text-lg font-bold text-zinc-900">
          {faq.question}
        </span>
        <span
          ref={iconRef}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors will-change-transform ${
            isOpen
              ? "bg-[#f0b100] text-amber-950 shadow-xs"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-none"
        style={{
          maxHeight: isOpen ? "none" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3.5">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    faq1: true,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            // Header animation
            const header = sectionRef.current.querySelector(".anime-faq-header");
            if (header) {
              animate(header, {
                opacity: [0, 1],
                translateY: [24, 0],
                ease: "outCubic",
                duration: 750,
              });
            }

            // Cards stagger in
            const cards = sectionRef.current.querySelectorAll(".anime-faq-card");
            if (cards.length > 0) {
              animate(cards, {
                opacity: [0, 1],
                translateY: [25, 0],
                ease: "outCubic",
                duration: 650,
                delay: stagger(70, { start: 200 }),
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="w-full bg-[#FFF8E1] py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="anime-faq-header text-center flex flex-col items-center gap-3" style={{ opacity: 0 }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Questions you should be asking.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Handing off your job search is a big ask. Here&apos;s exactly how
            jobfirst keeps you safe, visible, and in control.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={!!openIds[faq.id]}
              onToggle={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
