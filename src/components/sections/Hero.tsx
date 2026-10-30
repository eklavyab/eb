"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealLines } from "@/components/motion/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { ArrowLink } from "@/components/ui/primitives";
import { useIntro } from "@/components/layout/MotionProvider";
import { site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const rise = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { introDone } = useIntro();
  const go = introDone ? "show" : "hidden";
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col bg-ivory pt-24 pb-8 md:pt-32 md:pb-10"
    >
      <div className="container-luxe flex flex-1 flex-col">
        {/* Identifier row */}
        <motion.div
          className="eyebrow flex flex-wrap items-center justify-between gap-y-2 text-taupe-deep"
          initial={{ opacity: 0 }}
          animate={{ opacity: introDone ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <span className="flex flex-wrap items-center gap-x-3">
            {site.identifier.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="hidden text-stone sm:inline">|</span>}
                {item}
              </span>
            ))}
          </span>
          <span className="hidden md:inline">Portfolio — Vol. I</span>
        </motion.div>

        <div className="mt-10 grid flex-1 grid-cols-12 items-end gap-x-6 gap-y-10 md:mt-12">
          {/* Headline */}
          <motion.div style={{ y: headlineY }} className="col-span-12 lg:col-span-8 xl:col-span-9">
            <RevealLines
              as="h1"
              play={introDone}
              delay={0.15}
              className="display text-[clamp(3.1rem,9.2vw,10.5rem)] text-ink"
              lines={[
                <span key="1">Building Brands</span>,
                <span key="2" className="pl-[8vw] italic text-taupe-deep">
                  through Strategy,
                </span>,
                <span key="3">Storytelling &amp;</span>,
                <span key="4" className="pl-[4vw]">
                  Digital <em className="font-light">Experiences.</em>
                </span>,
              ]}
            />
            <span id="hero-title" className="sr-only">
              {site.name} — {site.title}
            </span>
          </motion.div>

          {/* Hero visual */}
          <motion.figure
            className="col-span-8 col-start-5 sm:col-span-6 sm:col-start-7 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10 lg:self-start"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: introDone ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div className="absolute inset-[-12%_0]" style={{ y: imageY }}>
                <ArtFrame variant="hero" className="h-full w-full" priority />
              </motion.div>
            </div>
            <figcaption className="eyebrow mt-3 flex justify-between text-[0.6rem] text-taupe-deep">
              <span>Fig. 01</span>
              <span className="hidden sm:inline">Brand / Content / Audience</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Supporting row */}
        <motion.div
          style={{ opacity: fade }}
          className="mt-12 grid grid-cols-12 items-end gap-6 border-t border-ink/15 pt-6 md:mt-16"
        >
          <motion.p
            className="col-span-12 max-w-md text-[0.95rem] leading-relaxed text-ink/75 md:col-span-6 lg:col-span-5"
            initial="hidden"
            animate={go}
            variants={rise}
            transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          >
            I explore the intersection of brand communication, content strategy and audience behaviour
            to create meaningful digital experiences.
          </motion.p>

          <motion.div
            className="col-span-9 whitespace-nowrap md:col-span-4 lg:col-span-4 lg:col-start-7"
            initial="hidden"
            animate={go}
            variants={rise}
            transition={{ duration: 1, ease: EASE, delay: 1.25 }}
          >
            <ArrowLink href="#work">View Selected Work</ArrowLink>
          </motion.div>

          <a
            href="#about"
            className="col-span-3 flex items-center justify-end gap-3 md:col-span-2 lg:col-start-11"
            aria-label="Scroll to the next section"
          >
            <span className="eyebrow hidden text-[0.6rem] text-taupe-deep sm:inline">Scroll</span>
            <span className="relative block h-12 w-px overflow-hidden bg-ink/15">
              <span className="animate-scroll-line absolute inset-0 bg-ink" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
