import type { featureTabs } from "@/lib/content/home";

export function FeatureArtwork({ feature }: { feature: (typeof featureTabs)[number] }) {
  return (
    <div className="feature-stack-art">
      <div data-stack-media className="feature-stack-media">
        <img src={feature.photo} alt="" loading="lazy" decoding="async" width={640} height={480} />
      </div>
      <div className="feature-stack-sample">
        <span>{feature.sample.label}</span>
        <strong>{feature.sample.value}</strong>
        <small>{feature.sample.detail}</small>
      </div>
    </div>
  );
}
