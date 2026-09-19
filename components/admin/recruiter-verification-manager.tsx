"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  FileText,
  Search,
  Building2,
  ExternalLink,
  Eye,
  AlertCircle,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import { RecruiterVerification, VerificationStatus } from "@/types/portal";

const initialVerifications: RecruiterVerification[] = [
  {
    id: "rec-v1",
    recruiterName: "Pooja Hegde",
    workEmail: "pooja.h@swiggy.in",
    companyName: "Bundl Technologies (Swiggy)",
    companyWebsite: "https://swiggy.com",
    designation: "Senior Technical Talent Partner",
    gstinOrCin: "29AABCB1234F1Z5",
    domainVerified: true,
    documentType: "Certificate of Incorporation & Work ID",
    jobPostingsRequested: 8,
    submittedAt: "15 mins ago",
    status: "pending",
  },
  {
    id: "rec-v2",
    recruiterName: "Rajesh Kothari",
    workEmail: "rajesh@cred.club",
    companyName: "Dreamplug Technologies (CRED)",
    companyWebsite: "https://cred.club",
    designation: "Head of Engineering Hiring",
    gstinOrCin: "29AAACD9876E1Z2",
    domainVerified: true,
    documentType: "Ministry of Corporate Affairs (MCA) Filing",
    jobPostingsRequested: 12,
    submittedAt: "1 hour ago",
    status: "pending",
  },
  {
    id: "rec-v3",
    recruiterName: "Tanvi Saxena",
    workEmail: "tanvi.s@groww.in",
    companyName: "Nextbillion Technology (Groww)",
    companyWebsite: "https://groww.in",
    designation: "Lead Product Recruiter",
    gstinOrCin: "29AABCN5432B1Z8",
    domainVerified: true,
    documentType: "Corporate Board Resolution & GST Certificate",
    jobPostingsRequested: 5,
    submittedAt: "3 hours ago",
    status: "pending",
  },
  {
    id: "rec-v4",
    recruiterName: "Devansh Mehta",
    workEmail: "recruiter99@gmail.com",
    companyName: "Apex Career Solutions Pvt Ltd",
    companyWebsite: "http://apex-solutions-fake.co",
    designation: "Consultant",
    gstinOrCin: "UNVERIFIED_GST_NOT_FOUND",
    domainVerified: false,
    documentType: "Unattested Visiting Card",
    jobPostingsRequested: 25,
    submittedAt: "5 hours ago",
    status: "pending",
  },
  {
    id: "rec-v5",
    recruiterName: "Sandeep Bansal",
    workEmail: "sandeep@razorpay.com",
    companyName: "Razorpay Software Pvt Ltd",
    companyWebsite: "https://razorpay.com",
    designation: "Director of People",
    gstinOrCin: "29AABCR8765A1Z4",
    domainVerified: true,
    documentType: "GST Registration & Employer Tax Card",
    jobPostingsRequested: 15,
    submittedAt: "Yesterday",
    status: "verified",
  },
  {
    id: "rec-v6",
    recruiterName: "Anonymous Recruiter",
    workEmail: "hr@temp-mail.org",
    companyName: "Global Quick Hires",
    companyWebsite: "http://not-found",
    designation: "Freelance Agent",
    gstinOrCin: "INVALID_FORMAT",
    domainVerified: false,
    documentType: "None Provided",
    jobPostingsRequested: 50,
    submittedAt: "2 days ago",
    status: "rejected",
    rejectionReason: "Free temporary email domain & fraudulent business documents.",
  },
];

