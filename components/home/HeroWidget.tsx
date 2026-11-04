import { heroChart, heroCustomers } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";

/** Real layout keeps both previews readable without scaling down their text. */
export function HeroWidget() {
  const [balance, ...transactions] = heroCustomers.rows;

  return (
    <div className="hero-cards" data-ui>
      <article className="hero-balance-card">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="title-3">{heroCustomers.title}</h2>
          <span className="caption-5 text-muted">{heroCustomers.sort}</span>
        </div>
        <div className="hero-balance-total">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white">
            <img src={`/assets/moneta/icon-${balance.icon}.svg`} alt="" width={24} height={24} data-preload="hero" />
          </span>
          <div className="min-w-0">
            <p className="hero-balance-value">{balance.name}</p>
            <p className="caption-5 text-muted">{balance.org}</p>
          </div>
        </div>
        <div className="grid gap-4">
          {transactions.map((row) => (
            <div key={row.name} className="hero-transaction">
              <img src={`/assets/moneta/icon-${row.icon}.svg`} alt="" width={24} height={24} data-preload="hero" />
              <div className="min-w-0 flex-1">
                <p className="title-4">{row.name}</p>
                <p className="caption-5 text-muted">{row.org}</p>
              </div>
              <span className="hero-transaction-amount title-4">{row.amount}</span>
            </div>
          ))}
        </div>
        <p className="caption-5 flex items-center gap-2 text-muted">
          {heroCustomers.all}<Icon name="arrowCircle" size={16} />
        </p>
      </article>

      <article className="hero-savings-card">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="caption-4 text-muted">{heroChart.label}</h2>
            <p className="heading-5">{heroChart.value}</p>
          </div>
          <span className="caption-4 rounded-full bg-panel px-2 py-1 text-flag">
            {heroChart.delta} {heroChart.period}
          </span>
        </div>
        <div className="hero-chart" aria-hidden="true">
          {heroChart.bars.map((bar, i) => (
            <div key={i} className="hero-chart-column">
              <div className="hero-chart-bar">
                <span className="bg-panel" style={{ height: bar[0] }} />
                <span className="bg-butter" style={{ height: bar[1] }} />
                <span className="bg-primary" style={{ height: bar[2] }} />
              </div>
              <span className="caption-5 text-muted">{heroChart.days[i]}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
