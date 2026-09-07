import { LoginNav } from "@/components/login/login-nav";
import { LoginWelcome } from "@/components/login/login-welcome";
import { LoginCard } from "@/components/login/login-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In — jobfirst",
  description: "Log in to jobfirst to track your automated applications, job matches, and recruiter messages.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFCF5] text-zinc-900 selection:bg-amber-300 selection:text-amber-950 font-sans flex flex-col justify-between">
      {/* Top Floating Nav */}
      <header className="px-4 sm:px-6 pt-4 sticky top-0 z-50">
        <LoginNav />
      </header>

      {/* Main Two-Column Centered Viewport */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 py-10 md:py-16">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-center gap-12 lg:gap-16">
          {/* Left Column: Welcome Information */}
          <LoginWelcome />

          {/* Right Column: Login Card */}
          <div className="flex justify-center lg:justify-end">
            <LoginCard />
          </div>
        </div>
      </main>

      {/* Subtle bottom spacing */}
      <div className="h-6" />
    </div>
  );
}
