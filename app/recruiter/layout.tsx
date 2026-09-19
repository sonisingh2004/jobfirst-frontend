"use client";

import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Video,
  Building,
} from "lucide-react";
import { PortalShell, NavItem } from "@/components/portal-shared/portal-shell";

const recruiterNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/recruiter",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: "Active Jobs",
    href: "/recruiter/jobs",
    icon: <Briefcase className="w-4 h-4" />,
    badge: "6 Open",
  },
  {
    label: "Candidate Pool",
    href: "/recruiter/candidates",
    icon: <Users className="w-4 h-4" />,
    badge: "48 New",
  },
  {
    label: "Skill Interviews",
    href: "/recruiter/interviews",
    icon: <Video className="w-4 h-4" />,
    badge: "12 Match",
  },
  {
    label: "Company Profile",
    href: "/recruiter/company",
    icon: <Building className="w-4 h-4" />,
  },
];

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      role="recruiter"
      roleLabel="Recruiter"
      userName="Sarah Jenkins"
      userEmail="sarah@innovatetech.io"
      navItems={recruiterNavItems}
    >
      {children}
    </PortalShell>
  );
}
