import React from "react";
import { Building, MapPin, Globe, Users, Shield } from "lucide-react";

export const metadata = {
  title: "Company Profile — Recruiter Portal",
};

export default function RecruiterCompanyPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Company Profile & Organization
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Manage your organization details, branding, and team member permissions.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-4 border-b border-zinc-100 pb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-2xl">
            IT
          </div>
          <div>
            <h2 className="text-lg font-bold text-zinc-950">InnovateTech Labs</h2>
            <p className="text-xs text-zinc-500">Enterprise Hiring Account • Verified Employer</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
            <span className="text-zinc-400 font-semibold">Headquarters</span>
            <p className="font-bold text-zinc-900 text-sm">Bengaluru, Karnataka</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
            <span className="text-zinc-400 font-semibold">Company Size</span>
            <p className="font-bold text-zinc-900 text-sm">250 - 500 Employees</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
            <span className="text-zinc-400 font-semibold">Primary Industry</span>
            <p className="font-bold text-zinc-900 text-sm">Fintech & Cloud Software</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
            <span className="text-zinc-400 font-semibold">Verified Recruiter Seats</span>
            <p className="font-bold text-zinc-900 text-sm">4 Active Seats</p>
          </div>
        </div>
      </div>
    </div>
  );
}
