"use client";

import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { InitialAssetsReady } from "@/components/site/PageIntro";
import { hero } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { HeroWidget } from "./HeroWidget";
gsap.registerPlugin(useGSAP);

/** Responsive hero copy and two complementary financial previews. */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const ready = useContext(InitialAssetsReady);

  useGSAP(() => {
    if (!ready || !root.current) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      const nav = root.current?.closest("[data-intro-content]")?.querySelector("nav");
      const targets = [
        ...(nav ? [nav] : []), ...select("[data-hero-line], [data-hero-description], [data-hero-actions] > *, .hero-balance-card, .hero-savings-card, .hero-chart-bar, [data-hero-ticker]"),
      ];
      const timeline = gsap.timeline({
        defaults: { duration: 0.6, ease: "power3.out" },
      });
      if (nav) timeline.from(nav, { y: -12, opacity: 0, duration: 0.45 }, 0);
      timeline
        .from(select("[data-hero-line]"), { y: 24, opacity: 0, stagger: 0.08 }, 0.1)
        .from(select("[data-hero-description]"), { y: 12, opacity: 0 }, 0.25)
        .from(select("[data-hero-actions] > *"), { y: 10, opacity: 0, stagger: 0.06 }, 0.34)
        .from(select(".hero-balance-card"), { y: 24, opacity: 0, duration: 0.7 }, 0.2)
        .from(select(".hero-savings-card"), { y: 16, scale: 0.97, opacity: 0, duration: 0.65 }, 0.42)
        .from(select(".hero-chart-bar"), { scaleY: 0, opacity: 0, stagger: 0.045, duration: 0.5 }, 0.65)
        .from(select("[data-hero-ticker]"), { opacity: 0, duration: 0.4 }, 0.98)
        .set(targets, { clearProps: "transform,opacity" });
    });
    return () => media.revert();
  }, { scope: root, dependencies: [ready], revertOnUpdate: true });

  return (
    <header ref={root} data-moneta-hero className="moneta-hero relative flex justify-center pt-20">
      <div className="wrap flex flex-col gap-20 pt-10 md:gap-16 md:pt-[100px] lg:gap-20">
        <div className="flex flex-col items-center gap-16 md:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <div className="flex w-full flex-col items-center gap-8 lg:w-[426px] lg:items-start lg:gap-11">
            <div className="flex flex-col gap-6 max-lg:w-full max-lg:items-center max-lg:text-center">
              <h1 className="t-h1">
                <span className="hero-heading-mask"><span data-hero-line>{hero.headingLines[0]}</span></span>
                <span className="hero-heading-mask"><span data-hero-line>{hero.headingLines[1]}</span></span>
              </h1>
              <p data-hero-description className="t-lead text-muted md:max-w-[600px]">{hero.sub}</p>
            </div>
            <div data-hero-actions className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="outline">
                {hero.secondary.label}
              </Button>
            </div>
          </div>

          <div className="w-full max-w-[512px] lg:w-[510px] lg:shrink-0">
            <div className="hero-preview">
              <HeroWidget />
            </div>
          </div>
        </div>

        <div data-hero-ticker><LogoTicker /></div>
      </div>
    </header>
  );
}
