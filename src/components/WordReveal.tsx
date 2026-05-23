"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.08 },
  },
};

const word: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * WordReveal — mask-clipped per-word entrance.
 * Each word lives inside an overflow-hidden span and slides up from below.
 * Triggered once on first enter into the viewport.
 *
 * Use for headlines and pull quotes — not for body copy (too noisy).
 */
export function WordReveal({
  children,
  className,
  stagger = 0.075,
  delay = 0,
}: {
  children: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  const tokens = children.split(/(\s+)/);

  const customContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.span
      className={className}
      variants={stagger === 0.075 && delay === 0 ? container : customContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {tokens.map((t, i) => {
        if (/^\s+$/.test(t)) {
          return <Fragment key={i}>{t}</Fragment>;
        }
        return (
          <span
            key={i}
            className="inline-block align-baseline"
            style={{
              overflow: "hidden",
              paddingBottom: "0.22em",
              marginBottom: "-0.22em",
              lineHeight: "1",
            }}
          >
            <motion.span
              variants={word}
              className="inline-block will-change-transform"
              style={{ lineHeight: "1" }}
            >
              {t}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
