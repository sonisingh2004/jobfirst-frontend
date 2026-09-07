import React from "react";

type BadgeVariant = "yellow" | "neutral" | "success";

interface StatusBadgeProps {
  text: string;
  variant?: BadgeVariant;
}

export function StatusBadge({ text, variant = "yellow" }: StatusBadgeProps) {
  const variantStyles = {
    yellow: "bg-amber-100/80 text-amber-900 border border-amber-300/40",
    neutral: "bg-zinc-100 text-zinc-800 border border-zinc-200/60",
    success: "bg-emerald-100/80 text-emerald-900 border border-emerald-300/40",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors ${
        variantStyles[variant] || variantStyles.yellow
      }`}
    >
      {text}
    </span>
  );
}
