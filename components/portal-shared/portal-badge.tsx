import React from "react";
import { ApplicationStatus, JobStatus } from "@/types/portal";

interface PortalBadgeProps {
  status: ApplicationStatus | JobStatus | string;
  className?: string;
}

export function PortalBadge({ status, className = "" }: PortalBadgeProps) {
  const normalized = status.toLowerCase();

  let styles = "bg-zinc-100 text-zinc-700 border-zinc-200";

  if (["applied", "active", "completed"].includes(normalized)) {
    styles = "bg-emerald-50 text-emerald-800 border-emerald-200";
  } else if (["interview", "scheduled"].includes(normalized)) {
    styles = "bg-amber-100 text-amber-900 border-amber-300 font-bold";
  } else if (["offer", "hired"].includes(normalized)) {
    styles = "bg-emerald-100 text-emerald-950 border-emerald-300 font-bold";
  } else if (["tailored", "reviewing", "pending"].includes(normalized)) {
    styles = "bg-blue-50 text-blue-800 border-blue-200";
  } else if (["rejected", "closed"].includes(normalized)) {
    styles = "bg-rose-50 text-rose-800 border-rose-200";
  } else if (["draft", "paused", "not started"].includes(normalized)) {
    styles = "bg-zinc-100 text-zinc-600 border-zinc-200";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${styles} ${className}`}
    >
      {status}
    </span>
  );
}
