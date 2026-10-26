"use client";

import React, { useState } from "react";
import Image from "next/image";
import { trainers, Trainer } from "@/data/trainers";
import { useBookingModal } from "@/context/BookingModalContext";
import { Shield, ArrowRight, Award, Compass, MessageSquare } from "lucide-react";

export function TrainersDirectory() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const { openBookingModal } = useBookingModal();

  const specialties = [
    "All",
    "Barbell Mechanics",
    "Functional Range Conditioning",
    "Energy Systems Development",
    "Hypertrophy Programming",
    "Mobility & Breathwork",
  ];

  const filteredTrainers =
    selectedSpecialty === "All"
      ? trainers
      : trainers.filter((t) =>
          t.specialization.some((s) => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))
        );

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Specialty Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 no-scrollbar border-b border-prospira-border">
        <span className="text-xs font-mono uppercase tracking-wider text-prospira-dim mr-2 hidden sm:inline">
          SPECIALIZATION:
        </span>
        {specialties.map((spec) => {
          const isActive = spec === selectedSpecialty;
          return (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap ${
                isActive
                  ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                  : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60 hover:text-prospira-text"
              }`}
            >
              {spec}
            </button>
          );
        })}
      </div>

      {/* Coaches Detailed Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredTrainers.map((coach) => (
          <div
            key={coach.id}
            id={coach.id}
            className="bg-prospira-surface border border-prospira-border rounded-2xl overflow-hidden flex flex-col justify-between scroll-mt-28 hover:border-prospira-borderLight transition-colors"
          >
            <div>
              {/* Top Split: Image + Essential Info */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 border-b border-prospira-border">
                {/* Portrait (5 cols) */}
                <div className="sm:col-span-5 relative min-h-[260px] sm:min-h-full overflow-hidden bg-prospira-card">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover filter contrast-[1.08] grayscale-[0.1]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/80 border border-white/10 rounded text-prospira-accent backdrop-blur-sm">
                      {coach.experienceYears} YRS EXP
                    </span>
                  </div>
                </div>

                {/* Name, Role & Specialties (7 cols) */}
                <div className="sm:col-span-7 p-6 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-prospira-accent">
                    PROSPIRA STAFF ROSTER
                  </div>
                  <h3 className="text-2xl font-bold font-display text-prospira-text">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-mono text-prospira-muted">
                    {coach.role}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {coach.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-prospira-card border border-prospira-border text-prospira-text"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-prospira-dim">
                    <span className="font-semibold text-prospira-muted">Style:</span> {coach.coachingStyle}
                  </div>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-prospira-muted leading-relaxed">
                  {coach.bio}
                </p>

                {/* Philosophy Quote */}
                <div className="p-3.5 bg-prospira-card rounded-lg border-l-2 border-prospira-accent text-xs italic text-prospira-text/90">
                  &quot;{coach.philosophy}&quot;
                </div>

                {/* Sample Credentials */}
                <div className="pt-2 text-[11px] font-mono text-prospira-dim space-y-1">
                  <span className="text-prospira-muted uppercase tracking-wider block">
                    SAMPLE CREDENTIALS (CONCEPT):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coach.sampleCredentials.map((cred) => (
                      <span key={cred} className="px-2 py-0.5 bg-prospira-bg border border-prospira-border rounded text-[10px]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-prospira-border mt-4 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-prospira-dim">
                Available for 1-on-1 & small squad oversight
              </span>

              <button
                onClick={() =>
                  openBookingModal({
                    defaultCoach: coach.name,
                    defaultProgram: "Private Coaching (1-on-1)",
                    sourceContext: `COACH_${coach.slug.toUpperCase()}`,
                  })
                }
                className="px-4 py-2.5 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg text-xs font-display font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 shadow-md flex-shrink-0"
              >
                <span>Consult Coach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Standards Disclaimer */}
      <div className="mt-16 p-4 bg-prospira-card/60 border border-prospira-border rounded-lg text-center text-xs text-prospira-dim font-mono">
        Coaching roster represents illustrative staff qualifications for demonstration. Direct coach scheduling opens upon facility onboarding.
      </div>
    </div>
  );
}
