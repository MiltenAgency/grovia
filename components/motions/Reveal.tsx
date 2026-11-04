"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "section" | "header" | "li" | "article" | "ul" | "figure" | "p" | "h1" | "h2";
type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  onMount?: boolean;
  id?: string;
};

/** Visible server markup; one observer starts a compositor-only CSS entrance. */
export function Reveal({ children, delay = 0, className, as = "div", onMount = false, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const finish = () => {
      observer?.disconnect();
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
        observer.observe(element);
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
  }, [onMount]);

  return createElement(as, {
    ref, className, id,
    style: { "--reveal-delay": `${Math.min(delay, 0.24)}s` } as CSSProperties,
  }, children);
}
