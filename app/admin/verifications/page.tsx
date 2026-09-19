import React from "react";
import { RecruiterVerificationManager } from "@/components/admin/recruiter-verification-manager";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Recruiter Account Verifications — Admin Portal",
};

export default function AdminVerificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-1">
            <Link href="/admin" className="hover:text-zinc-950 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Admin Dashboard</span>
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-bold">Verifications</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Recruiter Account Verifications
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Review and verify employer profiles, official work email domains, and corporate registration proofs.
          </p>
        </div>
      </div>

      <RecruiterVerificationManager />
    </div>
  );
}
