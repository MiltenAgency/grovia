import clsx from "clsx";
import { socialProof } from "@/lib/content/site";

/** Four overlapping avatars and the two rating lines, reused in five places. */
export function Rating({ tone = "ink" }: { tone?: "ink" | "white" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex" aria-hidden="true">
        {socialProof.avatars.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
            style={{ marginLeft: i === 0 ? 0 : -6 }}
          />
        ))}
      </div>
      <div
        className={clsx(
          "flex flex-col justify-center t-small",
          tone === "white" ? "text-white" : "text-ink",
        )}
      >
        <span>{socialProof.rating}</span>
        <span>{socialProof.customers}</span>
      </div>
    </div>
  );
}
