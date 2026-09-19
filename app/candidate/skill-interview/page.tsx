import React from "react";
import { Video, Award, CheckCircle2, Play, Sparkles, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "One-Time Skill Match Interview — Candidate Portal",
};

export default function SkillInterviewPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          One-Time Online Skill Match Interview
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Complete once to verify your capabilities across 15+ job boards and unlock high-priority recruiter recommendations.
        </p>
      </div>

      {/* Verified Status Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/80 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shrink-0 shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Assessment Verified
              </span>
              <span className="text-xs text-zinc-500">• Valid for 12 Months</span>
            </div>
            <h2 className="text-lg font-bold text-zinc-950 mt-1">
              Overall Skill Score: 9.1 / 10
            </h2>
            <p className="text-xs text-zinc-600 mt-0.5">
              Ranked in Top 5% of Frontend Engineers. Sent automatically to verified recruiters.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-950 font-bold text-xs hover:bg-emerald-100/50 shadow-xs"
        >
          Retake Assessment
        </button>
      </div>

      {/* Skill Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-zinc-500">React & Modern JS</span>
          <p className="text-2xl font-extrabold text-zinc-950">9.5 / 10</p>
          <p className="text-[11px] text-emerald-700 font-bold">Expert Proficiency</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-zinc-500">System Architecture</span>
          <p className="text-2xl font-extrabold text-zinc-950">8.9 / 10</p>
          <p className="text-[11px] text-emerald-700 font-bold">Advanced Mastery</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-zinc-500">Problem Solving & Speed</span>
          <p className="text-2xl font-extrabold text-zinc-950">9.0 / 10</p>
          <p className="text-[11px] text-emerald-700 font-bold">High Precision</p>
        </div>
      </div>

      {/* How It Works Card */}
      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Why Take the One-Time Online Interview?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-700">
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
            <h3 className="font-bold text-zinc-900">3x More Recruiter Callbacks</h3>
            <p className="text-zinc-600 leading-relaxed">
              Employers on jobfirst prioritize pre-tested candidates, skipping preliminary screening rounds.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
            <h3 className="font-bold text-zinc-900">Hyper-Targeted Matching</h3>
            <p className="text-zinc-600 leading-relaxed">
              Our agent uses your actual interview answers to match you only with jobs fitting your exact technical depth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
