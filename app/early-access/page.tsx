import { EarlyAccessNav } from "@/components/early-access/early-access-nav";
import { EarlyAccessHeader } from "@/components/early-access/early-access-header";
import { EarlyAccessCard } from "@/components/early-access/early-access-card";
import { EarlyAccessTrust } from "@/components/early-access/early-access-trust";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Early Access — jobfirst",
  description:
    "Join the waitlist and get priority access before we open jobfirst to everyone. Early members get 3 months of premium free.",
};

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFCF5] text-zinc-900 selection:bg-amber-300 selection:text-amber-950 font-sans flex flex-col justify-between">
      {/* 1. Top Floating Nav */}
      <header className="px-4 sm:px-6 pt-4 sticky top-0 z-50">
        <EarlyAccessNav />
      </header>

      {/* 2. Main Centered Single-Column Viewport (Max-width ~640px) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-[640px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
          {/* Badge, Headline, Subheading */}
          <EarlyAccessHeader />

          {/* Form Card (Interactive Waitlist Form & Confirmation State) */}
          <EarlyAccessCard />

          {/* Social Proof Trust Line & Copyright Footer */}
          <EarlyAccessTrust />
        </div>
      </main>

      {/*
        Anime.js Motion Sequence Overview:
        ----------------------------------
        1. Badge: Fades up and slides into view first (delay ~50ms, ease: outCubic).
        2. Headline: Split-word stagger entrance with a blur-to-sharp effect (filter blur: 8px -> 0px, translateY: 24px -> 0px, stagger: 70ms starting at 180ms).
        3. Subheading: Smooth fade and blur clearance following the headline (delay ~520ms).
        4. Form Card: Slides up and fades into view with subtle delay (duration: 800ms, delay: 350ms).
        5. Form Fields: Stagger entrance top-to-bottom with 60ms increments (stagger: 60ms starting at 500ms).
        6. CTA Button: anime-hover-scale interaction on hover and active click feedback.
        7. Submission Transition: Cross-fades current form out (-12px translateY, duration: 300ms) and invokes an Anime.js timeline for confirmation:
           - Checkmark badge scale-bounce (scale: [0.2, 1.15, 1], ease: outBack(1.8))
           - "You're on the list" headline and subtext stagger-fade up
           - Secondary link ("Follow us on X") reveals seamlessly.
      */}
    </div>
  );
}
