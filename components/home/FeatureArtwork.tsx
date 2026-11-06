"use client";

import { memo, useEffect, useRef, useState } from "react";
import { featurePanelBackdrop, featureTabs } from "@/lib/content/home";
import { HoverSurface } from "@/components/motions/HoverSurface";

export const FeatureArtwork = memo(function FeatureArtwork({ feature }: { feature: (typeof featureTabs)[number] }) {
  const root = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    let disposed = false;
    const images = Array.from(root.current?.querySelectorAll("img") ?? []);
    Promise.all(images.map(image => image.decode())).then(
      () => { if (!disposed) setStatus("ready"); },
      () => { if (!disposed) setStatus("error"); },
    );
    return () => { disposed = true; };
  }, []);

  return (
    <HoverSurface className="feature-stack-art-surface">
      <div ref={root} className="feature-stack-art" aria-busy={status === "loading"} data-status={status}>
        <div data-stack-media className="feature-stack-media">
          <img src={featurePanelBackdrop} alt="" className="feature-stack-backdrop" decoding="async" />
          {feature.art.map(image => (
            <img key={image.src} src={image.src} alt="" decoding="async" className="feature-stack-art-image"
              style={{ left: `${image.x / 522 * 100}%`, top: `${image.y / 389 * 100}%`, width: `${image.w / 522 * 100}%`, height: `${image.h / 389 * 100}%`, borderRadius: image.r }} />
          ))}
        </div>
        {status !== "ready" && (
          <div className="feature-loading" role="status">
            {status === "error" ? <p className="body-6 text-muted">Preview unavailable. You can still explore the details.</p> : (
              <>
                <span className="sr-only">Loading {feature.tab.toLowerCase()} preview</span>
                <div className="preview-skeleton" aria-hidden="true"><span /><span /><span /><div className="preview-skeleton-bars"><i /><i /><i /><i /></div></div>
              </>
            )}
          </div>
        )}
      </div>
    </HoverSurface>
  );
});
