"use client";

import React, { useState } from "react";
import { gymInfo } from "@/data/gymInfo";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, ShieldCheck, Loader2 } from "lucide-react";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("Trial Session & Facility Tour");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please provide a valid email format.";
    }
    if (!message.trim() || message.trim().length < 10) {
      errs.message = "Please include a message with at least 10 characters.";
    }
    if (!consent) {
      errs.consent = "Please agree to the privacy policy.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setTicketRef(`ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-prospira-surface border border-prospira-border rounded-2xl p-6 sm:p-10 shadow-xl">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-prospira-accent/15 border border-prospira-accent/40 rounded-full flex items-center justify-center mx-auto text-prospira-accent">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent font-semibold px-2.5 py-1 bg-prospira-accent/10 border border-prospira-accent/30 rounded inline-block">
                MESSAGE RECEIVED
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                Thank You, {fullName}.
              </h3>
              <p className="text-sm text-prospira-muted max-w-md mx-auto">
                Your enquiry regarding <strong className="text-prospira-text">{enquiryType}</strong> has been logged under ticket reference:
              </p>
              <div className="bg-prospira-card border border-prospira-border p-4 rounded-lg font-mono text-lg text-prospira-accent tracking-wider font-semibold max-w-xs mx-auto">
                {ticketRef}
              </div>
              <p className="text-xs text-prospira-dim max-w-md mx-auto">
                Our Member Concierge team will review your message and respond directly to <strong>{email}</strong> within 1 business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage("");
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setConsent(false);
                  }}
                  className="px-6 py-2.5 bg-prospira-card border border-prospira-border text-xs font-mono text-prospira-text hover:text-prospira-accent rounded transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-prospira-accent font-semibold">
                  DIRECT CONCIERGE DESK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-prospira-text">
                  Send an Enquiry or Schedule a Visit
                </h2>
                <p className="text-xs text-prospira-muted">
                  Have a question about training disciplines, floor schedules, or membership options? Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="contact-name">
                    Full Name <span className="text-prospira-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Jordan Mercer"
                    className={`w-full bg-prospira-card border ${
                      errors.fullName ? "border-red-500" : "border-prospira-border"
                    } rounded-lg px-3.5 py-2.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="contact-email">
                      Email Address <span className="text-prospira-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@example.com"
                      className={`w-full bg-prospira-card border ${
                        errors.email ? "border-red-500" : "border-prospira-border"
                      } rounded-lg px-3.5 py-2.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="contact-phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-prospira-card border border-prospira-border rounded-lg px-3.5 py-2.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Subject / Enquiry Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="contact-type">
                    Enquiry Subject
                  </label>
                  <select
                    id="contact-type"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full bg-prospira-card border border-prospira-border rounded-lg px-3.5 py-2.5 text-sm text-prospira-text focus:border-prospira-accent transition-colors"
                  >
                    <option value="Trial Session & Facility Tour">Trial Session & Facility Tour</option>
                    <option value="Membership Tiers & Enrollment">Membership Tiers & Enrollment</option>
                    <option value="Private 1-on-1 Coaching Inquiry">Private 1-on-1 Coaching Inquiry</option>
                    <option value="Corporate / Team Partnership">Corporate / Team Partnership</option>
                    <option value="General Question or Policy Inquiry">General Question or Policy Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="contact-message">
                    Message <span className="text-prospira-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current training background, goals, or what you would like to know..."
                    className={`w-full bg-prospira-card border ${
                      errors.message ? "border-red-500" : "border-prospira-border"
                    } rounded-lg px-3.5 py-2.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded bg-prospira-card border-prospira-border text-prospira-accent focus:ring-prospira-accent"
                    />
                    <span className="text-xs text-prospira-muted leading-relaxed">
                      I agree that Prospira may contact me regarding this enquiry in accordance with standard communication privacy standards.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm tracking-wide shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE TO CONCIERGE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Right Column: Direct Info, Hours & Location Note (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Facility Location Card */}
          <div className="bg-prospira-surface border border-prospira-border rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prospira-accent">
              <MapPin className="w-4 h-4" />
              <span>FACILITY LOCATION</span>
            </div>
            <h3 className="text-xl font-bold font-display text-prospira-text">
              {gymInfo.contact.address.street}
            </h3>
            <p className="text-xs text-prospira-muted leading-relaxed">
              {gymInfo.contact.address.district}, {gymInfo.contact.address.city}, {gymInfo.contact.address.country}
            </p>
            <div className="p-3 bg-prospira-card rounded-lg border border-prospira-border text-[11px] text-prospira-dim">
              <strong>Location Note:</strong> {gymInfo.contact.address.note}
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-prospira-surface border border-prospira-border rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prospira-accent">
              <Clock className="w-4 h-4" />
              <span>FACILITY HOURS</span>
            </div>
            <div className="space-y-3 text-xs font-mono text-prospira-muted">
              <div className="flex items-center justify-between pb-2 border-b border-prospira-border">
                <span className="text-prospira-text font-medium">Monday — Friday</span>
                <span className="text-prospira-accent">{gymInfo.hours.weekday}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-prospira-border">
                <span className="text-prospira-text font-medium">Saturday</span>
                <span>{gymInfo.hours.saturday}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-prospira-border">
                <span className="text-prospira-text font-medium">Sunday</span>
                <span>{gymInfo.hours.sunday}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-prospira-text font-medium">Elite Keycard</span>
                <span className="text-prospira-accent font-bold">24/7 Access</span>
              </div>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="bg-prospira-surface border border-prospira-border rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-prospira-accent">
              DIRECT DESK CHANNELS
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-prospira-muted">
                <Mail className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                <span>{gymInfo.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-prospira-muted">
                <Phone className="w-4 h-4 text-prospira-accent flex-shrink-0" />
                <span>{gymInfo.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
