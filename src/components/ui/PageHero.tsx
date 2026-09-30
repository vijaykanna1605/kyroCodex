import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  glow?: "blue" | "violet" | "mixed";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
  align = "left",
  size = "lg",
  className,
  glow = "mixed",
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-70" />
        {(glow === "blue" || glow === "mixed") && (
          <div className="absolute -top-32 left-[10%] h-[28rem] w-[28rem] rounded-full bg-electric-500/20 blur-[130px]" />
        )}
        {(glow === "violet" || glow === "mixed") && (
          <div className="absolute -top-20 right-[5%] h-[24rem] w-[24rem] rounded-full bg-violet-500/15 blur-[120px]" />
        )}
      </div>

      <Container className="relative">
        <div className={cn("flex flex-col gap-6", align === "center" ? "items-center text-center" : "items-start")}>
          {eyebrow && (
            <Reveal y={12}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1
              className={cn(
                "font-display font-semibold tracking-[-0.035em] text-white text-balance leading-[1.02]",
                size === "lg" ? "max-w-5xl text-5xl sm:text-6xl lg:text-7xl" : "max-w-4xl text-4xl sm:text-5xl lg:text-6xl",
              )}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p className={cn("max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl text-pretty", align === "center" && "mx-auto")}>
                {description}
              </p>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={0.2}>
              <div className={cn("mt-2 flex flex-col gap-3 sm:flex-row", align === "center" && "justify-center")}>{actions}</div>
            </Reveal>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
