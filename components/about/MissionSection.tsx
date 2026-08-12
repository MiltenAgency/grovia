import clsx from "clsx";
import { mission } from "@/lib/content/about";
import { Divider } from "@/components/ui/Divider";
import { Icon } from "@/components/ui/Icon";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { Reveal } from "@/components/motions/Reveal";

export function MissionSection() {
  return (
    <section className="flex justify-center">
      <div className="wrap flex flex-col items-center gap-16 py-20 md:gap-20">
        <Reveal className="flex w-full flex-col gap-2 rounded-3xl bg-panel p-2 lg:flex-row lg:items-stretch">
          <div className="relative flex flex-col items-end justify-between gap-16 overflow-hidden rounded-[20px] p-8 md:p-10 lg:w-[420px] lg:gap-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mission.background}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.68]" />
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-[88px] h-[282px] w-[292px]"
              style={{
                background:
                  "radial-gradient(59% 59% at 24.9% 33.5%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              }}
            />

            <div className="relative flex w-full flex-col items-start gap-10">
              <div className="flex items-center gap-3 text-white">
                <Icon name="target" size={32} />
                <h2 className="t-h2">{mission.heading}</h2>
              </div>
              <p className="t-lead text-white/60">
                {mission.lead}
                <span className="text-white">{mission.leadEmphasis}</span>
                {mission.leadTail}
              </p>
            </div>

            <div className="relative flex w-full items-end justify-between">
              <Divider count={3} gap={40} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mission.inset}
                alt=""
                className="size-[72px] rounded-xl object-cover md:size-[120px]"
              />
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2 lg:w-[596px]">
            {mission.stats.map((s, i) => (
              <div
                key={s.label}
                className={clsx(
                  "flex h-[240px] items-center justify-center rounded-[20px] p-6 md:h-[268px]",
                  s.tint === 0.8 ? "bg-white/80" : "bg-white/40",
                )}
              >
                <div className="flex h-full w-full flex-col justify-between gap-6 lg:gap-0">
                  <div className="flex flex-col items-start gap-2">
                    <p className="t-stat text-ink-soft">{s.value}</p>
                    <p className="t-lead">{s.label}</p>
                  </div>
                  <p className="t-body text-muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
          <p className="t-lead shrink-0 text-muted">{mission.partnersLabel}</p>
          <LogoTicker />
        </div>
      </div>
    </section>
  );
}
