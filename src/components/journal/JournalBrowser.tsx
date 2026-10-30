"use client";

import { useState } from "react";
import { ArticleRows, FeaturedArticle } from "@/components/journal/ArticleList";
import type { Article } from "@/content/articles";

/** Category filter for the journal index. */
export function JournalBrowser({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? articles.filter((a) => a.category === filter) : articles;
  const [featured, ...rest] = visible;

  return (
    <>
      <div role="group" aria-label="Filter by topic" className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3">
        {[null, ...categories].map((c) => {
          const active = filter === c;
          return (
            <button
              key={c ?? "all"}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`eyebrow pb-1 text-[0.6rem] transition-colors duration-500 ${
                active ? "border-b border-ink text-ink" : "text-ink/50 hover:text-ink"
              }`}
            >
              {c ?? "All Topics"}
            </button>
          );
        })}
      </div>

      {featured ? (
        <>
          <div className="mt-16 md:mt-24" key={`f-${filter}`}>
            <FeaturedArticle article={featured} />
          </div>
          {rest.length > 0 && (
            <div className="mt-16 md:mt-24" key={`r-${filter}`}>
              <ArticleRows articles={rest} />
            </div>
          )}
        </>
      ) : (
        <p className="mt-24 text-center font-serif text-3xl italic text-ink/50">
          No essays in this topic yet — forthcoming.
        </p>
      )}
    </>
  );
}
