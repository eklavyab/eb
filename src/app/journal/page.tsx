import type { Metadata } from "next";
import { JournalBrowser } from "@/components/journal/JournalBrowser";
import { articles, journalCategories } from "@/content/articles";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Insights on digital marketing trends, brand strategy, consumer psychology, social media behaviour and luxury brand communication.",
};

export default function JournalPage() {
  return (
    <section className="bg-ivory pt-32 pb-[var(--section)] md:pt-40">
      <div className="container-luxe">
        <div className="border-y border-ink py-6 md:py-8">
          <div className="eyebrow flex items-center justify-between text-[0.6rem] text-taupe-deep">
            <span>Insights</span>
            <span className="hidden sm:inline">Notes on brand, content &amp; behaviour</span>
            <span>Issue 01</span>
          </div>
          <h1 className="display mt-6 text-center text-[clamp(4rem,15vw,15rem)] leading-[0.82]">
            The <span className="italic text-taupe-deep">Journal</span>
          </h1>
        </div>
        <JournalBrowser articles={articles} categories={[...journalCategories]} />
      </div>
    </section>
  );
}
