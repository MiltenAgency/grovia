"use client";

import { useState } from "react";
import clsx from "clsx";
import { faq } from "@/lib/content/home";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Independent disclosures — the export lets several stand open at once, and
 * starts with all five closed. A closed row is 90px; open adds a 16px gap and
 * the answer.
 */
export function FaqSection() {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) =>
    setOpen((v) => (v.includes(i) ? v.filter((n) => n !== i) : [...v, i]));

  return (
    <section id="faq" className="flex justify-center">
      <div className="wrap flex flex-col items-start gap-10 py-20 lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex w-full flex-col items-start gap-5 md:max-w-[600px] lg:w-[343px]">
          <h2 className="t-h2">{faq.heading}</h2>
          <p className="t-lead text-muted">{faq.sub}</p>
          <Button href={faq.cta.href} variant="outline">
            {faq.cta.label}
          </Button>
        </div>

        <Reveal delay={0.1} className="flex w-full flex-col gap-2 rounded-3xl bg-panel-faq p-2 lg:w-[603px]">
          {faq.items.map((item, i) => {
            const isOpen = open.includes(i);
            return (
              <div key={item.q} className="rounded-[20px] bg-white/40 p-8">
                <h6 className="t-h6">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="pr-3">{item.q}</span>
                    <span
                      className={clsx(
                        "faq-icon shrink-0",
                        isOpen && "rotate-45",
                      )}
                    >
                      <Icon name="faqPlus" size={20} />
                    </span>
                  </button>
                </h6>
                <div
                  id={`faq-${i}`}
                  hidden={!isOpen}
                  className="faq-answer pt-4 t-body text-muted"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
