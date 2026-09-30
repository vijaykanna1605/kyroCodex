import { Check } from "lucide-react";
import { processSteps } from "@/data/solutions";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

type Step = { step: string; title: string; description: string; outputs?: string[] };

export function ProcessSteps({
  steps = processSteps,
  variant = "cards",
  className,
}: {
  steps?: Step[];
  variant?: "cards" | "timeline";
  className?: string;
}) {
  if (variant === "timeline") {
    return (
      <Stagger className={cn("relative grid gap-8 md:grid-cols-4", className)} stagger={0.12}>
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-white/15 to-transparent md:block" />
        {steps.map((s, i) => (
          <StaggerItem key={s.step} className="relative">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 font-display text-sm font-semibold text-electric-300 shadow-glow">
              {s.step}
            </div>
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-12 h-8 w-px bg-white/10 md:hidden" />
            )}
            <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    );
  }

  return (
    <Stagger className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-4", className)} stagger={0.1}>
      {steps.map((s, i) => (
        <StaggerItem key={s.step}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30">
            <div className="pointer-events-none absolute -right-6 -top-8 font-display text-[7rem] font-bold leading-none text-white/[0.035] transition-colors duration-500 group-hover:text-electric-400/10">
              {s.step}
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-electric-500 to-violet-500 font-display text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{s.description}</p>
            {s.outputs && (
              <ul className="mt-6 space-y-2 border-t border-white/8 pt-5">
                {s.outputs.map((o) => (
                  <li key={o} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="h-3.5 w-3.5 text-electric-400" />
                    {o}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ProcessSection({
  eyebrow = "Our process",
  title = "Discover → Design → Develop → Launch",
  description = "A clear, four-stage process that keeps you informed and in control — from the first conversation to launch day and beyond.",
  variant = "cards",
  id = "process",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "cards" | "timeline";
  id?: string;
}) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" className="mb-16" />
        <ProcessSteps variant={variant} />
      </Container>
    </section>
  );
}
