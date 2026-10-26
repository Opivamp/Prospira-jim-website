"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { useBookingModal } from "@/context/BookingModalContext";
import { Menu, X, ArrowUpRight, Clock, Phone } from "lucide-react";
import { gymInfo } from "@/data/gymInfo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/trainers", label: "Coaches" },
  { href: "/membership", label: "Membership" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openBookingModal } = useBookingModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle background elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-prospira-bg/90 backdrop-blur-md border-b border-prospira-border py-3 shadow-lg"
            : "bg-gradient-to-b from-prospira-bg/95 via-prospira-bg/75 to-transparent py-4 sm:py-5 border-b border-prospira-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-xs font-mono uppercase tracking-widest transition-colors py-1 ${
                      isActive
                        ? "text-prospira-accent font-semibold"
                        : "text-prospira-muted hover:text-prospira-text"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-prospira-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/faq"
                className="hidden xl:inline-flex text-xs font-mono uppercase tracking-wider text-prospira-muted hover:text-prospira-text px-2 py-1 transition-colors"
              >
                FAQ
              </Link>

              <button
                onClick={() => openBookingModal({ sourceContext: "NAVBAR_JOIN_CTA" })}
                className="inline-flex items-center gap-2 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-all duration-200 shadow-md hover:shadow-prospira-accent/20 active:translate-y-0.5"
              >
                <span>JOIN PROSPIRA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openBookingModal({ sourceContext: "NAVBAR_MOBILE_JOIN" })}
                className="sm:hidden bg-prospira-accent text-prospira-bg font-bold font-display text-[11px] uppercase tracking-wider px-3 py-1.5 rounded"
              >
                JOIN
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-prospira-muted hover:text-prospira-text bg-prospira-surface border border-prospira-border rounded focus:outline-none focus:ring-2 focus:ring-prospira-accent"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-prospira-text" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-30 lg:hidden bg-prospira-bg/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-prospira-dim border-b border-prospira-border pb-2">
              NAVIGATION
            </div>
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-display font-bold tracking-tight transition-colors flex items-center justify-between py-1 border-b border-prospira-border/30 ${
                      isActive ? "text-prospira-accent" : "text-prospira-text hover:text-prospira-accent"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="text-xs font-mono uppercase text-prospira-accent bg-prospira-accent/10 px-2 py-0.5 rounded border border-prospira-accent/20">
                        ACTIVE
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-prospira-dim" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/faq"
                className="text-lg font-display text-prospira-muted hover:text-prospira-text py-1 flex items-center justify-between"
              >
                <span>Frequently Asked Questions</span>
                <ArrowUpRight className="w-4 h-4 text-prospira-dim" />
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-prospira-border space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal({ sourceContext: "DRAWER_CTA" });
              }}
              className="w-full py-3.5 px-4 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display text-sm uppercase tracking-wider rounded text-center transition-colors shadow-lg"
            >
              BOOK TRIAL SESSION / JOIN PROSPIRA
            </button>

            <div className="bg-prospira-surface/80 border border-prospira-border rounded-lg p-3.5 text-xs text-prospira-muted space-y-2">
              <div className="flex items-center gap-2 text-prospira-text">
                <Clock className="w-3.5 h-3.5 text-prospira-accent" />
                <span>Mon–Fri: {gymInfo.hours.weekday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-prospira-accent" />
                <span>Concierge: {gymInfo.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
