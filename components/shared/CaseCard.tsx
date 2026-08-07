import Link from "next/link";
import type { CaseStudy } from "@/lib/content/caseStudies";

/** The one card the home grid, the index and every "More insights" row share. */
export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="flex flex-col gap-2 rounded-[20px] bg-white/60 p-2 transition-opacity hover:opacity-90"
    >
      <div className="relative aspect-[492/304] overflow-hidden rounded-2xl bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.cover} alt={study.coverAlt} className="size-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.logo} alt={study.name} className="h-[35px] w-auto" />
        </div>
        <span className="absolute bottom-5 right-5 rounded-[49px] bg-black/30 px-2 py-1 t-small text-white">
          {study.year}
        </span>
      </div>
      <div className="flex flex-col justify-center gap-1 p-5">
        <h5 className="t-h5">{study.name}</h5>
        <p className="t-body text-muted">{study.excerpt}</p>
      </div>
    </Link>
  );
}

export function CaseGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid w-full gap-2 rounded-3xl bg-panel p-2 md:grid-cols-2">
      {studies.map((s) => (
        <CaseCard key={s.slug} study={s} />
      ))}
    </div>
  );
}
