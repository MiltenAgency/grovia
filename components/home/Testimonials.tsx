import clsx from "clsx";
import { testimonials } from "@/lib/content/home";
import { Icon } from "@/components/ui/Icon";

/**
 * Three quotes. Above 1200 they are stepped 0 / 40 / 80px down the column —
 * a static offset in the export, not a scroll effect. The portrait is a square
 * sized as 40% of the card's content width, which is what sets the row height.
 */
function Card({
  item,
  className,
  avatarClassName = "w-[40%]",
}: {
  item: (typeof testimonials)[number];
  className?: string;
  avatarClassName?: string;
}) {
  return (
    <figure
      className={clsx("flex flex-col justify-between rounded-3xl bg-white/40 p-8", className)}
    >
      <div className="flex items-start gap-4">
        <span className="block shrink-0 p-1 text-rule">
          <Icon name="quotes" size={40} />
        </span>
        <blockquote className="t-lead text-muted">{item.quote}</blockquote>
      </div>
      <figcaption className="flex w-full items-end justify-between">
        <div className="flex flex-col gap-1 pr-5">
          <span className="t-body">{item.name}</span>
          <span className="t-body text-muted">{item.role}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.avatar}
          alt=""
          className={clsx("aspect-square shrink-0 rounded-2xl object-cover", avatarClassName)}
        />
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <div className="grid w-full gap-2 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
      <Card item={testimonials[0]} className="h-[409px] md:h-[400px] lg:h-[409px]" />
      <Card item={testimonials[1]} className="h-[409px] md:h-[400px] lg:mt-10 lg:h-[409px]" />
      <Card
        item={testimonials[2]}
        className="h-[409px] md:col-span-2 md:h-[300px] lg:col-span-1 lg:mt-20 lg:h-[409px]"
        avatarClassName="w-[40%] md:w-[140px] lg:w-[40%]"
      />
    </div>
  );
}
