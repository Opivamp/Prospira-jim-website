"use client";

import React, { useState } from "react";
import Link from "next/link";
import { membershipTiers } from "@/data/memberships";
import { useBookingModal } from "@/context/BookingModalContext";
import { Check, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HomeMembership() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-24 sm:py-32 bg-prospira-surface border-b border-prospira-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
            <span className="w-8 h-[1px] bg-prospira-accent" />
            <span>TRANSPARENT COMMITMENT</span>
            <span className="w-8 h-[1px] bg-prospira-accent" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
            MEMBERSHIP TIERS
          </h2>
          <p className="text-base text-prospira-muted leading-relaxed">
            Straightforward pricing without locked-in fine print. Select the tier that matches your frequency, coaching demands, and schedule.
          </p>

          {/* Billing Toggle (Monthly vs Annual) */}
          <div className="inline-flex items-center bg-prospira-card border border-prospira-border p-1 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 ${
                !isAnnual
                  ? "bg-prospira-accent text-prospira-bg font-bold shadow-sm"
                  : "text-prospira-muted hover:text-prospira-text"
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-1.5 ${
                isAnnual
                  ? "bg-prospira-accent text-prospira-bg font-bold shadow-sm"
                  : "text-prospira-muted hover:text-prospira-text"
              }`}
            >
              <span>ANNUAL COMMITMENT</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {membershipTiers.map((tier) => {
            const price = isAnnual ? tier.annualPriceMonthly : tier.monthlyPrice;
            return (
              <div
                key={tier.id}
                className={`bg-prospira-card rounded-xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  tier.isPopular
                    ? "border-prospira-accent shadow-2xl shadow-prospira-accent/5 ring-1 ring-prospira-accent/30"
                    : "border-prospira-border hover:border-prospira-muted/60"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-prospira-accent text-prospira-bg text-[10px] font-mono font-bold uppercase tracking-widest rounded-full shadow-md">
                      RECOMMENDED STANDARD
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold font-display text-prospira-text">
                      {tier.name}
                    </h3>
                    <span className="text-xs font-mono text-prospira-dim uppercase">
                      {tier.accessHours.split(" ")[0]} ACCESS
                    </span>
                  </div>

                  <p className="text-xs text-prospira-muted min-h-[36px] mb-6 leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Price */}
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
                      {isAnnual ? "Billed annually • 12 month term" : "Billed monthly • 14-day notice to pause"}
                    </span>
                  </div>

                  {/* Intended For Box */}
                  <div className="p-3 bg-prospira-surface rounded-lg border border-prospira-border/80 text-xs text-prospira-muted mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-prospira-accent font-semibold block mb-1">
                      IDEAL CANDIDATE:
                    </span>
                    <p className="text-[11px] leading-relaxed">{tier.intendedFor}</p>
                  </div>

                  {/* Key Inclusions */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-prospira-dim">
                      INCLUDED WITH {tier.name}
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      {tier.features.slice(0, 5).map((feat) => (
                        <li key={feat.name} className="flex items-start gap-2.5">
                          {feat.included ? (
                            <Check className="w-4 h-4 text-prospira-accent flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-prospira-dim/40 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feat.included ? "text-prospira-text" : "text-prospira-dim"}>
                            {feat.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() =>
                      openBookingModal({
                        defaultPlan: tier.id,
                        sourceContext: `MEMBERSHIP_${tier.name.toUpperCase()}`,
                      })
                    }
                    className={`w-full py-3.5 px-6 font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                      tier.isPopular
                        ? "bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg"
                        : "bg-prospira-surface hover:bg-prospira-border text-prospira-text border border-prospira-border hover:border-prospira-muted"
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

        {/* Bottom Link to Full Feature Comparison */}
        <div className="text-center pt-4">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prospira-accent hover:underline"
          >
            <span>View complete 18-point feature matrix & guest policies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <p className="text-[11px] font-mono text-prospira-dim mt-2">
            Sample illustrative pricing structure. Dues confirmed at facility opening.
          </p>
        </div>
      </div>
    </section>
  );
}
