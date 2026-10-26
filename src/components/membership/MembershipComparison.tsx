"use client";

import React, { useState } from "react";
import { membershipTiers, membershipFaqs } from "@/data/memberships";
import { useBookingModal } from "@/context/BookingModalContext";
import { Check, X, ArrowRight, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";

export function MembershipComparison() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { openBookingModal } = useBookingModal();

  // Full Feature Matrix rows
  const matrixRows = [
    {
      category: "Facility & Access",
      items: [
        {
          name: "Floor Hours Access",
          essential: "Standard (05:30 — 22:30)",
          performance: "Full + Priority Entry",
          elite: "24/7 Keycard Concierge",
        },
        {
          name: "Olympic Barbells & Platforms",
          essential: "Full Access",
          performance: "Full + Priority Reserve",
          elite: "Dedicated Reserved Platform",
        },
        {
          name: "Cardio Ergometer Lab (Concept2, Echo)",
          essential: "Unlimited",
          performance: "Unlimited",
          elite: "Unlimited",
        },
        {
          name: "Digital Lockers & Towel Service",
          essential: "Daily Use",
          performance: "Daily Use",
          elite: "Permanent Assigned Locker + Laundry",
        },
      ],
    },
    {
      category: "Coaching & Classes",
      items: [
        {
          name: "Structured Group Athletics Classes",
          essential: "Drop-in ($25/session)",
          performance: "Unlimited Included",
          elite: "Unlimited Included + Reserved",
        },
        {
          name: "1-on-1 Private Coaching Sessions",
          essential: "None",
          performance: "1 Session / Month",
          elite: "4 Sessions / Month (Weekly)",
        },
        {
          name: "Movement & Kinematic Screening",
          essential: "Quarterly Baseline",
          performance: "Monthly Audit",
          elite: "Bi-Weekly Video Audit",
        },
        {
          name: "Bespoke Nutrition Protocol",
          essential: "Guidebook Access",
          performance: "Monthly Check-in",
          elite: "Weekly Macro Adjustment",
        },
        {
          name: "Class Advance Booking Window",
          essential: "48 Hours",
          performance: "7 Days",
          elite: "Guaranteed Spot Anytime",
        },
      ],
    },
    {
      category: "Recovery & Amenities",
      items: [
        {
          name: "Thermal Cedar Sauna (90°C)",
          essential: "Drop-in ($20)",
          performance: "Unlimited Access",
          elite: "Unlimited Access",
        },
        {
          name: "Contrast Cold Hydro Plunge (10°C)",
          essential: "Drop-in ($20)",
          performance: "Unlimited Access",
          elite: "Unlimited Access",
        },
        {
          name: "Percussion Stations & Normatec Boots",
          essential: "Not Included",
          performance: "Recovery Suite Hours",
          elite: "Unlimited Priority",
        },
        {
          name: "Guest Day Passes",
          essential: "1 / Month",
          performance: "2 / Month",
          elite: "4 / Month",
        },
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Billing Switcher */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center bg-prospira-card border border-prospira-border p-1 rounded-lg">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 ${
              !isAnnual
                ? "bg-prospira-accent text-prospira-bg font-bold shadow-sm"
                : "text-prospira-muted hover:text-prospira-text"
            }`}
          >
            MONTH-TO-MONTH (FLEXIBLE)
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-1.5 ${
              isAnnual
                ? "bg-prospira-accent text-prospira-bg font-bold shadow-sm"
                : "text-prospira-muted hover:text-prospira-text"
            }`}
          >
            <span>ANNUAL COMMITMENT</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
              15% REDUCTION
            </span>
          </button>
        </div>
        <p className="text-xs text-prospira-dim font-mono">
          All month-to-month plans can be paused with 14 business days notice.
        </p>
      </div>

      {/* 3 Tier Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
        {membershipTiers.map((tier) => {
          const price = isAnnual ? tier.annualPriceMonthly : tier.monthlyPrice;
          return (
            <div
              key={tier.id}
              className={`bg-prospira-surface rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? "border-prospira-accent shadow-2xl shadow-prospira-accent/5 ring-1 ring-prospira-accent/30"
                  : "border-prospira-border hover:border-prospira-muted/60"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 bg-prospira-accent text-prospira-bg text-[10px] font-mono font-bold uppercase tracking-widest rounded-full shadow-md">
                    BENCHMARK STANDARD
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold font-display text-prospira-text">
                    {tier.name}
                  </h2>
                  <span className="text-xs font-mono text-prospira-dim uppercase">
                    TIER 0{tier.id === "essential" ? "1" : tier.id === "performance" ? "2" : "3"}
                  </span>
                </div>

                <p className="text-xs text-prospira-muted min-h-[36px] mb-6 leading-relaxed">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-prospira-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-prospira-text">
                      ${price}
                    </span>
                    <span className="text-xs font-mono text-prospira-muted">
                      / month
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-prospira-dim block mt-1">
                    {isAnnual ? "Billed annually ($" + price * 12 + "/yr)" : "No lock-in contracts"}
                  </span>
                </div>

                {/* Intended Audience Box */}
                <div className="p-3.5 bg-prospira-card rounded-lg border border-prospira-border text-xs text-prospira-muted mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-prospira-accent font-semibold block mb-1">
                    BUILT SPECIFICALLY FOR:
                  </span>
                  <p className="text-[11px] leading-relaxed">{tier.intendedFor}</p>
                </div>

                {/* Quick Highlights */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-prospira-dim">
                    PRIMARY DELIVERABLES
                  </div>
                  <ul className="space-y-2.5 text-xs">
                    {tier.features.slice(0, 5).map((f) => (
                      <li key={f.name} className="flex items-start gap-2 text-prospira-text">
                        {f.included ? (
                          <Check className="w-4 h-4 text-prospira-accent flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-prospira-dim/40 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={f.included ? "text-prospira-text" : "text-prospira-dim"}>
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() =>
                    openBookingModal({
                      defaultPlan: tier.id,
                      sourceContext: `MEMBERSHIP_PAGE_${tier.name}`,
                    })
                  }
                  className={`w-full py-3.5 px-6 font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                    tier.isPopular
                      ? "bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg"
                      : "bg-prospira-card hover:bg-prospira-border text-prospira-text border border-prospira-border"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Complete Side-by-Side Comparison Matrix */}
      <div className="mb-20">
        <div className="max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
            EXHAUSTIVE AUDIT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
            Side-by-Side Feature Matrix
          </h2>
          <p className="text-xs text-prospira-muted">
            Detailed breakdown of tier deliverables across access, coaching, recovery, and amenities.
          </p>
        </div>

        <div className="overflow-x-auto bg-prospira-surface border border-prospira-border rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-prospira-border bg-prospira-card">
                <th className="py-4 px-6 font-mono uppercase tracking-wider text-prospira-dim w-1/3">
                  Service / Benefit
                </th>
                <th className="py-4 px-6 font-display font-bold text-prospira-text w-2/9">
                  ESSENTIAL
                </th>
                <th className="py-4 px-6 font-display font-bold text-prospira-accent w-2/9 bg-prospira-accent/5">
                  PERFORMANCE
                </th>
                <th className="py-4 px-6 font-display font-bold text-prospira-text w-2/9">
                  ELITE
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((cat) => (
                <React.Fragment key={cat.category}>
                  <tr className="bg-prospira-bg/60 border-t border-b border-prospira-border">
                    <td
                      colSpan={4}
                      className="py-2.5 px-6 font-mono text-[11px] uppercase tracking-widest text-prospira-accent font-semibold"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-prospira-border/60 hover:bg-prospira-card/50 transition-colors"
                    >
                      <td className="py-3.5 px-6 text-prospira-text font-medium">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-6 text-prospira-muted">
                        {item.essential}
                      </td>
                      <td className="py-3.5 px-6 text-prospira-text bg-prospira-accent/5 font-medium">
                        {item.performance}
                      </td>
                      <td className="py-3.5 px-6 text-prospira-text">
                        {item.elite}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Membership FAQs */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-bold font-display text-prospira-text">
            Membership Policies & FAQ
          </h2>
          <p className="text-xs text-prospira-muted font-mono">
            Clear guidelines on pause policies, upgrades, guest passes, and terms.
          </p>
        </div>

        <div className="space-y-4">
          {membershipFaqs.map((faq, idx) => (
            <details
              key={faq.question}
              name="membership-faq"
              className="group bg-prospira-surface border border-prospira-border rounded-xl p-5 open:border-prospira-accent/60 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-sm sm:text-base text-prospira-text select-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-4 h-4 text-prospira-dim group-open:rotate-180 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <div className="faq-content pt-3 text-xs sm:text-sm text-prospira-muted leading-relaxed border-t border-prospira-border/50 mt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
