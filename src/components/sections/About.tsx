import { FadeUp, ImageReveal, RevealLines } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { PlaceholderTag, SectionLabel } from "@/components/ui/primitives";

const pillars = [
  "Creative thinking",
  "Strategic planning",
  "Audience understanding",
  "Content execution",
  "Brand communication",
];

const questions = [
  "What makes content relevant.",
  "How brands communicate a distinctive identity.",
  "How digital experiences build meaningful connections with audiences.",
  "How creative strategy translates into measurable marketing performance.",
  "How consumer behaviour influences brand perception.",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-ivory">
      <div className="container-luxe">
        <SectionLabel index="02" className="text-taupe-deep">
          The Thinking
        </SectionLabel>

        <RevealLines
          as="h2"
          className="display mt-10 max-w-6xl text-[clamp(2.6rem,6.4vw,6.8rem)]"
          lines={[
            <span key="a" id="about-title">Beyond Marketing.</span>,
            <span key="b" className="italic text-taupe-deep md:pl-[12vw]">
              Into Meaningful
            </span>,
            <span key="c">Brand Experiences.</span>,
          ]}
        />

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-24">
          {/* Portrait */}
          <figure className="col-span-10 col-start-2 sm:col-span-6 sm:col-start-1 lg:col-span-4 lg:col-start-2">
            <ImageReveal className="aspect-[4/5]">
              <ArtFrame variant="portrait" className="h-full w-full" alt="Portrait placeholder" />
            </ImageReveal>
            <figcaption className="mt-4 flex items-center justify-between">
              <span className="eyebrow text-[0.6rem] text-taupe-deep">Portrait — 4:5</span>
              <PlaceholderTag>Replace with portrait</PlaceholderTag>
            </figcaption>
          </figure>

          {/* Narrative */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 lg:col-start-7">
            <FadeUp>
              <p className="font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-[1.25] text-ink">
                I am a digital marketing professional drawn to the intersection of content, brand
                communication and audience behaviour — the space where a brand&rsquo;s identity meets
                the people it hopes to move.
              </p>
            </FadeUp>

            <div className="mt-10 grid gap-8 text-[0.95rem] leading-relaxed text-ink/75 md:grid-cols-2">
              <FadeUp delay={0.1}>
                <p>
                  Currently a Digital Marketing Executive and Social Media Account Manager at Studio XO
                  Luxury Bar, I work across social media execution and marketing planning, with a focus
                  on content, emerging trends, audience engagement and digital brand presence.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p>
                  My approach combines creative thinking with structured execution. I believe the most
                  effective marketing begins with understanding — of a brand, its audience and the
                  culture around it — before a single piece of content is made.
                </p>
              </FadeUp>
            </div>

            {/* Pillars */}
            <FadeUp delay={0.1} className="mt-14 border-t border-ink/15 pt-6">
              <p className="eyebrow mb-5 text-taupe-deep">A practice built on</p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 font-serif text-[clamp(1.35rem,2vw,1.85rem)] italic leading-snug">
                {pillars.map((p, i) => (
                  <li key={p} className="flex items-center gap-3">
                    {p}
                    {i < pillars.length - 1 && (
                      <span aria-hidden className="not-italic text-taupe">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>

        {/* Questions */}
        <div className="mt-24 grid grid-cols-12 gap-6 md:mt-36">
          <div className="col-span-12 lg:col-span-4">
            <FadeUp>
              <p className="eyebrow text-taupe-deep">Questions I keep returning to</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
                The curiosities that shape how I approach every brief.
              </p>
            </FadeUp>
          </div>
          <ol className="col-span-12 lg:col-span-8">
            {questions.map((q, i) => (
              <FadeUp
                as="li"
                key={q}
                delay={i * 0.05}
                className="group grid grid-cols-[3rem_1fr] items-baseline border-t border-ink/15 py-5 last:border-b md:grid-cols-[5rem_1fr] md:py-7"
              >
                <span className="eyebrow tabular-nums text-taupe-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[clamp(1.35rem,2.6vw,2.35rem)] leading-tight transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3">
                  {q}
                </span>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
