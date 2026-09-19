"use client";

import React from "react";
import {
  LayoutDashboard,
  Send,
  FileEdit,
  Video,
  SlidersHorizontal,
} from "lucide-react";
import { PortalShell, NavItem } from "@/components/portal-shared/portal-shell";

const candidateNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/candidate",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: "Live Applications",
    href: "/candidate/applications",
    icon: <Send className="w-4 h-4" />,
    badge: "24 Sent",
  },
  {
    label: "ATS Resume Maker",
    href: "/candidate/resume-builder",
    icon: <FileEdit className="w-4 h-4" />,
    badge: "92% Score",
  },
  {
    label: "Skill Match Interview",
    href: "/candidate/skill-interview",
    icon: <Video className="w-4 h-4" />,
    badge: "1-Time",
  },
  {
    label: "Job Preferences",
    href: "/candidate/preferences",
    icon: <SlidersHorizontal className="w-4 h-4" />,
  },
];

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      role="candidate"
      roleLabel="Candidate"
      userName="Aarav Sharma"
      userEmail="aarav.sharma@gmail.com"
      navItems={candidateNavItems}
    >
      {children}
    </PortalShell>
  );
}
