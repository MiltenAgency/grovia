import { successStories } from "@/lib/content/home";
import { caseStudies } from "@/lib/content/caseStudies";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryGallery } from "./StoryGallery";
import { Testimonials } from "./Testimonials";

export function StoriesSection() {
  const shown = successStories.slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <section id="stories" className="flex justify-center">
      <div className="wrap flex flex-col items-center gap-16 py-20 md:gap-10 lg:gap-16">
        <div className="flex w-full flex-col items-center gap-10 md:gap-8 lg:gap-10">
          <SectionHeading heading={successStories.heading} sub={successStories.sub} />
          <StoryGallery stories={shown.map(({ slug, name, excerpt, cover, coverAlt }) => ({ slug, name, excerpt, cover, coverAlt }))} />
          <Button href={successStories.cta.href} variant="outline">
            {successStories.cta.label}
          </Button>
        </div>

        <Divider count={5} gap={48} className="md:hidden" />
        <Divider count={5} className="max-md:hidden" />

        <Testimonials />
      </div>
    </section>
  );
}
