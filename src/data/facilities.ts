export interface FacilityZone {
  id: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  specs: string[];
  image: string;
  accentDetail: string;
}

export const facilityZones: FacilityZone[] = [
  {
    id: "strength-rigs",
    name: "Olympic & Barbell Compound Floor",
    eyebrow: "FOUNDATION ZONE 01",
    tagline: "Eleiko calibrated plates, heavy-gauge steel rigs, and oak lifting platforms.",
    description:
      "A dedicated strength sanctuary designed for serious lifting. 12 custom power cages equipped with safety spotter arms, band pegs, competition knurled barbells, and sound-dampening deadlift platforms.",
    specs: ["12 Competition Power Racks", "Eleiko 29mm IWF Barbells", "5000+ lbs Calibrated Iron", "Full Range of Specialty Bars"],
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
    accentDetail: "Platform Acoustic Floor",
  },
  {
    id: "free-weights",
    name: "Dumbbell & Precision Free Weight Area",
    eyebrow: "PRECISION ZONE 02",
    tagline: "Custom urethane dumbbells from 5 to 150 lbs with custom incline benches.",
    description:
      "Engineered for accessory volume and targeted hypertrophy. Multiple commercial adjustable benches, preacher stations, and heavy selectorized cable machines with bilateral weight stacks.",
    specs: ["Urethane Dumbbells to 150 lbs", "6 Adjustable Benches", "Dual Adjustable Pulley Towers", "Glute Ham Developers (GHD)"],
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1400&auto=format&fit=crop",
    accentDetail: "Urethane Solid Grip",
  },
  {
    id: "functional-turf",
    name: "Indoor Sprint & Functional Turf Track",
    eyebrow: "ATHLETIC ZONE 03",
    tagline: "35 meters of high-density sprint turf for sled work, carries, and plyometrics.",
    description:
      "Designed for unrestricted dynamic locomotion. Push Rogue sleds, carry odd objects, swing kettlebells, or perform explosive rotational med-ball throws against reinforced ballistic brick walls.",
    specs: ["35m High-Density Turf Lane", "Frictionless Push Sleds", "Kettlebells (8kg to 48kg)", "Soft Plyometric Boxes"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
    accentDetail: "Sprint & Drag Grade",
  },
  {
    id: "cardio-erg",
    name: "Cardio-Metabolic Ergometer Lab",
    eyebrow: "ENDURANCE ZONE 04",
    tagline: "Concept2 Rowers, SkiErgs, and Rogue Echo bikes for pure aerobic capacity.",
    description:
      "Zero-impact, high-power output conditioning. Monitor real-time wattage, stroke rate, and split times on PM5 performance monitors under low-glare architectural lighting.",
    specs: ["8 Concept2 RowERG Units", "6 SkiErg Stations", "8 Rogue Echo AirBikes", "Live Telemetry Monitored"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
    accentDetail: "Telemetry Integrated",
  },
  {
    id: "recovery-suite",
    name: "Thermal Contrast & Recovery Suite",
    eyebrow: "REGENERATION ZONE 05",
    tagline: "Finnish dry cedar sauna, cold hydrotherapy plunge, and percussion stations.",
    description:
      "Because tissue regeneration dictates training frequency. Transition from 90°C dry heat into 10°C cold contrast water to accelerate lymphatic flush and decrease delayed-onset muscle soreness.",
    specs: ["90°C Finnish Cedar Sauna", "10°C Cold Plunge Pools", "Normatec Compression Boots", "Acoustic Down-Regulation Lounge"],
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop",
    accentDetail: "Contrast Hydrotherapy",
  },
];
