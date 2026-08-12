import { team } from "@/lib/content/about";
import { Reveal } from "@/components/motions/Reveal";

export function TeamSection() {
  return (
    <section className="flex justify-center">
      <div className="wrap flex flex-col items-start gap-16 py-20 md:gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex w-full flex-col items-start gap-5 lg:w-[343px]">
          <h2 className="t-h2">{team.heading}</h2>
          <p className="t-lead text-muted">{team.sub}</p>
        </div>

        <Reveal as="ul" delay={0.1} className="grid w-full gap-x-2 gap-y-10 md:grid-cols-2 lg:w-[603px]">
          {team.members.map((m) => (
            <li key={m.name} className="flex flex-col gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.photo}
                alt={m.name}
                className="aspect-[298/348] w-full rounded-[20px] object-cover"
              />
              <div className="flex flex-col rounded-2xl bg-white/60 p-4">
                <p className="t-lead">{m.name}</p>
                <p className="t-body text-muted">{m.role}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
