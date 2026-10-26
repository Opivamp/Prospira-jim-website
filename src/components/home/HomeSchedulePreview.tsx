"use client";

import React, { useState } from "react";
import Link from "next/link";
import { scheduleSessions, DayOfWeek } from "@/data/schedule";
import { useBookingModal } from "@/context/BookingModalContext";
import { Clock, User, ArrowUpRight, Calendar, ArrowRight } from "lucide-react";

export function HomeSchedulePreview() {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Monday");
  const { openBookingModal } = useBookingModal();

  const previewDays: DayOfWeek[] = ["Monday", "Wednesday", "Friday", "Saturday"];
  const daySessions = scheduleSessions.filter((s) => s.day === selectedDay);

  return (
    <section className="py-24 sm:py-32 bg-prospira-bg border-b border-prospira-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>TIMETABLE PREVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
              WEEKLY CLASS ROTATION
            </h2>
            <p className="text-base text-prospira-muted leading-relaxed">
              Every class is capped to preserve floor space and coach feedback. Browse representative session blocks below.
            </p>
          </div>

          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prospira-text hover:text-prospira-accent py-2 transition-colors border-b border-prospira-border hover:border-prospira-accent self-start md:self-end"
          >
            <span>FULL 7-DAY TIMETABLE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Day Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {previewDays.map((day) => {
            const isActive = day === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                    : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60 hover:text-prospira-text"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule List */}
        <div className="space-y-3">
          {daySessions.map((session) => (
            <div
              key={session.id}
              className="p-5 sm:p-6 bg-prospira-surface border border-prospira-border hover:border-prospira-borderLight rounded-xl transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Time & Category */}
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="font-mono text-base sm:text-lg font-bold text-prospira-text tracking-tight flex items-center gap-2">
                  <Clock className="w-4 h-4 text-prospira-accent" />
                  <span>{session.startTime} — {session.endTime}</span>
                </div>
              </div>

              {/* Class Info */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-bold text-prospira-text text-base sm:text-lg">
                    {session.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-prospira-card border border-prospira-border text-prospira-accent">
                    {session.category}
                  </span>
                  <span className="text-[10px] font-mono text-prospira-dim">
                    • {session.intensity}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-prospira-muted">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-prospira-dim" />
                    <span>Coach {session.coach}</span>
                  </span>
                  <span>•</span>
                  <span>{session.room}</span>
                  <span>•</span>
                  <span className="text-[11px] font-mono text-prospira-dim">
                    {session.capacity - session.enrolled} spots available
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 pt-2 md:pt-0">
                <button
                  onClick={() =>
                    openBookingModal({
                      defaultProgram: session.name,
                      sourceContext: `SCHEDULE_${session.name.toUpperCase()}`,
                    })
                  }
                  className="w-full md:w-auto px-4 py-2 bg-prospira-card hover:bg-prospira-accent hover:text-prospira-bg text-prospira-text border border-prospira-border hover:border-prospira-accent text-xs font-mono uppercase tracking-wider rounded transition-all duration-200"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-prospira-surface/40 border border-prospira-border rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-prospira-dim">
          <span>Illustrative timetable. Certified members receive real-time reservation capabilities in the Prospira Athlete portal.</span>
          <Link href="/schedule" className="text-prospira-accent hover:underline flex items-center gap-1 font-mono uppercase">
            <span>Explore complete schedule</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
