import React from "react";
import { RoleCard, RoleCardData } from "./role-card";

const sampleCards: RoleCardData[] = [
  {
    company: "Zepto",
    timeAgo: "2d ago",
    matchScore: "96%",
    matchLabel: "Perfect fit",
    role: "Product Manager",
    tags: ["Bengaluru", "Hybrid", "Full-time", "4–8 yrs", "₹35–55 LPA"],
    description:
      "Strong title match · shares 4 of your skills · in your location.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    rotation: "left",
    dealRotateFrom: -14,
    dealRotateTo: -2,
  },
  {
    company: "Razorpay",
    timeAgo: "1d ago",
    matchScore: "92%",
    matchLabel: "Perfect fit",
    role: "Engineering Manager",
    tags: ["Bengaluru", "Remote", "Full-time", "8–12 yrs", "₹45–65 LPA"],
    description:
      "Strong title match · shares 5 of your skills · in your location.",
    skills: ["Leadership", "React", "Node.js", "GraphQL"],
    isCenter: true,
    rotation: "center",
    dealRotateFrom: 8,
    dealRotateTo: 0,
  },
  {
    company: "Groww",
    timeAgo: "3d ago",
    matchScore: "89%",
    matchLabel: "Perfect fit",
    role: "Software Engineer",
    tags: ["Pune", "Hybrid", "Full-time", "3–6 yrs", "₹28–42 LPA"],
    description:
      "Strong title match · shares 4 of your skills · in your location.",
    skills: ["TypeScript", "Next.js", "AWS", "React"],
    rotation: "right",
    dealRotateFrom: 16,
    dealRotateTo: 2,
  },
];

export function RoleCardStack() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3 xl:gap-6 py-6 px-2">
      {sampleCards.map((card, idx) => (
        <RoleCard key={idx} data={card} />
      ))}
    </div>
  );
}

