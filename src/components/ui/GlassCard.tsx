import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  glow?: boolean;
};

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export function GlassCard({ children, className, hover = true, padding = "md", glow = false, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl glass shadow-card transition-all duration-500",
        hover && "hover:border-white/15 hover:bg-white/[0.055] hover:-translate-y-1",
        paddings[padding],
        className,
      )}
      {...rest}
    >
      {glow && (
        <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-electric-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
