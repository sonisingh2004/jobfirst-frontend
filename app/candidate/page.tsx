import React from "react";
import Link from "next/link";
import { PortalStatCard } from "@/components/portal-shared/portal-stat-card";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import {
  Send,
  FileCheck,
  Video,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Candidate Dashboard — jobfirst",
};

const recentApplications = [
  { company: "Razorpay", role: "Senior Frontend Engineer", platform: "LinkedIn", date: "Today", status: "Interview", atsScore: 94 },
  { company: "Swiggy", role: "UI Systems Engineer", platform: "Naukri", date: "Yesterday", status: "Applied", atsScore: 91 },
  { company: "Cred", role: "Product Specialist", platform: "Greenhouse", date: "2 days ago", status: "Tailored", atsScore: 88 },
  { company: "PhonePe", role: "Frontend Platform Engineer", platform: "Foundit", date: "3 days ago", status: "Applied", atsScore: 89 },
];

export default function CandidatePage() {
  return (
    <div className="space-y-8">
      {/* Top Banner: AI Agent Live Status */}
      <div className="p-6 rounded-3xl bg-linear-to-r from-amber-500/15 via-amber-400/10 to-transparent border border-amber-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#f0b100] text-amber-950 flex items-center justify-center font-bold shrink-0 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="font-bold text-sm sm:text-base text-zinc-950">
                Your AI Job Agent is Active
              </h2>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-950">
                Pro ₹999/mo Plan
              </span>
            </div>
            <p className="text-xs text-zinc-600 mt-0.5">
              Continuously matching across 15+ job boards. 4 new matching roles found today.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3.5 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-zinc-50 shadow-xs"
          >
            Pause Agent
          </button>
          <Link
            href="/candidate/applications"
            className="px-4 py-2 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs"
          >
            Review Matches
          </Link>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <PortalStatCard
          metric={{
            label: "Total Applications",
            value: "24",
            change: "+8 this week",
            isPositive: true,
            subtext: "Auto-submitted by agent",
          }}
          icon={<Send className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Average ATS Score",
            value: "92%",
            change: "+6% optimized",
            isPositive: true,
            subtext: "ATS friendly formatting",
          }}
          icon={<Award className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Skill Match Interview",
            value: "Completed",
            subtext: "Score: 9.1/10 (Verified)",
          }}
          icon={<Video className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Interview Calls",
            value: "2 Scheduled",
            change: "Razorpay & Swiggy",
            isPositive: true,
            subtext: "Recruiter callbacks",
          }}
          icon={<MessageCircle className="w-5 h-5 text-amber-800" />}
        />
      </div>

      {/* Live Applications Feed */}
      <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-zinc-950">Recent Applications</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Live status across Naukri, LinkedIn, Greenhouse, and Lever.
            </p>
          </div>
          <Link
            href="/candidate/applications"
            className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
          >
            <span>View All (24)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                <th className="pb-3">Company & Role</th>
                <th className="pb-3">Platform</th>
                <th className="pb-3">ATS Score</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Applied</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {recentApplications.map((app, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-3.5">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900">{app.company}</span>
                      <span className="text-xs text-zinc-500">{app.role}</span>
                    </div>
                  </td>
                  <td className="py-3.5 text-xs text-zinc-600 font-medium">{app.platform}</td>
                  <td className="py-3.5">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                      {app.atsScore}%
                    </span>
                  </td>
                  <td className="py-3.5">
                    <PortalBadge status={app.status} />
                  </td>
                  <td className="py-3.5 text-right text-xs text-zinc-500 tabular-nums">
                    {app.date}
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
