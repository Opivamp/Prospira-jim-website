import React from "react";
import { Metadata } from "next";
import { TrainersDirectory } from "@/components/trainers/TrainersDirectory";

export const metadata: Metadata = {
  title: "Coaching Staff & Personal Trainers",
  description:
    "Meet the experienced coaches and performance specialists at Prospira. Dedicated to biomechanical precision, periodized strength, and athletic longevity.",
};

export default function TrainersPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE COACHING CORPS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              COACHES COMMITTED TO YOUR LONG-TERM PROGRESS.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              We hold our coaching staff to the highest standard in the industry. Every coach is a practitioner first, deeply educated in movement science, lifting mechanics, and individualized progression.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Component */}
      <TrainersDirectory />
    </div>
  );
}
