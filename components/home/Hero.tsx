"use client";

import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { InitialAssetsReady } from "@/components/site/PageIntro";
import { hero } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { VaultIllustration } from "./VaultIllustration";
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
        .from(select(".vault-hero-description, .vault-hero-action, .vault-hero-note"), { y: 20, opacity: 0, stagger: 0.1 }, 0.4);
    });
    return () => media.revert();
  }, { scope: root, dependencies: [ready], revertOnUpdate: true });

  return (
    <header ref={root} data-moneta-hero className="vault-hero">
      <VaultIllustration />
      <div className="vault-hero-copy">
        <h1 className="vault-hero-heading">
          {hero.headingLines.map(line => <span className="hero-heading-mask" key={line}><span data-hero-line>{line}</span></span>)}
        </h1>
        <p className="vault-hero-description">{hero.sub}</p>
        <div className="vault-hero-action">
          <span className="vault-hero-action-icon" aria-hidden="true"><img src="/assets/moneta/icon-wallet.svg" alt="" width={24} height={24} /></span>
          <span className="vault-hero-action-label">A little clarity starts here</span>
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
        </div>
        <p className="vault-hero-note">Your spending. Your savings. Your next chapter.</p>
      </div>
      <a className="vault-hero-explore" href={hero.secondary.href}><span>Discover a clearer picture</span><span aria-hidden="true">↓</span></a>
      <span className="vault-hero-caption">Made for life. Built around you.</span>
    </header>
  );
}
