"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navCta, navLinks, site } from "@/lib/content/site";
import { Icon } from "@/components/ui/Icon";

/**
 * One fixed pill, 60px tall, 24px from the top. Below 810 the links collapse
 * into a white sheet that drops out of the bottom of the pill.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const onOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 810px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-10 flex justify-center px-6 md:top-6">
      <nav
        ref={nav}
        aria-label="Main navigation"
        onBlur={(event) => {
          if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
        }}
        className={clsx(
          "relative flex h-[60px] items-center rounded-[58px] bg-white px-3 py-2",
          pathname === "/" && "vault-home-nav",
          "max-md:w-full max-md:max-w-[342px] max-md:justify-between md:gap-8 lg:gap-12",
        )}
        style={{ boxShadow: "rgba(224, 215, 198, 0.5) 0px 1px 20px 0px" }}
      >
        <div className="flex w-20 items-center gap-2">
          <Link href="/" aria-label={`${site.name} home`} className="brandmark-link rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt="" width={44} height={44} />
          </Link>
        </div>

        <ul className="hidden items-center gap-4 px-2 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="nav-menu-link block whitespace-nowrap py-2 t-small font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={navCta.href}
          className="action-button hidden items-center gap-3 rounded-[32px] bg-primary py-2 pl-4 pr-2 t-btn text-white md:inline-flex"
        >
          <span>{navCta.label}</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-ink">
            <Icon name="arrow" size={28} />
          </span>
        </Link>

        <button
          ref={toggle}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="action-button menu-toggle inline-flex items-center gap-3 rounded-[32px] bg-primary py-2 pl-4 pr-2 t-btn text-white md:hidden"
        >
          <span>Menu</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-ink">
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </span>
        </button>

        <div
          id="mobile-nav"
          aria-hidden={!open}
          data-open={open}
          ref={(element) => { if (element) element.inert = !open; }}
          className="mobile-nav absolute inset-x-0 top-[68px] flex flex-col items-center gap-1 rounded-[24px] bg-white px-4 py-4 md:hidden"
        >
          {[...navLinks, navCta].map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="flex min-h-11 w-full items-center justify-center rounded-xl p-2 t-body font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
