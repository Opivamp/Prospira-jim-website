"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export function HomeConversion() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative py-28 sm:py-36 bg-prospira-bg overflow-hidden border-b border-prospira-border">
      {/* Background Photography with deep gradient vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=85&w=2000&auto=format&fit=crop"
          alt="Prospira athletic strength facility floor"
          fill
          sizes="100vw"
          className="object-cover filter brightness-[0.3] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-prospira-bg via-prospira-bg/80 to-prospira-bg/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prospira-surface/80 border border-prospira-border text-xs font-mono tracking-widest text-prospira-accent uppercase mb-6 backdrop-blur-sm">
          <span>TRIAL RESERVATION & ENQUIRY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-prospira-text tracking-tight mb-6">
          YOUR NEXT CHAPTER
          <span className="block text-prospira-accent">
            STARTS HERE.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-prospira-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Set your goal. Find your rhythm. Build the strength to keep going.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={() => openBookingModal({ sourceContext: "CONVERSION_BANNER" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-extrabold font-display text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 shadow-2xl hover:shadow-prospira-accent/20 active:translate-y-0.5 group"
          >
            <span>START YOUR PROSPIRA JOURNEY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="inline-flex items-center justify-center gap-6 text-xs font-mono text-prospira-dim">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-prospira-accent" />
            Zero-obligation movement assessment
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Transparent 30-day agreements</span>
        </div>
      </div>
    </section>
  );
}
