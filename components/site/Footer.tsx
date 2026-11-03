import Link from "next/link";
import { footer } from "@/lib/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";

const socialIcon: Record<string, IconName> = {
  X: "x",
  Instagram: "instagram",
  LinkedIn: "linkedin",
};

export function Footer() {
  return (
    <footer className="flex justify-center px-1 pt-5 md:p-5">
      <div className="w-full max-w-[1400px] rounded-t-[28px] bg-panel py-10 md:rounded-[32px] lg:py-16">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-20 px-6 md:px-10 lg:px-[60px]">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex w-full flex-col items-start gap-5 md:w-[540px]">
              <h4 className="t-h4 w-full text-muted">{footer.newsletterHeading}</h4>
              <div className="flex w-full items-center justify-between gap-4 rounded-[50px] bg-paper p-[5px] pl-[15px]">
                <span className="t-body text-muted">A little clarity goes a long way.</span>
                <Link href="/#feature" className="shrink-0 rounded-[45px] bg-primary px-5 py-3 t-body font-medium text-white transition-opacity hover:opacity-80">Explore Moneta</Link>
              </div>
              <p id="portfolio-disclaimer" className="t-small text-muted md:max-w-[460px]">{footer.disclaimer}</p>
            </div>

            <nav className="flex w-full items-start gap-8 md:w-auto md:gap-10">
              <p className="flex items-center gap-2 text-muted">
                <Icon name="cornerArrow" size={24} />
                <span className="t-h6">{footer.pagesHeading}</span>
              </p>
              <ul className="flex w-[112px] flex-col justify-center">
                {footer.pages.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="block p-1 t-lead transition-opacity hover:opacity-70"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-0">
            <div className="flex flex-col items-start gap-5">
              <ul className="flex items-center gap-2">
                {footer.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={`${s.label} platform (not a Moneta profile)`}
                      className="flex size-9 items-center justify-center rounded-full bg-white/40 transition-opacity hover:opacity-70"
                    >
                      <Icon name={socialIcon[s.label]} size={20} />
                    </a>
                  </li>
                ))}
              </ul>
              {/* The export marks this up as an <h1>; kept visually identical
                  but demoted so each route has exactly one. */}
              <p className="t-h1">
                <Link href="/" aria-label="Moneta home">moneta.</Link>
              </p>
            </div>
            <p className="t-body text-muted">Original design by <a href="https://lunisdesign.com" className="underline underline-offset-4 hover:opacity-70">Lunis</a>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
