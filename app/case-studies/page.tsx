import { caseStudies, caseStudiesIndex } from "@/lib/content/caseStudies";
import { PageBackdrop } from "@/components/site/PageBackdrop";
import { CaseGrid } from "@/components/shared/CaseCard";
import { WordHeading } from "@/components/ui/WordHeading";

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <PageBackdrop />
      <div className="relative flex justify-center pt-20">
        <div className="wrap flex flex-col items-center gap-16 pb-20 pt-10 md:pt-20">
          <header className="flex flex-col items-center gap-8 text-center md:max-w-[686px]">
            <WordHeading words={caseStudiesIndex.headingWords} />
            <p className="t-lead text-muted md:max-w-[600px]">{caseStudiesIndex.sub}</p>
          </header>

          <CaseGrid studies={caseStudies} />
        </div>
      </div>
    </div>
  );
}
