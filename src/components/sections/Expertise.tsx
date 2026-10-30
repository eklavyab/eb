"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FadeUp, RevealLines } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/primitives";
import { services } from "@/content/services";

const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export function Expertise() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section-y bg-charcoal text-ivory">
      <div className="container-luxe grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Sticky intro */}
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="03" className="text-taupe">
              Expertise
            </SectionLabel>
            <RevealLines
              as="h2"
              className="display mt-10 text-[clamp(2.6rem,5.2vw,5.4rem)]"
              lines={[
                <span key="a" id="expertise-title">What I Do</span>,
                <span key="b" className="italic text-taupe">
                  &amp; How I Think.
                </span>,
              ]}
            />
            <FadeUp>
              <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-ivory/65">
                A practice spanning strategy and execution — each discipline approached with the same
                attention to audience, identity and craft.
              </p>
            </FadeUp>

            <div className="mt-14 hidden items-baseline gap-3 lg:flex" aria-hidden>
              <span className="display relative block h-[1em] overflow-hidden text-[7rem] italic text-taupe">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active ?? -1}
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    {active === null ? "—" : pad(active + 1)}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="eyebrow text-ivory/40">/ {pad(services.length)}</span>
            </div>

            {/* Desktop: the hovered discipline is described here, keeping the list itself still */}
            <div className="relative mt-6 hidden min-h-44 max-w-sm lg:block" aria-live="polite">
              <AnimatePresence mode="wait">
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <p className="text-[0.95rem] leading-relaxed text-ivory/75">{services[active].description}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                      {services[active].keywords.map((k) => (
                        <li key={k} className="eyebrow text-[0.6rem] text-taupe">
                          {k}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Index list */}
        <ol className="col-span-12 lg:col-span-8">
          {services.map((service, i) => {
            const isOpen = active === i;
            return (
              <li key={service.title} className="border-t border-ivory/15 last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-${i}`}
                    onClick={() => setActive(isOpen && !window.matchMedia("(min-width: 1024px)").matches ? null : i)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                    className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 py-6 text-left md:grid-cols-[4.5rem_1fr_auto] md:py-8"
                  >
                    <span className={`eyebrow tabular-nums transition-colors duration-500 ${isOpen ? "text-ivory" : "text-taupe"}`}>
                      {pad(i + 1)}
                    </span>
                    <span
                      className={`font-serif text-[clamp(1.55rem,3.3vw,3.15rem)] font-light leading-[1.05] tracking-tight transition-all duration-700 ease-[var(--ease-luxe)] ${
                        isOpen ? "translate-x-0 text-ivory" : "text-ivory/55 group-hover:translate-x-2 group-hover:text-ivory"
                      }`}
                    >
                      {service.title}
                    </span>
                    <Plus
                      aria-hidden
                      strokeWidth={1}
                      className={`h-5 w-5 lg:hidden self-center text-taupe transition-transform duration-700 ease-[var(--ease-luxe)] ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-${i}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-[2.5rem] pr-8 md:grid-cols-[1fr_auto] md:pl-[4.5rem] md:pb-10">
                        <p className="max-w-xl text-[0.95rem] leading-relaxed text-ivory/70">
                          {service.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 md:flex-col md:items-end md:gap-1.5">
                          {service.keywords.map((k) => (
                            <li key={k} className="eyebrow text-[0.6rem] text-taupe">
                              {k}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
