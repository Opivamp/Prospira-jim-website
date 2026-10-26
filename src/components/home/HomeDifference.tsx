import React from "react";
import { Layers, ShieldCheck, Dumbbell, GitFork, Users } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Layers,
    title: "Structured Training Architecture",
    description:
      "Every program is mapped out in 3-to-6 week periodized blocks. You track quantifiable indicators — bar speed, rep consistency, working capacity — rather than pursuing arbitrary muscular fatigue.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Supportive, High-Standard Coaching",
    description:
      "Our coaches don't shout from across the room. We maintain capped ratios (max 1:12) to provide real-time biomechanical adjustments, joint angle modifications, and load management on every set.",
  },
  {
    icon: Dumbbell,
    number: "03",
    title: "An Environment Built for Consistency",
    description:
      "No waiting 20 minutes for a squat rack, no performative phone filming crowds. Just calibrated Eleiko equipment, oak lifting platforms, optimal floor spacing, and an atmosphere calibrated for focused effort.",
  },
  {
    icon: GitFork,
    number: "04",
    title: "Intelligent Scaling Across Capability",
    description:
      "Whether you are working through an old knee issue or chasing a double-bodyweight deadlift, every movement pattern has clear developmental progressions and regressions tailored to your structure.",
  },
  {
    icon: Users,
    number: "05",
    title: "A Culture of Mutual Respect",
    description:
      "Egos stay outside. Prospira is a community of people who respect the discipline required to improve. Members rerack their weights, encourage their training partners, and hold each other accountable.",
  },
];

export function HomeDifference() {
  return (
    <section className="py-24 sm:py-32 bg-prospira-bg border-b border-prospira-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
            <span className="w-8 h-[1px] bg-prospira-accent" />
            <span>THE PROSPIRA STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
            WHY TRAIN AT PROSPIRA
          </h2>
          <p className="text-base text-prospira-muted leading-relaxed">
            We built the gym we always wanted to train in: serious equipment, genuine coaching competence, and zero operational friction.
          </p>
        </div>

        {/* 5-Pillar Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`p-8 bg-prospira-surface border border-prospira-border rounded-xl hover:border-prospira-borderLight transition-colors relative flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2 bg-gradient-to-br from-prospira-surface to-prospira-card" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-prospira-card border border-prospira-border flex items-center justify-center text-prospira-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm text-prospira-dim font-bold">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-prospira-text mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-prospira-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-prospira-border/50 text-[11px] font-mono text-prospira-dim uppercase tracking-wider flex items-center justify-between">
                  <span>STANDARD VERIFIED</span>
                  <span className="w-2 h-2 rounded-full bg-prospira-accent/40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
