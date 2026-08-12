/**
 * The 1024px-tall band the export paints behind the top of every page: a tiled
 * noise bitmap in `overlay` blend, plus two clipped runs of 70px vertical
 * gradient bars that fade toward the middle of the viewport.
 */
const BARS = 8;

function StripeGroup({ side }: { side: "left" | "right" }) {
  return (
    <div
      className="relative h-full w-[35%] overflow-hidden"
      style={{
        WebkitMaskImage: `linear-gradient(${side === "left" ? 270 : 90}deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)`,
        maskImage: `linear-gradient(${side === "left" ? 270 : 90}deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)`,
      }}
    >
      <div
        className={`flex h-full ${side === "left" ? "justify-start" : "justify-end"}`}
      >
        {Array.from({ length: BARS }, (_, i) => (
          <div
            key={i}
            className="h-full w-[70px] shrink-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[1024px] bg-paper"
    >
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
          maskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/img/d12d41139a659fca.webp)",
            backgroundSize: "128px",
          }}
        />
      </div>
      <div
        className="relative flex h-full items-center justify-between"
        style={{
          WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
          maskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
        }}
      >
        <StripeGroup side="left" />
        <StripeGroup side="right" />
      </div>
    </div>
  );
}
