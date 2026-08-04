import { clientLogos } from "@/lib/content/site";
import { MarqueeX } from "./Marquee";

/** The four client marks, crawling left at 50px/s. */
export function LogoTicker({ gap = 40 }: { gap?: number }) {
  const cycle = clientLogos.reduce((n, l) => n + l.w + gap, 0);
  return (
    <MarqueeX
      gap={gap}
      cycle={cycle}
      items={clientLogos.map((l) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={l.src} src={l.src} alt={l.alt} width={l.w} height={32} className="h-8 w-auto max-w-none" />
      ))}
    />
  );
}
