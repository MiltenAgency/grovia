import { heroChart, heroCustomers } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";

/**
 * The two tilted product cards in the hero. Everything is drawn, not
 * screenshotted; the sizes, the two rotations and Framer's odd fractional
 * paddings (23.4953 / 7.83178 / 3.91589) are read off the running original.
 */
const CARD_SHADOW = "rgba(104, 99, 80, 0.15) -3px 15px 25px 0px";

function CustomerRow({
  row,
  first,
}: {
  row: (typeof heroCustomers.rows)[number];
  first?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full items-center gap-3 rounded-2xl p-4 ${first ? "bg-panel" : ""}`}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/80">
        <img src={`/assets/moneta/icon-${row.icon}.svg`} alt="" width={24} height={24} />
      </span>
      <div className="flex flex-col justify-center gap-0.5">
        <p className={first ? "t-h5 font-medium" : "t-small font-medium"}>{row.name}</p>
        <p className="t-tiny text-muted">{row.org}</p>
      </div>
      {row.amount && <span className="ml-auto t-small font-medium">{row.amount}</span>}
    </div>
  );
}

export function HeroWidget() {
  return (
    <div className="absolute left-0 top-0 h-[416px] w-[510px] origin-top-left">
      <div
        className="hero-balance-float ring-white absolute flex flex-col rounded-[20px] bg-white/60"
        style={{
          left: 6,
          top: 8,
          width: 460,
          height: 332,
          gap: 24,
          paddingBlock: 23.4953,
          transform: "rotate(2deg)",
          boxShadow: CARD_SHADOW,
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ paddingInline: 23.4953 }}
        >
          <p className="t-lead font-medium" style={{ lineHeight: "21.6px" }}>
            {heroCustomers.title}
          </p>
          <span className="flex items-center text-ink-soft" style={{ gap: 3.91589 }}>
            <span className="t-small" style={{ lineHeight: "16.8px" }}>
              {heroCustomers.sort}
            </span>
            <Icon name="chevronDown" size={10} />
          </span>
        </div>

        <div className="flex flex-col" style={{ paddingInline: 7.83178 }}>
          {heroCustomers.rows.map((r, i) => (
            <CustomerRow key={r.name} row={r} first={i === 0} />
          ))}
        </div>

        <div
          className="flex items-center"
          style={{ gap: 7.83178, paddingInline: 23.4953 }}
        >
          <span className="t-small" style={{ lineHeight: "16.8px" }}>
            {heroCustomers.all}
          </span>
          <Icon name="arrowCircle" size={17} />
        </div>
      </div>

      <div
        className="hero-savings-float ring-white absolute flex flex-col items-center justify-center rounded-[20px] bg-white/40"
        style={{
          left: 219,
          top: 176,
          width: 293,
          height: 232,
          gap: 20,
          padding: "28px 32px",
          transform: "rotate(-3deg)",
          boxShadow: CARD_SHADOW,
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="t-tiny">{heroChart.label}</p>
            <p className="font-medium" style={{ fontSize: 24, lineHeight: "28.8px" }}>
              {heroChart.value}
            </p>
          </div>
          <div className="flex items-center" style={{ gap: 3.13656 }}>
            <p className="t-tiny text-flag">{heroChart.delta}</p>
            <p className="t-tiny">{heroChart.period}</p>
          </div>
        </div>

        <div className="flex w-full items-end justify-between" style={{ height: 109 }}>
          {heroChart.bars.map((bar, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ gap: 14.5066 }}
            >
              <div className="hero-chart-bar flex w-[18px] flex-col overflow-hidden rounded" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
                <span style={{ height: bar[0], background: "#E5F2EB" }} />
                <span style={{ height: bar[1], background: "#C5A7F7" }} />
                <span style={{ height: bar[2], background: "#147D64" }} />
              </div>
              <p className="t-tiny font-medium">{heroChart.days[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
