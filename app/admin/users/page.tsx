import React from "react";
import { PortalBadge } from "@/components/portal-shared/portal-badge";
import { Search, Filter, ShieldCheck, Mail, MoreVertical } from "lucide-react";

export const metadata = {
  title: "User Management — Admin Portal",
};

const usersList = [
  { name: "Aarav Sharma", email: "aarav.s@gmail.com", role: "Candidate", plan: "Pro (₹999/mo)", appsSent: 48, status: "Active" },
  { name: "Priya Patel", email: "priya.p@techrecruit.in", role: "Recruiter", plan: "Enterprise", appsSent: "-", status: "Active" },
  { name: "Rohan Verma", email: "rohan.v@outlook.com", role: "Candidate", plan: "Free Trial (20)", appsSent: 16, status: "Active" },
  { name: "Neha Gupta", email: "neha.g@swiggy.in", role: "Recruiter", plan: "Growth Team", appsSent: "-", status: "Active" },
  { name: "Ananya Iyer", email: "ananya.iyer@gmail.com", role: "Candidate", plan: "Pro (₹999/mo)", appsSent: 72, status: "Active" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          User & Account Directory
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Manage platform candidates, recruiters, subscriptions, and access controls.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search user by name, email, plan..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter Role</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                <th className="pb-3">User</th>
                <th className="pb-3">Role</th>
                <th className="pb-3">Tier / Plan</th>
                <th className="pb-3">Applications</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {usersList.map((user, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-3.5">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900">{user.name}</span>
                      <span className="text-xs text-zinc-500">{user.email}</span>
                    </div>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                        user.role === "Recruiter"
                          ? "bg-blue-50 text-blue-900 border-blue-200"
                          : "bg-emerald-50 text-emerald-900 border-emerald-200"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3.5 text-xs font-semibold text-zinc-800">{user.plan}</td>
                  <td className="py-3.5 text-xs text-zinc-600 tabular-nums font-medium">
                    {user.appsSent}
                  </td>
                  <td className="py-3.5">
                    <PortalBadge status={user.status} />
                  </td>
                  <td className="py-3.5 text-right">
                    <button type="button" className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg">
                      <MoreVertical className="w-4 h-4" />
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
