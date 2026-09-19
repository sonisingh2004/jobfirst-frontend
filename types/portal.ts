export type PortalRole = "admin" | "recruiter" | "candidate";

export type ApplicationStatus =
  | "applied"
  | "tailored"
  | "reviewing"
  | "interview"
  | "offer"
  | "rejected";

export interface ApplicationItem {
  id: string;
  company: string;
  role: string;
  platform: string;
  dateApplied: string;
  status: ApplicationStatus;
  atsScore: number;
  location: string;
  salaryRange?: string;
}

export type JobStatus = "active" | "draft" | "closed" | "paused";

export interface JobListing {
  id: string;
  title: string;
  company: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  applicantsCount: number;
  status: JobStatus;
  postedAt: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  experienceYears: number;
  atsScore: number;
  interviewStatus: "Completed" | "Pending" | "Scheduled" | "Not Started";
  skills: string[];
  appliedDate: string;
  avatarUrl?: string;
}

export interface PortalMetric {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
}

export type VerificationStatus = "pending" | "verified" | "rejected";

export interface RecruiterVerification {
  id: string;
  recruiterName: string;
  workEmail: string;
  companyName: string;
  companyWebsite: string;
  designation: string;
  gstinOrCin: string;
  domainVerified: boolean;
  documentType: string;
  jobPostingsRequested: number;
  submittedAt: string;
  status: VerificationStatus;
  rejectionReason?: string;
}

