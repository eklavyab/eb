"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useState } from "react";

type IntroState = { introDone: boolean; setIntroDone: (v: boolean) => void };

const IntroContext = createContext<IntroState>({ introDone: true, setIntroDone: () => {} });

/** True once the opening loader has lifted, so hero animations play in view rather than behind it. */
export const useIntro = () => useContext(IntroContext);

/** Honours the visitor's reduced-motion preference across every Framer Motion animation. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  return (
    <IntroContext.Provider value={{ introDone, setIntroDone }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </IntroContext.Provider>
  );
}
