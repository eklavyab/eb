import Link from "next/link";
import { FadeUp, ImageReveal } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { ArrowLink, PlaceholderTag } from "@/components/ui/primitives";
import type { Project } from "@/content/projects";

/** Asymmetric editorial index of case studies. Alternates image placement and scale per project. */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <ol className="space-y-24 md:space-y-40">
      {projects.map((project, i) => {
        const even = i % 2 === 0;
        const href = `/work/${project.slug}`;
        return (
          <li key={project.slug} className="grid grid-cols-12 items-end gap-x-6 gap-y-8">
            <Link
              href={href}
              data-cursor="View"
              aria-label={`View case study: ${project.title} — ${project.category}`}
              className={`group col-span-12 block ${
                even ? "md:col-span-7" : "md:order-2 md:col-span-6 md:col-start-7"
              }`}
            >
              <ImageReveal className={even ? "aspect-[4/3]" : "aspect-[4/5]"} parallax={6}>
                <div className="h-full w-full transition-transform duration-[1.6s] ease-[var(--ease-luxe)] group-hover:scale-[1.04]">
                  <ArtFrame variant={project.art} src={project.cover} className="h-full w-full" />
                </div>
              </ImageReveal>
            </Link>

            <FadeUp
              className={`col-span-12 ${
                even ? "md:col-span-4 md:col-start-9" : "md:order-1 md:col-span-5 md:col-start-1 md:self-start md:pt-24"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow tabular-nums text-taupe-deep">
                  ({String(i + 1).padStart(2, "0")}) — {project.category}
                </span>
                {project.placeholder && <PlaceholderTag />}
              </div>
              <h3 className="display mt-5 text-[clamp(2.2rem,4.4vw,4.6rem)]">
                <Link href={href} className="hover:italic">
                  {project.title}
                </Link>
              </h3>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/15 pt-5 text-sm">
                <div>
                  <dt className="eyebrow text-[0.6rem] text-taupe-deep">Brand / Client</dt>
                  <dd className="mt-1">{project.client}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem] text-taupe-deep">Year</dt>
                  <dd className="mt-1">{project.year}</dd>
                </div>
              </dl>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">{project.excerpt}</p>
              <ArrowLink href={href} className="mt-7">
                View Case Study
              </ArrowLink>
            </FadeUp>
          </li>
        );
      })}
    </ol>
  );
}