export function RecruiterVerificationManager() {
  const [verifications, setVerifications] = useState<RecruiterVerification[]>(initialVerifications);
  const [activeTab, setActiveTab] = useState<VerificationStatus | "all">("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectModalItem, setInspectModalItem] = useState<RecruiterVerification | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setVerifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "verified" as const } : item
      )
    );
    const target = verifications.find((v) => v.id === id);
    setNotification(
      `Verified ${target?.recruiterName} from ${target?.companyName}. Recruiter privileges granted.`
    );
    setTimeout(() => setNotification(null), 4000);
    if (inspectModalItem?.id === id) {
      setInspectModalItem(null);
    }
  };

  const handleReject = (id: string, reason?: string) => {
    setVerifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "rejected" as const,
              rejectionReason: reason || "Credentials or company identification failed verification check.",
            }
          : item
      )
    );
    const target = verifications.find((v) => v.id === id);
    setNotification(
      `Rejected verification for ${target?.recruiterName}. Candidate access blocked.`
    );
    setTimeout(() => setNotification(null), 4000);
    if (inspectModalItem?.id === id) {
      setInspectModalItem(null);
    }
  };

  const filteredItems = verifications.filter((item) => {
    const matchesTab = activeTab === "all" || item.status === activeTab;
    const matchesSearch =
      item.recruiterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.workEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gstinOrCin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const pendingCount = verifications.filter((v) => v.status === "pending").length;
  const verifiedCount = verifications.filter((v) => v.status === "verified").length;
  const rejectedCount = verifications.filter((v) => v.status === "rejected").length;

  return (
    <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm p-6 sm:p-8 space-y-6 relative overflow-hidden">
      {/* Toast Alert */}
      {notification && (
        <div className="absolute top-4 right-6 left-6 sm:left-auto sm:w-96 z-50 p-3.5 rounded-2xl bg-zinc-900 text-white text-xs font-semibold shadow-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f0b100] shrink-0" />
            <span>{notification}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-zinc-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-100 text-amber-900">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-zinc-950">
              Recruiter Account Verification Queue
            </h2>
            {pendingCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider animate-pulse">
                {pendingCount} Action Required
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 mt-1">
            Authenticate corporate domain MX records, GSTIN / CIN tax IDs, and authority letters before enabling job postings and candidate reach.
          </p>
        </div>

        {/* Quick Stats Pills */}
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold">
            Pending: {pendingCount}
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
            Verified: {verifiedCount}
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 font-bold">
            Blocked: {rejectedCount}
          </span>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center p-1 rounded-2xl bg-zinc-100/80 border border-zinc-200/80 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "pending"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Pending ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("verified")}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "verified"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Verified ({verifiedCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rejected")}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "rejected"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Rejected ({rejectedCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            All ({verifications.length})
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company, recruiter, GSTIN..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
        </div>
      </div>

      {/* Recruiter Verification Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-100 text-xs font-bold text-zinc-400 uppercase tracking-wider">
              <th className="pb-3">Recruiter & Company</th>
              <th className="pb-3">Work Email & Domain</th>
              <th className="pb-3">Tax / GSTIN</th>
              <th className="pb-3">Hiring Needs</th>
              <th className="pb-3">Status</th>
              <th className="pb-3 text-right">Verification Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-zinc-500 text-xs">
                  No recruiter applications match this filter.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50/60 transition-colors">
                  {/* Recruiter & Company */}
                  <td className="py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {item.recruiterName.charAt(0)}
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-bold text-zinc-950 text-sm">{item.recruiterName}</span>
                        <div className="flex items-center gap-1 text-xs text-zinc-600">
                          <Building2 className="w-3 h-3 text-zinc-400" />
                          <span className="font-medium text-zinc-800">{item.companyName}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400">{item.designation}</span>
                      </div>
                    </div>
                  </td>

                  {/* Work Email & Domain Auth */}
                  <td className="py-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-zinc-900 block">{item.workEmail}</span>
                      {item.domainVerified ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Official Domain Match</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                          <AlertCircle className="w-3 h-3" />
                          <span>Unverified Domain</span>
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Tax / GSTIN */}
                  <td className="py-4">
                    <div className="space-y-0.5">
                      <span className="font-mono text-xs font-bold text-zinc-800">{item.gstinOrCin}</span>
                      <span className="text-[11px] text-zinc-400 block">{item.documentType}</span>
                    </div>
                  </td>

                  {/* Hiring Needs */}
                  <td className="py-4">
                    <span className="text-xs font-semibold text-zinc-700">
                      {item.jobPostingsRequested} Openings
                    </span>
                    <span className="text-[11px] text-zinc-400 block">{item.submittedAt}</span>
                  </td>

                  {/* Status */}
                  <td className="py-4">
                    {item.status === "verified" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-950 border border-emerald-300">
                        <Check className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    )}
                    {item.status === "pending" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Pending Review</span>
                      </span>
                    )}
                    {item.status === "rejected" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-950 border border-rose-300">
                        <X className="w-3.5 h-3.5" />
                        <span>Rejected</span>
                      </span>
                    )}
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      {/* Inspect Proof */}
                      <button
                        type="button"
                        onClick={() => setInspectModalItem(item)}
                        title="Inspect Credentials"
                        className="px-2.5 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>

                      {/* Quick Approve Button */}
                      {item.status !== "verified" && (
                        <button
                          type="button"
                          onClick={() => handleApprove(item.id)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs inline-flex items-center gap-1 transition-transform hover:scale-105"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve</span>
                        </button>
                      )}

                      {/* Quick Reject Button */}
                      {item.status !== "rejected" && (
                        <button
                          type="button"
                          onClick={() => handleReject(item.id)}
                          className="px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Reject</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Inspect Credentials Modal */}
      {inspectModalItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-zinc-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-amber-100 text-amber-900">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950">Credential Inspection</h3>
                </div>
                <p className="text-xs text-zinc-500">
                  Review applicant proof of incorporation and official email validation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setInspectModalItem(null)}
                className="p-1 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-zinc-700">
              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-zinc-400">Recruiter Details</span>
                <p className="font-bold text-zinc-950 text-sm">{inspectModalItem.recruiterName}</p>
                <p className="text-zinc-600">{inspectModalItem.designation} • {inspectModalItem.workEmail}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-zinc-400">Company & Official Registry</span>
                <p className="font-bold text-zinc-950 text-sm">{inspectModalItem.companyName}</p>
                <p className="text-zinc-600 font-mono">GSTIN/CIN: {inspectModalItem.gstinOrCin}</p>
                <a
                  href={inspectModalItem.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold underline inline-flex items-center gap-1 mt-1"
                >
                  <span>Visit {inspectModalItem.companyWebsite}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-amber-900">Submitted Proof of Identity</span>
                <p className="font-bold text-zinc-900">{inspectModalItem.documentType}</p>
                <p className="text-zinc-600">
                  Domain Validation Status:{" "}
                  {inspectModalItem.domainVerified ? (
                    <strong className="text-emerald-700">Passed (MX DNS Verified)</strong>
                  ) : (
                    <strong className="text-rose-700">Failed (Generic / Unauthenticated Domain)</strong>
                  )}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-zinc-100">
              <button
                type="button"
                onClick={() => handleReject(inspectModalItem.id)}
                className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold"
              >
                Reject & Block
              </button>
              <button
                type="button"
                onClick={() => handleApprove(inspectModalItem.id)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs inline-flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Approve Recruiter</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
