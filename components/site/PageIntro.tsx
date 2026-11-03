"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/content/site";
import { useReducedMotion } from "@/lib/useReducedMotion";

const PageReadyContext = createContext(true);
export const usePageReady = () => useContext(PageReadyContext);

/** One bounded introduction per document load, not on in-page navigation. */
export function PageIntro({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    let disposed = false;
    let minimumElapsed = false;
    let assetsReady = false;
    const finish = () => { if (!disposed) setReady(true); };
    const maybeFinish = () => { if (minimumElapsed && assetsReady) finish(); };
    const minimum = window.setTimeout(() => {
      minimumElapsed = true;
      maybeFinish();
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 900);
    // Slow assets must never trap a visitor behind the introduction.
    const maximum = window.setTimeout(finish, 1800);
    const onLoad = () => {
      Promise.resolve(document.fonts?.ready).catch(() => undefined).then(() => {
        assetsReady = true;
        maybeFinish();
      });
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      disposed = true;
      window.clearTimeout(minimum);
      window.clearTimeout(maximum);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (ready) return;
    const element = content.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (element) element.inert = true;
    return () => {
      document.body.style.overflow = previousOverflow;
      if (element) element.inert = false;
    };
  }, [ready]);

  return (
    <PageReadyContext.Provider value={ready}>
      <AnimatePresence initial={false}>
        {!ready && (
          <motion.div
            key="page-intro"
            className="page-intro fixed inset-0 z-50 flex items-center justify-center bg-paper"
            data-lenis-prevent
            role="status"
            aria-label="Loading Moneta"
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-6">
              <img src={site.logo} alt="" width={64} height={64} className="intro-brandmark" />
              <div className="flex flex-col items-center gap-2">
                <span className="t-small font-medium tracking-[0.24em] text-forest">MONETA</span>
                <p className="t-small text-muted">Your money. Made simple.</p>
              </div>
              <div aria-hidden="true" className="h-0.5 w-32 overflow-hidden rounded-full bg-panel">
                <span className="intro-progress block size-full origin-left bg-primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={content} data-page-ready={ready}>{children}</div>
    </PageReadyContext.Provider>
  );
}
