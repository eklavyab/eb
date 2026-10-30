import { ArticleRows, FeaturedArticle } from "@/components/journal/ArticleList";
import { FadeUp } from "@/components/motion/Reveal";
import { ArrowLink, SectionLabel } from "@/components/ui/primitives";
import { articles, journalCategories } from "@/content/articles";

export function Journal() {
  const [featured, ...rest] = articles;

  return (
    <section id="journal" aria-labelledby="journal-title" className="section-y bg-ivory pt-0">
      <div className="container-luxe">
        {/* Masthead */}
        <FadeUp className="border-y border-ink py-6 md:py-8">
          <div className="eyebrow flex items-center justify-between text-[0.6rem] text-taupe-deep">
            <SectionLabel index="07">Insights</SectionLabel>
            <span className="hidden sm:inline">Notes on brand, content &amp; behaviour</span>
            <span>Issue 01</span>
          </div>
          <h2 id="journal-title" className="display mt-6 text-center text-[clamp(4rem,15vw,15rem)] leading-[0.82]">
            The <span className="italic text-taupe-deep">Journal</span>
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-ink/15 pt-5">
            {journalCategories.map((c) => (
              <li key={c} className="eyebrow text-[0.58rem] text-ink/60">
                {c}
              </li>
            ))}
          </ul>
        </FadeUp>

        <div className="mt-16 md:mt-24">{featured && <FeaturedArticle article={featured} />}</div>
        <div className="mt-16 md:mt-24">
          <ArticleRows articles={rest.slice(0, 3)} />
        </div>
        <div className="mt-14 flex justify-end">
          <ArrowLink href="/journal">All Insights</ArrowLink>
        </div>
      </div>
    </section>
  );
}
