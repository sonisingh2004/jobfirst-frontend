"use client";

import React from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { PortalShell, NavItem } from "@/components/portal-shared/portal-shell";

const adminNavItems: NavItem[] = [
  {
    label: "Overview",
    href: "/admin",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: "Recruiter Verifications",
    href: "/admin/verifications",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    label: "Users & Roles",
    href: "/admin/users",
    icon: <Users className="w-4 h-4" />,
  },
  {
    label: "Job Feeds & Boards",
    href: "/admin/jobs",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    label: "Analytics & MRR",
    href: "/admin/analytics",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    label: "System Settings",
    href: "/admin/settings",
    icon: <Settings className="w-4 h-4" />,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      role="admin"
      roleLabel="Super Admin"
      userName="Chief Admin"
      userEmail="admin@jobfirst.ai"
      navItems={adminNavItems}
    >
      {children}
    </PortalShell>
  );
}
