import React from "react";
import { Metadata } from "next";
import { MembershipComparison } from "@/components/membership/MembershipComparison";

export const metadata: Metadata = {
  title: "Membership Tiers & Plans",
  description:
    "Explore transparent membership options at Prospira: Essential, Performance, and Elite. No predatory contracts, 14-day pause terms, and world-class equipment.",
};

export default function MembershipPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE AGREEMENT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              INVEST IN SUSTAINABLE PROGRESS.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              Transparent dues, no initiation fees, and zero long-term cancellation traps. Review the deliverables below and begin your trial session.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Component */}
      <MembershipComparison />
    </div>
  );
}
