"use client";

import { useState } from "react";
import clsx from "clsx";
import { featurePanelBackdrop, featureTabs, featuresIntro } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Four tabs over one panel. The art frame is a fixed 522×389 window that clips
 * whatever the active tab drops into it at the offsets the original uses.
 */
export function FeatureSection() {
  const [active, setActive] = useState(0);
  const tab = featureTabs[active];

  return (
    <section id="feature" className="flex justify-center">
      <div className="wrap flex flex-col items-center gap-10 py-20">
        <SectionHeading heading={featuresIntro.heading} sub={featuresIntro.sub} />

        <Reveal delay={0.1} className="flex w-full flex-col items-center gap-3">
          <div
            className="flex w-full flex-col gap-2 rounded-3xl bg-panel p-2 lg:flex-row lg:justify-center lg:rounded-[40px]"
            role="tablist"
            aria-label={featuresIntro.heading}
          >
            {featureTabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(i)}
                className={clsx(
                  "relative flex shrink-0 items-center justify-center gap-2 rounded-[32px] p-4 transition-colors lg:w-[250px]",
                  active === i ? "bg-white/80" : "bg-transparent opacity-50",
                )}
              >
                <Icon name={t.icon} size={20} />
                <span className="t-lead whitespace-nowrap">{t.tab}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="flex w-full flex-col items-center gap-8 rounded-3xl bg-white/60 p-2 pb-10 lg:flex-row lg:items-center lg:gap-10 lg:py-2 lg:pr-10"
          >
            <div className="relative aspect-[151/100] w-full shrink-0 overflow-hidden rounded-[20px] lg:aspect-auto lg:h-[389px] lg:w-[522px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featurePanelBackdrop}
                alt=""
                className="size-full rounded-[20px] object-cover"
              />
              {tab.art.map((a) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={a.src}
                  src={a.src}
                  alt=""
                  className="absolute max-w-none"
                  style={{
                    left: `${(a.x / 522) * 100}%`,
                    top: `${(a.y / 389) * 100}%`,
                    width: `${(a.w / 522) * 100}%`,
                    height: `${(a.h / 389) * 100}%`,
                    borderRadius: a.r,
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 max-lg:px-6 lg:w-[430px] lg:gap-6">
              <span className="rounded-[62px] bg-butter px-3 py-2 t-tiny font-medium uppercase">
                {tab.eyebrow}
              </span>
              <h3 className="t-h3">{tab.heading}</h3>
              <p className="t-body text-muted">{tab.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
