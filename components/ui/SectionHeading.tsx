import clsx from "clsx";
import type { ReactNode } from "react";

/** The export's two heading blocks: a 600px centred pair, and a left column. */
export function SectionHeading({
  heading,
  sub,
  align = "center",
  tone = "ink",
  className,
  children,
  as: Tag = "h2",
}: {
  heading: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  tone?: "ink" | "white";
  className?: string;
  children?: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center md:max-w-[600px]" : "items-start",
        className,
      )}
    >
      <Tag className={clsx(Tag === "h2" ? "t-h2" : "t-h3", tone === "white" && "text-white")}>
        {heading}
      </Tag>
      {sub && (
        <p className={clsx("t-lead", tone === "white" ? "text-white/80" : "text-muted")}>{sub}</p>
      )}
      {children}
    </div>
  );
}
