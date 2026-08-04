import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "black" | "yellow" | "outline" | "link";

const shell =
  "relative inline-flex items-center justify-center t-btn transition-opacity hover:opacity-80";

const variants: Record<Variant, string> = {
  black: "gap-3 rounded-[32px] bg-ink py-2 pl-4 pr-2 text-white",
  yellow: "gap-3 rounded-[32px] bg-butter py-2 pl-4 pr-2 text-ink",
  // The outline's rule is an ::after overlay, exactly as Framer draws it.
  outline: "h-11 gap-3 rounded-[32px] px-5 py-3 text-ink ring-ink",
  link: "gap-1 rounded-[32px] py-1 pl-1 pr-2 text-ink",
};

/** The pill's trailing arrow sits in its own inverted disc. */
function ArrowDisc({ variant, flip }: { variant: Variant; flip?: boolean }) {
  return (
    <span
      className={clsx(
        "flex size-7 shrink-0 items-center justify-center rounded-full",
        variant === "black" && "bg-white text-ink",
        variant === "yellow" && "bg-ink text-white",
      )}
      style={flip ? { transform: "rotate(180deg)" } : undefined}
    >
      <Icon name="arrow" size={28} />
    </span>
  );
}

export function Button({
  href,
  variant = "black",
  children,
  className,
  arrow,
  flipArrow,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** `outline` carries no arrow in the export; every other variant does. */
  arrow?: boolean;
  flipArrow?: boolean;
}) {
  const withArrow = arrow ?? variant !== "outline";
  return (
    <Link href={href} className={clsx(shell, variants[variant], className)}>
      {flipArrow && withArrow && <ArrowDisc variant={variant} flip />}
      <span>{children}</span>
      {!flipArrow && withArrow && <ArrowDisc variant={variant} />}
    </Link>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className={clsx(shell, "gap-3 rounded-[40px] bg-butter py-2 pl-4 pr-2 text-ink")}
    >
      <span>{children}</span>
      <ArrowDisc variant="yellow" />
    </button>
  );
}
