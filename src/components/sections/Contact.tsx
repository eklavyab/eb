import { ArrowUpRight } from "lucide-react";
import { FadeUp, RevealLines } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/primitives";
import { site } from "@/content/site";

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("A brand worth building")}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-luxe section-y pb-0">
        <SectionLabel index="08" className="text-taupe">
          Collaboration
        </SectionLabel>

        <RevealLines
          as="h2"
          className="display mt-12 text-[clamp(3.2rem,10.5vw,12rem)]"
          lines={[
            <span key="a" id="contact-title">Have a Brand</span>,
            <span key="b" className="italic text-taupe md:pl-[14vw]">
              Worth Building?
            </span>,
          ]}
        />

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-24">
          <FadeUp className="col-span-12 md:col-span-5">
            <p className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] font-light leading-snug text-ivory/85">
              Let&rsquo;s create something thoughtful, distinctive and meaningful.
            </p>
            <p className="eyebrow mt-6 flex items-center gap-2 text-[0.6rem] text-taupe">
              <span className="h-1.5 w-1.5 rounded-full bg-taupe" aria-hidden />
              {site.availability}
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <a
              href={mailto}
              data-cursor="Write"
              className="group flex items-center justify-between gap-6 border-y border-ivory/20 py-8 transition-colors duration-700 hover:border-ivory/60 md:py-10"
            >
              <span>
                <span className="eyebrow block text-taupe">Start a conversation</span>
                <span className="mt-3 block break-all font-serif text-[clamp(1.6rem,3.2vw,3rem)] leading-tight">
                  {site.email}
                </span>
              </span>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ivory/30 transition-all duration-700 ease-[var(--ease-luxe)] group-hover:bg-ivory group-hover:text-ink md:h-20 md:w-20">
                <ArrowUpRight strokeWidth={1} className="h-6 w-6 transition-transform duration-700 group-hover:rotate-45" />
              </span>
            </a>

            <dl className="mt-10 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
              {site.socials.map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow text-[0.6rem] text-taupe">{s.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${s.label} profile (opens in a new tab)`}
                      className="link-underline"
                    >
                      Follow ↗
                    </a>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow text-[0.6rem] text-taupe">Based in</dt>
                <dd className="mt-2 text-ivory/80">{site.location}</dd>
              </div>
            </dl>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
