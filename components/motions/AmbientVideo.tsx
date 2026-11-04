"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

/** Decorative footage plays only while visible and motion is permitted. */
export function AmbientVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let disposed = false;
    const shouldPlay = () => !disposed && visible && !media.matches && !document.hidden;
    const update = () => {
      if (shouldPlay()) {
        void video.play().then(() => { if (!shouldPlay()) video.pause(); }).catch(() => {
          // The existing poster remains readable if autoplay is unavailable.
        });
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      disposed = true;
      observer.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, []);
  return <video {...props} ref={ref} loop muted playsInline autoPlay={false} preload="metadata" />;
}
