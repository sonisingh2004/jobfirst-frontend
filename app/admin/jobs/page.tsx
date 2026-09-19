import React from "react";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { Briefcase, RefreshCw, CheckCircle2, Globe } from "lucide-react";

export const metadata = {
  title: "Job Feeds & Aggregation — Admin Portal",
};

const jobFeeds = [
  { name: "LinkedIn Jobs India", type: "Web & API Hook", activeListings: "184,200", lastSync: "2 mins ago", status: "Active" },
  { name: "Naukri Direct Recruiter Feed", type: "Enterprise API", activeListings: "320,100", lastSync: "Just now", status: "Active" },
  { name: "Greenhouse / Lever Career Pages", type: "ATS Scraper", activeListings: "94,300", lastSync: "7 mins ago", status: "Active" },
  { name: "Foundit Tech Feeds", type: "RSS / Feed", activeListings: "72,800", lastSync: "12 mins ago", status: "Active" },
  { name: "Wellfound (AngelList) Startups", type: "Direct Crawler", activeListings: "28,400", lastSync: "15 mins ago", status: "Active" },
];

export default function AdminJobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Job Ingestion & Crawler Hub
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Aggregated real-time career opportunities across 15+ partner platforms.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0b100] text-amber-950 font-bold text-xs shadow-xs hover:bg-[#e5a800]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Trigger Full Index</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-zinc-200">
          <span className="text-xs font-semibold uppercase text-zinc-500">Total Indexed Openings</span>
          <h3 className="text-3xl font-extrabold text-zinc-950 mt-1">699,800</h3>
          <p className="text-xs text-emerald-700 font-bold mt-1">+12,400 new today</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-zinc-200">
          <span className="text-xs font-semibold uppercase text-zinc-500">Average Match Latency</span>
          <h3 className="text-3xl font-extrabold text-zinc-950 mt-1">1.4s</h3>
          <p className="text-xs text-zinc-500 mt-1">AI JD embedding speed</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-zinc-200">
          <span className="text-xs font-semibold uppercase text-zinc-500">Board Coverage</span>
          <h3 className="text-3xl font-extrabold text-zinc-950 mt-1">15 / 15</h3>
          <p className="text-xs text-emerald-700 font-bold mt-1">All pipelines operational</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-lg font-bold text-zinc-950">Active Connected Feeds</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                <th className="pb-3">Feed Name</th>
                <th className="pb-3">Integration Type</th>
                <th className="pb-3">Active Listings</th>
                <th className="pb-3">Last Sync</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {jobFeeds.map((feed, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-3.5 font-bold text-zinc-900">{feed.name}</td>
                  <td className="py-3.5 text-xs text-zinc-600">{feed.type}</td>
                  <td className="py-3.5 text-sm font-semibold tabular-nums text-zinc-900">{feed.activeListings}</td>
                  <td className="py-3.5 text-xs text-zinc-500">{feed.lastSync}</td>
                  <td className="py-3.5">
                    <PortalBadge status={feed.status} />
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
