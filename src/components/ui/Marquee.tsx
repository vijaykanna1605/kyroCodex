import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  speed = "normal",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}) {
  const duration = { slow: "70s", normal: "48s", fast: "28s" }[speed];
  return (
    <div className={cn("marquee-track relative overflow-hidden mask-fade-x", className)}>
      <div
        className="marquee-inner flex w-max animate-marquee gap-6"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
