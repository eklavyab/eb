"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 ${open ? "text-ivory" : "text-ivory mix-blend-difference"}`}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Primary"
          className="container-luxe flex items-center justify-between py-5 md:py-7"
        >
          <Link href="/" className="group flex items-baseline gap-2" aria-label={`${site.name} — home`}>
            <span className="font-serif text-2xl leading-none tracking-tight md:text-[1.7rem]">
              {site.name}
            </span>
            <span className="eyebrow hidden text-[0.6rem] opacity-60 transition-opacity duration-500 group-hover:opacity-100 lg:inline">
              Studio for Brand &amp; Digital
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="eyebrow link-underline pb-1">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="eyebrow flex items-center gap-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="relative block h-2 w-6" aria-hidden>
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? "top-1 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? "top-1 -rotate-45" : "top-2"}`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-[var(--gutter)] pb-10 pt-28 text-ivory md:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <ul className="space-y-1">
              {navigation.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-1"
                    >
                      <span className="eyebrow w-6 text-taupe">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-[2.9rem] leading-[1.05]">{item.label}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="space-y-3 border-t border-ivory/15 pt-6 text-sm"
            >
              <a href={`mailto:${site.email}`} className="block">
                {site.email}
              </a>
              <div className="eyebrow flex gap-6 text-taupe">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
