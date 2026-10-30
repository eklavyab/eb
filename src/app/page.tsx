import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Work } from "@/components/sections/Work";
import { Marquee } from "@/components/ui/primitives";
import { site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: site.socials.map((s) => s.href),
  worksFor: { "@type": "Organization", name: "Studio XO Luxury Bar" },
  knowsAbout: [
    "Social Media Marketing",
    "Content Strategy",
    "Brand Positioning",
    "Audience Engagement",
    "Digital Marketing Strategy",
    "Consumer Behaviour",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Expertise />
      <Marquee
        words={["Strategy", "Storytelling", "Audience", "Identity", "Experience"]}
        className="bg-ivory text-ink"
      />
      <Work />
      <Approach />
      <Experience />
      <Journal />
      <Contact />
    </>
  );
}
