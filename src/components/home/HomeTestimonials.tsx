import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function HomeTestimonials() {
  return (
    <section className="py-24 sm:py-32 bg-prospira-surface border-b border-prospira-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
            <span className="w-8 h-[1px] bg-prospira-accent" />
            <span>MEMBER EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-prospira-text tracking-tight">
            THE COMMUNITY IN MOTION
          </h2>
          <p className="text-base text-prospira-muted leading-relaxed">
            People who train here understand the value of showing up consistently. Read representative perspectives from our training community.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-prospira-card border border-prospira-border rounded-xl p-8 flex flex-col justify-between relative hover:border-prospira-borderLight transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-prospira-accent/30 mb-6" />
                <p className="text-sm text-prospira-text leading-relaxed italic mb-8">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-prospira-border flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-prospira-border flex-shrink-0">
                  <Image
                    src={test.avatar}
                    alt={test.memberName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-prospira-text">
                    {test.memberName}
                  </h3>
                  <p className="text-xs text-prospira-muted">
                    {test.title}
                  </p>
                  <span className="text-[10px] font-mono text-prospira-accent uppercase">
                    {test.programEnrolled}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] font-mono text-prospira-dim">
          Illustrative member perspectives for concept demonstration. Verified member stories published following operational launch.
        </p>
      </div>
    </section>
  );
}
