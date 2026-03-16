"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealListProps = {
  children: ReactNode;
  className?: string;
};

export function RevealList({ children, className = "" }: RevealListProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? "visible" : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        reducedMotion
          ? {}
          : {
              hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
