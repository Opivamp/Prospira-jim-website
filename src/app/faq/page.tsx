import React from "react";
import { Metadata } from "next";
import { FaqInteractive } from "@/components/faq/FaqInteractive";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Policies",
  description:
    "Everything you need to know about training at Prospira: memberships, first visits, cancellation terms, guest passes, and equipment.",
};

export default function FaqPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>KNOWLEDGE & PROTOCOLS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              FREQUENTLY ASKED QUESTIONS.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              Find clear, straightforward answers to practical questions regarding membership terms, first-time visits, coaching, and facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Component */}
      <FaqInteractive />
    </div>
  );
}
