"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { SplitTextProps } from "@/components/SplitText";

const SplitText = lazy(() => import("@/components/SplitText").catch(() => ({
  // A failed optional animation chunk must never take down the page's content.
  default: ({ text, className }: SplitTextProps) => <h2 className={className}>{text}</h2>,
})));

/** Load the React Bits/GSAP sequence only near its section; keep a readable fallback. */
export function AnimatedHeadline({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !media.matches) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });
    const update = () => {
      observer.disconnect();
      if (media.matches) setReady(false);
      else observer.observe(element);
    };
    update();
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);

  const fallback = <h2 className={className}>{text}</h2>;
  return (
    <div ref={ref} className="grid">
      <Suspense fallback={fallback}>
        {ready ? (
          <SplitText text={text} tag="h2" className={className} textAlign="left"
            splitType="words" delay={60} duration={0.5} rootMargin="0px"
            from={{ opacity: 0, y: 16 }} to={{ opacity: 1, y: 0 }} />
        ) : fallback}
      </Suspense>
    </div>
  );
}
