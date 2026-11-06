"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "section" | "header" | "li" | "article" | "ul" | "figure" | "p" | "h1" | "h2";
type Props = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left";
  after?: string;
  className?: string;
  as?: Tag;
  onMount?: boolean;
  id?: string;
};

/** Visible server markup; one observer starts a compositor-only CSS entrance. */
export function Reveal({ children, delay = 0, className, as = "div", onMount = false, id, direction = "up", after }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let gate: IntersectionObserver | undefined;
    const finish = () => {
      observer?.disconnect();
      gate?.disconnect();
      delete element.dataset.reveal;
    };
    const reveal = () => {
      observer?.disconnect();
      element.dataset.reveal = "entering";
    };
    const onPreference = () => { if (media.matches) finish(); };
    const onEnd = (event: AnimationEvent) => { if (event.target === element) finish(); };
    if (!media.matches) {
      if (onMount) reveal();
      else {
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) reveal();
        }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });
        // Content remains visible until JS is ready, and is never hidden from keyboard users.
        element.dataset.reveal = "pending";
        const predecessor = after ? document.querySelector(after) : null;
        if (predecessor) {
          gate = new IntersectionObserver(([entry]) => {
            if (entry.boundingClientRect.bottom <= 80) {
              gate?.disconnect();
              observer?.observe(element);
            }
          }, { rootMargin: "-80px 0px 0px 0px", threshold: 0 });
          gate.observe(predecessor);
        } else observer.observe(element);
      }
    }
    media.addEventListener("change", onPreference);
    element.addEventListener("animationend", onEnd);
    element.addEventListener("focusin", finish);
    return () => {
      finish();
      media.removeEventListener("change", onPreference);
      element.removeEventListener("animationend", onEnd);
      element.removeEventListener("focusin", finish);
    };
  }, [onMount, after]);

  return createElement(as, {
    ref, className, id,
    "data-reveal-direction": direction,
    "data-reveal": after ? "pending" : undefined,
    style: { "--reveal-delay": `${Math.min(delay, 0.24)}s` } as CSSProperties,
  }, children);
}
