"use client";

import { createContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export const InitialAssetsReady = createContext(true);

export function PageIntro({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"intro" | "exit" | "done">(
    pathname === "/" ? "intro" : "done",
  );
  const content = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const showing = pathname === "/" && phase !== "done";

  useEffect(() => {
    if (pathname !== "/") {
      setPhase("done");
      return;
    }
    if (phase !== "intro") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || location.hash) {
      setPhase("done");
      return;
    }

    let active = true;
    const page = content.current!;
    page.inert = true;
    const images = page.querySelectorAll<HTMLImageElement>('[data-preload="hero"]');
    const assets = Promise.allSettled([document.fonts.ready, ...Array.from(images, image => image.decode())]);
    // Wait for the letter halves to settle, even on a cached visit.
    const motions = intro.current!.getAnimations({ subtree: true });
    const animation = Promise.allSettled(motions.map(motion => motion.finished));
    const reveal = () => { if (active) setPhase("exit"); };
    Promise.all([assets, animation]).then(reveal);
    const deadline = window.setTimeout(reveal, 3200);
    return () => {
      active = false;
      page.inert = false;
      window.clearTimeout(deadline);
    };
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const timeout = window.setTimeout(() => setPhase("done"), 860);
    return () => window.clearTimeout(timeout);
  }, [phase]);

  return (
    <>
      {showing && (
        <div className="page-intro" data-phase={phase} ref={intro} role="status" aria-label="Loading Moneta">
          <div className="intro-wordmark" aria-hidden="true">
            <span className="intro-wordmark-left" />
            <span className="intro-wordmark-right" />
            <span className="intro-window" />
          </div>
          <noscript><style>{".page-intro { display: none }"}</style></noscript>
        </div>
      )}
      <InitialAssetsReady.Provider value={!showing || phase === "exit"}>
        <div ref={content} data-intro-content>{children}</div>
      </InitialAssetsReady.Provider>
    </>
  );
}
