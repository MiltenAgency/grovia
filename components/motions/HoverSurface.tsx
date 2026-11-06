"use client";

import { createElement, useEffect, useRef, type HTMLAttributes, type PointerEvent } from "react";

type Props = HTMLAttributes<HTMLElement> & { as?: "div" | "article" };

/** Measure once on entry; pointer movement only updates compositor transforms. */
export function HoverSurface({ as = "div", children, ...props }: Props) {
  const element = useRef<HTMLElement>(null);
  const bounds = useRef<DOMRect>();
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function enter(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    bounds.current = event.currentTarget.getBoundingClientRect();
  }

  function move(event: PointerEvent<HTMLElement>) {
    const box = bounds.current;
    if (!box) return;
    const x = Math.max(-1, Math.min(1, (event.clientX - box.left) / box.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - box.top) / box.height * 2 - 1));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.current?.style.setProperty("--surface-x", `${-y * 2.5}deg`);
      element.current?.style.setProperty("--surface-y", `${x * 2.5}deg`);
    });
  }

  function leave() {
    bounds.current = undefined;
    cancelAnimationFrame(frame.current);
    element.current?.style.removeProperty("--surface-x");
    element.current?.style.removeProperty("--surface-y");
  }

  return createElement(as, {
    ...props, ref: element, "data-hover-surface": true,
    onPointerEnter: enter, onPointerMove: move, onPointerLeave: leave, onPointerCancel: leave,
  }, children);
}
