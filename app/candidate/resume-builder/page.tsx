import React from "react";
import { FileText, Sparkles, CheckCircle2, Download, RefreshCw, Award } from "lucide-react";

export const metadata = {
  title: "ATS Resume Maker — Candidate Portal",
};

export default function ResumeBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            AI-Powered ATS Resume Maker
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Machine-readable, ATS-compliant formats tailored automatically for every job posting.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white font-bold text-xs shadow-xs hover:bg-zinc-800"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Master Resume</span>
          </button>
        </div>
      </div>

      {/* ATS Score & Optimization Banner */}
      <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#f0b100] text-amber-950 flex flex-col items-center justify-center font-black shrink-0 shadow-xs">
            <span className="text-xl">94%</span>
            <span className="text-[9px] uppercase tracking-wider">ATS</span>
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
              <span>Excellent ATS Compatibility</span>
              <Award className="w-4 h-4 text-amber-700" />
            </h2>
            <p className="text-xs text-zinc-600 mt-0.5">
              Clean typography, single-column machine parsing, keyword-matched work history.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-amber-950 font-bold text-xs hover:bg-amber-100/50"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Re-score with AI</span>
        </button>
      </div>

      {/* Resume Preview & Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Master Resume Document */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="border-b border-zinc-100 pb-4">
            <h2 className="text-2xl font-bold text-zinc-950">Aarav Sharma</h2>
            <p className="text-xs text-zinc-500 mt-1">
              Bengaluru, India • aarav.sharma@gmail.com • +91 98765 43210 • linkedin.com/in/aarav
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs text-zinc-700 leading-relaxed">
              Senior Frontend & Fullstack Software Engineer with 5+ years of experience building high-performance web applications using React, Next.js, Node.js, and cloud systems. Proven track record optimizing web vitals and leading scalable design systems.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-1">
              Core Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {["TypeScript", "Next.js", "React", "Node.js", "GraphQL", "Tailwind CSS", "PostgreSQL", "Docker", "AWS", "CI/CD"].map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-1">
              Work Experience
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-zinc-900">
                  <span>Lead Frontend Engineer — CloudTech Solutions</span>
                  <span className="text-zinc-500">2022 - Present</span>
                </div>
                <ul className="list-disc pl-4 text-zinc-600 space-y-1 mt-1">
                  <li>Architected customer-facing web dashboard handling 2M+ monthly active requests.</li>
                  <li>Improved Core Web Vitals (LCP) from 3.8s to 1.1s, boosting user conversion by 22%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: ATS Rules & Auto-Tailor Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>ATS Friendly Rules</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero complex multi-column tables (prevents ATS parsing jams).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Industry-standard chronological header format.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Job description keyword auto-injection on every application.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Vector PDF output compatible with Lever, Greenhouse & Workday.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
