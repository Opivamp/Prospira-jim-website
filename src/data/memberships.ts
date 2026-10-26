export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  isPopular?: boolean;
  intendedFor: string;
  ctaText: string;
  ctaMode: "register" | "consultation";
  features: {
    name: string;
    included: boolean;
    detail?: string;
  }[];
  accessHours: string;
  ptSessionsPerMonth: number;
  recoveryAccess: boolean;
  guestPassesPerMonth: number;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    tagline: "Dedicated access for self-directed lifters and structured trainers.",
    monthlyPrice: 135,
    annualPriceMonthly: 115,
    isPopular: false,
    intendedFor:
      "Independent athletes looking for world-class equipment, respectful gym culture, and peak training floor access without excess fluff.",
    ctaText: "SELECT ESSENTIAL",
    ctaMode: "register",
    accessHours: "Standard Opening Hours (05:30 — 22:30)",
    ptSessionsPerMonth: 0,
    recoveryAccess: false,
    guestPassesPerMonth: 1,
    features: [
      { name: "Full facility access (Eleiko barbells, racks, platforms, cardio)", included: true },
      { name: "Digital locker & towel service", included: true },
      { name: "Prospira Athlete Companion training log app", included: true },
      { name: "Quarterly baseline movement screening", included: true },
      { name: "Structured Group Athletics classes", included: false, detail: "Available as drop-in add-on ($25/session)" },
      { name: "Private 1-on-1 coaching sessions", included: false },
      { name: "Sauna, contrast plunge & recovery suite access", included: false },
      { name: "Priority class booking window (7 days in advance)", included: false },
    ],
  },
  {
    id: "performance",
    name: "PERFORMANCE",
    tagline: "Our benchmark standard: complete coaching, class access, and recovery.",
    monthlyPrice: 225,
    annualPriceMonthly: 195,
    isPopular: true,
    intendedFor:
      "Those who want high-accountability coaching, regular squad classes, and built-in monthly consultations to accelerate progress.",
    ctaText: "CHOOSE PERFORMANCE",
    ctaMode: "register",
    accessHours: "Full Hours + Early Floor Entry",
    ptSessionsPerMonth: 1,
    recoveryAccess: true,
    guestPassesPerMonth: 2,
    features: [
      { name: "Full facility access with priority platform reservation", included: true },
      { name: "Unlimited Group Athletics, HIIT, and Mobility classes", included: true },
      { name: "1 Private 1-on-1 Coaching session per month", included: true },
      { name: "Monthly biometric & velocity-based progress audit", included: true },
      { name: "Full recovery lounge access (Finnish sauna, contrast hydro)", included: true },
      { name: "7-day advance booking window for all group sessions", included: true },
      { name: "2 complimentary guest day-passes per month", included: true },
      { name: "Personal training kit locker rental", included: false, detail: "Available as $30/mo add-on" },
    ],
  },
  {
    id: "elite",
    name: "ELITE",
    tagline: "Total athletic immersion: weekly personal training and concierge access.",
    monthlyPrice: 385,
    annualPriceMonthly: 335,
    isPopular: false,
    intendedFor:
      "Committed executives, competitive lifters, and individuals demanding comprehensive physiological stewardship and 24/7 flexibility.",
    ctaText: "TALK TO OUR TEAM",
    ctaMode: "consultation",
    accessHours: "24/7 Keycard Facility Access",
    ptSessionsPerMonth: 4,
    recoveryAccess: true,
    guestPassesPerMonth: 4,
    features: [
      { name: "24/7 Unrestricted facility & keycard access", included: true },
      { name: "Weekly 1-on-1 Private Coaching session (4/month)", included: true },
      { name: "Unlimited class access with guaranteed reserved spots", included: true },
      { name: "Bespoke nutritional prescription & weekly coach review", included: true },
      { name: "Daily recovery suite access + percussion therapy stations", included: true },
      { name: "Permanent assigned executive locker with laundry service", included: true },
      { name: "4 complimentary guest day-passes per month", included: true },
      { name: "Direct messaging access to your dedicated Head Coach", included: true },
    ],
  },
];

export const membershipFaqs = [
  {
    question: "Are there long-term locked-in contracts?",
    answer:
      "No. All month-to-month plans can be paused or cancelled with 14 business days notice prior to the next billing cycle. Annual memberships are discounted up to 15% and paid either upfront or monthly with a 12-month commitment.",
  },
  {
    question: "Can I try Prospira before committing?",
    answer:
      "Yes. We offer an introductory Trial Session Pass that includes an exploratory movement assessment and full floor access. You can book directly via the 'Join Prospira' button.",
  },
  {
    question: "What is your guest policy?",
    answer:
      "Performance members receive 2 guest passes/month, and Elite members receive 4. Guests must complete a safety check-in and sign our standard liability waiver prior to lifting.",
  },
  {
    question: "How do I upgrade or adjust my tier?",
    answer:
      "Tiers can be upgraded anytime through member services or your online dashboard with prorated dues. Downward adjustments take effect at the start of your subsequent billing period.",
  },
];
