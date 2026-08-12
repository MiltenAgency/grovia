import { hero } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { HeroWidget } from "./HeroWidget";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Heading, sub, two buttons and the tilted product mock, then the client strip.
 * The mock is drawn at its native 510×416 and scaled into whatever box the
 * breakpoint gives it, which is how Framer sizes it too.
 */
export function Hero() {
  return (
    <header className="relative flex justify-center pt-20">
      <div className="wrap flex flex-col gap-20 pt-10 md:gap-16 md:pt-[100px] lg:gap-20">
        <div className="flex flex-col items-center gap-16 md:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <Reveal onMount className="flex w-full flex-col items-center gap-8 lg:w-[426px] lg:items-start lg:gap-11">
            <div className="flex flex-col gap-6 max-lg:w-full max-lg:items-center max-lg:text-center">
              <h1 className="t-h1">
                {hero.headingLines[0]}
                <br />
                {hero.headingLines[1]}
              </h1>
              <p className="t-lead text-muted md:max-w-[600px]">{hero.sub}</p>
            </div>
            <div className="flex gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="outline">
                {hero.secondary.label}
              </Button>
            </div>
          </Reveal>

          <Reveal onMount delay={0.2} className="relative h-[270px] w-full max-w-[342px] md:h-[400px] md:max-w-[512px] lg:h-[416px] lg:w-[510px] lg:max-w-none">
            <div className="hero-mock absolute left-0 top-0 h-[416px] w-[510px]">
              <HeroWidget />
            </div>
          </Reveal>
        </div>

        <LogoTicker />
      </div>
    </header>
  );
}
