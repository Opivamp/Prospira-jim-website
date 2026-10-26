import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Compass, Target, Activity, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "About Prospira — Our Philosophy & Standards",
  description:
    "Learn about the founding ethos, training architecture, and uncompromising standards behind Prospira.",
};

export default function AboutPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-20 lg:py-28 border-b border-prospira-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>THE PROSPIRA STORY & STANDARDS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              WHERE DISCIPLINE MEETS INTENTIONAL ARCHITECTURE.
            </h1>
            <p className="text-lg sm:text-xl text-prospira-muted leading-relaxed font-normal">
              Prospira was founded on a simple observation: modern fitness had become either cheap commercial chaos or performative spectacle. We built a sanctuary for those who value disciplined, lasting physical progress.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Narrative & Image Split */}
      <section className="py-20 sm:py-28 border-b border-prospira-border bg-prospira-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-prospira-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                  alt="Lifting platforms and Eleiko racks in Prospira facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.1] grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prospira-surface via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-prospira-card/90 backdrop-blur-md rounded border border-prospira-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-prospira-accent block mb-1">
                    FOUNDING STANDARD
                  </span>
                  <p className="text-xs text-prospira-text font-bold">
                    &quot;A strength floor should sharpen your focus, not fragment your attention.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
                <Compass className="w-4 h-4" />
                <span>THE REASON WE EXIST</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-prospira-text tracking-tight">
                Rejecting the Culture of Chaotic Workouts
              </h2>
              <div className="space-y-4 text-base text-prospira-muted leading-relaxed">
                <p>
                  Most gyms are designed to sell memberships to people who never show up. The floors are packed with crowded machines, loud distractions, broken cables, and trainers whose only instruction is to count reps louder.
                </p>
                <p>
                  We took the opposite approach. At Prospira, we cap our active membership base to ensure guaranteed rack availability. We invest in competition-grade IWF/IPF Eleiko steel rather than gimmicky consumer equipment. And every coach on our floor is trained to correct joint kinematics, assess tissue tolerances, and guide you through progressive loading.
                </p>
                <p>
                  When you walk through our doors, the noise of the day fades. You have a plan, you have the right equipment, and you have coaches who care about your long-term athletic trajectory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 sm:py-28 border-b border-prospira-border bg-prospira-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs font-mono tracking-widest uppercase text-prospira-accent">
              CORNERSTONE PRINCIPLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-prospira-text">
              OUR GUIDING BELIEFS
            </h2>
            <p className="text-base text-prospira-muted">
              These principles govern every programming decision, coaching cue, and floor protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-prospira-surface border border-prospira-border rounded-xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-prospira-card border border-prospira-border flex items-center justify-center text-prospira-accent">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-prospira-text">
                01. Precision Over Fatigue
              </h3>
              <p className="text-sm text-prospira-muted leading-relaxed">
                Lying on the floor exhausted does not mean you had a good workout. Neuromuscular adaptation requires crisp mechanical execution, deliberate rest intervals, and submaximal volume cycles that build sustainable horsepower.
              </p>
            </div>

            <div className="p-8 bg-prospira-surface border border-prospira-border rounded-xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-prospira-card border border-prospira-border flex items-center justify-center text-prospira-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-prospira-text">
                02. The Environment Shapes the Lifter
              </h3>
              <p className="text-sm text-prospira-muted leading-relaxed">
                Acoustic dampening floors, non-glare architectural lighting, calibrated steel plates, and a room full of serious peers create a psychological standard where focus happens effortlessly.
              </p>
            </div>

            <div className="p-8 bg-prospira-surface border border-prospira-border rounded-xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-prospira-card border border-prospira-border flex items-center justify-center text-prospira-accent">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-prospira-text">
                03. Coaching is an Active Craft
              </h3>
              <p className="text-sm text-prospira-muted leading-relaxed">
                Our coaches don&apos;t look at their phones. They analyze your spinal angles in the bottom of a squat, cue your hip drive, and help you recognize when to push and when to de-load.
              </p>
            </div>

            <div className="p-8 bg-prospira-surface border border-prospira-border rounded-xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-prospira-card border border-prospira-border flex items-center justify-center text-prospira-accent">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-prospira-text">
                04. Longevity Over Short-Term Extremes
              </h3>
              <p className="text-sm text-prospira-muted leading-relaxed">
                Fitness isn&apos;t a 6-week blitz that ends in blown-out shoulders or metabolic crash. We build bodies capable of sprinting, lifting, and thriving 10, 20, and 30 years into the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-20 sm:py-28 border-b border-prospira-border bg-prospira-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-prospira-card border border-prospira-border rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
                THE PROSPIRA COMMUNITY PLEDGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-prospira-text">
                Culture is What We Protect Every Day.
              </h2>
              <div className="space-y-3 text-sm text-prospira-muted leading-relaxed">
                <p>
                  Every member at Prospira signs up for our shared training etiquette:
                </p>
                <ul className="space-y-2 list-disc list-inside text-prospira-text/90">
                  <li><strong>Rerack every plate</strong> to its designated weight tree immediately after your final set.</li>
                  <li><strong>Respect shared space</strong>: no monopolizing platforms for phone calls or social media filming.</li>
                  <li><strong>Encourage your fellow athletes</strong>: celebrate personal records and support members at every phase.</li>
                  <li><strong>Wipe down platforms & benches</strong> with our natural hospital-grade sanitizing towels.</li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="px-6 py-3 bg-prospira-accent text-prospira-bg font-bold font-display text-xs uppercase tracking-wider rounded hover:bg-prospira-accentHover transition-colors flex items-center gap-2"
                >
                  <span>Explore Membership Options</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-prospira-surface border border-prospira-border hover:border-prospira-muted text-prospira-text font-display text-xs uppercase tracking-wider rounded transition-colors"
                >
                  <span>Book Facility Tour</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
