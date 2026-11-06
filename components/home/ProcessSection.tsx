import { HoverSurface } from "@/components/motions/HoverSurface";
import { showcaseImage } from "@/lib/content/home";
import { DashboardReveal } from "./DashboardReveal";
import { ProcessRail } from "./ProcessRail";

/** The dashboard preview leads into the scroll-driven process rail. */
export function ProcessSection() {
  return (
    <section id="how-it-works" className="flex justify-center">
      <div className="wrap flex flex-col py-20">
        <DashboardReveal className="dashboard-reveal relative mx-auto aspect-[342/239] w-full rounded-xl md:aspect-[614/370] md:w-[90%] md:rounded-3xl lg:aspect-[863/480] lg:w-[83%]">
          <HoverSurface className="dashboard-preview relative size-full overflow-hidden rounded-xl md:rounded-3xl">
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
          </HoverSurface>
        </DashboardReveal>

        <ProcessRail />

      </div>
    </section>
  );
}
