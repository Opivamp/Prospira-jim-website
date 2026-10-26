export interface FAQItem {
  id: string;
  category: "Memberships" | "First Visit" | "Training & Classes" | "Facilities" | "Policies";
  question: string;
  answer: string;
}

export const faqCategories = [
  "All",
  "Memberships",
  "First Visit",
  "Training & Classes",
  "Facilities",
  "Policies",
] as const;

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "First Visit",
    question: "What should I expect during my first visit to Prospira?",
    answer:
      "When you arrive for your first visit or trial session, check in with Member Concierge at the front desk. A coach will conduct a brief 10-minute movement and joint screen, introduce you to the facility zones, provide your digital locker assignment, and guide you through your session based on your current training history.",
  },
  {
    id: "faq-2",
    category: "First Visit",
    question: "What equipment and apparel do I need to bring?",
    answer:
      "Wear clean, supportive athletic footwear (flat-soled shoes or Olympic lifting shoes are encouraged for lifting platforms; bare-foot / socks are permitted in mobility zones). We supply complimentary chilled towels, filtered hydration stations, and premium shower amenities. Bring your personal water flask and gym kit.",
  },
  {
    id: "faq-3",
    category: "Memberships",
    question: "Are there long-term contracts or cancellation penalties?",
    answer:
      "Prospira does not lock members into predatory contracts. Our monthly memberships operate on a rolling 30-day agreement that can be cancelled or paused with 14 business days written notice prior to the subsequent billing cycle. Annual commitments offer reduced dues in exchange for a 12-month term.",
  },
  {
    id: "faq-4",
    category: "Memberships",
    question: "Can I freeze my membership if I travel or experience injury?",
    answer:
      "Yes. All active members may place their membership on temporary freeze for up to 60 cumulative calendar days per year at no cost. Additional medical freezes are approved with documentation from a licensed healthcare practitioner.",
  },
  {
    id: "faq-5",
    category: "Training & Classes",
    question: "I am new to barbell training. Are classes suitable for me?",
    answer:
      "Yes. Every group class session maintains a strict low coach-to-member ratio (maximum 1:12). Coaches provide scaled variations for every compound movement, ensuring you train at a load and complexity that matches your current movement competence.",
  },
  {
    id: "faq-6",
    category: "Training & Classes",
    question: "How do I reserve a spot in high-demand group sessions?",
    answer:
      "Class reservations open 7 days in advance via the Prospira Athlete portal or website schedule. Because we cap class attendance to guarantee barbell rack availability, reservations are recommended. Cancellations made more than 2 hours prior to class incurs zero fee.",
  },
  {
    id: "faq-7",
    category: "Training & Classes",
    question: "How are 1-on-1 private coaching sessions scheduled?",
    answer:
      "Private coaching sessions are booked directly with your assigned coach or through the member concierge. Your coach conducts biometric audits, movement screenings, and form telemetry to design and supervise your progressive cycles.",
  },
  {
    id: "faq-8",
    category: "Facilities",
    question: "What strength equipment does Prospira furnish?",
    answer:
      "We equip our floors exclusively with IWF/IPF-certified Eleiko competition barbells, calibrated steel and bumper plates, custom power racks with integrated band pegs, specialized specialty bars (Safety Squat, Trap bar, Swiss bar), dumbbells up to 150 lbs, Concept2 ergometers, and Rogue Echo bikes.",
  },
  {
    id: "faq-9",
    category: "Facilities",
    question: "What recovery amenities are provided on site?",
    answer:
      "Our Recovery Suite features a traditional dry Finnish cedar sauna (operating at 85°C–90°C), temperature-regulated cold contrast plunge baths (maintained at 10°C), acoustic down-regulation loungers, and Hyperice percussion stations.",
  },
  {
    id: "faq-10",
    category: "Policies",
    question: "What is the gym etiquette policy?",
    answer:
      "Prospira is built on mutual respect and focused training. Members are required to unload and rerack all weights to their designated pins, wipe down equipment after use with disinfectant towels, use chalk responsibly, and keep phone conversations outside the main lifting floor.",
  },
  {
    id: "faq-11",
    category: "Policies",
    question: "Is there on-site parking or transit accessibility?",
    answer:
      "Dedicated member vehicle parking stalls and covered bicycle racks are situated directly behind the building. The facility is also within 300 meters of the central metro transit line.",
  },
  {
    id: "faq-12",
    category: "Policies",
    question: "Can I bring a guest or workout partner?",
    answer:
      "Performance tier members receive 2 complimentary guest passes monthly; Elite members receive 4 passes monthly. Additional guest passes can be purchased for $30. All guests must complete our digital intake and liability waiver before training.",
  },
];
