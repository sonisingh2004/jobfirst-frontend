import React from "react";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { Search, Filter, CheckCircle2, Award, Download } from "lucide-react";

export const metadata = {
  title: "Candidate Talent Pool — Recruiter Portal",
};

const candidatePool = [
  { name: "Vikram Malhotra", role: "Lead Fullstack Engineer", atsScore: 94, interviewStatus: "Completed", match: "High Match", exp: "5.5 yrs", skills: ["React", "Node.js", "AWS", "PostgreSQL"], applied: "Yesterday" },
  { name: "Sneha Reddy", role: "Senior Product Designer", atsScore: 91, interviewStatus: "Completed", match: "High Match", exp: "4.0 yrs", skills: ["Figma", "UI/UX", "Design Systems"], applied: "2 days ago" },
  { name: "Aditya Roy", role: "DevOps Specialist", atsScore: 89, interviewStatus: "Completed", match: "High Match", exp: "6.0 yrs", skills: ["Docker", "K8s", "Terraform"], applied: "3 days ago" },
  { name: "Meera Nair", role: "AI/ML Engineer", atsScore: 86, interviewStatus: "Pending", match: "Good Match", exp: "3.5 yrs", skills: ["PyTorch", "Python", "NLP", "LLMs"], applied: "Today" },
  { name: "Karan Johar", role: "Frontend Architect", atsScore: 84, interviewStatus: "Completed", match: "Good Match", exp: "7.0 yrs", skills: ["TypeScript", "Next.js", "Performance"], applied: "4 days ago" },
];

export default function RecruiterCandidatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Pre-Screened Talent Directory
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Candidates with ATS-optimized resumes and verified online skill interview results.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search candidate, skill, role..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Min ATS 85%+</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                <th className="pb-3">Candidate</th>
                <th className="pb-3">ATS Match</th>
                <th className="pb-3">Online Skill Interview</th>
                <th className="pb-3">Key Skills</th>
                <th className="pb-3">Applied</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {candidatePool.map((c, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-3.5">
                    <div>
                      <span className="font-bold text-zinc-950">{c.name}</span>
                      <p className="text-xs text-zinc-500">{c.role} • {c.exp}</p>
                    </div>
                  </td>
                  <td className="py-3.5">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-950">
                      {c.atsScore}%
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                        c.interviewStatus === "Completed"
                          ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                          : "bg-amber-50 text-amber-900 border-amber-200"
                      }`}
                    >
                      {c.interviewStatus}
                    </span>
                  </td>
                  <td className="py-3.5">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {c.skills.slice(0, 3).map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 text-xs text-zinc-500">{c.applied}</td>
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs"
                    >
                      View Profile
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
