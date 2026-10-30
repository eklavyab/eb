import type { ArtVariant } from "@/components/ui/ArtFrame";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date
  readingTime: string;
  excerpt: string;
  art: ArtVariant;
  /** Marks sample drafts written as starting points — edit or replace before publishing. */
  draft: boolean;
  body: ArticleBlock[];
};

export const journalCategories = [
  "Digital Marketing Trends",
  "Brand Strategy",
  "Consumer Psychology",
  "Social Media Behaviour",
  "Content Marketing",
  "Luxury Brand Communication",
  "Audience Engagement",
  "Creative Strategy",
] as const;

export const articles: Article[] = [
  {
    slug: "the-quiet-power-of-restraint",
    title: "The Quiet Power of Restraint in Luxury Communication",
    category: "Luxury Brand Communication",
    date: "2026-10-01",
    readingTime: "4 min read",
    excerpt:
      "Why the most desirable brands often say less — and what that teaches us about attention, confidence and meaning.",
    art: "arch",
    draft: true,
    body: [
      {
        type: "p",
        text: "Luxury has always been comfortable with silence. Where many brands compete to be heard, the most considered ones seem content to be noticed. That difference is not an aesthetic accident — it is a communication strategy.",
      },
      { type: "h2", text: "Saying less, meaning more" },
      {
        type: "p",
        text: "Restraint signals confidence. A brand that does not need to explain every detail suggests it trusts its audience — and trust is one of the most valuable things a brand can offer in return for attention.",
      },
      {
        type: "quote",
        text: "Restraint is not the absence of a message. It is the discipline of choosing one.",
      },
      {
        type: "p",
        text: "For social media, this raises an interesting tension. Platforms reward frequency and volume, yet desirability often grows from scarcity and intention. The work, then, is finding a rhythm that stays present without becoming noise.",
      },
      { type: "h2", text: "Questions worth asking" },
      {
        type: "p",
        text: "Does this piece of content add to the brand's world, or merely fill a slot? Would the brand be missed if it said nothing today? These are uncomfortable questions — and useful ones.",
      },
    ],
  },
  {
    slug: "relevance-is-a-behaviour",
    title: "Relevance Is a Behaviour, Not a Format",
    category: "Content Marketing",
    date: "2026-09-12",
    readingTime: "5 min read",
    excerpt:
      "Chasing formats keeps content busy. Understanding why people pay attention keeps it relevant.",
    art: "grid",
    draft: true,
    body: [
      {
        type: "p",
        text: "Every few months a new format becomes the answer to every content question. But formats are containers. What makes content relevant is rarely the container — it is the understanding behind it.",
      },
      { type: "h2", text: "Start with the audience's moment" },
      {
        type: "p",
        text: "Relevant content meets people where they are: in a mood, a context, a need. Thinking about that moment first tends to produce better ideas than starting with what the algorithm currently favours.",
      },
      {
        type: "quote",
        text: "Trends tell us what people are doing. Insight tells us why.",
      },
      {
        type: "p",
        text: "The most durable content strategies use trends as signals rather than instructions — evidence of shifting behaviour that can be interpreted through the brand's own point of view.",
      },
    ],
  },
  {
    slug: "brands-as-places",
    title: "Brands as Places: Designing Digital Spaces People Return To",
    category: "Audience Engagement",
    date: "2026-08-20",
    readingTime: "4 min read",
    excerpt:
      "A thought on why the strongest digital brand presences feel less like channels and more like destinations.",
    art: "nocturne",
    draft: true,
    body: [
      {
        type: "p",
        text: "We return to places that make us feel something — a familiar bar, a favourite bookshop, a quiet corner of a city. The best digital brand presences borrow that quality. They feel like somewhere, not something.",
      },
      { type: "h2", text: "Atmosphere is a strategy" },
      {
        type: "p",
        text: "Consistency of tone, visual language and rhythm creates atmosphere. Atmosphere creates familiarity. And familiarity, over time, becomes preference.",
      },
      {
        type: "p",
        text: "Engagement, in this sense, is less about prompting reactions and more about building a space people genuinely want to spend time in.",
      },
    ],
  },
  {
    slug: "the-psychology-of-perceived-value",
    title: "Notes on the Psychology of Perceived Value",
    category: "Consumer Psychology",
    date: "2026-07-30",
    readingTime: "6 min read",
    excerpt:
      "How context, cues and storytelling shape what people believe something is worth.",
    art: "orbit",
    draft: true,
    body: [
      {
        type: "p",
        text: "Value is not only a property of a product. It is also a perception — shaped by context, cues and the stories that surround an experience.",
      },
      { type: "h2", text: "Cues before claims" },
      {
        type: "p",
        text: "People often judge quality through signals before they evaluate any claim: the care in a photograph, the confidence of a sentence, the coherence of a visual identity. Brand communication is, in part, the careful management of those cues.",
      },
      {
        type: "quote",
        text: "Before an audience understands a brand, it senses one.",
      },
      {
        type: "p",
        text: "This is where creative and strategic thinking meet. Every aesthetic decision is also a statement about value — whether or not it was intended as one.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
