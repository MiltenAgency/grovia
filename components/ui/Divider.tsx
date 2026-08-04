import clsx from "clsx";
import { Icon } from "./Icon";

/** A row (or column) of small plus marks the export uses as a section rule. */
export function Divider({
  count,
  gap = 64,
  vertical = false,
  className,
}: {
  count: number;
  gap?: number;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "flex items-center justify-center px-5",
        vertical && "flex-col",
        className,
      )}
      style={{ gap }}
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="block size-4 p-0.5 text-faint">
          <Icon name="plus" size={12} />
        </span>
      ))}
    </div>
  );
}
