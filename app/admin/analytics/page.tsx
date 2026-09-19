import React from "react";
import { PortalStatCard } from "@/components/portal-shared/portal-stat-card";
import { TrendingUp, Award, Clock, DollarSign } from "lucide-react";

export const metadata = {
  title: "Platform Analytics & Revenue — Admin Portal",
};

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Analytics, ATS Conversion & Revenue
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Deep metrics on application-to-interview ratios, ATS scoring, and subscription health.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <PortalStatCard
          metric={{
            label: "Monthly Recurring Revenue",
            value: "₹1,84,31,550",
            change: "+19.4%",
            isPositive: true,
            subtext: "18,450 active Pro users",
          }}
          icon={<DollarSign className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Average ATS Score",
            value: "88.4%",
            change: "+3.2%",
            isPositive: true,
            subtext: "Across tailored resumes",
          }}
          icon={<Award className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Interview Callback Rate",
            value: "14.8%",
            change: "+4.1%",
            isPositive: true,
            subtext: "Industry avg is 2-3%",
          }}
          icon={<TrendingUp className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Avg Days to First Interview",
            value: "11 Days",
            change: "-2 Days",
            isPositive: true,
            subtext: "From candidate signup",
          }}
          icon={<Clock className="w-5 h-5 text-amber-800" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-base font-bold text-zinc-950">Application Volume by Channel</h2>
          <div className="space-y-3">
            {[
              { board: "LinkedIn India", pct: 42, count: "215,400 apps" },
              { board: "Naukri.com", pct: 36, count: "184,600 apps" },
              { board: "Direct ATS (Greenhouse/Lever)", pct: 14, count: "71,800 apps" },
              { board: "Foundit / Monster", pct: 8, count: "41,090 apps" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-zinc-800">{item.board}</span>
                  <span className="text-zinc-500">{item.count} ({item.pct}%)</span>
                </div>
                <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f0b100] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-base font-bold text-zinc-950">Subscription Cohort Health</h2>
          <div className="space-y-3">
            {[
              { label: "Trial to ₹999/mo Conversion", rate: "24.6%", desc: "Users upgrading after 20 free apps" },
              { label: "Monthly Churn Rate", rate: "4.2%", desc: "Mostly candidates who got hired!" },
              { label: "Net Revenue Retention", rate: "108%", desc: "Strong recurring subscriber expansion" },
              { label: "Referral Viral Factor", rate: "1.42", desc: "Every member invites 1.4 peers" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <div>
                  <p className="text-xs font-bold text-zinc-900">{item.label}</p>
                  <p className="text-[11px] text-zinc-500">{item.desc}</p>
                </div>
                <span className="text-sm font-extrabold text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-lg">
                  {item.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
