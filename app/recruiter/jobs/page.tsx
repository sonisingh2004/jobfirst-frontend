import React from "react";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { Plus, Search, MapPin, Users, Calendar } from "lucide-react";

export const metadata = {
  title: "Job Postings & Roles — Recruiter Portal",
};

const activeJobs = [
  { id: "job-1", title: "Lead Fullstack Engineer", department: "Engineering", location: "Bengaluru (Hybrid)", type: "Full-time", applicants: 84, status: "Active", posted: "3 days ago" },
  { id: "job-2", title: "Senior Product Designer", department: "Design", location: "Remote, India", type: "Full-time", applicants: 52, status: "Active", posted: "5 days ago" },
  { id: "job-3", title: "DevOps & Cloud Specialist", department: "Infrastructure", location: "Hyderabad", type: "Full-time", applicants: 41, status: "Active", posted: "1 week ago" },
  { id: "job-4", title: "AI/ML Research Scientist", department: "AI Core", location: "Bengaluru", type: "Full-time", applicants: 39, status: "Active", posted: "2 days ago" },
  { id: "job-5", title: "Product Marketing Manager", department: "Growth", location: "Mumbai", type: "Full-time", applicants: 32, status: "Active", posted: "4 days ago" },
];

export default function RecruiterJobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Job Openings Management
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Create, edit, and monitor live requisitions connected to the jobfirst AI agent network.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Opening</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search active listings..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
        </div>

        <div className="divide-y divide-zinc-100">
          {activeJobs.map((job) => (
            <div key={job.id} className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-sm text-zinc-950">{job.title}</h3>
                  <PortalBadge status={job.status} />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                  <span className="font-medium text-zinc-700">{job.department}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{job.applicants} applicants</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{job.posted}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-800 font-semibold text-xs"
                >
                  View Pipeline
                </button>
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs"
                >
                  Edit JD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
