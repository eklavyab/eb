export type Experience = {
  role: string;
  secondaryRole?: string;
  organisation: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  focus: string[];
  placeholder?: boolean;
};

/**
 * Most recent first. Add new roles to the top of the array.
 */
export const experience: Experience[] = [
  {
    role: "Digital Marketing Executive",
    secondaryRole: "Social Media Account Manager",
    organisation: "Studio XO Luxury Bar",
    period: "[Start date] — Present", // PLACEHOLDER — add your start date
    current: true,
    summary:
      "Working across social media execution and marketing planning for a luxury hospitality brand, with a focus on content, emerging trends, audience engagement and digital brand presence.",
    focus: [
      "Social media execution",
      "Marketing planning",
      "Content",
      "Emerging trends",
      "Audience engagement",
      "Digital brand presence",
    ],
  },
  {
    role: "[Previous Role]",
    organisation: "[Organisation]",
    period: "[Year — Year]",
    summary: "Placeholder — reserved for future or previous professional experience.",
    focus: [],
    placeholder: true,
  },
];

export const education = {
  // PLACEHOLDER — add qualifications only when confirmed.
  label: "[Education / Certifications — to be added]",
};
