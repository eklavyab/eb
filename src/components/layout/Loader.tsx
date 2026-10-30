"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useIntro } from "./MotionProvider";

const EASE = [0.76, 0, 0.24, 1] as const;
const KEY = "intro-seen";

/** Brief first-visit intro. Shown once per session; skipped for reduced motion. */
export function Loader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const { setIntroDone } = useIntro();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setShow(false);
      setIntroDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else
        setTimeout(() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          setShow(false);
          setIntroDone(true);
        }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setIntroDone]);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-[var(--gutter)] text-ivory"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1, ease: EASE }}
          aria-hidden
        >
          <div className="eyebrow flex justify-between text-taupe">
            <span>{site.name}</span>
            <span className="hidden sm:inline">Brand · Content · Audience</span>
          </div>
          <div className="flex items-end justify-between">
            <motion.span
              className="display text-[clamp(4rem,14vw,12rem)] italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.monogram}
            </motion.span>
            <span className="display tabular-nums text-[clamp(3rem,8vw,7rem)] text-taupe">
              {String(count).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
