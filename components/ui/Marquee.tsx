import clsx from "clsx";
import type { ReactNode } from "react";

/**
 * Horizontal ticker. Each item carries its own trailing margin so the track is
 * exactly two identical halves and a -50% translate loops seamlessly.
 * The export runs the client strip at 50px/s behind a 10%/90% edge fade.
 */
export function MarqueeX({
  items,
  gap,
  speed = 50,
  cycle,
  className,
}: {
  items: ReactNode[];
  gap: number;
  speed?: number;
  /** One full pass, in px: the summed item widths plus one gap each. */
  cycle: number;
  className?: string;
}) {
  return (
    <div
      className={clsx("w-full overflow-hidden", className)}
      style={{
        WebkitMaskImage:
          "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)",
        maskImage:
          "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)",
      }}
    >
      <ul
        className="marquee-x flex w-max items-center"
        style={{ "--marquee-duration": `${cycle / speed}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <li key={i} style={{ marginRight: gap }} className="shrink-0" aria-hidden={i >= items.length}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Vertical ticker for the integration columns: 30px/s, up or down. */
export function MarqueeY({
  items,
  gap,
  speed = 30,
  cycle,
  reverse,
  className,
}: {
  items: ReactNode[];
  gap: number;
  speed?: number;
  cycle: number;
  reverse?: boolean;
  className?: string;
}) {
  const copies = [0, 1, 2, 3];
  return (
    <div className={clsx("overflow-hidden", className)}>
      <ul
        className={clsx("flex h-max flex-col", reverse ? "marquee-y-reverse" : "marquee-y")}
        style={{ "--marquee-duration": `${(cycle * 2) / speed}s` } as React.CSSProperties}
      >
        {copies.flatMap((c) =>
          items.map((item, i) => (
            <li key={`${c}-${i}`} style={{ marginBottom: gap }} className="shrink-0" aria-hidden={c > 0}>
              {item}
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
