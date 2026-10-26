import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Target, Sparkles } from "lucide-react";

export function HomeBrandIntro() {
  return (
    <section className="py-24 sm:py-32 bg-prospira-bg border-b border-prospira-border relative overflow-hidden">
      {/* Background radial accent flare */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-prospira-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Editorial Statement & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE PROSPIRA PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-prospira-text tracking-tight leading-[1.1]">
              PROGRESS ISN&apos;T AN ACCIDENT.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-prospira-muted leading-relaxed">
              <p>
                True physical adaptation requires precision over random exhaustion. At Prospira, we discard the culture of chaotic workouts and gimmicks in favor of progressive loading, mechanical integrity, and intentional training cycles.
              </p>
              <p>
                Consistent effort, appropriate coaching, and an environment engineered to eliminate distractions form the foundation of our facility. Whether you are stepping up to a competition barbell for the first time or refining an athletic career, our space is calibrated to develop strength that lasts.
              </p>
            </div>

            {/* Three Pillar Points in Horizontal Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-prospira-border">
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-widest text-prospira-accent flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>01. Systematic</span>
                </div>
                <p className="text-xs text-prospira-muted">
                  Clear wave periodization replacing arbitrary daily sweat workouts.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-widest text-prospira-accent flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>02. Precision</span>
                </div>
                <p className="text-xs text-prospira-muted">
                  Strict coach oversight on lifting mechanics, joint angles, and bar velocity.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-widest text-prospira-accent flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>03. Longevity</span>
                </div>
                <p className="text-xs text-prospira-muted">
                  Structured recovery and mobility built into every member track.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prospira-text hover:text-prospira-accent transition-colors group"
              >
                <span>Read our founding vision & principles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual Treatment (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame border */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-prospira-border bg-prospira-surface shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Coach reviewing barbell execution with athlete at Prospira"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.08] grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prospira-bg via-transparent to-transparent opacity-80" />

                {/* Editorial Floating Spec Box */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-prospira-surface/90 border border-prospira-border backdrop-blur-md rounded-lg">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-prospira-accent mb-1">
                    FACILITY PRINCIPLE
                  </div>
                  <div className="text-xs font-bold font-display text-prospira-text uppercase">
                    &quot;Form dictates capacity. Never sacrifice position for load.&quot;
                  </div>
                </div>
              </div>

              {/* Offset architectural corner detail */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-prospira-accent/60 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-prospira-border pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
