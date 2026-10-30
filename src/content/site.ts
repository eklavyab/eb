/**
 * Global brand + contact configuration.
 * Everything wrapped in [brackets] is a placeholder — replace with real details.
 */
export const site = {
  // PLACEHOLDER — replace with your full name. Used for the wordmark, metadata and footer.
  name: "Your Name",
  // Short monogram used in the loader and favicon-style marks.
  monogram: "YN",
  title: "Digital Marketing & Brand Communication Strategist",
  identifier: ["Digital Marketing", "Brand Strategy", "Creative Communication"],
  description:
    "Digital marketing and brand communication strategist exploring the intersection of brand communication, content strategy and audience behaviour.",
  url: "https://www.example.com", // PLACEHOLDER — your production domain
  email: "hello@yourdomain.com", // PLACEHOLDER
  location: "[City, Country]", // PLACEHOLDER
  availability: "Open to selected collaborations",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" }, // PLACEHOLDER
    { label: "Instagram", href: "https://www.instagram.com/your-handle" }, // PLACEHOLDER
  ],
} as const;

export const navigation = [
  { label: "Thinking", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
] as const;
