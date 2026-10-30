import { FadeUp, RevealLines } from "@/components/motion/Reveal";
import { PlaceholderTag, SectionLabel } from "@/components/ui/primitives";
import { education, experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y bg-ivory">
      <div className="container-luxe grid grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="06" className="text-taupe-deep">
              Experience
            </SectionLabel>
            <RevealLines
              as="h2"
              className="display mt-10 text-[clamp(2.6rem,5vw,5.2rem)]"
              lines={[
                <span key="a" id="experience-title">A Career</span>,
                <span key="b" className="italic text-taupe-deep">
                  in Progress.
                </span>,
              ]}
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <ol>
            {experience.map((item) => (
              <FadeUp
                as="li"
                key={`${item.organisation}-${item.role}`}
                className={`grid gap-6 border-t border-ink/15 py-10 md:grid-cols-[12rem_1fr] md:py-14 ${
                  item.placeholder ? "opacity-50" : ""
                }`}
              >
                <div className="space-y-3">
                  <p className="eyebrow tabular-nums text-taupe-deep">{item.period}</p>
                  {item.current && (
                    <p className="eyebrow flex items-center gap-2 text-[0.6rem]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-taupe-deep opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                      </span>
                      Current
                    </p>
                  )}
                  {item.placeholder && <PlaceholderTag>Reserved</PlaceholderTag>}
                </div>
                <div>
                  <h3 className="font-serif text-[clamp(1.9rem,3.4vw,3rem)] font-light leading-[1.05]">
                    {item.role}
                    {item.secondaryRole && (
                      <span className="block italic text-taupe-deep">{item.secondaryRole}</span>
                    )}
                  </h3>
                  <p className="eyebrow mt-4">{item.organisation}</p>
                  <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">{item.summary}</p>
                  {item.focus.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {item.focus.map((f) => (
                        <li key={f} className="eyebrow border border-ink/20 px-3 py-1.5 text-[0.58rem] text-ink/70">
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeUp>
            ))}
          </ol>
          <FadeUp className="flex items-center justify-between border-t border-b border-ink/15 py-6">
            <span className="eyebrow text-taupe-deep">Education &amp; Certifications</span>
            <span className="text-sm text-ink/50">{education.label}</span>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
