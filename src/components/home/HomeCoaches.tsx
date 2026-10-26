import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trainers } from "@/data/trainers";
import { ArrowUpRight } from "lucide-react";

export function HomeCoaches() {
  const featuredCoaches = trainers.filter((c) => c.featured).slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-prospira-bg border-b border-prospira-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>COACHING LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
              MEET THE COACHES
            </h2>
            <p className="text-base text-prospira-muted leading-relaxed">
              Our coaches combine empirical exercise science with years of practical bar-side coaching. No influencers, no superficial routines.
            </p>
          </div>

          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prospira-text hover:text-prospira-accent py-2 transition-colors border-b border-prospira-border hover:border-prospira-accent self-start md:self-end"
          >
            <span>VIEW ALL 6 COACHES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Coaches Grid (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCoaches.map((coach) => (
            <div
              key={coach.id}
              className="group bg-prospira-surface border border-prospira-border hover:border-prospira-muted/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Coach Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-prospira-card">
                <Image
                  src={coach.image}
                  alt={`Portrait of ${coach.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.08] grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prospira-surface via-transparent to-transparent opacity-90" />
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/70 border border-white/10 rounded text-prospira-accent backdrop-blur-sm">
                    {coach.experienceYears}+ YRS EXP
                  </span>
                </div>
              </div>

              {/* Coach Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-prospira-text group-hover:text-prospira-accent transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-mono text-prospira-accent mt-0.5 mb-3">
                    {coach.role}
                  </p>
                  <p className="text-xs text-prospira-muted line-clamp-3 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-prospira-border flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-prospira-dim">
                    {coach.specialization[0]}
                  </span>
                  <Link
                    href={`/trainers#${coach.id}`}
                    className="inline-flex items-center gap-1 text-prospira-accent hover:underline font-mono text-xs"
                  >
                    <span>Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Profile Disclaimer */}
        <p className="mt-8 text-center text-[11px] text-prospira-dim font-mono">
          Sample representative coaching profiles. Formal staff rosters and credentials confirmed prior to facility operations.
        </p>
      </div>
    </section>
  );
}
