import { closingCta } from "@/lib/content/site";
import { Rating } from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motions/Reveal";
import { AnimatedHeadline } from "@/components/motions/AnimatedHeadline";

/** Retain the original photographic band, two columns, and reveal animation. */
export function ClosingCta() {
  return (
    <section id="contact" className="bleed flex justify-center">
      <div className="relative w-full max-w-[1400px] overflow-hidden rounded-[28px] lg:rounded-[32px]">
        <img src={closingCta.background} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-forest/[0.78]" />
        <div className="bleed-inner relative flex flex-col items-start gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col justify-between gap-10 self-stretch lg:w-[356px]">
            <div className="flex flex-col gap-5">
              <AnimatedHeadline text={closingCta.heading} className="t-h2 text-white" />
              <p className="t-lead text-white/80">{closingCta.sub}</p>
            </div>
            <Reveal className="flex flex-col items-start gap-8">
              <Button href={closingCta.cta.href} variant="yellow">{closingCta.cta.label}</Button>
              <Rating tone="white" />
            </Reveal>
          </div>
          <div className="flex w-full flex-col items-start gap-5 rounded-3xl bg-black/30 p-8 max-md:px-6 lg:w-[600px]">
            <p className="t-small text-white/60">A LITTLE TODAY. MORE POSSIBILITY TOMORROW.</p>
            <h3 className="t-h3 text-white">Your money. Made simple.</h3>
            <div className="flex w-full flex-col gap-5 py-5">
              {[
                { label: "A clearer picture", sub: "Understand your everyday spending", icon: "chart" },
                { label: "A little more intention", sub: "Find a budget that fits your life", icon: "wallet" },
                { label: "Something to look forward to", sub: "Make room for your next big goal", icon: "savings" },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-4 rounded-[20px] bg-white/5 p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-panel">
                    <img src={`/assets/moneta/icon-${item.icon}.svg`} alt="" width={28} height={28} />
                  </span>
                  <div><p className="t-lead text-white">{item.label}</p><p className="t-small text-white/60">{item.sub}</p></div>
                </div>
              ))}
            </div>
            <p className="t-tiny text-white/60">A personal finance concept, made to explore.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
