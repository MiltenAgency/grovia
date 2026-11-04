"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function LenisProvider() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = lenis.isScrolling === "smooth" ? requestAnimationFrame(raf) : 0;
    };
    const wake = () => {
      if (frame) return;
      // Reset the clock before a new gesture, so idle time never advances it.
      lenis.raf(performance.now());
      frame = requestAnimationFrame(raf);
    };
    const unsubscribe = lenis.on("virtual-scroll", wake);
    return () => {
      unsubscribe();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
