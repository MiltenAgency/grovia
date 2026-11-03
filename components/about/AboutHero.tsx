import { aboutHero } from "@/lib/content/about";
import { Rating } from "@/components/ui/Rating";
import { WordHeading } from "@/components/ui/WordHeading";
import { Reveal } from "@/components/motions/Reveal";

/**
 * A word-by-word heading (the export animates each word separately), then the
 * bento: a looping video beside a stacked pair of stills.
 */
export function AboutHero() {
  return (
    <header className="relative flex justify-center pt-20">
      <div className="wrap flex flex-col items-center gap-16 py-10 md:py-20">
        <Reveal onMount className="flex flex-col items-center gap-8 text-center md:max-w-[686px]">
          <WordHeading words={aboutHero.headingWords} />
          <p className="t-lead text-muted md:max-w-[600px]">{aboutHero.sub}</p>
          <Rating />
        </Reveal>

        {/* Below 810 the bento stacks and the pair of stills sits side by
            side; above it the video squares up next to a stacked pair. */}
        <Reveal onMount delay={0.2} className="flex w-full flex-col items-end justify-center gap-2 md:flex-row md:items-end lg:w-[863px]">
          {/* The white video plate is tilted -3deg and overhangs its beige
              frame up and to the left, which is what gives the bento depth. */}
          <div className="relative aspect-[342/250] w-full rounded-[20px] bg-panel-warm md:aspect-square md:w-[48.3%] md:rounded-3xl lg:w-[420px]">
            <div
              className="absolute -left-1 -top-1 flex items-center justify-center overflow-hidden rounded-2xl bg-white md:rounded-3xl"
              style={{
                width: "97%",
                height: "97%",
                transform: "rotate(-3deg)",
                boxShadow: "rgba(0, 0, 0, 0.25) 4px 6px 15px 0px",
              }}
            >
              <video
                className="size-full rounded-2xl object-cover md:rounded-3xl"
                src={aboutHero.video}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                aria-label="Illustrative scene of people planning together"
              />
            </div>
          </div>
          <div className="flex w-full gap-2 self-stretch rounded-[20px] bg-panel-warm p-2 md:aspect-[345/329] md:flex-1 md:flex-col md:rounded-[28px] lg:aspect-[436/420] lg:w-[436px] lg:flex-none">
            {aboutHero.stack.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="aspect-[159/184] min-w-0 flex-1 rounded-2xl object-cover md:aspect-auto md:min-h-0 md:w-full md:rounded-3xl"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
