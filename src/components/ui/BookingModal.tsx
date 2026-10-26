"use client";

import React, { useState, useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { X, CheckCircle, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

export function BookingModal() {
  const { isOpen, modalData, closeBookingModal } = useBookingModal();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFocus, setSelectedFocus] = useState("Strength & Conditioning");
  const [preferredSlot, setPreferredSlot] = useState("Morning (06:00 — 09:00)");
  const [notes, setNotes] = useState("");
  const [hasConsented, setHasConsented] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  // Sync default options when opened with context
  useEffect(() => {
    if (modalData.defaultProgram) {
      setSelectedFocus(modalData.defaultProgram);
    } else if (modalData.defaultPlan) {
      setSelectedFocus(`Membership: ${modalData.defaultPlan.toUpperCase()}`);
    }
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [modalData, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (phone.length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!hasConsented) {
      newErrors.consent = "Please confirm the introductory waiver agreement.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous concierge dispatch
    setTimeout(() => {
      const code = `PRO-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeBookingModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-prospira-surface border border-prospira-border rounded-xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Subtle decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-prospira-accent to-transparent opacity-80" />

        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-5 right-5 p-2 text-prospira-muted hover:text-prospira-text hover:bg-prospira-card rounded-lg transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Success State */
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 bg-prospira-accent/15 border border-prospira-accent/40 rounded-full flex items-center justify-center mx-auto mb-5 text-prospira-accent">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent font-semibold px-2.5 py-1 bg-prospira-accent/10 border border-prospira-accent/30 rounded inline-block mb-3">
              ENQUIRY CONFIRMED
            </span>

            <h3 id="booking-modal-title" className="text-2xl font-bold font-display text-prospira-text mb-2">
              Next Level Initiated
            </h3>

            <p className="text-sm text-prospira-muted max-w-md mx-auto mb-6">
              Thank you, <strong className="text-prospira-text">{fullName}</strong>. Your intake reservation has been registered under reference code:
            </p>

            <div className="bg-prospira-card border border-prospira-border p-4 rounded-lg font-mono text-lg text-prospira-accent tracking-wider font-semibold mb-6">
              {confirmationCode}
            </div>

            <div className="text-left bg-prospira-bg/60 border border-prospira-border p-4 rounded-lg text-xs text-prospira-muted space-y-2 mb-6">
              <div className="font-semibold text-prospira-text uppercase tracking-wider text-[11px]">
                What to expect next:
              </div>
              <p>• Our Head Concierge will contact you at <strong>{email}</strong> within 1 business day to confirm your preferred movement assessment slot.</p>
              <p>• Please bring training kit and flat footwear. Complimentary towel service and locker facilities are assigned at reception.</p>
              <p className="text-[10px] text-prospira-dim italic pt-1 border-t border-prospira-border/50">
                Note: This reservation is processed as part of the Prospira demonstration architecture.
              </p>
            </div>

            <button
              onClick={closeBookingModal}
              className="w-full py-3 px-6 bg-prospira-accent text-prospira-bg font-semibold rounded-lg hover:bg-prospira-accentHover transition-colors flex items-center justify-center gap-2"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Intake / Application Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-prospira-accent animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent font-medium">
                  {modalData.sourceContext || "TRIAL & MEMBERSHIP INTAKE"}
                </span>
              </div>
              <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-prospira-text tracking-tight">
                {modalData.defaultPlan ? `Join on ${modalData.defaultPlan.toUpperCase()}` : "Begin Your Prospira Journey"}
              </h2>
              <p className="text-sm text-prospira-muted mt-1">
                Schedule your preliminary movement screen, explore memberships, or reserve a private coaching consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-name">
                  Full Name <span className="text-prospira-accent">*</span>
                </label>
                <input
                  id="modal-name"
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

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-email">
                    Email Address <span className="text-prospira-accent">*</span>
                  </label>
                  <input
                    id="modal-email"
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-phone">
                    Phone Number <span className="text-prospira-accent">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full bg-prospira-card border ${
                      errors.phone ? "border-red-500" : "border-prospira-border"
                    } rounded-lg px-3.5 py-2.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Training Focus & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-focus">
                    Primary Objective
                  </label>
                  <select
                    id="modal-focus"
                    value={selectedFocus}
                    onChange={(e) => setSelectedFocus(e.target.value)}
                    className="w-full bg-prospira-card border border-prospira-border rounded-lg px-3.5 py-2.5 text-sm text-prospira-text focus:border-prospira-accent transition-colors"
                  >
                    <option value="Strength & Conditioning">Strength & Conditioning</option>
                    <option value="Private Coaching (1-on-1)">Private Coaching (1-on-1)</option>
                    <option value="Functional Movement & Mobility">Functional Movement & Mobility</option>
                    <option value="HIIT & Metabolic Conditioning">HIIT & Metabolic Conditioning</option>
                    <option value="Membership: ESSENTIAL">Membership: ESSENTIAL</option>
                    <option value="Membership: PERFORMANCE">Membership: PERFORMANCE</option>
                    <option value="Membership: ELITE">Membership: ELITE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-slot">
                    Preferred Time Window
                  </label>
                  <select
                    id="modal-slot"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-prospira-card border border-prospira-border rounded-lg px-3.5 py-2.5 text-sm text-prospira-text focus:border-prospira-accent transition-colors"
                  >
                    <option value="Morning (06:00 — 09:00)">Morning (06:00 — 09:00)</option>
                    <option value="Midday (12:00 — 14:00)">Midday (12:00 — 14:00)</option>
                    <option value="Evening (17:00 — 20:30)">Evening (17:00 — 20:30)</option>
                    <option value="Weekend (08:00 — 14:00)">Weekend (08:00 — 14:00)</option>
                  </select>
                </div>
              </div>

              {/* Training History / Notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-prospira-muted mb-1.5" htmlFor="modal-notes">
                  Current Training Background or Specific Goals (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 2 years barbell lifting, aiming to improve squat depth and deadlift lockout..."
                  className="w-full bg-prospira-card border border-prospira-border rounded-lg px-3.5 py-2 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors resize-none"
                />
              </div>

              {/* Consent check */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasConsented}
                    onChange={(e) => setHasConsented(e.target.checked)}
                    className="mt-0.5 rounded bg-prospira-card border-prospira-border text-prospira-accent focus:ring-prospira-accent"
                  />
                  <span className="text-xs text-prospira-muted leading-relaxed">
                    I agree to receive booking confirmation details and confirm I am in suitable health for an introductory physical movement screen.
                  </span>
                </label>
                {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm tracking-wide shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING RESERVATION...</span>
                    </>
                  ) : (
                    <>
                      <span>CONFIRM INTAKE BOOKING</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-prospira-dim">
                <ShieldCheck className="w-3.5 h-3.5 text-prospira-accent" />
                <span>Zero spam policy • Respectful facility standards</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
