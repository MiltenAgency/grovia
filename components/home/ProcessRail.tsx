"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { steps } from "@/lib/content/home";
import { HoverSurface } from "@/components/motions/HoverSurface";
import "./process-rail.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** The bead scrubs; step entrances play or reverse as it crosses each marker. */
export function ProcessRail() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current!;
    const select = gsap.utils.selector(element);
    const stage = select(".process-rail-stage")[0];
    const track = select(".process-rail-track")[0] as HTMLElement;
    const fill = select(".process-rail-fill");
    const bead = select(".process-rail-bead");
    const items = gsap.utils.toArray<HTMLElement>(".process-rail-step", element);
    const media = gsap.matchMedia();

    media.add({
      desktop: "(min-width: 810px)",
      motion: "(prefers-reduced-motion: no-preference)",
    }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = Boolean(context.conditions.desktop);
      element.dataset.enhanced = "true";
      let thresholds: number[] = [];
      let distance = 0;

      // All layout reads happen at setup/refresh, never while scrubbing.
      const measure = () => {
        const markers = items.map(item => item.querySelector(".process-rail-marker")!.getBoundingClientRect());
        const box = track.getBoundingClientRect();
        if (desktop) {
          track.style.height = "2px";
          distance = track.clientWidth;
          thresholds = markers.map(marker => (marker.left + marker.width / 2 - box.left) / distance);
        } else {
          distance = markers[markers.length - 1].top + markers[markers.length - 1].height / 2 - box.top;
          track.style.height = `${distance}px`;
          thresholds = markers.map(marker => (marker.top + marker.height / 2 - box.top) / distance);
        }
      };
      measure();
      gsap.set(fill, { scaleX: desktop ? 0 : 1, scaleY: desktop ? 1 : 0, transformOrigin: "0 0" });
      gsap.set(bead, { x: 0, y: 0 });

      // Staggered entrance: all 3 steps reveal smoothly as the section enters the viewport
      gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      })
        .from(stage.querySelector(".process-rail-heading"), { y: 24, opacity: 0, duration: 0.7 })
        .from(track, { scaleX: 0, transformOrigin: "0 50%", opacity: 0, duration: 0.6 }, "-=0.3")
        .from(items, { y: 36, opacity: 0, duration: 0.75, stagger: 0.14 }, "-=0.4");

      // The line fill and bead scrub smoothly as the user scrolls through the steps
      const rail = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top 72%",
          end: "bottom 70%",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onRefreshInit: measure,
        },
        onUpdate() {
          const progress = this.progress();
          items.forEach((item, index) => {
            const active = progress >= (thresholds[index] ?? 0);
            item.dataset.reached = String(active);
          });
        },
      });
      rail.to(fill, { scaleX: 1, scaleY: 1, duration: 1, ease: "none" }, 0)
        .to(bead, { x: () => desktop ? distance : 0, y: () => desktop ? 0 : distance, duration: 1, ease: "none" }, 0);

      return () => {
        delete element.dataset.enhanced;
        track.style.removeProperty("height");
        items.forEach(item => delete item.dataset.reached);
      };
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <div ref={root} className="process-rail">
      <div className="process-rail-stage">
        <h2 className="t-h2 process-rail-heading">Better finances in three simple steps.</h2>
        <div className="process-rail-body">
          <div className="process-rail-track" aria-hidden="true">
            <span className="process-rail-route" />
            <span className="process-rail-fill" />
            <span className="process-rail-bead" />
          </div>
          <ol className="process-rail-steps">
            {steps.map(step => (
              <li className="process-rail-step" key={step.num}>
                <span className="process-rail-marker" aria-hidden="true"><span className="process-rail-marker-fill" /></span>
                <div className="process-rail-title">
                  <span className="process-rail-number-mask" aria-hidden="true"><span data-rail-number>{step.num}</span></span>
                  <h3 className="heading-5">{step.title}</h3>
                </div>
                <p className="t-body text-muted">{step.body}</p>
                <HoverSurface className="process-rail-art-surface">
                  <div data-rail-image className="process-rail-art" data-ui>
                    <img src={step.backdrop} alt="" className="process-rail-art-backdrop" loading="lazy" />
                    <img src={step.art} alt="" width={300} height={351} className="process-rail-art-image" loading="lazy" />
                  </div>
                </HoverSurface>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
