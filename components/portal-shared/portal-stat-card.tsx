import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { PortalMetric } from "@/types/portal";

interface PortalStatCardProps {
  metric: PortalMetric;
  icon?: React.ReactNode;
}

export function PortalStatCard({ metric, icon }: PortalStatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200/80 p-5 shadow-xs flex flex-col justify-between gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {metric.label}
        </span>
        {icon && (
          <div className="p-2 rounded-xl bg-amber-50 text-amber-900">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tabular-nums">
          {metric.value}
        </h3>
        {metric.change && (
          <div
            className={`inline-flex items-center gap-0.5 text-xs font-bold ${
              metric.isPositive !== false
                ? "text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full"
                : "text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full"
            }`}
          >
            {metric.isPositive !== false ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5" />
            )}
            <span>{metric.change}</span>
          </div>
        )}
      </div>

      {metric.subtext && (
        <p className="text-xs text-zinc-500 mt-0.5">{metric.subtext}</p>
      )}
    </div>
  );
}
