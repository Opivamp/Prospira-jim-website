import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Visit Concierge",
  description:
    "Get in touch with the Prospira concierge desk. Schedule a visit, ask questions about membership plans, or explore private coaching consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-prospira-bg text-prospira-text min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-prospira-border bg-prospira-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-prospira-accent">
              <span className="w-8 h-[1px] bg-prospira-accent" />
              <span>COMMUNICATION & VISITS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-prospira-text leading-[1.08]">
              SPEAK WITH OUR TEAM.
            </h1>
            <p className="text-lg text-prospira-muted leading-relaxed">
              We operate an open concierge desk. Connect with our team to arrange an on-site facility walkthrough or consult regarding your athletic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form and Details */}
      <ContactForm />
    </div>
  );
}
