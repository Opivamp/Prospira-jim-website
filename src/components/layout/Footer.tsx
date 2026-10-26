"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { gymInfo } from "@/data/gymInfo";
import { ArrowUpRight, Check, Mail, Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-prospira-surface border-t border-prospira-border text-prospira-text pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand, Nav, Programs, Contact & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-prospira-border">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo showTagline />
            <p className="text-sm text-prospira-muted leading-relaxed max-w-sm pt-2">
              {gymInfo.shortDescription}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-prospira-dim block mb-2">
                PROSPIRA JOURNAL & TRAINING INSIGHTS
              </span>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 bg-prospira-accent/15 border border-prospira-accent/30 text-prospira-accent text-xs px-3 py-2 rounded">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed to weekly coaching dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email for training logs..."
                    className="flex-1 bg-prospira-card border border-prospira-border text-xs px-3 py-2 rounded text-prospira-text placeholder-prospira-dim focus:border-prospira-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg text-xs font-bold font-display px-3 py-2 rounded transition-colors"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              EXPLORE
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  About Prospira
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Coaching Staff
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Weekly Schedule
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Knowledge & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-prospira-muted hover:text-prospira-text transition-colors">
                  Contact & Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              PROGRAM TRACKS
            </h3>
            <ul className="space-y-2 text-xs text-prospira-muted">
              <li>
                <Link href="/programs#strength-conditioning" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>Strength & Conditioning</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
              <li>
                <Link href="/programs#personal-training" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>1-on-1 Private Coaching</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
              <li>
                <Link href="/programs#functional-fitness" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>Functional Movement</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
              <li>
                <Link href="/programs#hiit-metcon" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>Erg & Metabolic HIIT</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
              <li>
                <Link href="/programs#mobility-recovery" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>Joint Mobility & Recovery</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
              <li>
                <Link href="/programs#group-fitness" className="hover:text-prospira-text transition-colors flex items-center justify-between">
                  <span>Group Athletics Squad</span>
                  <ArrowUpRight className="w-3 h-3 text-prospira-dim" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h3 className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              FACILITY & HOURS
            </h3>
            <div className="space-y-2 text-prospira-muted">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-prospira-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-prospira-text font-medium">Mon — Fri: {gymInfo.hours.weekday}</p>
                  <p>Saturday: {gymInfo.hours.saturday}</p>
                  <p>Sunday: {gymInfo.hours.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-prospira-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-prospira-text">{gymInfo.contact.address.street}</p>
                  <p>{gymInfo.contact.address.district}</p>
                  <p className="text-[10px] text-prospira-dim italic">{gymInfo.contact.address.note}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-prospira-accent flex-shrink-0" />
                <span>{gymInfo.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Concept Notice */}
        <div className="py-4 my-6 bg-prospira-card/60 border border-prospira-border rounded-lg px-4 text-[11px] text-prospira-dim flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>
            <strong className="text-prospira-muted">Demonstration Notice:</strong> {gymInfo.disclaimer}
          </p>
          <span className="text-prospira-accent font-mono text-[10px] uppercase tracking-wider flex-shrink-0">
            PROSPIRA v1.0 • PRODUCTION READY
          </span>
        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-prospira-dim">
          <div className="flex items-center gap-2">
            <span>© {currentYear} PROSPIRA ATHLETIC CORP. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {gymInfo.socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-prospira-accent transition-colors"
                aria-label={`Prospira on ${item.name}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Legal / Policy Links */}
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/faq#policies" className="hover:text-prospira-muted transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/faq#policies" className="hover:text-prospira-muted transition-colors">
              Terms & Safety Waiver
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-prospira-muted transition-colors">
              Concierge Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
