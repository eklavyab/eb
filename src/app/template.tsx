"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;
let firstLoad = true;

/** Route transition: a charcoal curtain lifts away as each new page enters. */
export default function Template({ children }: { children: React.ReactNode }) {
  const [withCurtain] = useState(() => !firstLoad);

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <>
      {withCurtain && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[80] bg-charcoal"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      )}
      <motion.div
        initial={{ opacity: withCurtain ? 0 : 1, y: withCurtain ? 24 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: withCurtain ? 0.25 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
