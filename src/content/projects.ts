import type { ArtVariant } from "@/components/ui/ArtFrame";

export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  disciplines: string[];
  /** Short line used on the portfolio index. */
  excerpt: string;
  /**
   * Optional real imagery. Drop files into /public/images/work and reference them here,
   * e.g. cover: "/images/work/studio-xo-cover.jpg". When empty, an art-directed
   * placeholder composition is rendered instead.
   */
  cover?: string;
  gallery?: string[];
  art: ArtVariant;
  /** Marks content that is still a placeholder awaiting real project details. */
  placeholder: boolean;
  caseStudy: {
    overview: string;
    objective: string;
    approach: string;
    creativeDirection: string;
    execution: string;
    deliverables: string[];
    results: string;
  };
};

const PENDING = "[Placeholder — to be completed with confirmed project information.]";
const RESULTS_PENDING =
  "[Placeholder — results and insights will be added once verified. No performance figures are shown until confirmed.]";

export const projects: Project[] = [
  {
    slug: "studio-xo-digital-presence",
    title: "An After-Dark Digital Presence",
    category: "Social Media Management",
    client: "Studio XO Luxury Bar",
    year: "[Year]",
    disciplines: ["Social Media", "Content", "Digital Brand Presence"],
    excerpt:
      "Placeholder case study — ongoing social media execution and marketing planning for a luxury bar.",
    art: "nocturne",
    placeholder: true,
    caseStudy: {
      overview:
        "[Placeholder] An overview of ongoing social media account management for Studio XO Luxury Bar — describe the brand, the context of the work and your role within it.",
      objective:
        "[Placeholder] State the confirmed objective — for example, what the brand wanted its digital presence to communicate and to whom.",
      approach:
        "[Placeholder] Outline the strategic approach: audience understanding, content pillars, posting rhythm and how emerging trends informed decisions.",
      creativeDirection:
        "[Placeholder] Describe the visual and verbal direction — mood, tone of voice, photography style and how it reflects a luxury hospitality experience.",
      execution:
        "[Placeholder] Explain how content was planned, produced and published, and how audience engagement was managed day to day.",
      deliverables: [
        "[Deliverable — e.g. content calendar]",
        "[Deliverable — e.g. social content series]",
        "[Deliverable — e.g. community management]",
      ],
      results: RESULTS_PENDING,
    },
  },
  {
    slug: "brand-communication-study",
    title: "Project Title Placeholder",
    category: "Brand Communication",
    client: "[Brand / Client]",
    year: "[Year]",
    disciplines: ["Brand Positioning", "Tone of Voice", "Identity"],
    excerpt: "Placeholder — a brand communication project awaiting real work.",
    art: "arch",
    placeholder: true,
    caseStudy: {
      overview: PENDING,
      objective: PENDING,
      approach: PENDING,
      creativeDirection: PENDING,
      execution: PENDING,
      deliverables: ["[Deliverable]", "[Deliverable]", "[Deliverable]"],
      results: RESULTS_PENDING,
    },
  },
  {
    slug: "content-strategy-framework",
    title: "Project Title Placeholder",
    category: "Content Strategy",
    client: "[Brand / Client]",
    year: "[Year]",
    disciplines: ["Content Pillars", "Editorial Planning", "Formats"],
    excerpt: "Placeholder — a content strategy project awaiting real work.",
    art: "grid",
    placeholder: true,
    caseStudy: {
      overview: PENDING,
      objective: PENDING,
      approach: PENDING,
      creativeDirection: PENDING,
      execution: PENDING,
      deliverables: ["[Deliverable]", "[Deliverable]", "[Deliverable]"],
      results: RESULTS_PENDING,
    },
  },
  {
    slug: "campaign-development",
    title: "Project Title Placeholder",
    category: "Campaign Development",
    client: "[Brand / Client]",
    year: "[Year]",
    disciplines: ["Campaign Planning", "Creative Direction", "Execution"],
    excerpt: "Placeholder — a campaign development project awaiting real work.",
    art: "orbit",
    placeholder: true,
    caseStudy: {
      overview: PENDING,
      objective: PENDING,
      approach: PENDING,
      creativeDirection: PENDING,
      execution: PENDING,
      deliverables: ["[Deliverable]", "[Deliverable]", "[Deliverable]"],
      results: RESULTS_PENDING,
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
