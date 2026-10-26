import React from "react";
import { Metadata } from "next";
import { ProgramsDirectory } from "@/components/programs/ProgramsDirectory";

export const metadata: Metadata = {
  title: "Training Programs & Disciplines",
  description:
    "Explore Prospira's structured training tracks: Strength & Conditioning, Private 1-on-1, Functional Fitness, HIIT & MetCon, and Active Mobility.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE CURRICULUM</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              STRUCTURED DISCIPLINES. QUANTIFIABLE RESULTS.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              Every program at Prospira is built with a defined progressive mechanism. Select a discipline below to view the training pillars, sample session structure, and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Directory with filters & cards */}
      <ProgramsDirectory />
    </div>
  );
}
