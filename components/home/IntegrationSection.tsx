import { integrations } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { MarqueeY } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motions/Reveal";

/** Two 100px logo columns crawling in opposite directions at 30px/s. */
function LogoColumn({
  logos,
  reverse,
}: {
  logos: (typeof integrations.columns)[number];
  reverse?: boolean;
}) {
  return (
    <MarqueeY
      gap={12}
      cycle={logos.length * 112}
      reverse={reverse}
      className="h-[465px] w-[100px] max-md:h-[176px]"
      items={logos.map((l) => (
        <div
          key={l.src}
          className="flex size-[100px] items-center justify-center rounded-2xl bg-panel p-7"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={l.src} alt="" width={l.w} height={l.h} />
        </div>
      ))}
    />
  );
}

export function IntegrationSection() {
  return (
    <section className="flex justify-center">
      <div className="wrap flex flex-col items-center gap-10 py-20 md:flex-row md:items-center md:justify-between md:gap-0">
        <Reveal className="flex w-full flex-col items-start gap-10 md:w-[396px] md:gap-16 lg:w-[426px]">
          <div className="flex flex-col items-start gap-5">
            <h2 className="t-h2">{integrations.heading}</h2>
            <p className="t-lead text-muted">{integrations.sub}</p>
            <Button href={integrations.cta.href}>{integrations.cta.label}</Button>
          </div>

          <Divider count={4} gap={48} className="md:hidden" />
          <Divider count={4} className="max-md:hidden" />

          <ul className="flex w-full flex-col justify-center gap-5">
            {integrations.steps.map((s) => (
              <li key={s.num} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink t-tiny font-medium text-white">
                  {s.num}
                </span>
                <span className="t-lead text-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div
          className="flex shrink-0 gap-4 overflow-hidden max-md:h-[176px]"
          aria-hidden="true"
          style={{
            WebkitMaskImage:
              "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.9%, rgb(0,0,0) 88%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.9%, rgb(0,0,0) 88%, rgba(0,0,0,0) 100%)",
          }}
        >
          <LogoColumn logos={integrations.columns[0]} />
          <LogoColumn logos={integrations.columns[1]} reverse />
        </div>
      </div>
    </section>
  );
}
