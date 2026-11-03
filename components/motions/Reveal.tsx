"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { usePageReady } from "@/components/site/PageIntro";

/**
 * Framer's own appear curve, duration and offsets, straight out of the
 * export's `<script type="framer/appear">` payload: 0.4s on
 * `cubic-bezier(.44, 0, .56, 1)` from `opacity: 0.001`, sliding 30px in from
 * the left above 810 and 20px down from above below it. Delays step by 0.1.
 *
 * A Reveal renders the element itself rather than wrapping it, so turning a
 * plain div into one never changes the layout.
 */
export const EASE = [0.44, 0, 0.56, 1] as const;
export const DURATION = 0.4;

type Tag = "div" | "section" | "header" | "li" | "article" | "ul" | "figure" | "p" | "h1" | "h2";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  /** Play on mount instead of on scroll — what the hero does. */
  onMount?: boolean;
  id?: string;
};

export function Reveal({ children, delay = 0, className, as = "div", onMount = false, id }: Props) {
  const reduced = useReducedMotion();
  const narrow = useMediaQuery("(max-width: 809.98px)");
  const ready = usePageReady();
  const M = motion[as];

  if (reduced) {
    return (
      <M className={className} id={id}>
        {children}
      </M>
    );
  }

  const initial = narrow
    ? { opacity: 0.001, x: 0, y: -20 }
    : { opacity: 0.001, x: -30, y: 0 };
  const settled = { opacity: 1, x: 0, y: 0 };
  const transition = { duration: DURATION, delay, ease: EASE };

  return (
    <M
      className={className}
      id={id}
      initial={initial}
      {...(onMount
        ? { animate: ready ? settled : initial }
        : {
            whileInView: ready ? settled : initial,
            viewport: { once: true, amount: 0.05, margin: "0px 0px -60px 0px" },
          })}
      transition={transition}
    >
      {children}
    </M>
  );
}
