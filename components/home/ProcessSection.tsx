import { DashboardPreview } from "./DashboardPreview";
import { DashboardReveal } from "./DashboardReveal";
import { ProcessRail } from "./ProcessRail";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="flex justify-center">
      <div className="wrap flex flex-col pt-4 pb-20">
        <DashboardReveal>
          <DashboardPreview />
        </DashboardReveal>
        <ProcessRail />
      </div>
    </section>
  );
}
