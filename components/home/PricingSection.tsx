"use client";

import { useState } from "react";
import clsx from "clsx";
import { pricing, pricingCtaHref } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Rating } from "@/components/ui/Rating";
import { Reveal } from "@/components/motions/Reveal";

/**
 * A photographic band under a 68% black scrim: the plan selector on the left,
 * the selected plan's card on the right. Only Starter ships in the static
 * export — the other two were read off the running original.
 */
export function PricingSection() {
  const [active, setActive] = useState(0);
  const plan = pricing.plans[active];

  return (
    <section id="pricing" className="bleed flex justify-center">
      <div className="relative w-full max-w-[1400px] overflow-hidden rounded-[28px] lg:rounded-[32px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pricing.background} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-forest/[0.78]" />

        <div className="bleed-inner relative flex flex-col items-start gap-5 py-16 md:py-20 lg:flex-row lg:justify-between lg:gap-0">
          <Reveal className="flex w-full flex-col justify-center gap-10 lg:w-[356px] lg:justify-between lg:self-stretch">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="t-h2 text-white">{pricing.heading}</h2>
                <p className="t-lead text-white/80">{pricing.sub}</p>
              </div>

              <div
                className="flex flex-col gap-2 rounded-3xl bg-black/30 p-2"
                role="tablist"
                aria-label={pricing.heading}
              >
                {pricing.plans.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={active === i}
                    aria-controls="plan-card"
                    onClick={() => setActive(i)}
                    className={clsx(
                      "flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-opacity",
                      active === i ? "bg-white/10" : "bg-white/10 opacity-60",
                    )}
                    style={
                      active === i
                        ? { boxShadow: "rgba(0, 0, 0, 0.15) 5px 8px 15px 0px" }
                        : undefined
                    }
                  >
                    <span className="flex flex-col justify-center gap-0.5">
                      <span className="t-h6 text-white">{p.name}</span>
                      <span className="t-small text-white/60">{p.tagline}</span>
                    </span>
                    {active === i && (
                      <span className="text-white">
                        <Icon name="arrowCircle" size={24} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-lg:hidden">
              <Rating tone="white" />
            </div>
          </Reveal>

          <div
            id="plan-card"
            className="flex w-full flex-col items-start gap-10 rounded-3xl bg-white/10 p-8 md:flex-row md:items-center lg:w-[425px] lg:flex-col lg:items-start"
          >
            <div className="flex flex-col items-start gap-6 md:flex-1 lg:flex-none">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 p-2 text-white">
                  <Icon name="pen" size={24} />
                </span>
                <h4 className="t-h4 text-white">{plan.name}</h4>
              </div>
              <div className="flex flex-col items-start gap-3">
                <p className="flex items-center gap-2">
                  <span className="t-h2 text-white">{plan.price}</span>
                  <span className="t-lead text-white/80">{plan.per}</span>
                </p>
                <p className="t-body text-white/80">{plan.blurb}</p>
              </div>
              <Button href={pricingCtaHref} variant="yellow">
                {plan.cta}
              </Button>
            </div>

            <ul className="flex flex-col gap-2 md:flex-1 lg:flex-none">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80">
                  <span className="shrink-0 text-white">
                    <Icon name="check" size={24} />
                  </span>
                  <span className="t-body">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">
            <Rating tone="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
