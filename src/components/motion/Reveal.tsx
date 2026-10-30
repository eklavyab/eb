"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Masked line-by-line reveal for display typography. Each item in `lines` is one visual line. */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  play,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** When provided, the reveal is controlled by this flag instead of scrolling into view. */
  play?: boolean;
}) {
  const trigger =
    play !== undefined
    ? { animate: play ? ("show" as const) : ("hidden" as const) }
    : { whileInView: "show" as const, viewport: { once: true, margin: "0px 0px -12% 0px" } };

  return (
    <Tag className={className}>
      <motion.span className="block" initial="hidden" {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }}>
        {lines.map((line, i) => (
          <span key={i} className={`block overflow-hidden pb-[0.16em] -mb-[0.16em] ${lineClassName}`}>
            <motion.span
              className="block will-change-transform"
              variants={{
                hidden: { y: "105%" },
                show: { y: "0%", transition: { duration: 1.2, ease: EASE } },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

/** Gentle fade + rise when scrolled into view. */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "li" | "span" | "section" | "article";
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={fadeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </M>
  );
}

/** Clip-path image reveal with subtle scroll parallax on the inner layer. */
export function ImageReveal({
  children,
  className = "",
  parallax = 8,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  /** Parallax travel in percent. 0 disables. */
  parallax?: number;
  direction?: "up" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  const hidden = direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: reduced ? "inset(0% 0% 0% 0%)" : hidden }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <motion.div
        className="absolute inset-[-10%] will-change-transform"
        style={parallax && !reduced ? { y } : undefined}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
