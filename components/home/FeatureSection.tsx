"use client";

import { memo, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { featurePanelBackdrop, featureTabs, featuresIntro } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motions/Reveal";

const FeaturePanel = memo(function FeaturePanel({
  tab,
  active,
}: {
  tab: (typeof featureTabs)[number];
  active: boolean;
}) {
  const art = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let disposed = false;
    const images = Array.from(art.current?.querySelectorAll("img") ?? []);
    // decode() also handles cached images and avoids revealing undecoded artwork.
    Promise.all(images.map((image) => image.decode())).then(
      () => { if (!disposed) setStatus("ready"); },
      () => { if (!disposed) setStatus("error"); },
    );
    return () => { disposed = true; };
  }, []);

  return (
    <div
      role="tabpanel"
      id={`panel-${tab.id}`}
      aria-labelledby={`tab-${tab.id}`}
      aria-hidden={!active}
      ref={(element) => { if (element) element.inert = !active; }}
      tabIndex={active ? 0 : -1}
      data-active={active}
      className="feature-panel"
    >
      <div ref={art} className="feature-art" data-status={status} aria-busy={status === "loading"}>
        <img src={featurePanelBackdrop} alt="" className="absolute inset-0 size-full object-cover" decoding="async" />
        {tab.art.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            decoding="async"
            className="feature-art-image absolute max-w-none"
            style={{
              left: `${(image.x / 522) * 100}%`,
              top: `${(image.y / 389) * 100}%`,
              width: `${(image.w / 522) * 100}%`,
              height: `${(image.h / 389) * 100}%`,
              borderRadius: image.r,
            }}
          />
        ))}
        {status !== "ready" && (
          <div className="feature-loading" role="status">
            {status === "error" ? (
              <p className="body-6 text-muted">Preview unavailable. You can still explore the details.</p>
            ) : (
              <>
                <span className="sr-only">Loading {tab.tab.toLowerCase()} preview</span>
                <div className="preview-skeleton" aria-hidden="true">
                  <span /><span /><span />
                  <div className="preview-skeleton-bars"><i /><i /><i /><i /></div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <div className="feature-copy">
        <span className="caption-4 rounded-full bg-butter px-3 py-2">{tab.eyebrow}</span>
        <h3 className="t-h3">{tab.heading}</h3>
        <p className="t-body text-muted">{tab.body}</p>
      </div>
    </div>
  );
});

/** Mounted, overlapping panels keep their height and can reverse mid-transition. */
export function FeatureSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % featureTabs.length; break;
      case "ArrowLeft": next = (index - 1 + featureTabs.length) % featureTabs.length; break;
      case "Home": next = 0; break;
      case "End": next = featureTabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="feature" className="flex justify-center">
      <div className="wrap flex flex-col items-center gap-10 py-20">
        <SectionHeading heading={featuresIntro.heading} sub={featuresIntro.sub} />
        <Reveal delay={0.1} className="flex w-full flex-col items-center gap-3">
          <div className="feature-tabs" role="tablist" aria-label={featuresIntro.heading}>
            {featureTabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(element) => { tabs.current[index] = element; }}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={active === index}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="feature-tab title-4"
              >
                <Icon name={tab.icon} size={20} />
                <span>{tab.tab}</span>
              </button>
            ))}
          </div>
          <div className="feature-panels">
            {featureTabs.map((tab, index) => <FeaturePanel key={tab.id} tab={tab} active={active === index} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
