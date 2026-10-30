import Link from "next/link";
import { FadeUp, ImageReveal } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { PlaceholderTag } from "@/components/ui/primitives";
import { formatDate, type Article } from "@/content/articles";

/** Lead story with a large visual. */
export function FeaturedArticle({ article }: { article: Article }) {
  const href = `/journal/${article.slug}`;
  return (
    <article className="grid grid-cols-12 items-end gap-x-6 gap-y-8">
      <Link href={href} data-cursor="Read" className="group col-span-12 md:col-span-7" aria-label={`Read: ${article.title}`}>
        <ImageReveal className="aspect-[16/11]">
          <div className="h-full w-full transition-transform duration-[1.6s] ease-[var(--ease-luxe)] group-hover:scale-[1.04]">
            <ArtFrame variant={article.art} className="h-full w-full" />
          </div>
        </ImageReveal>
      </Link>
      <FadeUp className="col-span-12 md:col-span-5">
        <ArticleMeta article={article} />
        <h3 className="display mt-5 text-[clamp(2.1rem,3.8vw,3.9rem)] leading-[0.98]">
          <Link href={href} className="hover:italic">
            {article.title}
          </Link>
        </h3>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink/70">{article.excerpt}</p>
      </FadeUp>
    </article>
  );
}

/** Text-led list of further reading, styled like a publication contents page. */
export function ArticleRows({ articles }: { articles: Article[] }) {
  return (
    <ul>
      {articles.map((article) => (
        <FadeUp as="li" key={article.slug} className="border-t border-ink/15 last:border-b">
          <Link
            href={`/journal/${article.slug}`}
            data-cursor="Read"
            className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-8 md:py-10"
          >
            <span className="col-span-12 md:col-span-3">
              <ArticleMeta article={article} compact />
            </span>
            <span className="col-span-12 font-serif text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.08] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 md:col-span-6">
              {article.title}
            </span>
            <span className="col-span-12 text-sm leading-relaxed text-ink/60 md:col-span-3">
              {article.excerpt}
            </span>
          </Link>
        </FadeUp>
      ))}
    </ul>
  );
}

export function ArticleMeta({ article, compact }: { article: Article; compact?: boolean }) {
  return (
    <span className={`eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6rem] text-taupe-deep ${compact ? "flex-col items-start" : ""}`}>
      <span className="text-ink">{article.category}</span>
      {!compact && <span aria-hidden>·</span>}
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      {!compact && <span aria-hidden>·</span>}
      <span>{article.readingTime}</span>
      {article.draft && <PlaceholderTag>Sample draft</PlaceholderTag>}
    </span>
  );
}
