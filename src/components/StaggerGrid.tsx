"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, type ReactNode } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * StaggerGrid — fade-up + stagger reveal for a grid of cards/items.
 * Wraps the existing grid structure so consumers don't change markup.
 */
export function StaggerGrid({
  children,
  className = "mt-10 md:mt-14 grid sm:grid-cols-2 gap-px bg-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]",
  itemStagger = 0.09,
  itemDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  itemStagger?: number;
  itemDelay?: number;
}) {
  const reduce = useReducedMotion();

  const customContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: itemStagger, delayChildren: itemDelay },
    },
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={
        itemStagger === 0.09 && itemDelay === 0.1 ? container : customContainer
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
