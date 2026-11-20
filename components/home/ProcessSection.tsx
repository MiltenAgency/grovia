import { DashboardPreview } from "./DashboardPreview";
import { DashboardReveal } from "./DashboardReveal";
import { ProcessRail } from "./ProcessRail";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="flex flex-col items-center pt-2 pb-20 md:pt-4 md:pb-28">
      <div className="w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <DashboardReveal className="dashboard-reveal relative mx-auto w-full">
          <DashboardPreview />
        </DashboardReveal>
      </div>
      <div className="wrap flex flex-col">
        <ProcessRail />
      </div>
    </section>
  );
}
