import React from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/programs";
import { ArrowUpRight, Clock, Users, Target } from "lucide-react";

export function HomePrograms() {
  const [p1, p2, p3, p4, p5, p6] = programs;

  return (
    <section className="py-24 sm:py-32 bg-prospira-surface border-b border-prospira-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>SYSTEMATIC TRACKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
              ENGINEERED TRAINING DISCIPLINES
            </h2>
            <p className="text-base text-prospira-muted leading-relaxed">
              Every discipline is built on a specific physiological adaptation. From pure barbell strength to high-threshold metabolic endurance and tissue longevity.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prospira-text hover:text-prospira-accent py-2 transition-colors border-b border-prospira-border hover:border-prospira-accent self-start md:self-end"
          >
            <span>VIEW ALL 6 DISCIPLINES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Item 1: Strength & Conditioning (Spans 7 cols - Large Hero Card) */}
          <div className="lg:col-span-7 group relative bg-prospira-card border border-prospira-border hover:border-prospira-muted/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image
                src={p1.image}
                alt={p1.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prospira-card via-prospira-card/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-prospira-bg/90 border border-prospira-border rounded text-prospira-accent">
                  FLAGSHIP DISCIPLINE
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                    {p1.title}
                  </h3>
                  <span className="text-xs font-mono text-prospira-dim">
                    01 // STR
                  </span>
                </div>
                <p className="text-sm text-prospira-muted mb-4 leading-relaxed">
                  {p1.description}
                </p>
                <div className="bg-prospira-surface p-3 rounded-lg border border-prospira-border text-xs text-prospira-muted space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-prospira-accent font-semibold">
                    WHO IT IS FOR
                  </div>
                  <p>{p1.intendedFor}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-prospira-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-prospira-muted">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-prospira-accent" />
                    {p1.sessionLength}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-prospira-accent" />
                    {p1.coachRatio}
                  </span>
                </div>
                <Link
                  href={`/programs#${p1.id}`}
                  className="inline-flex items-center gap-1.5 text-prospira-accent hover:underline font-semibold"
                >
                  <span>Explore Curriculum</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Item 2: Private 1-on-1 Coaching (Spans 5 cols) */}
          <div className="lg:col-span-5 group relative bg-prospira-card border border-prospira-border hover:border-prospira-muted/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={p2.image}
                alt={p2.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prospira-card via-prospira-card/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-prospira-accent text-prospira-bg font-bold rounded">
                  1-ON-1 BESPOKE
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-prospira-text">
                    {p2.title}
                  </h3>
                  <span className="text-xs font-mono text-prospira-dim">
                    02 // BESPOKE
                  </span>
                </div>
                <p className="text-sm text-prospira-muted mb-4 leading-relaxed">
                  {p2.description}
                </p>
                <div className="bg-prospira-surface p-3 rounded-lg border border-prospira-border text-xs text-prospira-muted space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-prospira-accent font-semibold">
                    WHO IT IS FOR
                  </div>
                  <p>{p2.intendedFor}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-prospira-border flex items-center justify-between gap-4 text-xs font-mono text-prospira-muted">
                <span className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-prospira-accent" />
                  Individualized Telemetry
                </span>
                <Link
                  href={`/programs#${p2.id}`}
                  className="inline-flex items-center gap-1.5 text-prospira-accent hover:underline font-semibold"
                >
                  <span>Consult Coach</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Three Compact Cards: Functional, HIIT MetCon, Mobility Recovery (4 cols each) */}
          {[p3, p4, p5].map((prog, idx) => (
            <div
              key={prog.id}
              className="lg:col-span-4 group bg-prospira-card border border-prospira-border hover:border-prospira-muted/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prospira-card via-prospira-card/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 bg-prospira-bg/90 border border-prospira-border rounded text-prospira-text">
                    {prog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold font-display text-prospira-text">
                      {prog.title}
                    </h3>
                    <span className="text-[11px] font-mono text-prospira-dim">
                      0{idx + 3}
                    </span>
                  </div>
                  <p className="text-xs text-prospira-muted leading-relaxed line-clamp-3 mb-3">
                    {prog.description}
                  </p>
                  <p className="text-[11px] text-prospira-dim">
                    <strong className="text-prospira-muted">Focus:</strong> {prog.intendedFor}
                  </p>
                </div>

                <div className="pt-3 border-t border-prospira-border flex items-center justify-between text-xs font-mono">
                  <span className="text-prospira-dim">{prog.sessionLength}</span>
                  <Link
                    href={`/programs#${prog.id}`}
                    className="inline-flex items-center gap-1 text-prospira-accent hover:underline"
                  >
                    <span>View track</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
