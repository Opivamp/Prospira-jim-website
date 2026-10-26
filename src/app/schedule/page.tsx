import React from "react";
import { Metadata } from "next";
import { ScheduleInteractive } from "@/components/schedule/ScheduleInteractive";

export const metadata: Metadata = {
  title: "Class Schedule & Weekly Timetable",
  description:
    "View the complete weekly timetable of coached sessions at Prospira: Barbell Foundations, Erg Intervals, Squad Athletics, and Down-regulation.",
};

export default function SchedulePage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE TIMETABLE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              WEEKLY TRAINING SESSIONS.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              Every class is capped to preserve floor space and coach feedback. Browse sessions across Monday through Sunday and reserve your platform.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Interactive Component */}
      <ScheduleInteractive />
    </div>
  );
}
