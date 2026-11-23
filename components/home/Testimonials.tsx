"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./testimonials.css";
import { testimonials } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP);

function Card({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="story-quote flex min-h-80 flex-col justify-between gap-8 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <span className="block shrink-0 p-1 text-rule">
          <Icon name="quotes" size={40} />
        </span>
        <blockquote className="t-lead text-muted">{item.quote}</blockquote>
      </div>
      <figcaption className="flex w-full items-end justify-between">
        <div className="flex flex-col gap-1 pr-5">
          <span className="t-body">{item.name}</span>
          <span className="t-body text-muted">{item.role}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.avatar}
          alt=""
          className="aspect-square w-24 shrink-0 rounded-2xl object-cover md:w-32"
        />
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const id = useId();
  const root = useRef<HTMLElement>(null);
  const highlight = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPlaying(!motion.matches);
    syncPreference();
    motion.addEventListener("change", syncPreference);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(root.current!);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    const timer = window.setTimeout(() => {
      setIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [playing, inView, index]);

  useGSAP(() => {
    gsap.to(highlight.current, {
      xPercent: index * 100,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.45,
      ease: "power3.inOut",
      overwrite: true,
    });
  }, { scope: root, dependencies: [index] });

  function navigate(event: KeyboardEvent<HTMLButtonElement>, current: number) {
    const count = testimonials.length;
    let next: number;
    switch (event.key) {
      case "ArrowLeft": next = (current + count - 1) % count; break;
      case "ArrowRight": next = (current + 1) % count; break;
      case "Home": next = 0; break;
      case "End": next = count - 1; break;
      default: return;
    }
    event.preventDefault();
    setIndex(next);
    buttons.current[next]?.focus();
  }

  return (
    <section ref={root} aria-label="Testimonials" className="quote-tabs w-full max-w-2xl">
      <div className="quote-tabs-row" role="tablist" aria-label="Choose a testimonial" onFocus={() => setPlaying(false)}>
        <div ref={highlight} className="quote-tabs-highlight" aria-hidden="true"
          style={{ width: `${100 / testimonials.length}%` }}>
          <svg viewBox="0 0 200 62" preserveAspectRatio="none" focusable="false">
            <path d="M0 62 C18 62 30 57 30 48 C30 42 8 44 8 24 Q8 2 32 2 H168 Q192 2 192 24 C192 44 170 42 170 48 C170 57 182 62 200 62 Z" />
          </svg>
        </div>
        {testimonials.map((item, i) => (
          <button key={item.name} ref={el => { buttons.current[i] = el; }}
            type="button" role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-quote-${i}`}
            aria-selected={index === i} tabIndex={index === i ? 0 : -1}
            onClick={() => { setPlaying(false); setIndex(i); }} onKeyDown={event => navigate(event, i)}>
            {item.name}
          </button>
        ))}
      </div>
      {testimonials.map((item, i) => (
        <div key={item.name} role="tabpanel" id={`${id}-quote-${i}`}
          aria-labelledby={`${id}-tab-${i}`} hidden={index !== i} tabIndex={0} className="quote-tabs-panel"
          onFocus={() => setPlaying(false)}>
          <Card item={item} />
        </div>
      ))}
      <button type="button" className="mt-2 min-h-11 px-4 t-small text-forest"
        onClick={() => setPlaying(current => !current)}>
        {playing ? "Pause slideshow" : "Play slideshow"}
      </button>
    </section>
  );
}
