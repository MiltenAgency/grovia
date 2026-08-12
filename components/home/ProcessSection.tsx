"use client";

import { useState } from "react";
import clsx from "clsx";
import { showcaseImage, steps } from "@/lib/content/home";
import { Reveal } from "@/components/motions/Reveal";

/** The pastel plate behind each step's UI card, with the card itself on top —
    taller than its frame in the original, so the frame clips it. */
function StepArt({ step, className }: { step: (typeof steps)[number]; className?: string }) {
  return (
    <div className={clsx("relative shrink-0 overflow-hidden rounded-2xl p-5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.backdrop}
        alt=""
        className="absolute inset-0 z-[1] size-full rounded-2xl object-cover"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.art}
        alt=""
        className="ring-white relative z-[2] h-[351px] w-[calc(100%+8px)] max-w-none rounded-2xl object-cover object-left-top lg:w-[calc(100%-4px)]"
      />
    </div>
  );
}

function StepText({ step, className }: { step: (typeof steps)[number]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-6 lg:h-full lg:justify-between lg:gap-0", className)}>
      <p className="t-lead text-faint">{step.num}</p>
      <div className="flex flex-col justify-end gap-3 lg:gap-4">
        <h5 className="t-h5">{step.title}</h5>
        <p className="t-body text-muted">{step.body}</p>
      </div>
    </div>
  );
}

/**
 * A cropped dashboard still, then the three-step strip. Above 1200 the strip is
 * a hover accordion — one card open at 509px, the other two parked at ~250 —
 * exactly as the export behaves. Below that every card is open and stacked.
 */
export function ProcessSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="flex justify-center">
      <div className="wrap flex flex-col py-20">
        <Reveal className="relative mx-auto aspect-[342/239] w-full overflow-hidden rounded-xl md:aspect-[614/370] md:w-[90%] md:rounded-3xl lg:aspect-[863/480] lg:w-[83%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={showcaseImage.src}
            alt={showcaseImage.alt}
            className="ring-white absolute inset-x-0 top-0 w-full rounded-xl md:rounded-3xl"
            style={{ boxShadow: "rgba(225, 216, 198, 0.5) 0px 4px 40px 0px" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[25px] md:h-10"
            style={{
              background:
                "linear-gradient(rgba(244,242,238,0) 0%, rgba(244,242,238,0.85) 65%, rgba(244,242,238,0.9) 100%)",
            }}
          />
        </Reveal>

        {/* < 1200: every card open — two-up on tablet with the third full width */}
        <div className="grid gap-2 rounded-3xl bg-panel p-2 md:grid-cols-2 lg:hidden">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={clsx(
                "flex flex-col gap-6 rounded-[20px] bg-white/90 p-6",
                i === 2 && "md:col-span-2 md:flex-row md:items-center md:gap-4",
              )}
            >
              <StepText step={s} className={i === 2 ? "md:flex-1" : undefined} />
              <StepArt
                step={s}
                className={clsx("h-[272px] w-full", i === 2 && "md:h-[252px] md:w-[301px]")}
              />
            </div>
          ))}
        </div>

        {/* >= 1200: hover accordion */}
        <div className="hidden gap-2 rounded-3xl bg-panel p-2 lg:flex">
          {steps.map((s, i) => (
            <div
              key={s.num}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              tabIndex={0}
              className={clsx(
                "flex h-[340px] items-center gap-4 overflow-hidden rounded-[20px] p-6 outline-none transition-[flex-grow,background-color] duration-500 ease-out",
                open === i ? "bg-white/90" : "bg-white/70",
              )}
              style={{ flexGrow: open === i ? 2.041 : 1, flexBasis: 0 }}
            >
              <StepText step={s} className="min-w-[203px] flex-1" />
              {open === i && <StepArt step={s} className="h-[292px] w-[223px]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
