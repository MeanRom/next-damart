"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Start offset in px; negative values slide in from the left/top. */
  x?: number;
  y?: number;
  duration?: number;
  /** Named easing or a cubic-bezier [x1, y1, x2, y2]. */
  ease?: "easeOut" | "easeInOut" | [number, number, number, number];
};

/** Fades + slides its children in once, when they scroll into view. */
export default function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
  duration = 0.5,
  ease = "easeOut",
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
