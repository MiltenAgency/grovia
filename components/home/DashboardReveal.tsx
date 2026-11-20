"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Fade the dashboard upward while its wrapper keeps the trigger position stable. */
export function DashboardReveal({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current!;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(element.firstElementChild!, { y: 90, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.95, ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom+=60",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className={className}>{children}</div>;
}
