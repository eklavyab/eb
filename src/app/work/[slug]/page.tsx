import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeUp, ImageReveal, RevealLines } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { ArrowLink, PlaceholderTag } from "@/components/ui/primitives";
import { getProject, projects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.excerpt,
    openGraph: { title: project.title, description: project.excerpt },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const cs = project.caseStudy;

  const chapters = [
    { label: "Project Overview", body: cs.overview },
    { label: "Brand / Client", body: project.client },
    { label: "Objective", body: cs.objective },
    { label: "Strategic Approach", body: cs.approach },
    { label: "Creative Direction", body: cs.creativeDirection },
    { label: "Content Execution", body: cs.execution },
  ];

  return (
    <article>
      {/* Opening */}
      <header className="bg-ivory pt-32 md:pt-44">
        <div className="container-luxe">
          <div className="eyebrow flex flex-wrap items-center justify-between gap-4 text-taupe-deep">
            <Link href="/#work" className="link-underline">
              ← Selected Work
            </Link>
            <span className="tabular-nums">
              Case Study {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <p className="eyebrow mt-14 flex items-center gap-4">
            {project.category}
            {project.placeholder && <PlaceholderTag>Placeholder case study</PlaceholderTag>}
          </p>
          <RevealLines
            as="h1"
            className="display mt-6 max-w-6xl text-[clamp(3rem,8.5vw,9.5rem)]"
            lines={[project.title]}
          />

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-ink/15 pt-6 text-sm md:grid-cols-4">
            {[
              ["Brand / Client", project.client],
              ["Year", project.year],
              ["Disciplines", project.disciplines.join(", ")],
              ["Status", project.placeholder ? "Awaiting real project details" : "Published"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-[0.6rem] text-taupe-deep">{k}</dt>
                <dd className="mt-2 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="container-luxe mt-14 md:mt-20">
          <ImageReveal className="aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8]" parallax={10}>
            <ArtFrame variant={project.art} src={project.cover} className="h-full w-full" priority alt={`${project.title} cover`} />
          </ImageReveal>
        </div>
      </header>

      {/* Chapters 01–06 */}
      <section className="section-y bg-ivory" aria-label="Case study">
        <div className="container-luxe">
          {chapters.map((c, i) => (
            <FadeUp
              key={c.label}
              className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-ink/15 py-10 md:py-16"
            >
              <h2 className="eyebrow col-span-12 flex gap-4 text-taupe-deep md:col-span-4">
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {c.label}
              </h2>
              <p
                className={`col-span-12 md:col-span-8 ${
                  i === 0
                    ? "font-serif text-[clamp(1.6rem,2.8vw,2.6rem)] font-light leading-[1.2]"
                    : "max-w-2xl text-[1.05rem] leading-relaxed text-ink/75"
                }`}
              >
                {c.body}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Gallery */}
        <div className="container-luxe mt-10 grid grid-cols-12 gap-6">
          <ImageReveal className="col-span-12 aspect-[4/5] md:col-span-5">
            <ArtFrame variant="arch" src={project.gallery?.[0]} className="h-full w-full" label="Image placeholder" />
          </ImageReveal>
          <ImageReveal className="col-span-12 aspect-[4/5] md:col-span-6 md:col-start-7 md:mt-32">
            <ArtFrame variant="nocturne" src={project.gallery?.[1]} className="h-full w-full" label="Image placeholder" />
          </ImageReveal>
        </div>
      </section>

      {/* Deliverables & results */}
      <section className="section-y bg-charcoal text-ivory" aria-label="Deliverables and results">
        <div className="container-luxe grid grid-cols-12 gap-x-6 gap-y-16">
          <FadeUp className="col-span-12 md:col-span-5">
            <h2 className="eyebrow flex gap-4 text-taupe">
              <span>07</span>Final Deliverables
            </h2>
            <ul className="mt-8">
              {cs.deliverables.map((d) => (
                <li key={d} className="border-t border-ivory/15 py-4 font-serif text-2xl font-light last:border-b">
                  {d}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <h2 className="eyebrow flex gap-4 text-taupe">
              <span>08</span>Results &amp; Insights
            </h2>
            <p className="mt-8 font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] font-light leading-snug text-ivory/85">
              {cs.results}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        data-cursor="Next"
        className="group block bg-ivory py-24 md:py-36"
      >
        <div className="container-luxe">
          <p className="eyebrow text-taupe-deep">Next Case Study — {next.category}</p>
          <p className="display mt-6 text-[clamp(2.8rem,8vw,8.5rem)] transition-all duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-4 group-hover:italic">
            {next.title} →
          </p>
        </div>
      </Link>
      <div className="bg-ivory pb-16">
        <div className="container-luxe">
          <ArrowLink href="/#contact">Discuss a Project</ArrowLink>
        </div>
      </div>
    </article>
  );
}
