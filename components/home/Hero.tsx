"use client";

import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { InitialAssetsReady } from "@/components/site/PageIntro";
import { hero } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { VaultIllustration } from "./VaultIllustration";
import { VaultBackdrop } from "./VaultBackdrop";
import "./hero.css";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const ready = useContext(InitialAssetsReady);

  useGSAP(() => {
    if (!ready) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } })
        .from(select(".vault-hero-art"), { scale: 1.045, opacity: 0 }, 0)
        .from(select("[data-hero-line]"), { yPercent: 105, stagger: 0.1 }, 0.12)
        .from(select(".vault-hero-description, .vault-hero-action"), { y: 20, opacity: 0, stagger: 0.1 }, 0.4)
        .from(select(".vault-savings"), { y: 24, opacity: 0, rotation: -3 }, 0.56)
        .from(select(".vault-savings-bars i"), { scaleY: 0.08, stagger: 0.055, duration: 0.65 }, 0.85)
        .from(select(".vault-spark"), { scale: 0, rotation: -35, stagger: 0.14 }, 0.65);
    });
    return () => media.revert();
  }, { scope: root, dependencies: [ready], revertOnUpdate: true });

  return (
    <header ref={root} data-moneta-hero className="vault-hero">
      <VaultBackdrop />
      <VaultIllustration />
      <div className="vault-hero-copy">
        <h1 className="vault-hero-heading">
          {hero.headingLines.map(line => <span className="hero-heading-mask" key={line}><span data-hero-line>{line}</span></span>)}
        </h1>
        <p className="vault-hero-description">{hero.sub}</p>
        <div className="vault-hero-action">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <a className="vault-hero-explore" href={hero.secondary.href}>{hero.secondary.label}<span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </header>
  );
}
