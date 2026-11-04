import clsx from "clsx";
import { showcaseImage, steps } from "@/lib/content/home";
import { Reveal } from "@/components/motions/Reveal";

/** Reserve the artwork's intrinsic ratio so every data row remains visible. */
function StepArt({ step, className }: { step: (typeof steps)[number]; className?: string }) {
  return (
    <div className={clsx("step-preview relative shrink-0 overflow-hidden rounded-2xl p-4", className)} data-ui>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.backdrop}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-[1] size-full rounded-2xl object-cover"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.art}
        alt=""
        loading="lazy"
        decoding="async"
        width={300}
        height={351}
        className="step-preview-image ring-white relative z-[2] mx-auto w-full max-w-[300px] rounded-xl"
      />
    </div>
  );
}

function StepText({ step, className }: { step: (typeof steps)[number]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <p className="t-lead text-faint">{step.num}</p>
      <div className="flex flex-col justify-end gap-3 lg:gap-4">
        <h3 className="heading-5">{step.title}</h3>
        <p className="t-body text-muted">{step.body}</p>
      </div>
    </div>
  );
}

/** Fixed card geometry keeps hover transitions off the layout path. */
export function ProcessSection() {
  return (
    <section id="how-it-works" className="flex justify-center">
      <div className="wrap flex flex-col py-20">
        <Reveal className="relative mx-auto aspect-[342/239] w-full overflow-hidden rounded-xl md:aspect-[614/370] md:w-[90%] md:rounded-3xl lg:aspect-[863/480] lg:w-[83%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={showcaseImage.src}
            alt={showcaseImage.alt}
            className="ring-white absolute inset-x-0 top-0 w-full rounded-xl md:rounded-3xl"
            style={{ boxShadow: "rgba(225, 216, 198, 0.5) 0px 4px 40px 0px" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[25px] md:h-10"
            style={{
              background:
                "linear-gradient(rgba(247,249,245,0) 0%, rgba(247,249,245,0.85) 65%, rgba(247,249,245,0.9) 100%)",
            }}
          />
        </Reveal>

        <h2 className="t-h2 mx-auto mb-10 mt-10 max-w-[600px] text-center">Better finances in three simple steps.</h2>

        <div className="process-cards grid gap-2 rounded-3xl bg-panel p-2 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <article
              key={step.num}
              tabIndex={0}
              aria-label={step.title}
              className={clsx(
                "process-card flex min-w-0 flex-col gap-6 rounded-2xl bg-white p-6",
                i === 2 && "md:col-span-2 md:flex-row md:items-center lg:col-span-1 lg:flex-col lg:items-stretch",
              )}
            >
              <StepText step={step} className={i === 2 ? "md:flex-1 lg:flex-none" : undefined} />
              <StepArt step={step} className={clsx("mt-auto w-full", i === 2 && "md:w-[301px] lg:w-full")} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
