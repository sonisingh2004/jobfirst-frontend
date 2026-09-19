import React from "react";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { Search, Filter, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "My Applications — Candidate Portal",
};

const allApplications = [
  { id: "app-1", company: "Razorpay", role: "Senior Frontend Engineer", platform: "LinkedIn India", atsScore: 94, status: "interview", appliedDate: "Sep 15, 2026", location: "Bengaluru", salary: "₹30-40 LPA" },
  { id: "app-2", company: "Swiggy", role: "UI Systems Engineer", platform: "Naukri", atsScore: 91, status: "applied", appliedDate: "Sep 14, 2026", location: "Bengaluru (Hybrid)", salary: "₹28-36 LPA" },
  { id: "app-3", company: "Cred", role: "Product Specialist", platform: "Greenhouse", atsScore: 88, status: "tailored", appliedDate: "Sep 13, 2026", location: "Bengaluru", salary: "₹32-45 LPA" },
  { id: "app-4", company: "PhonePe", role: "Frontend Platform Engineer", platform: "Foundit", atsScore: 89, status: "applied", appliedDate: "Sep 12, 2026", location: "Pune", salary: "₹26-34 LPA" },
  { id: "app-5", company: "Zepto", role: "Staff Web Developer", platform: "Lever", atsScore: 92, status: "applied", appliedDate: "Sep 11, 2026", location: "Mumbai", salary: "₹35-50 LPA" },
  { id: "app-6", company: "Groww", role: "Senior Software Engineer", platform: "LinkedIn India", atsScore: 95, status: "interview", appliedDate: "Sep 10, 2026", location: "Bengaluru", salary: "₹32-42 LPA" },
];

export default function CandidateApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Live Application Tracker
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Every submission filed across 15+ boards with custom tailored ATS resumes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-amber-950 bg-[#f0b100] px-3 py-1.5 rounded-xl shadow-xs">
            24 Total Applications Filed
          </span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by company or role..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Status: All</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                <th className="pb-3">Company & Role</th>
                <th className="pb-3">Platform</th>
                <th className="pb-3">Location & Comp</th>
                <th className="pb-3">ATS Score</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Applied</th>
                <th className="pb-3 text-right">Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {allApplications.map((app) => (
                <tr key={app.id} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900">{app.company}</span>
                      <span className="text-xs text-zinc-500 font-medium">{app.role}</span>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-medium text-zinc-600">{app.platform}</td>
                  <td className="py-4 text-xs text-zinc-500">
                    <p className="font-medium text-zinc-700">{app.location}</p>
                    <p className="text-[11px] text-zinc-400">{app.salary}</p>
                  </td>
                  <td className="py-4">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-950 border border-emerald-200">
                      {app.atsScore}%
                    </span>
                  </td>
                  <td className="py-4">
                    <PortalBadge status={app.status} />
                  </td>
                  <td className="py-4 text-xs text-zinc-500 tabular-nums">{app.appliedDate}</td>
                  <td className="py-4 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 underline"
                    >
                      <span>Tailored PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
