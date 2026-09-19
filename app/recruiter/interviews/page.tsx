import React from "react";
import { Video, Calendar, CheckCircle2, Star, Clock } from "lucide-react";

export const metadata = {
  title: "Online Skill Match Interviews — Recruiter Portal",
};

const interviewEvaluations = [
  { candidate: "Vikram Malhotra", targetRole: "Lead Fullstack Engineer", testDate: "Yesterday", score: "9.2/10", verdict: "Strong Hire", highlights: "Demonstrated advanced React concurrent patterns, system scalability, and GraphQL microservices." },
  { candidate: "Sneha Reddy", targetRole: "Senior Product Designer", testDate: "2 days ago", score: "8.8/10", verdict: "Strong Hire", highlights: "Exceptional mastery of Figma tokens, responsive auto-layouts, and user usability heuristics." },
  { candidate: "Aditya Roy", targetRole: "DevOps & Cloud Specialist", testDate: "3 days ago", score: "8.5/10", verdict: "Recommended", highlights: "Solid Kubernetes cluster orchestration and declarative Terraform configuration patterns." },
];

export default function RecruiterInterviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Online Skill Match Interview Records
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Review automated technical assessments and skill verification transcripts conducted by jobfirst.
        </p>
      </div>

      <div className="space-y-4">
        {interviewEvaluations.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-900">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950">{item.candidate}</h3>
                  <p className="text-xs text-zinc-500">{item.targetRole} • Assessed {item.testDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-xs text-zinc-400 font-medium">Skill Score</span>
                  <p className="text-lg font-black text-amber-950">{item.score}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold">
                  {item.verdict}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Evaluation Summary
              </span>
              <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                {item.highlights}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-xs font-bold text-zinc-800"
              >
                View Full Transcript
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs"
              >
                Direct Callback Invite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
