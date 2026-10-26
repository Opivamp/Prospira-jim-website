import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { programs } from "@/data/programs";
import { scheduleSessions } from "@/data/schedule";
import { Clock, Users, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";

interface ProgramPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProgramPageProps): Metadata {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} | Prospira Training Discipline`,
    description: program.description,
  };
}

export default function SingleProgramPage({ params }: ProgramPageProps) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  // Find matching weekly sessions
  const relatedSessions = scheduleSessions.filter(
    (s) => s.category.toLowerCase() === program.category.toLowerCase()
  );

  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prospira-dim hover:text-prospira-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Training Programs</span>
        </Link>
      </div>

      {/* Program Hero */}
      <section className="py-12 lg:py-20 border-b border-prospira-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-prospira-surface border border-prospira-border rounded text-[11px] font-mono uppercase tracking-widest text-prospira-accent">
                <span>DISCIPLINE TRACK // {program.category.toUpperCase()}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text">
                {program.title}
              </h1>

              <p className="text-lg text-prospira-accent font-mono">
                {program.subtitle}
              </p>

              <p className="text-base text-prospira-muted leading-relaxed max-w-2xl">
                {program.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-6 text-xs font-mono text-prospira-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-prospira-accent" />
                  <span>Session: {program.sessionLength}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-prospira-accent" />
                  <span>Ratio: {program.coachRatio}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-prospira-accent" />
                  <span>Commitment: {program.weeklyCommitment}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-prospira-border shadow-2xl">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.1] grayscale-[0.1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Core Pillars */}
      <section className="py-16 sm:py-24 border-b border-prospira-border bg-prospira-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                PROFILE SUITABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                Who This Program Serves
              </h2>
              <div className="p-6 bg-prospira-card rounded-xl border border-prospira-border text-sm text-prospira-muted leading-relaxed">
                {program.intendedFor}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                Key Adaptation Pillars
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.trainingFocus.map((item, idx) => (
                  <div key={item} className="p-5 bg-prospira-card border border-prospira-border rounded-xl space-y-2">
                    <span className="font-mono text-xs text-prospira-accent font-bold">
                      0{idx + 1}. PILLAR
                    </span>
                    <p className="text-xs text-prospira-text font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Structure Breakdown */}
      <section className="py-16 sm:py-24 border-b border-prospira-border bg-prospira-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              KINETIC PROGRESSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
              The 4-Phase Session Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.sampleStructure.map((step) => (
              <div key={step.phase} className="p-6 bg-prospira-surface border border-prospira-border rounded-xl space-y-3">
                <span className="text-xs font-mono font-bold text-prospira-accent">
                  {step.phase}
                </span>
                <p className="text-xs text-prospira-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Sessions from Timetable */}
      {relatedSessions.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-prospira-border bg-prospira-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                  TIMETABLE INTEGRATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                  Upcoming Coached Sessions
                </h2>
              </div>
              <Link
                href="/schedule"
                className="text-xs font-mono uppercase tracking-wider text-prospira-accent hover:underline flex items-center gap-1"
              >
                <span>Full Timetable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSessions.slice(0, 3).map((session) => (
                <div key={session.id} className="p-5 bg-prospira-card border border-prospira-border rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-prospira-accent font-semibold">{session.day}</span>
                    <span className="text-prospira-dim">{session.startTime} — {session.endTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-prospira-text">
                    {session.name}
                  </h3>
                  <p className="text-xs text-prospira-muted">
                    Coach {session.coach} • {session.room}
                  </p>
                  <Link
                    href="/schedule"
                    className="pt-2 block text-xs font-mono text-prospira-accent hover:underline"
                  >
                    Reserve on Schedule →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
