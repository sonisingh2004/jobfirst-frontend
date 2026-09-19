"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LoginCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      animate(cardRef.current, {
        opacity: [0, 1],
        translateX: [30, 0],
        ease: "outCubic",
        duration: 850,
        delay: 250,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login submit action
  };

  return (
    <div
      ref={cardRef}
      className="w-full max-w-md bg-white rounded-2xl border border-zinc-200/90 shadow-[0_18px_45px_-18px_rgba(240,177,0,0.55)] p-6 sm:p-8 flex flex-col gap-6 text-left"
      style={{ opacity: 0 }}
    >
      {/* 1. Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
          Log in
        </h2>
        <p className="text-sm text-zinc-500 font-medium">
          Welcome back — enter your details
        </p>
      </div>

      {/* 2. Continue with Google */}
      <button
        type="button"
        className="w-full h-11 flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-sm font-semibold text-zinc-800 shadow-2xs transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24Z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      {/* 3. Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-zinc-200" />
        <span className="text-xs text-zinc-400 font-medium whitespace-nowrap">
          or continue with email
        </span>
        <div className="flex-1 h-px bg-zinc-200" />
      </div>

      {/* 4. Form Fields */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs sm:text-sm font-semibold text-zinc-900"
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
            className="w-full h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/20 transition-all"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs sm:text-sm font-semibold text-zinc-900"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#f0b100] focus:ring-2 focus:ring-[#f0b100]/20 transition-all"
          />
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-zinc-300 text-amber-500 focus:ring-amber-400 accent-[#f0b100]"
            />
            <span className="text-xs sm:text-sm text-zinc-600">Remember me</span>
          </label>

          <Link
            href="#forgot-password"
            className="text-xs sm:text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-11 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>Log in</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* 5. Footer link */}
      <p className="text-center text-xs sm:text-sm text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/early-access"
          className="font-bold text-amber-600 hover:text-amber-700 transition-colors"
        >
          Sign up free
        </Link>
      </p>

      {/* 6. Quick Portal Access for Demo */}
      <div className="border-t border-zinc-100 pt-4 flex flex-col gap-2">
        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider text-center">
          Instant Portal Preview
        </span>
        <div className="grid grid-cols-3 gap-2">
          <Link
            href="/candidate"
            className="py-2 px-1 text-center rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-bold border border-emerald-200 transition-colors"
          >
            Candidate
          </Link>
          <Link
            href="/recruiter"
            className="py-2 px-1 text-center rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-950 text-xs font-bold border border-blue-200 transition-colors"
          >
            Recruiter
          </Link>
          <Link
            href="/admin"
            className="py-2 px-1 text-center rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-bold border border-amber-200 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
