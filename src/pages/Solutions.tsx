import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProcessSection } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: "from-electric-500/25 text-electric-300",
  violet: "from-violet-500/25 text-violet-300",
  cyan: "from-cyan-500/25 text-cyan-300",
  indigo: "from-indigo-500/25 text-indigo-300",
};

export default function Solutions() {
  useSEO(
    "Solutions",
    "Websites, web & mobile applications, UI/UX design, custom software, business automation and ongoing support — digital solutions built around your business.",
  );

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Digital solutions built <span className="text-gradient">around your business.</span>
          </>
        }
        description="Not a menu of services — a set of capabilities we combine to solve the actual problem in front of you. Pick a starting point below, or tell us what you're trying to achieve."
        actions={
          <>
            <Button to="/contact" size="lg" arrow>
              Start Your Project
            </Button>
            <Button to="/plans/web" variant="outline" size="lg">
              See plans & pricing
            </Button>
          </>
        }
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" stagger={0.07}>
            {solutions.map((s, i) => (
              <StaggerItem key={s.slug} className={cn(i === 0 && "xl:col-span-2")}>
                <article
                  id={s.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30 sm:p-8"
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-linear-to-br to-transparent blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-100",
                      accentMap[s.accent].split(" ")[0],
                    )}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 shadow-glow", accentMap[s.accent].split(" ")[1])}>
                      <s.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-slate-600">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-7 font-display text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{s.description}</p>
                  <ul className={cn("relative mt-6 grid gap-2.5", i === 0 ? "sm:grid-cols-2" : "")}>
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className="h-3.5 w-3.5 shrink-0 text-electric-400" /> {c}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto pt-8">
                    <Link
                      to={s.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-electric-300"
                    >
                      Explore Solution
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <div className="border-t border-white/6 bg-ink-900/40">
        <ProcessSection
          title="One process. Every solution."
          description="Whichever solution you start with, the journey is the same — clear discovery, approved designs, transparent development and a launch we stand behind."
        />
      </div>

      <CTASection
        eyebrow="Not sure where to start?"
        title={
          <>
            Tell us the problem. <span className="text-gradient">We'll recommend the solution.</span>
          </>
        }
        description="A 30-minute discovery call is free, and you'll leave with clear direction — even if you don't work with us."
        primaryLabel="Book a discovery call"
      />
    </>
  );
}
