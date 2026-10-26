"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { programs, Program } from "@/data/programs";
import { useBookingModal } from "@/context/BookingModalContext";
import { Clock, Users, Calendar, ArrowRight, CheckCircle2, Target } from "lucide-react";

export function ProgramsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { openBookingModal } = useBookingModal();

  const categories = ["All", "Strength", "Conditioning", "Personal", "Recovery"];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 no-scrollbar border-b border-prospira-border">
        <span className="text-xs font-mono uppercase tracking-wider text-prospira-dim mr-2 hidden sm:inline">
          FILTER DISCIPLINE:
        </span>
        {categories.map((cat) => {
          const isActive = cat === selectedCategory;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                isActive
                  ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                  : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60 hover:text-prospira-text"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Programs List */}
      <div className="space-y-16">
        {filteredPrograms.map((program, idx) => (
          <div
            key={program.id}
            id={program.id}
            className="bg-prospira-surface border border-prospira-border rounded-2xl overflow-hidden scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image & Quick Badges (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-prospira-card">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.08] grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prospira-surface via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-prospira-bg/90 border border-prospira-border rounded text-prospira-accent">
                    TRACK 0{idx + 1} // {program.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content and Structure Breakdown (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-prospira-text">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-sm font-mono text-prospira-accent">
                    {program.subtitle}
                  </p>

                  <p className="text-sm text-prospira-muted leading-relaxed">
                    {program.description}
                  </p>

                  {/* Target Audience */}
                  <div className="p-3.5 bg-prospira-card rounded-lg border border-prospira-border text-xs text-prospira-muted space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-prospira-accent font-semibold block">
                      INTENDED AUDIENCE:
                    </span>
                    <p className="leading-relaxed">{program.intendedFor}</p>
                  </div>

                  {/* Key Pillars */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-prospira-dim block">
                      CORE TRAINING FOCUS
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {program.trainingFocus.map((focus) => (
                        <li key={focus} className="flex items-start gap-2 text-prospira-text">
                          <CheckCircle2 className="w-3.5 h-3.5 text-prospira-accent flex-shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sample 4-Phase Session Structure */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-prospira-dim block">
                      SAMPLE SESSION STRUCTURE (60–65 MIN)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {program.sampleStructure.map((step) => (
                        <div key={step.phase} className="p-2.5 bg-prospira-bg/60 border border-prospira-border/70 rounded">
                          <div className="font-mono text-[10px] text-prospira-accent font-semibold">
                            {step.phase}
                          </div>
                          <div className="text-[11px] text-prospira-muted mt-0.5">
                            {step.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & Actions */}
                <div className="pt-6 border-t border-prospira-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-prospira-dim">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-prospira-accent" />
                      {program.sessionLength}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-prospira-accent" />
                      {program.coachRatio}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{program.weeklyCommitment}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/schedule"
                      className="px-4 py-2.5 bg-prospira-card hover:bg-prospira-border border border-prospira-border text-xs font-mono uppercase tracking-wider rounded text-prospira-text transition-colors flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-prospira-dim" />
                      <span>Timetable</span>
                    </Link>

                    <button
                      onClick={() =>
                        openBookingModal({
                          defaultProgram: program.title,
                          sourceContext: `PROGRAM_${program.id.toUpperCase()}`,
                        })
                      }
                      className="px-5 py-2.5 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg text-xs font-display font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <span>Book Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
