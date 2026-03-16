"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}
