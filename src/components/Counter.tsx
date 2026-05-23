"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counter — animates from 0 to a target integer when the element
 * enters the viewport. Used on stat ledger numbers for a deliberate
 * but quiet count-up moment.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  format = (v: number) => String(Math.round(v)),
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: (v: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return controls.stop;
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
