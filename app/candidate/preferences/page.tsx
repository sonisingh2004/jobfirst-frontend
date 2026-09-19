import React from "react";
import { Sliders, Shield, MapPin, DollarSign, Ban } from "lucide-react";

export const metadata = {
  title: "Job Preferences & Filters — Candidate Portal",
};

export default function CandidatePreferencesPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Job Agent Preferences
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Define target job roles, expected compensation, location preferences, and company blacklists.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Target Job Titles</label>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Lead Frontend Engineer", "Staff Software Engineer", "Fullstack Architect"].map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-bold text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Minimum Target CTC</span>
              </span>
              <p className="font-bold text-zinc-900 text-sm">₹28,00,000 / year (₹28 LPA)</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Work Locations</span>
              </span>
              <p className="font-bold text-zinc-900 text-sm">Bengaluru, Remote, Hybrid</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
              <Ban className="w-4 h-4" />
              <span>Company Blacklist (Never Apply)</span>
            </div>
            <p className="text-xs text-zinc-600">
              Our AI agent will strictly never apply or transmit your resume to these employers:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Current Employer Corp", "Consulting Agency XYZ"].map((c, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white border border-rose-200 text-rose-900 font-bold text-xs">
                  ✕ {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
