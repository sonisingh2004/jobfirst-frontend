import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustMarquee } from "@/components/trust-marquee";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { WhatsappLoopSection } from "@/components/whatsapp-loop-section";
import { SuccessStoriesSection } from "@/components/success-stories/success-stories-section";
import { PricingSection } from "@/components/pricing/pricing-section";
import { FaqSection } from "@/components/faq/faq-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Full-Screen Preloader Animation */}
      <Preloader />

      <div className="min-h-screen w-full bg-[#FFF8E1] text-zinc-900 selection:bg-amber-300 selection:text-amber-950 font-sans flex flex-col">
        {/* Top Floating Nav */}
        <header className="px-4 sm:px-6 pt-4 sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main Page Sections */}
        <main className="flex-1 flex flex-col">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Trust Marquee */}
          <TrustMarquee />

          {/* 3. How It Works Section */}
          <HowItWorksSection />

          {/* 3. WhatsApp Notification Loop (Dark) */}
          <WhatsappLoopSection />

          {/* 4. Success Stories / Testimonial */}
          <SuccessStoriesSection />

          {/* 5. Pricing Section */}
          <PricingSection />

          {/* 6. FAQ Section */}
          <FaqSection />

          {/* 7. Final Closing CTA Banner (Dark) */}
          <CtaBanner />
        </main>

        {/* 8. Footer */}
        <Footer />
      </div>
    </>
  );
}
