import React from "react";

export interface RoleCardData {
  company: string;
  timeAgo: string;
  matchScore: string;
  matchLabel: string;
  role: string;
  tags: string[];
  description: string;
  skills: string[];
  isCenter?: boolean;
  rotation?: "left" | "center" | "right";
  dealRotateFrom?: number;
  dealRotateTo?: number;
}

interface RoleCardProps {
  data: RoleCardData;
}

export function RoleCard({ data }: RoleCardProps) {
  const rotationClasses = {
    left: "lg:-rotate-2 lg:hover:rotate-0 hover:z-20 lg:opacity-90 hover:opacity-100",
    center: "lg:scale-105 z-10 shadow-2xl ring-1 ring-zinc-900/5",
    right: "lg:rotate-2 lg:hover:rotate-0 hover:z-20 lg:opacity-90 hover:opacity-100",
  }[data.rotation || "center"];

  return (
    <article
      data-rotate-from={data.dealRotateFrom ?? 0}
      data-rotate-to={data.dealRotateTo ?? 0}
      className={`how-it-works-card w-full max-w-sm sm:max-w-md lg:max-w-[340px] xl:max-w-[360px] bg-white rounded-2xl border border-zinc-200 p-5 md:p-6 flex flex-col gap-4 shadow-lg transition-all duration-300 ease-out will-change-transform ${rotationClasses}`}
      style={{ opacity: 0 }}
    >
      {/* Top Company & Match Score Box */}
      <div className="bg-amber-500/10 rounded-xl p-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-bold text-zinc-900">{data.company}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{data.timeAgo}</p>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-none">
            {data.matchScore}
          </p>
          <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/20 text-[#8A6400] text-[10px] sm:text-xs font-semibold">
            {data.matchLabel}
          </span>
        </div>
      </div>

      {/* Role Title */}
      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
        {data.role}
      </h3>

      {/* Metadata Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {data.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-full border border-zinc-200 text-zinc-600 text-xs font-medium bg-zinc-50/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Match Description */}
      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
        {data.description}
      </p>

      {/* Matched Skills */}
      <div className="flex flex-col gap-1.5 mt-auto pt-2">
        <p className="text-xs font-semibold text-zinc-900">Skills you match</p>
        <div className="flex flex-wrap gap-1.5">
          {data.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full border border-amber-400 bg-amber-50/50 text-[#8A6400] text-xs font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        type="button"
        className="w-full mt-2 py-2.5 rounded-lg bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-semibold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        Apply
      </button>
    </article>
  );
}

