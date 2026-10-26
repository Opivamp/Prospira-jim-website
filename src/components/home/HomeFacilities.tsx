"use client";

import React, { useState } from "react";
import Image from "next/image";
import { facilityZones } from "@/data/facilities";
import { Check, Shield, Layers } from "lucide-react";

export function HomeFacilities() {
  const [activeZoneId, setActiveZoneId] = useState(facilityZones[0].id);
  const activeZone = facilityZones.find((z) => z.id === activeZoneId) || facilityZones[0];

  return (
    <section className="py-24 sm:py-32 bg-prospira-surface border-b border-prospira-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
            <span className="w-8 h-[1px] bg-prospira-accent" />
            <span>ARCHITECTURAL TRAINING SPACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
            THE FACILITY & ATMOSPHERE
          </h2>
          <p className="text-base text-prospira-muted leading-relaxed">
            Every square foot is engineered for acoustic dampening, non-glare visual focus, and seamless training transitions.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
          {facilityZones.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                    : "bg-prospira-card text-prospira-muted border-prospira-border hover:border-prospira-muted/60 hover:text-prospira-text"
                }`}
              >
                {zone.name.split(" ")[0]} {zone.name.split(" ")[1] || ""}
              </button>
            );
          })}
        </div>

        {/* Active Zone Spotlight Layout */}
        <div className="bg-prospira-card border border-prospira-border rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
          {/* Main Visual Image (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] overflow-hidden">
            <Image
              src={activeZone.image}
              alt={activeZone.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter brightness-[0.7] contrast-[1.08] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-prospira-card via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-prospira-bg/90 border border-prospira-border rounded text-prospira-accent backdrop-blur-sm">
                {activeZone.eyebrow}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-mono uppercase tracking-widest text-prospira-text/90 bg-black/60 px-2.5 py-1 rounded inline-block backdrop-blur-sm border border-white/10">
                {activeZone.accentDetail}
              </span>
            </div>
          </div>

          {/* Details & Specs Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                SPECIFICATION BLUEPRINT
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                {activeZone.name}
              </h3>
              <p className="text-xs font-mono text-prospira-muted">
                {activeZone.tagline}
              </p>
              <p className="text-sm text-prospira-muted leading-relaxed">
                {activeZone.description}
              </p>

              {/* Specs List */}
              <div className="pt-4 border-t border-prospira-border space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-prospira-dim">
                  EQUIPMENT & FIXTURES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeZone.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-prospira-text">
                      <Check className="w-3.5 h-3.5 text-prospira-accent flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-prospira-surface rounded-lg border border-prospira-border text-[11px] text-prospira-dim flex items-center gap-2">
              <Shield className="w-4 h-4 text-prospira-accent flex-shrink-0" />
              <span>Concept visual model. Verified equipment specifications upon launch.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
