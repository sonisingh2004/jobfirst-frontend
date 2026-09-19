import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalNav } from "@/components/legal/legal-nav";
import { Footer } from "@/components/footer";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Briefcase,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — jobfirst",
  description:
    "Review the terms and conditions governing the use of jobfirst's AI job agent, ATS resume builder, and career services.",
};

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Description of Services" },
  { id: "representation", title: "3. User Representation & Authorization" },
  { id: "pricing-billing", title: "4. Free Trial & Pro Subscription (₹999/mo)" },
  { id: "cancellation", title: "5. Cancellation & Refund Policy" },
  { id: "acceptable-use", title: "6. Acceptable Use & User Conduct" },
  { id: "intellectual-property", title: "7. Intellectual Property Rights" },
  { id: "disclaimers", title: "8. Disclaimer & Employment Guarantee" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "governing-law", title: "10. Governing Law & Jurisdiction" },
  { id: "contact", title: "11. Contact Information" },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF8E1] text-zinc-900 selection:bg-amber-300 selection:text-amber-950 font-sans flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <header className="px-4 sm:px-6 pt-4 sticky top-0 z-50">
        <LegalNav currentPage="terms" />
      </header>

      {/* 2. Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Document Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-bold text-zinc-950 tracking-tight">
            Terms & Conditions
          </h1>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span>Last Updated: September 2026</span>
            <span className="text-zinc-300">•</span>
            <span>jobfirst Technologies Pvt Ltd</span>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl text-center leading-relaxed mt-2">
            Please read these Terms & Conditions carefully before using the jobfirst platform,
            AI job application agents, resume optimization tools, or interview matching services.
          </p>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-200/70 text-amber-950 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-zinc-950">Quick Summary</h2>
              <p className="text-xs sm:text-sm text-zinc-700 mt-1 leading-relaxed">
                Your first 20 applications are completely free. You can upgrade to our Pro Plan
                for ₹999/month for unlimited applications, ATS resume builder, and online interview matching.
                You remain in full control of every application and can cancel anytime.
              </p>
            </div>
          </div>
          <Link
            href="/#pricing"
            className="shrink-0 px-4 py-2 rounded-xl bg-[#f0b100] hover:bg-[#e5a800] text-amber-950 font-bold text-xs shadow-xs transition-transform hover:scale-105"
          >
            View Pricing
          </Link>
        </div>

        {/* Content Container with Table of Contents */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm p-6 sm:p-10 md:p-12 space-y-12">
          {/* Table of Contents Box */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
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
          <section id="acceptance" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              By accessing or using the jobfirst website (<Link href="/" className="text-amber-700 underline font-medium">jobfirst.ai</Link>),
              our dashboard, automated application agents, WhatsApp notifications, or any related services
              (collectively, the &ldquo;Service&rdquo;), provided by <strong>jobfirst Technologies Pvt Ltd</strong> (&ldquo;jobfirst&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you acknowledge that you have read, understood, and agree to be bound
              by these Terms & Conditions.
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              If you do not agree to these terms, you must not access or use our services. We reserve the right to modify these
              terms at any time, with notice provided via email or dashboard announcement.
            </p>
          </section>

          {/* Section 2 */}
          <section id="services" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              2. Description of Services
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              jobfirst provides an intelligent autonomous job search ecosystem designed to streamline and automate the candidate
              job hunt experience, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>AI Job Discovery & Matching:</strong> Continuous aggregation and automated filtering across 15+ job boards
                (such as Naukri, LinkedIn, Foundit, Lever, Greenhouse, and direct career portals) based on your career preferences.
              </li>
              <li>
                <strong>ATS-Friendly Resume Maker:</strong> Generation and optimization of machine-readable resumes tailored
                specifically to targeted Job Descriptions (JDs) to maximize Applicant Tracking System (ATS) pass rates.
              </li>
              <li>
                <strong>One-Time Online Skills Match Interview:</strong> An interactive online technical and behavioural evaluation
                designed to accurately index candidate proficiencies and match with relevant openings.
              </li>
              <li>
                <strong>Autonomous & Supervised Application Submission:</strong> Automated filing of job applications, cover letters,
                and screening questionnaire responses with real-time audit logs and user approval gates.
              </li>
              <li>
                <strong>Omnichannel Notifications:</strong> Live application status, recruiter reply alerts, and interview reminders
                delivered via WhatsApp and email.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="representation" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              3. User Representation & Authorization
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              By using our auto-apply and resume generation tools, you explicitly represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>All information provided in your profile, resume, work history, education, and credentials is truthful, accurate, and up-to-date.</li>
              <li>You possess the legal right and necessary work authorizations to apply for employment in your targeted jurisdictions.</li>
              <li>
                You grant jobfirst an express, limited power of representation to submit job applications on your behalf, attach your tailored
                resumes, and complete employer application forms accurately reflecting your background.
              </li>
              <li>You maintain ultimate responsibility for reviewing and verifying the accuracy of any application submitted in your name.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="pricing-billing" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              4. Free Trial & Pro Subscription (₹999/month)
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              jobfirst operates on a transparent freemium model:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Free Trial</span>
                <h3 className="text-base font-bold text-zinc-950 mt-1">20 Free Applications</h3>
                <p className="text-xs text-zinc-600 mt-1">
                  100% free with no credit card or debit card required upfront. Allows full access to experience the AI job matching engine.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Pro Plan</span>
                <h3 className="text-base font-bold text-zinc-950 mt-1">₹999 per month</h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Includes ATS friendly applications, AI ATS resume maker, one-time online interview to match skills, and priority board processing.
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Subscriptions are billed monthly in advance in Indian Rupees (INR). All payments are processed securely via RBI-compliant payment
              gateways (UPI, credit cards, debit cards, and net banking). Applicable goods and service taxes (GST) will be itemized on invoices.
            </p>
          </section>

          {/* Section 5 */}
          <section id="cancellation" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              5. Cancellation & Refund Policy
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              <strong>Cancel the day you get hired:</strong> You may cancel your Pro subscription at any time with a single click from your account
              settings or by messaging our WhatsApp support agent.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>
                Upon cancellation, you will retain full Pro benefits until the end of your current monthly billing period. No further renewals will occur.
              </li>
              <li>
                Because our AI models consume cloud computation, API token, and board submission resources immediately upon usage, monthly subscription
                fees are generally non-refundable once the billing cycle has begun, except where required by applicable law or in cases of demonstrable billing errors.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="acceptable-use" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              6. Acceptable Use & User Conduct
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              You agree not to misuse the jobfirst platform. Prohibited activities include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
              <li>Submitting fraudulent, deceptive, or defamatory credentials or impersonating any individual or organization.</li>
              <li>Attempting to reverse engineer, decompile, scrape, or extract source algorithms from the jobfirst platform.</li>
              <li>Using automated scripts to overwhelm employer recruitment portals or violate terms of third-party job boards.</li>
              <li>Reselling, sublicensing, or sharing account credentials with third parties.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="intellectual-property" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              7. Intellectual Property Rights
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              You retain all ownership rights to your original resume, personal career history, and portfolio documents.
              All proprietary algorithms, prompt architectures, user interface designs, and branding of jobfirst remain the exclusive
              intellectual property of jobfirst Technologies Pvt Ltd.
            </p>
          </section>

          {/* Section 8 */}
          <section id="disclaimers" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              8. Disclaimer & Employment Guarantee
            </h2>
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                <strong>Important Notice:</strong> While jobfirst significantly increases application volume, quality, and ATS keyword relevance,
                jobfirst is a career facilitation platform. We do not guarantee employment, job offers, or specific interview invitations.
                Hiring decisions remain solely at the discretion of individual hiring organizations and recruiters.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="liability" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              9. Limitation of Liability
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              To the maximum extent permitted by applicable Indian law, jobfirst Technologies Pvt Ltd and its officers, directors, and employees
              shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your use of or inability to use the service,
              including lost opportunities or wages. In any event, our aggregate liability shall not exceed the amount paid by you to jobfirst in the
              preceding three (3) months.
            </p>
          </section>

          {/* Section 10 */}
          <section id="governing-law" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              10. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of India.
              Any disputes or claims arising out of or in connection with these terms shall be submitted to the exclusive jurisdiction
              of the competent courts located in Bengaluru, Karnataka, India.
            </p>
          </section>

          {/* Section 11 */}
          <section id="contact" className="scroll-mt-24 space-y-3">
            <h2 className="text-xl font-bold text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-2">
              11. Contact Information
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              If you have any questions regarding these Terms & Conditions or need legal assistance, please contact our team:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-sm text-zinc-800">
              <p>
                <strong>Company:</strong> jobfirst Technologies Pvt Ltd
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@jobfirst.ai" className="text-amber-700 underline font-medium">
                  legal@jobfirst.ai
                </a>{" "}
                or{" "}
                <a href="mailto:hello@jobfirst.ai" className="text-amber-700 underline font-medium">
                  hello@jobfirst.ai
                </a>
              </p>
              <p>
                <strong>Support:</strong> Available 24/7 on WhatsApp & In-App Dashboard
              </p>
              <p>
                <strong>Address:</strong> Bengaluru, Karnataka, India
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-zinc-200 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-zinc-950">Looking for our Privacy Policy?</h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              Read how we protect your personal resume and job application data with 256-bit encryption.
            </p>
          </div>
          <Link
            href="/privacy"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Read Privacy Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
