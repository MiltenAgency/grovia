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
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(element.firstElementChild!, { y: 12, opacity: 0.75 }, {
        y: 0, opacity: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "+=96",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className={className}>{children}</div>;
}
