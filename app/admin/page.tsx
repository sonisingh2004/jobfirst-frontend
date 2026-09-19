import React from "react";
import { PortalStatCard } from "@/components/portal-shared/portal-stat-card";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { RecruiterVerificationManager } from "@/components/admin/recruiter-verification-manager";
import {
  Users,
  Building2,
  UserCheck,
  UserX,
  CreditCard,
  Send,
  Server,
  RefreshCw,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Admin Overview — jobfirst",
};

const boardFeedStatus = [
  { board: "LinkedIn India", syncInterval: "5 mins", jobsIngested: "142,300", status: "Active", health: "100%" },
  { board: "Naukri.com", syncInterval: "3 mins", jobsIngested: "218,450", status: "Active", health: "99.8%" },
  { board: "Foundit (Monster)", syncInterval: "10 mins", jobsIngested: "68,120", status: "Active", health: "99.5%" },
  { board: "Greenhouse API", syncInterval: "Realtime", jobsIngested: "45,900", status: "Active", health: "100%" },
  { board: "Lever ATS", syncInterval: "Realtime", jobsIngested: "38,200", status: "Active", health: "100%" },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Platform Operations Center
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Real-time candidate metrics, recruiter account verifications, and hiring conversion stats.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-zinc-50 shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync Feeds</span>
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Primary Metrics: Candidates, Recruiters, Selected & Rejected */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1. Total Candidates */}
        <PortalStatCard
          metric={{
            label: "Total Candidates",
            value: "1,248,320",
            change: "+14.2%",
            isPositive: true,
            subtext: "Across India & Remote",
          }}
          icon={<Users className="w-5 h-5 text-amber-800" />}
        />

        {/* 2. Total Recruiters */}
        <PortalStatCard
          metric={{
            label: "Total Recruiters",
            value: "4,850",
            change: "+24 this week",
            isPositive: true,
            subtext: "4,620 Verified • 8 Pending Review",
          }}
          icon={<Building2 className="w-5 h-5 text-amber-800" />}
        />

        {/* 3. Total Selected Candidates */}
        <PortalStatCard
          metric={{
            label: "Total Selected Candidates",
            value: "38,420",
            change: "+18.4%",
            isPositive: true,
            subtext: "Hired / Offers Accepted",
          }}
          icon={<UserCheck className="w-5 h-5 text-emerald-800" />}
        />

        {/* 4. Total Rejected Candidates */}
        <PortalStatCard
          metric={{
            label: "Total Rejected Candidates",
            value: "92,150",
            change: "-3.1%",
            isPositive: false,
            subtext: "Screened / Closed Applications",
          }}
          icon={<UserX className="w-5 h-5 text-rose-800" />}
        />
      </div>

      {/* Secondary Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-between shadow-xs">
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-zinc-500">Pro Subscriptions (₹999/mo)</span>
            <p className="text-xl font-black text-zinc-950">18,450 Users</p>
          </div>
          <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-xl">
            ₹1.84 Cr MRR
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-between shadow-xs">
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-zinc-500">Candidate Selection Ratio</span>
            <p className="text-xl font-black text-emerald-700">29.4%</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xl">
            38.4k Selected / 130.5k Interviewed
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-between shadow-xs">
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-zinc-500">Recruiter Verification SLA</span>
            <p className="text-xl font-black text-zinc-950">4.2 Hours</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xl">
            Target &lt; 6 hrs
          </span>
        </div>
      </div>

      {/* MOST IMPORTANT FEATURE: Recruiter Account Verification Queue */}
      <section className="space-y-3">
        <RecruiterVerificationManager />
      </section>

      {/* Hiring & Application Conversion Funnel Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidate Hiring Funnel */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Candidate Selection & Rejection Funnel</span>
            </h2>
            <span className="text-xs font-bold text-zinc-500">Last 30 Days</span>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-700">1. Applications Dispatched</span>
                <span className="font-bold text-zinc-950">512,890 (100%)</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-700">2. Shortlisted by Recruiters</span>
                <span className="font-bold text-zinc-950">130,570 (25.4%)</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "25.4%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-emerald-700 font-bold">3. Selected & Hired</span>
                <span className="font-extrabold text-emerald-700">38,420 (7.5% of total)</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "29.4%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-rose-700 font-bold">4. Rejected (Screened Out)</span>
                <span className="font-bold text-rose-700">92,150 (70.6% of interviewees)</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-rose-400 rounded-full" style={{ width: "70.6%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Job Board Crawler Engines */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                <Server className="w-4 h-4 text-amber-600" />
                <span>Job Feed Ingestion Engines</span>
              </h2>
              <p className="text-xs text-zinc-500 mt-0.5">
                Live crawler status across major recruitment boards
              </p>
            </div>
            <span className="text-xs font-semibold text-zinc-500">15 Connected</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-100 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                  <th className="pb-2">Board</th>
                  <th className="pb-2">Sync</th>
                  <th className="pb-2">Indexed</th>
                  <th className="pb-2">Health</th>
                  <th className="pb-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {boardFeedStatus.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60">
                    <td className="py-2.5 font-bold text-zinc-900">{item.board}</td>
                    <td className="py-2.5 text-zinc-500">{item.syncInterval}</td>
                    <td className="py-2.5 font-semibold text-zinc-900 tabular-nums">{item.jobsIngested}</td>
                    <td className="py-2.5 text-emerald-700 font-bold">{item.health}</td>
                    <td className="py-2.5 text-right">
                      <PortalBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
