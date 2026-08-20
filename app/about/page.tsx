import { PageBackdrop } from "@/components/site/PageBackdrop";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { ClosingCta } from "@/components/shared/ClosingCta";

export default function AboutPage() {
  return (
    <div className="relative">
      <PageBackdrop />
      <div className="relative">
        <AboutHero />
        <MissionSection />
        <TeamSection />
        <ClosingCta />
      </div>
    </div>
  );
}
