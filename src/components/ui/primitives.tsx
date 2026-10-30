import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

/** Editorial section index, e.g. "(02) — The Thinking". */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      <span className="tabular-nums">({index})</span>
      <span aria-hidden className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}

/** Marks content that still needs real information. */
export function PlaceholderTag({ children = "Placeholder", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 border border-current/30 px-2.5 py-1 text-[0.58rem] opacity-80 ${className}`}
    >
      <span aria-hidden className="h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}

/** Understated CTA: label with a rule that extends and an arrow that lifts on hover. */
export function ArrowLink({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="h-px w-8 bg-current transition-all duration-700 ease-[var(--ease-luxe)] group-hover:w-16" />
      <ArrowUpRight
        aria-hidden
        strokeWidth={1.2}
        className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );
  const cls = `eyebrow group inline-flex items-center gap-4 ${className}`;

  return external || href.startsWith("mailto:") ? (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Large outlined serif marquee used as a section interlude. */
export function Marquee({ words, className = "" }: { words: string[]; className?: string }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="display px-6 text-[clamp(3rem,9vw,8.5rem)] italic md:px-10">{w}</span>
          <span aria-hidden className="h-2 w-2 rotate-45 bg-taupe" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden py-8 md:py-12 ${className}`} aria-hidden>
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
