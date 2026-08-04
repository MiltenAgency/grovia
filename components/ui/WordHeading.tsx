import clsx from "clsx";
import { Fragment } from "react";

/**
 * The export splits these headings into one span per word so each can animate
 * on its own. The spans are inline-block, which is also what stops
 * "fast-growing" from breaking at its hyphen — reproduce both.
 */
export function WordHeading({ words, className }: { words: string[]; className?: string }) {
  return (
    <h1 className={clsx("t-h1", className)}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="inline-block">{w}</span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
