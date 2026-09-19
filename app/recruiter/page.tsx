import React from "react";
import Link from "next/link";
import { PortalStatCard } from "@/components/portal-shared/portal-stat-card";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import {
  Briefcase,
  Users,
  Award,
  Video,
  Plus,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Recruiter Dashboard — jobfirst",
};

const topCandidates = [
  {
    name: "Vikram Malhotra",
    role: "Lead Fullstack Engineer",
    experience: "5.5 yrs",
    atsScore: 94,
    interviewScore: "9.2/10 (Matched)",
    status: "Reviewing",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    name: "Sneha Reddy",
    role: "Senior Product Designer",
    experience: "4 yrs",
    atsScore: 91,
    interviewScore: "8.8/10 (Matched)",
    status: "Interview",
    skills: ["Figma", "Design Systems", "UX Research"],
  },
  {
    name: "Aditya Roy",
    role: "DevOps & Cloud Specialist",
    experience: "6 yrs",
    atsScore: 89,
    interviewScore: "8.5/10 (Matched)",
    status: "Reviewing",
    skills: ["Kubernetes", "Terraform", "CI/CD", "GCP"],
  },
];

export default function RecruiterPage() {
  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Talent Acquisition Hub
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Browse pre-screened candidates, ATS optimized resumes, and verified skill test results.
          </p>
        </div>
        <Link
          href="/recruiter/jobs"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs transition-transform hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Opening</span>
        </Link>
      </div>

      {/* Recruiter Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <PortalStatCard
          metric={{
            label: "Active Openings",
            value: "6 Roles",
            change: "+2 new",
            isPositive: true,
            subtext: "Engineering, Product, Design",
          }}
          icon={<Briefcase className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Total Applicants",
            value: "248",
            change: "+34 today",
            isPositive: true,
            subtext: "Pre-screened by jobfirst agent",
          }}
          icon={<Users className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "High ATS Matches (>85%)",
            value: "42",
            change: "+12",
            isPositive: true,
            subtext: "Skill-aligned resumes",
          }}
          icon={<Award className="w-5 h-5 text-amber-800" />}
        />
        <PortalStatCard
          metric={{
            label: "Interviews Scheduled",
            value: "8 Candidates",
            change: "This week",
            isPositive: true,
            subtext: "Post online skill verification",
          }}
          icon={<Video className="w-5 h-5 text-amber-800" />}
        />
      </div>

      {/* Top Pre-Screened Candidates */}
      <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
              <span>Top AI-Matched Candidates</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                Online Skill Tested
              </span>
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Candidates who completed our one-time skill matching interview and scored &gt;85% ATS match.
            </p>
          </div>
          <Link
            href="/recruiter/candidates"
            className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {topCandidates.map((cand, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 hover:border-amber-300 bg-zinc-50/50 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-950 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {cand.name.charAt(0)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-zinc-950">{cand.name}</h3>
                    <span className="text-xs text-zinc-500">• {cand.experience} exp</span>
                  </div>
                  <p className="text-xs font-medium text-zinc-700">{cand.role}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cand.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-600 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-500">ATS:</span>
                  <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-950">
                    {cand.atsScore}% Match
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{cand.interviewScore}</span>
                </div>
                <button
                  type="button"
                  className="mt-1 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
