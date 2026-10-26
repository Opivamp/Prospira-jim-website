export interface GymInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      district: string;
      city: string;
      country: string;
      note: string;
    };
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    holidays: string;
  };
  socialLinks: {
    name: string;
    handle: string;
    url: string;
  }[];
  disclaimer: string;
}

export const gymInfo: GymInfo = {
  name: "PROSPIRA",
  tagline: "BUILD YOUR NEXT LEVEL.",
  shortDescription:
    "A contemporary strength and performance gym engineered for disciplined progress, evidence-based coaching, and an uncompromising standard of training.",
  longDescription:
    "Prospira is built on a simple premise: sustained physical progress isn't an accident. We unite elite strength equipment, small-group athletic conditioning, and individualized coaching within an intentional, distraction-free environment.",
  contact: {
    email: "enquiries@prospira-fitness.example.com",
    phone: "+1 (800) 555-0198",
    address: {
      street: "740 Performance Way, Suite 100",
      district: "Metropolitan Athletic District",
      city: "Designated City",
      country: "United States",
      note: "Sample location placeholder. Exact facility address confirmed upon venue launch.",
    },
  },
  hours: {
    weekday: "05:30 — 22:30",
    saturday: "07:00 — 20:00",
    sunday: "08:00 — 18:00",
    holidays: "08:00 — 16:00 (Member Keycard Access 24/7 for Elite)",
  },
  socialLinks: [
    { name: "Instagram", handle: "@prospira.training", url: "https://instagram.com" },
    { name: "YouTube", handle: "Prospira Performance", url: "https://youtube.com" },
    { name: "Strava", handle: "Prospira Athletic Club", url: "https://strava.com" },
    { name: "LinkedIn", handle: "Prospira Fitness Group", url: "https://linkedin.com" },
  ],
  disclaimer:
    "Prospira is currently presented as an architectural & brand demonstration concept. Timetables, rates, and coach profiles represent sample illustrative specifications.",
};
