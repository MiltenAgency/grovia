"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { featureTabs, featuresIntro } from "@/lib/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureArtwork } from "./FeatureArtwork";
import "./feature-stack.css";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export function FeatureSection() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const controls = useRef<(HTMLButtonElement | null)[]>([]);
  const trigger = useRef<ScrollTrigger | null>(null);
  const navigation = useRef<gsap.core.Tween | null>(null);
  const [active, setActive] = useState(0);
  const [stacked, setStacked] = useState(false);
  const [direction, setDirection] = useState("forward");

  const { contextSafe } = useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 320px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)", () => {
      const element = root.current!;
      const panels = cards.current.filter((card): card is HTMLElement => Boolean(card));
      const artwork = panels.map(card => card.querySelector("[data-stack-media]"));
      const shade = panels.map(card => card.querySelector("[data-stack-shade]"));
      let current = 0;
      element.dataset.enhanced = "true";
      setStacked(true);
      setActive(0);
      gsap.set(panels, { transformOrigin: "50% 100%" });
      gsap.set(panels.slice(1), { yPercent: 115 });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage.current,
          start: "top 100px",
          end: () => `+=${(panels.length - 1) * Math.max(520, window.innerHeight * 0.85)}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
        onUpdate() {
          const next = Math.min(panels.length - 1, Math.floor(this.time() + 0.5));
          if (next === current) return;
          setDirection(next > current ? "forward" : "backward");
          current = next;
          setActive(next);
        },
      });
      panels.slice(1).forEach((panel, offset) => {
        timeline
          .to(panels[offset], { scale: 0.9, y: 28, rotation: offset % 2 ? 2.5 : -2.5, duration: 1, ease: "none" }, offset)
          .to(shade[offset], { opacity: 0.16, duration: 1, ease: "none" }, offset)
          .to(artwork[offset], { scale: 1.08, rotation: 1.5, duration: 1, ease: "none" }, offset)
          .to(panel, { yPercent: 0, duration: 1, ease: "none" }, offset)
          .fromTo(artwork[offset + 1], { yPercent: 8, scale: 1.04 }, { yPercent: 0, scale: 1, duration: 1, ease: "none" }, offset)
          .fromTo(panels[offset + 1].querySelectorAll(".feature-stack-copy > *"),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power3.out" }, offset + 0.2);
      });
      trigger.current = timeline.scrollTrigger!;
      return () => {
        navigation.current?.kill();
        trigger.current = null;
        delete element.dataset.enhanced;
        setStacked(false);
      };
    });
    return () => media.revert();
  }, { scope: root });

  // The unpinned list keeps its counter in sync too, without animating the cards.
  useEffect(() => {
    if (stacked) return;
    const observer = new IntersectionObserver(entries => {
      const entry = entries.find(item => item.isIntersecting);
      if (entry) setActive(cards.current.indexOf(entry.target as HTMLElement));
    }, { rootMargin: "-20% 0px -50% 0px", threshold: 0 });
    cards.current.forEach(card => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, [stacked]);

  const jumpTo = contextSafe((index: number) => {
    navigation.current?.kill();
    const scroll = trigger.current;
    const card = cards.current[index];
    if (!card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const y = scroll
      ? scroll.start + (scroll.end - scroll.start) * index / (featureTabs.length - 1) + (index === featureTabs.length - 1 ? -1 : 1)
      : card.getBoundingClientRect().top + window.scrollY - 112;
    if (reduced) window.scrollTo({ top: y, behavior: "instant" });
    else {
      // Native CSS smooth scrolling would fight GSAP's per-frame scroll positions.
      const page = document.documentElement;
      const previousBehavior = page.style.scrollBehavior;
      page.style.scrollBehavior = "auto";
      const restore = () => {
        page.style.scrollBehavior = previousBehavior;
        navigation.current = null;
      };
      navigation.current = gsap.to(window, {
        scrollTo: { y, autoKill: true }, duration: 0.75, ease: "power3.inOut",
        onComplete: restore, onInterrupt: restore,
      });
    }
    if (!scroll) setActive(index);
  });

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
    controls.current[next]?.focus({ preventScroll: true });
    jumpTo(next);
  }

  return (
    <section ref={root} id="feature" className="feature-stack-section">
      <div className="wrap py-20">
        <SectionHeading heading={featuresIntro.heading} sub={featuresIntro.sub} className="feature-stack-heading" />
        <div ref={stage} className="feature-stack-stage">
          <div className="feature-stack-frame">
            {featureTabs.map((feature, index) => (
              <article key={feature.id} id={`feature-card-${feature.id}`}
                ref={element => { cards.current[index] = element; if (element) element.inert = stacked && active !== index; }}
                className="feature-stack-card" data-feature={feature.id} data-active={active === index} aria-hidden={stacked && active !== index ? true : undefined}
                aria-labelledby={`feature-title-${feature.id}`} style={{ zIndex: index + 1 }}>
                <FeatureArtwork feature={feature} />
                <div className="feature-stack-copy">
                  <span className="feature-stack-category">{feature.tab}</span>
                  <h3 id={`feature-title-${feature.id}`} className="t-h3">{feature.heading}</h3>
                  <p className="t-body text-muted">{feature.body}</p>
                </div>
                <span data-stack-shade className="feature-stack-shade" aria-hidden="true" />
              </article>
            ))}
          </div>
          <nav className="feature-stack-controls" aria-label="Feature cards">
            <div className="feature-stack-position" aria-live="polite" aria-atomic="true">
              <span className="feature-stack-count-mask" data-direction={direction}><span key={active} className="feature-stack-count">{String(active + 1).padStart(2, "0")}</span></span>
              <span className="text-faint">/ {String(featureTabs.length).padStart(2, "0")}</span>
              <span className="feature-stack-current-label">{featureTabs[active].tab}</span>
            </div>
            <div className="feature-stack-buttons">
              {featureTabs.map((feature, index) => (
                <button key={feature.id} ref={element => { controls.current[index] = element; }} type="button"
                  aria-label={`Show ${feature.tab.toLowerCase()} feature`} aria-controls={`feature-card-${feature.id}`}
                  aria-current={active === index ? "step" : undefined} title={feature.tab}
                  onClick={() => jumpTo(index)} onKeyDown={event => onKeyDown(event, index)}>
                  <span className="feature-stack-button-line" /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
