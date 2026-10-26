export interface Testimonial {
  id: string;
  quote: string;
  memberName: string;
  title: string;
  programEnrolled: string;
  durationWithGym: string;
  avatar: string;
  isSamplePlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "What separates Prospira is the absence of distractions. The coaching isn't performative; it's focused entirely on movement mechanics and sustainable progression. My deadlift form and shoulder stability have never felt more solid.",
    memberName: "Alexander Hayes",
    title: "Software Architect & Lifter",
    programEnrolled: "Strength & Conditioning",
    durationWithGym: "14 Months (Sample Concept)",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    isSamplePlaceholder: true,
  },
  {
    id: "test-2",
    quote:
      "I used to bounce between random workouts without any real plan. Working with Marcus and Sarah gave me a structured periodization that actually fit into a 60-hour work week. The results speak for themselves.",
    memberName: "Claire Montgomery",
    title: "Managing Director",
    programEnrolled: "Private Coaching",
    durationWithGym: "9 Months (Sample Concept)",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    isSamplePlaceholder: true,
  },
  {
    id: "test-3",
    quote:
      "The recovery suite and Finnish sauna changed my training rhythm. Having cold contrast and proper mobility coaching right on site means I can train 4 days a week without accumulating chronic joint fatigue.",
    memberName: "Julian Kova",
    title: "Triathlete & Functional Athlete",
    programEnrolled: "Functional Movement & Recovery",
    durationWithGym: "18 Months (Sample Concept)",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    isSamplePlaceholder: true,
  },
];
