"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { CaseStudy } from "@/lib/content/caseStudies";
import { Button } from "@/components/ui/Button";
import "./story-gallery.css";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

type Story = Pick<CaseStudy, "slug" | "name" | "excerpt" | "cover" | "coverAlt">;

export function StoryGallery({ stories }: { stories: Story[] }) {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const photos = useRef<(HTMLImageElement | null)[]>([]);
  const numbers = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const gallery = root.current!;
    const media = gsap.matchMedia();
    media.add("(min-height: 600px) and (prefers-reduced-motion: no-preference)", () => {
      gallery.dataset.animated = "true";
      const last = stories.length - 1;
      const pose = (offset: number) => ({
        xPercent: -50 + Math.sign(offset) * 67,
        yPercent: -50 + Math.sign(offset) * 64,
        scale: offset === 0 ? 1 : 0.28,
        opacity: Math.abs(offset) <= 1 ? 1 : 0,
      });
      photos.current.forEach((photo, i) => gsap.set(photo, pose(i)));
      const tl = gsap.timeline({
        defaults: { duration: 0.64, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: gallery, start: "top 96px", end: "bottom bottom",
          pin: stage.current!, pinSpacing: false,
          scrub: 0.3, invalidateOnRefresh: true,
        },
        onUpdate() {
          setActive(Math.min(last, Math.floor(this.time() + 0.5)));
        },
      });
      for (let step = 1; step <= last; step++) {
        const start = step - 0.82;
        photos.current.forEach((photo, i) => tl.to(photo, pose(i - step), start));
        tl.to(numbers.current, { y: -step + "em" }, start);
      }
      return () => { delete gallery.dataset.animated; setActive(0); };
    });
    return () => media.revert();
  }, { scope: root, dependencies: [stories.length], revertOnUpdate: true });

  return (
    <div ref={root} className="story-gallery" style={{ "--steps": stories.length - 1 } as React.CSSProperties}>
      <div ref={stage} className="story-stage">
        <div className="story-photos" aria-hidden="true">
          {stories.map((story, i) => <img key={story.slug} ref={el => { photos.current[i] = el; }}
            src={story.cover} alt="" width="640" height="480" />)}
        </div>
        <div className="story-details">
          <div className="story-counter" aria-hidden="true">
            <span className="story-digits"><span ref={numbers}>
              {stories.map((s, i) => <span key={s.slug}>{String(i + 1).padStart(2, "0")}</span>)}
            </span></span> / {String(stories.length).padStart(2, "0")}
          </div>
          {stories.map((story, i) => (
            <article key={story.slug} data-current={i === active}>
              <img className="story-static-photo" src={story.cover} alt={story.coverAlt} loading="lazy" />
              <h3 className="t-h3">{story.name}</h3>
              <p className="t-body text-muted">{story.excerpt}</p>
              <Button href={`/case-studies/${story.slug}`} variant="link">Read story<span className="sr-only"> about {story.name}</span></Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
