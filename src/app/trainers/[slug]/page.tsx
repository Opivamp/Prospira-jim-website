import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { trainers } from "@/data/trainers";
import { scheduleSessions } from "@/data/schedule";
import { ArrowLeft, Clock, Calendar, ArrowRight, ShieldCheck, Award } from "lucide-react";

interface TrainerPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return trainers.map((t) => ({
    slug: t.slug,
  }));
}

export function generateMetadata({ params }: TrainerPageProps): Metadata {
  const trainer = trainers.find((t) => t.slug === params.slug);
  if (!trainer) return { title: "Coach Not Found" };

  return {
    title: `${trainer.name} — ${trainer.role} | Prospira Coaching`,
    description: trainer.bio,
  };
}

export default function SingleTrainerPage({ params }: TrainerPageProps) {
  const trainer = trainers.find((t) => t.slug === params.slug);
  if (!trainer) notFound();

  // Find coached sessions
  const coachedSessions = scheduleSessions.filter(
    (s) => s.coachSlug === trainer.slug || s.coach.toLowerCase() === trainer.name.toLowerCase()
  );

  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/trainers"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prospira-dim hover:text-prospira-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Coaching Staff</span>
        </Link>
      </div>

      {/* Coach Hero Header */}
      <section className="py-12 lg:py-20 border-b border-prospira-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-prospira-border shadow-2xl bg-prospira-card">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.1] grayscale-[0.1]"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-black/80 border border-white/10 rounded text-prospira-accent backdrop-blur-sm">
                    {trainer.experienceYears}+ YEARS COACHING
                  </span>
                </div>
              </div>
            </div>

            {/* Coach Summary (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-prospira-surface border border-prospira-border rounded text-[11px] font-mono uppercase tracking-widest text-prospira-accent">
                <span>HEAD PERFORMANCE STAFF</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text">
                {trainer.name}
              </h1>

              <p className="text-lg text-prospira-accent font-mono">
                {trainer.role}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {trainer.specialization.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-mono px-3 py-1 bg-prospira-surface border border-prospira-border rounded text-prospira-text"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="text-base text-prospira-muted leading-relaxed max-w-2xl">
                {trainer.bio}
              </p>

              {/* Philosophy Quote */}
              <div className="p-4 bg-prospira-surface rounded-xl border-l-2 border-prospira-accent text-sm italic text-prospira-text/90">
                &quot;{trainer.philosophy}&quot;
              </div>

              <div className="pt-2 text-xs font-mono text-prospira-dim flex items-center gap-4">
                <span>Coaching Cadence: <strong className="text-prospira-muted">{trainer.coachingStyle}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Credentials */}
      <section className="py-16 sm:py-24 border-b border-prospira-border bg-prospira-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              EDUCATION & CERTIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
              Professional Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trainer.sampleCredentials.map((cred) => (
              <div key={cred} className="p-6 bg-prospira-card border border-prospira-border rounded-xl space-y-2">
                <Award className="w-5 h-5 text-prospira-accent" />
                <h3 className="font-display font-bold text-sm text-prospira-text">
                  {cred}
                </h3>
                <span className="text-[10px] font-mono text-prospira-dim block uppercase">
                  Verified Standard Specimen
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs font-mono text-prospira-dim">
            Credentials shown reflect sample model qualifications for the Prospira brand architecture.
          </p>
        </div>
      </section>

      {/* Coached Weekly Classes */}
      {coachedSessions.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-prospira-border bg-prospira-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                  TIMETABLE AVAILABILITY
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                  Sessions Coached by {trainer.name}
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
              {coachedSessions.map((session) => (
                <div key={session.id} className="p-5 bg-prospira-surface border border-prospira-border rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-prospira-accent font-semibold">{session.day}</span>
                    <span className="text-prospira-dim">{session.startTime} — {session.endTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-prospira-text">
                    {session.name}
                  </h3>
                  <p className="text-xs text-prospira-muted">
                    {session.room} • {session.intensity}
                  </p>
                  <Link
                    href="/schedule"
                    className="pt-2 block text-xs font-mono text-prospira-accent hover:underline"
                  >
                    Reserve Spot on Timetable →
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
