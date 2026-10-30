"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp, RevealLines } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/primitives";
import { processStages } from "@/content/process";

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function Approach() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y bg-stone">
      <div className="container-luxe">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="05" className="text-taupe-deep">
              My Approach
            </SectionLabel>
            <RevealLines
              as="h2"
              className="display mt-10 text-[clamp(2.6rem,6vw,6.4rem)]"
              lines={[
                <span key="a" id="approach-title">From Insight</span>,
                <span key="b" className="italic text-taupe-deep md:pl-[8vw]">
                  to Impact.
                </span>,
              ]}
            />
          </div>
          <FadeUp className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              A five-stage methodology that keeps creativity accountable to strategy — and strategy
              open to what the audience is really saying.
            </p>
          </FadeUp>
        </div>

        <ol ref={ref} className="relative mt-20 grid gap-0 md:mt-28 lg:grid-cols-5 lg:gap-6">
          {/* Progress rules: vertical on mobile, horizontal on desktop */}
          <span aria-hidden className="absolute left-[0.45rem] top-0 h-full w-px bg-ink/15 lg:hidden" />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute left-[0.45rem] top-0 h-full w-px origin-top bg-ink lg:hidden"
          />
          <span aria-hidden className="absolute inset-x-0 top-[0.45rem] hidden h-px bg-ink/15 lg:block" />
          <motion.span
            aria-hidden
            style={{ scaleX: progress }}
            className="absolute inset-x-0 top-[0.45rem] hidden h-px origin-left bg-ink lg:block"
          />

          {processStages.map((stage, i) => (
            <FadeUp as="li" key={stage.title} delay={i * 0.08} className="relative pb-14 pl-10 lg:pb-0 lg:pl-0 lg:pt-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-[0.9rem] w-[0.9rem] rotate-45 border border-ink bg-stone"
              />
              <span className="display block text-[clamp(3.5rem,6vw,5.5rem)] italic leading-none text-taupe-deep">
                {numerals[i]}
              </span>
              <h3 className="mt-6 font-serif text-[1.9rem] leading-tight md:text-[2.2rem]">{stage.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">{stage.summary}</p>
              <ul className="mt-6 space-y-1.5 border-t border-ink/15 pt-4">
                {stage.focus.map((f) => (
                  <li key={f} className="eyebrow text-[0.6rem] text-ink/60">
                    {f}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
