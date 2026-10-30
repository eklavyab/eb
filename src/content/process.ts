export type ProcessStage = {
  title: string;
  summary: string;
  focus: string[];
};

export const processStages: ProcessStage[] = [
  {
    title: "Discover",
    summary: "Understanding the brand, audience, market and objectives.",
    focus: ["Brand audit", "Objectives", "Stakeholder context"],
  },
  {
    title: "Research",
    summary: "Exploring consumer behaviour, competitors, trends and opportunities.",
    focus: ["Audience behaviour", "Competitive landscape", "Cultural signals"],
  },
  {
    title: "Strategise",
    summary: "Developing the communication direction, content strategy and marketing plan.",
    focus: ["Positioning", "Content pillars", "Channel plan"],
  },
  {
    title: "Create",
    summary: "Translating strategy into meaningful creative content and digital experiences.",
    focus: ["Creative direction", "Content production", "Copy & tone"],
  },
  {
    title: "Execute & Evaluate",
    summary:
      "Managing execution, understanding performance and identifying opportunities for improvement.",
    focus: ["Publishing", "Performance review", "Iteration"],
  },
];
