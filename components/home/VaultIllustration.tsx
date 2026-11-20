import { heroChart } from "@/lib/content/home";

export function VaultIllustration() {
  return (
    <div className="vault-hero-art">
      <div className="vault-character-scene">
        <img
          src="/assets/moneta/vault-character.webp"
          srcSet="/assets/moneta/vault-character-small.webp 576w, /assets/moneta/vault-character.webp 1056w"
          sizes="(max-width: 809px) min(calc(100vw - 48px), 380px), min(calc(50vw - 48px), 62svh, 560px)"
          data-preload="hero"
          fetchPriority="high"
          width={1056}
          height={1056}
          alt=""
        />
        <span className="vault-spark vault-spark-large" aria-hidden="true">✦</span>
        <span className="vault-spark vault-spark-small" aria-hidden="true">✦</span>
        <div className="vault-savings">
          <span className="vault-savings-label">Sample savings</span>
          <strong>{heroChart.value}</strong>
          <div className="vault-savings-trend">
            <span>{heroChart.delta}</span>
            <div className="vault-savings-bars" aria-hidden="true">
              {heroChart.bars.map((bar, index) => (
                <i key={index} style={{ height: bar[2] / 2 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
