import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { homeSolutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

export function SolutionsGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our solutions"
            title={
              <>
                Everything you need to <span className="text-gradient">go digital</span> — done properly.
              </>
            }
            description="From a single landing page to a multi-tenant SaaS platform, we cover design, engineering and everything in between."
          />
          <Button to="/solutions" variant="outline" arrow className="shrink-0">
            View all solutions
          </Button>
        </div>

        <Stagger className="mt-16 grid gap-4 md:grid-cols-2" stagger={0.1}>
          {homeSolutions.map((s, i) => (
            <StaggerItem key={s.title}>
              <Link
                to={s.href}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30 sm:p-10",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                    i % 2 === 0 ? "bg-electric-500/20" : "bg-violet-500/20",
                  )}
                />
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 text-electric-300 shadow-glow">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-electric-400/60 group-hover:bg-electric-500/15 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">{s.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {s.points.map((p) => (
                    <span key={p} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
