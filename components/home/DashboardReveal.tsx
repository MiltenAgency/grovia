"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Reveal after the hero; retrace the same motion when returning toward it. */
export function DashboardReveal({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current!;
    const hero = document.querySelector("[data-moneta-hero]");
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(element, { x: -48, opacity: 0 }, {
        x: 0, opacity: 1, ease: "none",
        scrollTrigger: {
          trigger: hero ?? element,
          start: hero ? "bottom 80px" : "top 80%",
          end: "+=96",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className={`motion-safe:opacity-0 ${className ?? ""}`}>{children}</div>;
}
