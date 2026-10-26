"use client";

import React, { useState } from "react";
import { scheduleSessions, daysOfWeek, DayOfWeek, ClassSession } from "@/data/schedule";
import { useBookingModal } from "@/context/BookingModalContext";
import { Clock, User, MapPin, ArrowRight, Filter, Users, Calendar, AlertCircle } from "lucide-react";

export function ScheduleInteractive() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIntensity, setSelectedIntensity] = useState<string>("All");

  const { openBookingModal } = useBookingModal();

  const categories = ["All", "Strength", "Conditioning", "Functional", "Mobility"];
  const intensities = ["All", "All Levels", "Intermediate", "Advanced"];

  const filteredSessions = scheduleSessions.filter((session) => {
    const matchDay = selectedDay === "All Days" || session.day === selectedDay;
    const matchCategory = selectedCategory === "All" || session.category === selectedCategory;
    const matchIntensity = selectedIntensity === "All" || session.intensity === selectedIntensity;
    return matchDay && matchCategory && matchIntensity;
  });

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filters Bar */}
      <div className="space-y-6 mb-12">
        {/* Day Selector */}
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-prospira-dim block mb-3">
            SELECT DAY OF WEEK:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedDay("All Days")}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                selectedDay === "All Days"
                  ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                  : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60"
              }`}
            >
              ALL DAYS
            </button>
            {daysOfWeek.map((day) => {
              const isActive = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                      : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category & Intensity Dropdowns */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-prospira-border">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-prospira-dim uppercase">Discipline:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-prospira-surface border border-prospira-border text-xs font-mono rounded px-3 py-1.5 text-prospira-text focus:border-prospira-accent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-prospira-dim uppercase">Intensity:</span>
            <select
              value={selectedIntensity}
              onChange={(e) => setSelectedIntensity(e.target.value)}
              className="bg-prospira-surface border border-prospira-border text-xs font-mono rounded px-3 py-1.5 text-prospira-text focus:border-prospira-accent"
            >
              {intensities.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-mono text-prospira-dim ml-auto">
            Showing <strong className="text-prospira-accent">{filteredSessions.length}</strong> scheduled sessions
          </div>
        </div>
      </div>

      {/* Sessions Grid */}
      {filteredSessions.length === 0 ? (
        <div className="bg-prospira-surface border border-prospira-border rounded-xl p-12 text-center space-y-4">
          <AlertCircle className="w-8 h-8 text-prospira-dim mx-auto" />
          <h3 className="text-lg font-bold font-display text-prospira-text">
            No Sessions Match Current Filters
          </h3>
          <p className="text-xs text-prospira-muted max-w-sm mx-auto">
            Try adjusting your discipline or intensity filters to display additional scheduled sessions.
          </p>
          <button
            onClick={() => {
              setSelectedDay("Monday");
              setSelectedCategory("All");
              setSelectedIntensity("All");
            }}
            className="px-4 py-2 bg-prospira-card border border-prospira-border text-xs font-mono text-prospira-accent rounded"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-prospira-surface border border-prospira-border hover:border-prospira-borderLight rounded-xl p-6 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Day & Time Column */}
              <div className="lg:w-48 flex-shrink-0 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-prospira-accent font-semibold block">
                  {session.day.toUpperCase()}
                </span>
                <div className="font-mono text-lg font-bold text-prospira-text flex items-center gap-2">
                  <Clock className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                  <span>{session.startTime} — {session.endTime}</span>
                </div>
                <span className="text-xs font-mono text-prospira-dim block">
                  Duration: {session.durationMinutes} min
                </span>
              </div>

              {/* Class Info */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-bold font-display text-prospira-text">
                    {session.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-prospira-card border border-prospira-border text-prospira-accent">
                    {session.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-prospira-card text-prospira-muted">
                    {session.intensity}
                  </span>
                </div>

                <p className="text-xs text-prospira-muted leading-relaxed max-w-2xl">
                  {session.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-prospira-dim pt-1">
                  <span className="flex items-center gap-1.5 text-prospira-muted">
                    <User className="w-3.5 h-3.5 text-prospira-accent" />
                    <span>Coach {session.coach}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-prospira-dim" />
                    <span>{session.room}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-prospira-dim" />
                    <span>{session.enrolled} / {session.capacity} Registered</span>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 pt-2 lg:pt-0">
                <button
                  onClick={() =>
                    openBookingModal({
                      defaultProgram: session.name,
                      sourceContext: `SCHEDULE_SESSION_${session.name.toUpperCase()}`,
                    })
                  }
                  className="w-full lg:w-auto px-5 py-2.5 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg text-xs font-display font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Reserve Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Class Protocol Details */}
      <div className="mt-16 bg-prospira-card/60 border border-prospira-border rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-prospira-muted">
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-prospira-accent font-semibold">
            01. CANCELLATION POLICY
          </div>
          <p className="leading-relaxed">
            Please cancel reservations at least 2 hours prior to class start so waitlisted members may take your barbell station.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-prospira-accent font-semibold">
            02. ARRIVAL & WARM-UP
          </div>
          <p className="leading-relaxed">
            Arrive 10 minutes prior to session time. Warm-up platforms open early for soft-tissue prep and joint mobility.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-prospira-accent font-semibold">
            03. APP TELEMETRY
          </div>
          <p className="leading-relaxed">
            Member accounts automatically log class attendance, load metrics, and coach feedback in the Prospira Athlete portal.
          </p>
        </div>
      </div>
    </div>
  );
}
