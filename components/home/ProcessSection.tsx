import { HoverSurface } from "@/components/motions/HoverSurface";
import { showcaseImage } from "@/lib/content/home";
import { DashboardReveal } from "./DashboardReveal";
import { ProcessRail } from "./ProcessRail";

/** The dashboard preview leads into the scroll-driven process rail. */
export function ProcessSection() {
  return (
    <section id="how-it-works" className="flex flex-col items-center pt-2 pb-20 md:pt-4 md:pb-28">
      {/* Dashboard showcase: large, prominent hero extension */}
      <div className="w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <DashboardReveal className="dashboard-reveal relative mx-auto w-full">
          <HoverSurface className="dashboard-preview relative w-full overflow-hidden rounded-2xl md:rounded-[28px] lg:rounded-[32px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={showcaseImage.src}
              alt={showcaseImage.alt}
              className="ring-white block w-full h-auto rounded-2xl md:rounded-[28px] lg:rounded-[32px]"
              style={{ boxShadow: "rgba(225, 216, 198, 0.6) 0px 8px 48px 0px" }}
            />
          </HoverSurface>
        </DashboardReveal>
      </div>

      <div className="wrap flex flex-col">
        <ProcessRail />
      </div>
    </section>
  );
}
