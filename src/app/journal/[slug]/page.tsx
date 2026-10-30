import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleMeta } from "@/components/journal/ArticleList";
import { FadeUp, ImageReveal, RevealLines } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { articles, getArticle } from "@/content/articles";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { type: "article", title: article.title, description: article.excerpt, publishedTime: article.date },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];
  let firstParagraph = true;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Person", name: site.name },
  };

  return (
    <article className="bg-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="container-luxe pt-32 md:pt-44">
        <Link href="/journal" className="eyebrow link-underline text-taupe-deep">
          ← The Journal
        </Link>
        <div className="mx-auto mt-14 max-w-5xl text-center">
          <div className="flex justify-center">
            <ArticleMeta article={article} />
          </div>
          <RevealLines
            as="h1"
            className="display mt-8 text-[clamp(2.6rem,6.5vw,6.6rem)] leading-[0.95]"
            lines={[article.title]}
          />
          <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic text-ink/70 md:text-2xl">{article.excerpt}</p>
        </div>
        <ImageReveal className="mt-16 aspect-[16/10] md:mt-20 md:aspect-[16/7]">
          <ArtFrame variant={article.art} className="h-full w-full" />
        </ImageReveal>
      </header>

      <div className="container-luxe section-y">
        {article.draft && (
          <p className="eyebrow mx-auto mb-14 max-w-2xl border border-ink/20 px-5 py-4 text-[0.6rem] leading-relaxed text-taupe-deep">
            Sample draft — a starting point written for this template. Edit, replace or remove before
            publishing.
          </p>
        )}
        <div className="mx-auto max-w-2xl">
          {article.body.map((block, i) => {
            if (block.type === "h2")
              return (
                <FadeUp key={i}>
                  <h2 className="mt-16 mb-6 font-serif text-[2.1rem] leading-tight md:text-[2.6rem]">{block.text}</h2>
                </FadeUp>
              );
            if (block.type === "quote")
              return (
                <FadeUp key={i}>
                  <blockquote className="my-16 border-y border-ink/15 py-10 text-center font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-light italic leading-[1.15] md:-mx-24">
                    &ldquo;{block.text}&rdquo;
                  </blockquote>
                </FadeUp>
              );
            const drop = firstParagraph;
            firstParagraph = false;
            return (
              <FadeUp key={i}>
                <p
                  className={`mb-7 text-[1.075rem] leading-[1.85] text-ink/80 ${
                    drop
                      ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-ink"
                      : ""
                  }`}
                >
                  {block.text}
                </p>
              </FadeUp>
            );
          })}
          <p className="eyebrow mt-16 border-t border-ink/15 pt-6 text-[0.6rem] text-taupe-deep">
            Written by {site.name}
          </p>
        </div>
      </div>

      {next && next.slug !== article.slug && (
        <Link href={`/journal/${next.slug}`} data-cursor="Read" className="group block border-t border-ink/15 py-24 md:py-32">
          <div className="container-luxe">
            <p className="eyebrow text-taupe-deep">Continue Reading — {next.category}</p>
            <p className="display mt-6 max-w-5xl text-[clamp(2.4rem,6vw,6rem)] leading-[0.98] transition-all duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3 group-hover:italic">
              {next.title} →
            </p>
          </div>
        </Link>
      )}
    </article>
  );
}
