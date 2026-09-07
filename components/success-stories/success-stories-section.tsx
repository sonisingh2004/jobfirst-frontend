"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Star } from "lucide-react";

interface Testimonial {
  image: string;
  photoAuthor: string;
  photoUrl: string;
  quote: string;
  authorName: string;
  authorRole: string;
  outcome: string;
}

const testimonials: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    photoAuthor: "Isaiah McClean",
    photoUrl: "https://unsplash.com/@isaiahmcclean",
    quote:
      "“jobfirst is the one place with everything I needed for my job search. I didn't have to jump between ten different websites — every application came with a resume tailored for that exact role. It completely changed how I looked for work.”",
    authorName: "Priya Sharma",
    authorRole: "Senior Data Analyst",
    outcome: "landed at Corebank",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    photoAuthor: "Aiony Haust",
    photoUrl: "https://unsplash.com/@aiony",
    quote:
      "“Within 2 weeks of using jobfirst, I had 4 interviews scheduled. The auto-tailored resumes highlighted exactly what recruiters wanted to see.”",
    authorName: "Rahul Verma",
    authorRole: "Lead Product Designer",
    outcome: "landed at Nova Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    photoAuthor: "Joseph Gonzalez",
    photoUrl: "https://unsplash.com/@joseph",
    quote:
      "“The WhatsApp notifications kept me sane. I could approve applications in seconds during my morning commute.”",
    authorName: "Amitabh Sen",
    authorRole: "Backend Engineer",
    outcome: "landed at Razorpay",
  },
];

export function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  // Trigger animations function
  const runTestimonialAnimation = () => {
    // 1. Quote text fades in with a blur
    if (quoteRef.current) {
      animate(quoteRef.current, {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
        translateY: [18, 0],
        ease: "outCubic",
        duration: 750,
      });
    }

    // 2. Avatar scales in with a soft bounce (easeOutElastic)
    if (avatarRef.current) {
      animate(avatarRef.current, {
        opacity: [0, 1],
        scale: [0.8, 1],
        ease: "outElastic(1, .75)",
        duration: 850,
      });
    }

    // 3. Star ratings fill in one star at a time left to right
    if (starsRef.current) {
      const stars = starsRef.current.querySelectorAll(".anime-star");
      if (stars.length > 0) {
        animate(stars, {
          opacity: [0, 1],
          scale: [0, 1],
          rotate: [-35, 0],
          ease: "outBack(1.8)",
          duration: 450,
          delay: stagger(90, { start: 200 }),
        });
      }
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;

            const title = sectionRef.current?.querySelector(".anime-ss-title");
            if (title) {
              animate(title, {
                opacity: [0, 1],
                translateY: [24, 0],
                ease: "outCubic",
                duration: 750,
              });
            }

            if (cardRef.current) {
              animate(cardRef.current, {
                opacity: [0, 1],
                translateY: [35, 0],
                ease: "outCubic",
                duration: 800,
                delay: 150,
              }).then(() => {
                runTestimonialAnimation();
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

  // Animate on carousel step change if already visible
  useEffect(() => {
    if (hasTriggeredRef.current) {
      runTestimonialAnimation();
    }
  }, [activeIndex]);

  const current = testimonials[activeIndex] || testimonials[0];

  return (
    <section
      id="success-stories"
      ref={sectionRef}
      className="w-full bg-[#FFF8E1] py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Section Heading */}
        <h2
          className="anime-ss-title text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 text-center tracking-tight"
          style={{ opacity: 0 }}
        >
          You dream it. jobfirst makes it happen.
        </h2>

        {/* Testimonial Card */}
        <div
          ref={cardRef}
          className="w-full bg-white rounded-3xl border border-zinc-200/90 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-shadow hover:shadow-2xl"
          style={{ opacity: 0 }}
        >
          {/* Left Column: Portrait Photo (Avatar) */}
          <div className="relative flex flex-col p-4 sm:p-6 md:p-8 bg-zinc-50/50">
            <div
              ref={avatarRef}
              className="relative w-full h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-sm"
              style={{ opacity: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={`Portrait of ${current.authorName}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-500 text-center sm:text-left">
              Photo by{" "}
              <a
                href={current.photoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-800"
              >
                {current.photoAuthor}
              </a>{" "}
              on Unsplash
            </p>
          </div>

          {/* Right Column: Stars, Quote & Details */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 gap-5">
            {/* 5-Star Ratings fill one at a time */}
            <div
              ref={starsRef}
              className="flex items-center gap-1.5"
              aria-label="5 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="anime-star p-1 rounded-md bg-amber-50 text-[#f0b100] border border-amber-200/50 shadow-xs"
                  style={{ opacity: 0 }}
                >
                  <Star className="w-4 h-4 fill-[#f0b100] text-[#f0b100]" />
                </div>
              ))}
            </div>

            {/* Quote with blur fade-in */}
            <p
              ref={quoteRef}
              className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 leading-relaxed"
              style={{ opacity: 0 }}
            >
              {current.quote}
            </p>

            <div className="flex flex-col gap-1 border-t border-zinc-100 pt-5">
              <p className="text-base sm:text-lg font-bold text-zinc-950">
                {current.authorName}
              </p>
              <p className="text-sm text-zinc-600 font-medium">
                {current.authorRole}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-700">
                {current.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div
          className="flex items-center gap-2.5"
          aria-label="Testimonial carousel indicators"
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-[#f0b100]"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
