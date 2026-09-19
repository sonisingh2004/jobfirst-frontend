import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalNav } from "@/components/legal/legal-nav";
import { Footer } from "@/components/footer";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  Server,
  Clock,
  Sparkles,
  ArrowRight,
  Trash2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — jobfirst",
  description:
    "Learn how jobfirst protects your resume data, career credentials, and personal information with bank-grade 256-bit encryption.",
};

const sections = [
  { id: "commitment", title: "1. Our Commitment to Privacy" },
  { id: "collection", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Data" },
  { id: "sharing", title: "4. Data Sharing & Third-Party Boards" },
  { id: "security", title: "5. Bank-Grade 256-Bit Security" },
  { id: "retention", title: "6. Data Retention & Deletion" },
  { id: "rights", title: "7. Your Rights & Candidate Control" },
  { id: "cookies", title: "8. Cookies & Tracking Technologies" },
  { id: "updates", title: "9. Policy Updates" },
  { id: "contact", title: "10. Contact & Data Protection Officer" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF8E1] text-zinc-900 selection:bg-amber-300 selection:text-amber-950 font-sans flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <header className="px-4 sm:px-6 pt-4 sticky top-0 z-50">
        <LegalNav currentPage="privacy" />
      </header>

      {/* 2. Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Document Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy & Data Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-bold text-zinc-950 tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span>Last Updated: September 2026</span>
            <span className="text-zinc-300">•</span>
            <span>jobfirst Technologies Pvt Ltd</span>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl text-center leading-relaxed mt-2">
            At jobfirst, we recognize that your resume, career history, and credentials are deeply personal.
            We treat your privacy with bank-grade security and zero tolerance for data selling.
          </p>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-emerald-200/70 text-emerald-950 shrink-0 mt-0.5">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-zinc-950">Key Privacy Pillars</h2>
              <p className="text-xs sm:text-sm text-zinc-700 mt-1 leading-relaxed">
                • <strong>We NEVER sell your data</strong> to advertisers, brokers, or external recruiters.<br />
                • <strong>Bank-grade 256-bit AES encryption</strong> protects all documents in transit and at rest.<br />
                • <strong>1-Click permanent deletion</strong>: Erase your profile, resumes, and logs anytime.
              </p>
            </div>
          </div>
          <Link
            href="/#faq"
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-transform hover:scale-105"
          >
            Privacy FAQ
          </Link>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm p-6 sm:p-10 md:p-12 space-y-12">
          {/* Table of Contents Box */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Table of Contents</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="text-zinc-600 hover:text-zinc-950 hover:underline transition-colors py-0.5"
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="commitment" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              1. Our Commitment to Privacy
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              jobfirst Technologies Pvt Ltd (&ldquo;jobfirst&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates
              the website <Link href="/" className="text-amber-700 underline font-medium">jobfirst.ai</Link> and associated AI job search
              automation services. We comply with applicable Indian data protection frameworks, including the Digital Personal Data
              Protection (DPDP) Act, 2023, along with global privacy best practices.
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              This Privacy Policy explains what personal information we collect, why we need it, how our AI systems process your resumes,
              and the controls you possess over your data.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              2. Information We Collect
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              To automate job matching, tailor your resume for ATS systems, and execute applications, we collect the following categories of data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-sm font-bold text-zinc-900">Personal Identification</h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Full name, email address, phone number, WhatsApp contact number, current city/location, and candidate profile picture (if provided).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-sm font-bold text-zinc-900">Career & Credentials</h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Uploaded resume (PDF/DOCX), educational degrees, work history, skills inventory, certifications, LinkedIn/GitHub URLs, and portfolio links.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-sm font-bold text-zinc-900">Preferences & Filters</h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Target job titles, salary expectations, remote/hybrid preferences, current notice period, and company blacklist filters.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-sm font-bold text-zinc-900">Technical Logs & Usage</h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  IP address, browser type, interaction logs, timestamp of applications submitted, and WhatsApp notification delivery confirmations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="usage" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              3. How We Use Your Data
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We process your data strictly to provide and enhance the jobfirst core service:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>AI Job Discovery:</strong> Ingesting postings across 15+ job boards to score opportunities matching your skill profile.
              </li>
              <li>
                <strong>ATS-Friendly Resume Tailoring:</strong> Reformatting and emphasizing relevant candidate keywords to optimize recruiter ATS parsing.
              </li>
              <li>
                <strong>Automated Application Submission:</strong> Submitting candidate details and attached documents directly to prospective employers.
              </li>
              <li>
                <strong>One-Time Online Interview Matching:</strong> Analyzing candidate responses in online skill assessment sessions to refine matching precision.
              </li>
              <li>
                <strong>Notification Delivery:</strong> Sending real-time status notifications, recruiter messages, and interview invites via WhatsApp or email.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              4. Data Sharing & Third-Party Boards
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We never sell your data. We share your information exclusively under the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>Prospective Employers & Recruiter Portals:</strong> When submitting applications on your behalf to hiring companies
                (via platforms like Greenhouse, Lever, Workday, LinkedIn, Naukri, or direct corporate portals).
              </li>
              <li>
                <strong>Cloud & Security Infrastructure:</strong> Highly secure cloud hosting providers (e.g. AWS / GCP) operating under strict data processing agreements.
              </li>
              <li>
                <strong>Communications API Providers:</strong> Official WhatsApp Business API partners for instant status notifications.
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by a valid subpoena, court order, or lawful request by government authorities under Indian law.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="security" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              5. Bank-Grade 256-Bit Security
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We implement industry-standard enterprise security controls:
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2 text-sm text-zinc-800">
              <div className="flex items-center gap-2 text-zinc-950 font-bold">
                <Lock className="w-4 h-4 text-amber-700" />
                <span>Security Specifications</span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                • <strong>Encryption at Rest:</strong> AES 256-bit encryption for all stored resumes, documents, and credentials.<br />
                • <strong>Encryption in Transit:</strong> TLS 1.3 encryption across all website and API communications.<br />
                • <strong>Strict Access Controls:</strong> Role-based access control (RBAC), multi-factor authentication (MFA), and automated audit logs.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="retention" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              6. Data Retention & Deletion
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We retain your resume and application history for as long as your account is active, enabling continuous tracking and reporting.
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3">
              <Trash2 className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <strong>Right to be Forgotten:</strong> You can request permanent account and data deletion at any time via your settings
                dashboard or by emailing <a href="mailto:privacy@jobfirst.ai" className="text-amber-700 underline font-medium">privacy@jobfirst.ai</a>.
                All resumes, interview transcripts, and personal profiles will be scrubbed from our systems within 14 business days.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="rights" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              7. Your Rights & Candidate Control
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              You maintain sovereign control over how jobfirst acts on your behalf:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li><strong>Pre-Approval Gates:</strong> Option to review and manually approve job matches before any application is dispatched.</li>
              <li><strong>Blacklist Filtering:</strong> Restrict our AI agent from applying to your current employer or specific competitor companies.</li>
              <li><strong>Instant Pause:</strong> Pause all active autonomous applications instantly via WhatsApp or web dashboard.</li>
              <li><strong>Data Portability:</strong> Export all tailored resumes and application activity logs at any time.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="cookies" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              8. Cookies & Tracking Technologies
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We use strictly necessary session cookies for authentication, security verification, and remembering your preferences.
              We do not utilize invasive cross-site advertising cookies or sell browser fingerprint data to third parties.
            </p>
          </section>

          {/* Section 9 */}
          <section id="updates" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              9. Policy Updates
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              We may periodically update this Privacy Policy to reflect advancements in our AI models, regulatory updates, or new platform features.
              Material changes will be notified to you via email or prominent in-app notification prior to taking effect.
            </p>
          </section>

          {/* Section 10 */}
          <section id="contact" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              10. Contact & Data Protection Officer
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              For any privacy inquiries, data deletion requests, or questions regarding our encryption standards, please contact our
              Data Protection Officer (DPO):
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-sm text-zinc-800">
              <p>
                <strong>Data Protection Officer:</strong> jobfirst Technologies Pvt Ltd
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@jobfirst.ai" className="text-amber-700 underline font-medium">
                  privacy@jobfirst.ai
                </a>{" "}
                or{" "}
                <a href="mailto:hello@jobfirst.ai" className="text-amber-700 underline font-medium">
                  hello@jobfirst.ai
                </a>
              </p>
              <p>
                <strong>Location:</strong> Bengaluru, Karnataka, India
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-zinc-200 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-zinc-950">Looking for our Terms & Conditions?</h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              Read our service terms, free trial specifications, and ₹999/month Pro subscription details.
            </p>
          </div>
          <Link
            href="/terms"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Read Terms & Conditions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
