"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Flame } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export function HomeHero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-prospira-bg border-b border-prospira-border">
      {/* Background Photography with deliberate editorial gradient vignette */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=2000&auto=format&fit=crop"
            alt="Dedicated athlete training with focus on barbell platform in Prospira gym"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.42] contrast-[1.12]"
          />
          {/* Subtle noise and directional dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-prospira-bg via-prospira-bg/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-prospira-bg via-transparent to-prospira-bg/60" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prospira-surface/80 border border-prospira-border text-xs font-mono tracking-widest text-prospira-accent uppercase mb-6 backdrop-blur-sm animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-prospira-accent animate-ping" />
            <span>CONTEMPORARY STRENGTH & PERFORMANCE FACILITY</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08] mb-6">
            BUILT BY DISCIPLINE.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-prospira-text via-prospira-text to-prospira-accent">
              DEFINED BY PROGRESS.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-prospira-muted leading-relaxed font-normal mb-8 max-w-2xl">
            More than a workout. A place to build strength, sharpen your focus, and become capable of more.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-3 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display text-sm uppercase tracking-wider px-7 py-4 rounded transition-all duration-200 shadow-xl hover:shadow-prospira-accent/20 active:translate-y-0.5 group"
            >
              <span>EXPLORE MEMBERSHIP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-prospira-surface/90 hover:bg-prospira-card text-prospira-text border border-prospira-border hover:border-prospira-muted font-display text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 backdrop-blur-sm"
            >
              <span>DISCOVER OUR PROGRAMS</span>
              <ChevronRight className="w-4 h-4 text-prospira-accent" />
            </Link>
          </div>

          {/* Compact Proof Points & Standards Bar */}
          <div className="pt-8 border-t border-prospira-border/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-prospira-dim mb-1">
                STANDARDS
              </div>
              <div className="font-display font-bold text-prospira-text text-sm sm:text-base flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                <span>TRAIN WITH PURPOSE</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-prospira-dim mb-1">
                FLOOR PHILOSOPHY
              </div>
              <div className="font-display font-bold text-prospira-text text-sm sm:text-base flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                <span>EVIDENCE-BASED</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-mono uppercase tracking-widest text-prospira-dim mb-1">
                COMMUNITY
              </div>
              <div className="font-display font-bold text-prospira-text text-sm sm:text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                <span>YOUR NEXT LEVEL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
