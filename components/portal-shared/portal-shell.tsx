"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  LogOut,
  ShieldAlert,
  Building2,
  User,
} from "lucide-react";
import { PortalRole } from "@/types/portal";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
}

interface PortalShellProps {
  role: PortalRole;
  roleLabel: string;
  userName: string;
  userEmail: string;
  navItems: NavItem[];
  children: React.ReactNode;
}

export function PortalShell({
  role,
  roleLabel,
  userName,
  userEmail,
  navItems,
  children,
}: PortalShellProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);

  const getRoleIcon = () => {
    switch (role) {
      case "admin":
        return <ShieldAlert className="w-3.5 h-3.5 text-amber-900" />;
      case "recruiter":
        return <Building2 className="w-3.5 h-3.5 text-blue-900" />;
      case "candidate":
      default:
        return <User className="w-3.5 h-3.5 text-emerald-900" />;
    }
  };

  const getRoleBadgeStyle = () => {
    switch (role) {
      case "admin":
        return "bg-amber-100 text-amber-950 border-amber-300";
      case "recruiter":
        return "bg-blue-100 text-blue-950 border-blue-300";
      case "candidate":
      default:
        return "bg-emerald-100 text-emerald-950 border-emerald-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col lg:flex-row text-zinc-900">
      {/* Mobile Top Header */}
      <header className="lg:hidden flex items-center justify-between px-5 py-3.5 bg-white border-b border-zinc-200 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f0b100] ring-2 ring-amber-200" />
            <span className="font-bold tracking-tight text-lg text-zinc-950">jobfirst</span>
          </Link>
          <span
            className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${getRoleBadgeStyle()}`}
          >
            {roleLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-zinc-700 hover:bg-zinc-100"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Backdrop for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-zinc-200/90 z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Brand Header */}
          <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="h-3 w-3 rounded-full bg-[#f0b100] ring-2 ring-amber-200 group-hover:scale-125 transition-transform" />
              <span className="font-bold tracking-tight text-xl text-zinc-950">
                jobfirst
              </span>
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsPortalDropdownOpen(!isPortalDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all cursor-pointer ${getRoleBadgeStyle()}`}
              >
                {getRoleIcon()}
                <span>{roleLabel}</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70" />
              </button>

              {/* Portal Switcher Dropdown */}
              {isPortalDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 z-50 flex flex-col gap-1 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Switch Portal
                  </div>
                  <Link
                    href="/candidate"
                    onClick={() => setIsPortalDropdownOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${role === "candidate" ? "bg-emerald-50 text-emerald-950 font-bold" : "hover:bg-zinc-50"
                      }`}
                  >
                    <User className="w-4 h-4 text-emerald-600" />
                    <span>Candidate Portal</span>
                  </Link>
                  <Link
                    href="/recruiter"
                    onClick={() => setIsPortalDropdownOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${role === "recruiter" ? "bg-blue-50 text-blue-950 font-bold" : "hover:bg-zinc-50"
                      }`}
                  >
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Recruiter Portal</span>
                  </Link>
                  <Link
                    href="/admin"
                    onClick={() => setIsPortalDropdownOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${role === "admin" ? "bg-amber-50 text-amber-950 font-bold" : "hover:bg-zinc-50"
                      }`}
                  >
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Admin Portal</span>
                  </Link>
                  <div className="border-t border-zinc-100 my-1" />
                  <Link
                    href="/"
                    onClick={() => setIsPortalDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-600 hover:bg-zinc-50 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span>Back to Website</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== `/${role}` && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${isActive
                      ? "bg-[#f0b100] text-white shadow-xs font-bold"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                >
                  <span className={isActive ? "text-white" : "text-zinc-500"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile Card */}
          <div className="p-4 border-t border-zinc-100 bg-zinc-50/70">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-950 flex items-center justify-center font-bold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-950 truncate max-w-[120px]">
                    {userName}
                  </span>
                  <span className="text-[11px] text-zinc-500 truncate max-w-[120px]">
                    {userEmail}
                  </span>
                </div>
              </div>
              <Link
                href="/login"
                title="Logout"
                className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-200/60 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Topbar */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-200/80 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search jobs, candidates, logs..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-50 border border-zinc-200/80 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative p-2 rounded-full text-zinc-600 hover:bg-zinc-100 transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f0b100] rounded-full" />
            </button>
            <div className="h-4 w-px bg-zinc-200 mx-1" />
            <Link
              href="/"
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-950 flex items-center gap-1"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-5 sm:p-8 md:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
