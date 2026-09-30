import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-electric-300",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-electric-400 to-violet-400 shadow-[0_0_10px_rgba(79,133,255,0.9)]" />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  size?: "md" | "lg" | "xl";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  size = "lg",
  children,
}: SectionHeadingProps) {
  const sizeClasses = {
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl lg:text-[3.4rem]",
    xl: "text-5xl sm:text-6xl lg:text-7xl",
  }[size];

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal y={16}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display font-semibold tracking-[-0.03em] text-white text-balance leading-[1.05]",
            sizeClasses,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400 text-pretty",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
