"use client";

import { createContext, useEffect, useRef, useState, type ReactNode } from "react";
import { site } from "@/lib/content/site";

export const InitialAssetsReady = createContext(true);

/** A real initial hero-asset loading phase, with no minimum display duration. */
export function PageIntro({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    const images = Array.from(content.current?.querySelectorAll<HTMLImageElement>('img[data-preload="hero"]') ?? []);
    if (!content.current?.querySelector("[data-moneta-hero]") ||
        (document.fonts.status === "loaded" && images.every((image) => image.complete))) {
      setReady(true);
      return;
    }

    setLoading(true);
    Promise.allSettled([document.fonts.ready, ...images.map((image) => image.decode())]).then(() => {
      if (!disposed) { setLoading(false); setReady(true); }
    });
    return () => { disposed = true; };
  }, []);

  return (
    <>
      <div className="page-intro" data-loading={loading} role="status" aria-hidden={!loading}>
        <img src={site.logo} alt="" width={64} height={64} />
        <span className="caption-4">Loading Moneta</span>
      </div>
      <InitialAssetsReady.Provider value={ready}>
        <div ref={content} data-intro-content>{children}</div>
      </InitialAssetsReady.Provider>
    </>
  );
}
