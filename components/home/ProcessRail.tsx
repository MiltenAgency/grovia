"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { steps } from "@/lib/content/home";
import { HoverSurface } from "@/components/motions/HoverSurface";
import { ProcessCardDetail } from "./ProcessCardDetail";
import "./process-rail.css";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

/** The bead and every step share the same reversible scroll progress. */
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
      tall: "(min-height: 850px)",
      motion: "(prefers-reduced-motion: no-preference)",
    }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = Boolean(context.conditions.desktop);
      const pinned = desktop && Boolean(context.conditions.tall);
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

      const entrances = items.map((item) => {
        const number = item.querySelector("[data-rail-number]");
        const image = item.querySelector("[data-rail-image]");
        const marker = item.querySelector(".process-rail-marker-fill");
        const copy = item.querySelectorAll(".process-rail-title h3, .process-rail-step > p");
        item.dataset.reached = "false";
        const entrance = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
          .fromTo(marker, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 }, 0)
          .fromTo(number, { yPercent: 110, rotationX: -35 }, { yPercent: 0, rotationX: 0, duration: 0.55 }, 0.04)
          .fromTo(copy, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.04 }, 0.04)
          .fromTo(image, { y: 20, scale: 0.96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.65 }, 0.12);
        return entrance;
      });

      const rail = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: pinned ? "top 112px" : "top 75%",
          end: pinned ? () => `+=${Math.max(600, window.innerHeight * 0.85)}` : "bottom 60%",
          pin: pinned,
          scrub: 0.55,
          invalidateOnRefresh: true,
          onRefreshInit: measure,
        },
        onUpdate() {
          const progress = this.progress();
          items.forEach((item, index) => {
            // Leave room for the final entrance on mobile, where the track
            // ends exactly at the last marker.
            const revealRange = Math.max(0.035, Math.min(0.13, (1 - thresholds[index]) * 0.9));
            const start = Math.min(thresholds[index], 1 - revealRange);
            const active = progress >= start;
            item.dataset.reached = String(active);
            // Derive visibility from the bead rather than independent play/reverse
            // animations, so fast scrolling and direction changes cannot leave a
            // card visible after the bead has passed it on the way back.
            const reveal = gsap.utils.clamp(0, 1, (progress - start) / revealRange);
            entrances[index].progress(reveal);
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
                    <ProcessCardDetail step={step.num} />
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
