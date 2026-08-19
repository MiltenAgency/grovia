import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bySlug, caseStudies } from "@/lib/content/caseStudies";
import { PageBackdrop } from "@/components/site/PageBackdrop";
import { CaseStudyArticle } from "@/components/caseStudy/CaseStudyArticle";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = bySlug(params.slug);
  return { title: study?.name ?? "Case study" };
}

export default function CaseStudyPage({ params }: Params) {
  const study = bySlug(params.slug);
  if (!study) notFound();

  const related = study.related
    .map((slug) => bySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="relative">
      <PageBackdrop />
      <div className="relative">
        <CaseStudyArticle study={study} related={related} />
      </div>
    </div>
  );
}
