import Link from "next/link";
import clsx from "clsx";
import { backLink, relatedIntro, type CaseStudy } from "@/lib/content/caseStudies";
import { Divider } from "@/components/ui/Divider";
import { Icon } from "@/components/ui/Icon";
import { CaseGrid } from "@/components/shared/CaseCard";
import { Reveal } from "@/components/motions/Reveal";

/**
 * One case study: back link, a hero card, the numbered content blocks and the
 * "More insights" pair. Note there is no closing CTA band on these routes —
 * the export leaves it off every case-study page.
 */
export function CaseStudyArticle({
  study,
  related,
}: {
  study: CaseStudy;
  related: CaseStudy[];
}) {
  return (
    <div className="flex justify-center pt-10">
      <div className="wrap flex flex-col items-center gap-16 py-20">
        <article className="flex w-full flex-col">
          <div className="flex h-11 items-center">
            <Link
              href={backLink.href}
              className="inline-flex h-11 items-center gap-1 rounded-[32px] py-1 pl-1 pr-2 t-btn transition-opacity hover:opacity-70"
            >
              <span className="flex size-7 items-center justify-center rounded-full">
                <Icon name="arrow" size={28} style={{ transform: "rotate(180deg)" }} />
              </span>
              <span>{backLink.label}</span>
            </Link>
          </div>

          <Reveal as="header" className="flex flex-col gap-2 rounded-3xl bg-panel p-2">
            <div className="relative aspect-[326/250] w-full overflow-hidden rounded-[20px] md:aspect-[666/350] lg:aspect-[1024/450]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.cover}
                alt={study.coverAlt}
                className="size-full object-cover"
              />
              <span className="absolute bottom-6 right-6 rounded-[20px] bg-black/30 px-2 py-1 t-small text-white">
                {study.year}
              </span>
            </div>

            <div className="flex flex-col gap-6 rounded-[20px] bg-white/60 p-6 md:flex-row md:items-center md:justify-between md:gap-0 md:p-8">
              <div className="flex flex-col items-start gap-4 md:w-[68%]">
                <h1 className="t-h2">
                  <span>{study.name}</span>
                </h1>
                <p className="t-lead text-muted">{study.excerpt}</p>
              </div>

              <Divider count={3} gap={40} className="md:hidden" />
              <Divider count={3} gap={32} vertical className="max-md:hidden md:px-0" />

              <div className="flex w-[115px] shrink-0 flex-col gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.author.avatar}
                  alt=""
                  className="size-14 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <p className="t-body">{study.author.name}</p>
                  <p className="t-body text-muted">{study.author.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {study.blocks.map((block) => (
            <section
              key={block.heading}
              className="mx-auto flex w-full flex-col items-center justify-center gap-6 px-0 py-10 md:gap-10 md:px-16 lg:max-w-[1000px] lg:px-20"
            >
              <div className="flex w-full flex-col">
                <h5 className="t-h5">{block.heading}</h5>
                <p className="t-body pt-5 text-muted">{block.body}</p>
                {block.bullets && (
                  <ul className="list-disc pt-0 t-body text-muted">
                    {block.bullets.map((b, i) => (
                      <li key={b} className="pl-[22px]">
                        {b}
                        {i === block.bullets!.length - 1 && block.bulletTail && (
                          <>
                            <br />
                            {block.bulletTail}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {block.images.length > 0 && (
                <div className="flex w-full flex-col justify-center gap-3 lg:flex-row">
                  {block.images.map((src) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className={clsx(
                        "w-full rounded-[20px] object-cover md:rounded-3xl",
                        block.images.length > 1 && "lg:w-auto lg:min-w-0 lg:flex-1",
                        // Pairs go side by side only above 1200; below that they
                        // stack and take the single image's proportions.
                        block.images.length > 1
                          ? "aspect-[840/500] lg:aspect-[414/300]"
                          : "aspect-[840/500]",
                      )}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center md:max-w-[600px]">
            <h3 className="t-h3">{relatedIntro.heading}</h3>
            <p className="t-body text-muted">{relatedIntro.sub}</p>
          </div>
          <CaseGrid studies={related} />
        </div>
      </div>
    </div>
  );
}
