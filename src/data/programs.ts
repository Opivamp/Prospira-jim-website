export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Strength" | "Conditioning" | "Personal" | "Recovery";
  description: string;
  intendedFor: string;
  trainingFocus: string[];
  weeklyCommitment: string;
  sessionLength: string;
  coachRatio: string;
  image: string;
  sampleStructure: {
    phase: string;
    description: string;
  }[];
  featured: boolean;
}

export const programs: Program[] = [
  {
    id: "strength-conditioning",
    slug: "strength-and-conditioning",
    title: "Strength & Conditioning",
    subtitle: "Systematic barbell and compound strength architecture.",
    category: "Strength",
    description:
      "A periodized resistance curriculum built on fundamental human movement patterns: squats, hinges, pushes, pulls, and loaded carries. Emphasizes progressive overload, mechanical precision, and neuromuscular adaptation without arbitrary fatigue.",
    intendedFor:
      "Individuals committed to building lean muscular mass, bone density, raw athletic power, and structural integrity across all training ages.",
    trainingFocus: [
      "Barbell mechanics (Squat, Bench, Deadlift, Overhead)",
      "Progressive wave periodization (3–6 week cycles)",
      "Submaximal velocity and central nervous system governance",
      "Structural accessory work to resolve bilateral imbalances",
    ],
    weeklyCommitment: "3 to 4 days / week",
    sessionLength: "65 minutes",
    coachRatio: "1 : 8 maximum",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Neural Activation", description: "Soft tissue prep, thoracic mobility, dynamic hip rotary openers" },
      { phase: "02. Primary Compound Lift", description: "Ramped working sets targeting 75–88% 1RM with strict rest intervals" },
      { phase: "03. Bilateral / Unilateral Tri-Set", description: "Rear-foot elevated split squats, chest-supported rows, Romanian pulls" },
      { phase: "04. Core & Carries", description: "Offset kettlebell carries and anti-rotational cable holds" },
    ],
    featured: true,
  },
  {
    id: "personal-training",
    slug: "personal-training",
    title: "Private Coaching & 1-on-1",
    subtitle: "Bespoke physiological programming with dedicated coaches.",
    category: "Personal",
    description:
      "A high-touch, individualized partnership. Every variable — biomechanical assessment, nutritional calibration, force-velocity profiling, and lifestyle schedule — is dialed to your specific physiological profile.",
    intendedFor:
      "Executives, competitive athletes, beginners seeking flawless technique, or individuals rehabilitating historical injuries needing rigorous oversight.",
    trainingFocus: [
      "Comprehensive movement screening & biomechanical audit",
      "Customized microcycle and mesocycle progression",
      "Nutritional intake and biofeedback tracking",
      "Real-time kinetic bar-path and form telemetry",
    ],
    weeklyCommitment: "2 to 4 sessions / week",
    sessionLength: "60 minutes",
    coachRatio: "1 : 1 private",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Intake Review", description: "Review sleep, resting heart rate, recovery readiness, and joint status" },
      { phase: "02. Targeted Mobility", description: "Specific joint capsule mobilization tailored to today's movement planes" },
      { phase: "03. Specialized Technical Work", description: "Technical execution with progressive load and continuous coach feedback" },
      { phase: "04. Corrective Protocols", description: "Targeted antagonist stabilization and post-session restorative breathing" },
    ],
    featured: true,
  },
  {
    id: "functional-fitness",
    slug: "functional-fitness",
    title: "Functional Fitness & Movement",
    subtitle: "Multi-planar athletic resilience and work capacity.",
    category: "Strength",
    description:
      "Bridging the gap between raw gym strength and real-world athletic capability. Train across rotational, frontal, and sagittal planes with kettlebells, sandbags, rings, and free weights.",
    intendedFor:
      "Athletes and movers who demand fluid coordination, agile movement, rotational power, and a resilient, injury-resistant body.",
    trainingFocus: [
      "Rotational and transverse plane power development",
      "Vestibular balance and ground-based movement patterns",
      "Grip endurance and odd-object carrying capacity",
      "Deceleration mechanics and tendon tolerance",
    ],
    weeklyCommitment: "3 to 4 days / week",
    sessionLength: "55 minutes",
    coachRatio: "1 : 10 maximum",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Flow & Groundwork", description: "Animal locomotion patterns, ankle dorsiflexion, spinal articulation" },
      { phase: "02. Kinetic Power Complex", description: "Med-ball rotational slams, broad jumps, kettlebell clean-and-press" },
      { phase: "03. Functional Density Block", description: "12-minute timed density: sled push, pull-ups, farmer carries" },
      { phase: "04. Decompression", description: "Dead hangs, psoas release, and parasympathetic reset" },
    ],
    featured: true,
  },
  {
    id: "hiit-metcon",
    slug: "hiit-and-metabolic-conditioning",
    title: "HIIT & Metabolic Conditioning",
    subtitle: "Aerobic threshold and lactate clearance conditioning.",
    category: "Conditioning",
    description:
      "Engineered cardio-metabolic intervals using Rogue Echo bikes, Concept2 Rowers, SkiErgs, and bodyweight intervals. Designed to build an unyielding aerobic engine and rapid heart-rate recovery.",
    intendedFor:
      "Anyone looking to maximize mitochondrial density, torch metabolic stagnation, and challenge cardiovascular grit under guided pace pacing.",
    trainingFocus: [
      "Zone 2 base pacing and Zone 5 threshold intervals",
      "Ergometer pacing strategy (strokes/min, wattage)",
      "Lactate buffering and heart rate recovery efficiency",
      "Zero-impact high-intensity endurance preservation",
    ],
    weeklyCommitment: "2 to 3 days / week",
    sessionLength: "45 minutes",
    coachRatio: "1 : 12 maximum",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Ramp Pacing Warmup", description: "Graduated aerobic cadence across Rower, Bike, and dynamic calisthenics" },
      { phase: "02. Power Intervals", description: "4 x 45s maximum effort sprints with 90s complete active recovery" },
      { phase: "03. The Sustained Grinder", description: "16-minute EMOM alternating SkiErg calories, kettlebell swings, burpees" },
      { phase: "04. Downregulation", description: "Box breathing and supine passive thoracic extension" },
    ],
    featured: false,
  },
  {
    id: "mobility-recovery",
    slug: "mobility-and-recovery",
    title: "Mobility & Active Recovery",
    subtitle: "Joint longevity, tissue quality, and nervous system down-regulation.",
    category: "Recovery",
    description:
      "Progress requires recovery. Combine FRC (Functional Range Conditioning), controlled articular rotations, myofascial release, and contrast sauna protocols to restore tissue glide and avoid chronic overuse injuries.",
    intendedFor:
      "Active lifters dealing with stiffness, desk-bound professionals requiring postural restoration, and anyone prioritizing joint health for the next decade.",
    trainingFocus: [
      "Controlled Articular Rotations (CARs) for all major joints",
      "End-range isometric strength and tissue adaptation",
      "Breathwork to activate parasympathetic nervous response",
      "Myofascial decompression and contrast protocol guidance",
    ],
    weeklyCommitment: "2 to 3 sessions / week",
    sessionLength: "50 minutes",
    coachRatio: "1 : 10 maximum",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Joint Scans & Breath", description: "Diaphragmatic cadence check and segmental spine articulation" },
      { phase: "02. End-Range Activation", description: "PAILs/RAILs isometric holds for internal and external hip rotation" },
      { phase: "03. Loaded Stretching", description: "Jefferson curls, couch stretch variations, pancake hold progressions" },
      { phase: "04. Sensory Restoration", description: "Guided acoustic downregulation and light lymphatic flush" },
    ],
    featured: false,
  },
  {
    id: "group-fitness",
    slug: "group-fitness-classes",
    title: "Prospira Group Athletics",
    subtitle: "High-energy collective accountability with rigorous coaching.",
    category: "Conditioning",
    description:
      "The camaraderie of a team environment without sacrificing coaching standards. Work alongside dedicated peers in structured squad circuits with real-time coaching corrections.",
    intendedFor:
      "Members energized by collective momentum who thrive in an electric, supportive team training atmosphere.",
    trainingFocus: [
      "Team-based athletic complexes and partner pacing",
      "Synchronized work-to-rest cadence",
      "Accountability, community grit, and athletic camaraderie",
      "Scalable movement standards for mixed capability tiers",
    ],
    weeklyCommitment: "3 to 5 days / week",
    sessionLength: "50 minutes",
    coachRatio: "1 : 14 maximum",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop",
    sampleStructure: [
      { phase: "01. Collective Briefing", description: "Movement standard demonstration, pacing strategy, and coach breakdown" },
      { phase: "02. Station Familiarization", description: "Light preparatory circuits validating technique across all pods" },
      { phase: "03. Team Crucible", description: "Multi-pod circuit training challenging power, stamina, and agility" },
      { phase: "04. Team Debrief", description: "Coaching high-fives, cooldown stretches, and scoreboard benchmark logging" },
    ],
    featured: false,
  },
];
