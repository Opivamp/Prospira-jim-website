export interface Trainer {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  philosophy: string;
  coachingStyle: string;
  experienceYears: number;
  sampleCredentials: string[];
  image: string;
  featured: boolean;
}

export const trainers: Trainer[] = [
  {
    id: "marcus-vance",
    slug: "marcus-vance",
    name: "Marcus Vance",
    role: "Head of Strength & Conditioning",
    specialization: ["Barbell Mechanics", "Powerlifting", "Hypertrophy Programming"],
    bio: "Marcus brings a decade of coaching experience directing compound barbell development and athletic strength cycles. He believes that lifting weights is primarily about developing neuromuscular discipline that transfers into everyday life.",
    philosophy: "Intensity is meaningless without position. Master the setup first; the weight will follow.",
    coachingStyle: "Technical, direct, focused on bar speed and mechanical precision.",
    experienceYears: 11,
    sampleCredentials: ["CSCS Sample Placeholder", "B.S. Exercise Physiology (Illustrative)", "USAW Level 2 (Sample)"],
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "elena-rostova",
    slug: "elena-rostova",
    name: "Elena Rostova",
    role: "Lead Performance Coach & Movement Specialist",
    specialization: ["Functional Range Conditioning", "Rotational Athletics", "Postural Restoration"],
    bio: "Elena specializes in joint longevity, athletic rotational mechanics, and active mobility. Her programs help lifters eliminate persistent stiffness, expand active joint workspace, and move with fluid agility.",
    philosophy: "You do not own a range of motion simply because you can reach it passively. You must build strength at end-range.",
    coachingStyle: "Methodical, kinetic, detail-oriented on breathing and joint mechanics.",
    experienceYears: 9,
    sampleCredentials: ["FRC Certified Specialist (Sample)", "Kinesiology Degree (Illustrative)", "EXOS Athletic Specialist (Sample)"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "david-chen",
    slug: "david-chen",
    name: "David Chen",
    role: "Metabolic Conditioning & Erg Coach",
    specialization: ["Energy Systems Development", "Rowing & SkiErg Biomechanics", "HIIT Interval Strategy"],
    bio: "David translates aerobic physiology into accessible, sustainable conditioning tracks. He coaches members on strict pacing, lactate clearance, and mental composure during high-intensity output.",
    philosophy: "Pacing is a cognitive skill. Anyone can sprint until they crash; true conditioning is holding your threshold under duress.",
    coachingStyle: "Energizing, metric-driven, tactical with cadence feedback.",
    experienceYears: 8,
    sampleCredentials: ["Concept2 Master Trainer (Sample)", "Precision Nutrition L1 (Illustrative)", "Aerobic Capacity Specialist (Sample)"],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sarah-jenkins",
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Private Coaching & Female Athletic Development",
    specialization: ["Strength Periodization", "Hypertrophy", "Lifestyle Nutrition Integration"],
    bio: "Sarah works with private clients aiming for serious physical transformations, posture restructuring, and building lasting nutritional habits that survive demanding business careers.",
    philosophy: "Sustainable progress beats short-term extremes every single time. Build habits you can defend year-round.",
    coachingStyle: "Empathetic, demanding, focused on lifestyle accountability.",
    experienceYears: 7,
    sampleCredentials: ["NASM Master Trainer (Sample)", "CISSN Sports Nutritionist (Illustrative)", "TRX Suspension Coach (Sample)"],
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "tariq-al-mansoor",
    slug: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    role: "Athletic Conditioning & Group Lead",
    specialization: ["Kettlebell Dynamics", "Plyometrics", "Team Circuit Design"],
    bio: "Tariq leads our group athletic conditioning with electric tempo and surgical attention to form. He ensures every participant in squad sessions receives individual form cues while keeping collective energy peak.",
    philosophy: "The room elevates the individual, but the individual must respect the room with their commitment.",
    coachingStyle: "High-voltage, commanding, rhythm-conscious and deeply supportive.",
    experienceYears: 6,
    sampleCredentials: ["StrongFirst SFG I (Sample)", "Functional Movement Screen (Illustrative)", "CrossFit L2 Coach (Sample)"],
    image:
      "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "maya-lindqvist",
    slug: "maya-lindqvist",
    name: "Maya Lindqvist",
    role: "Mobility, Breathwork & Down-regulation",
    specialization: ["Fascial Mobility", "Breath Physiology", "Contrast Therapy Guidance"],
    bio: "Maya directs the recovery and tissue restoration protocols at Prospira. She guides members through restorative breathwork sequences and joint capsule restoration to optimize weekly recovery margins.",
    philosophy: "You don't grow during your workouts. You grow when you properly recover from them.",
    coachingStyle: "Calming, grounded, focused on nervous system down-regulation.",
    experienceYears: 7,
    sampleCredentials: ["Oxygen Advantage Instructor (Sample)", "FRC Mobility Specialist (Illustrative)", "Yoga Alliance RYT 500 (Sample)"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
];
