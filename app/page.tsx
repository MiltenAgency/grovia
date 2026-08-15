import { PageBackdrop } from "@/components/site/PageBackdrop";
import { Hero } from "@/components/home/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { IntegrationSection } from "@/components/home/IntegrationSection";
import { PricingSection } from "@/components/home/PricingSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingCta } from "@/components/shared/ClosingCta";

export default function HomePage() {
  return (
    <div className="relative">
      <PageBackdrop />
      <div className="relative">
        <Hero />
        <ProcessSection />
        <FeatureSection />
        <IntegrationSection />
        <PricingSection />
        <StoriesSection />
        <FaqSection />
        <ClosingCta />
      </div>
    </div>
  );
}
