"use client";

import { useState, type FormEvent } from "react";
import { closingCta, site } from "@/lib/content/site";
import { Rating } from "@/components/ui/Rating";
import { SubmitButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motions/Reveal";

const fields = [
  { key: "name", type: "text", ...closingCta.fields.name },
  { key: "email", type: "email", ...closingCta.fields.email },
] as const;

/**
 * "Start your journey" — the band that closes / and /about but not any of the
 * case-study routes (checked against the export, page by page).
 */
export function ClosingCta() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bleed flex justify-center">
      <div className="relative w-full max-w-[1400px] overflow-hidden rounded-[28px] lg:rounded-[32px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={closingCta.background}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.68]" />

        <div className="bleed-inner relative flex flex-col items-start gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col items-start gap-5 lg:hidden">
            <h2 className="t-h2 text-white">{closingCta.heading}</h2>
            <p className="t-lead text-white/80">{closingCta.sub}</p>
          </div>

          <Reveal className="hidden flex-col justify-between self-stretch lg:flex lg:w-[356px]">
            <div className="flex flex-col gap-5">
              <h2 className="t-h2 text-white">{closingCta.heading}</h2>
              <p className="t-lead text-white/80">{closingCta.sub}</p>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex flex-col justify-center gap-1">
                <p className="t-lead text-white/80">
                  <a href={`tel:${closingCta.phone.replace(/-/g, "")}`}>{closingCta.phone}</a>
                </p>
                <h5 className="t-h5 text-white">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </h5>
              </div>
              <Rating tone="white" />
            </div>
          </Reveal>

          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col items-start gap-5 rounded-3xl bg-black/30 p-8 max-md:px-6 md:h-[570px] lg:h-auto lg:w-[600px]"
          >
            {fields.map((f) => (
              <label key={f.key} className="flex w-full flex-col items-start gap-2 text-white">
                <span className="t-body">{f.label}</span>
                <input
                  name={f.key}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="h-[45px] w-full rounded-[20px] bg-white/5 px-4 py-3 t-body outline-none"
                />
              </label>
            ))}
            <label className="flex w-full flex-col items-start gap-2 text-white">
              <span className="t-body">{closingCta.fields.message.label}</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder={closingCta.fields.message.placeholder}
                className="h-[120px] w-full resize-y rounded-[20px] bg-white/5 p-4 t-body outline-none"
              />
            </label>
            <SubmitButton>{closingCta.submit}</SubmitButton>
            {sent && (
              <p role="status" className="t-small text-white/80">
                Thanks — we&rsquo;ll be in touch.
              </p>
            )}
          </form>

          <div className="flex flex-col justify-center gap-8 lg:hidden">
            <div className="flex flex-col justify-center gap-1">
              <p className="t-lead text-white/80">
                <a href={`tel:${closingCta.phone.replace(/-/g, "")}`}>{closingCta.phone}</a>
              </p>
              <h5 className="t-h5 text-white">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </h5>
            </div>
            <Rating tone="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
