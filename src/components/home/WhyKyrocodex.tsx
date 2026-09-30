import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whyPoints } from "@/data/solutions";

export function WhyKyrocodex() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Why Kyrocodex"
                title={
                  <>
                    Built on four <span className="text-gradient">non-negotiables.</span>
                  </>
                }
                description="Every project — no matter the size — is held to the same standards. It's how a small studio delivers work that looks and performs like it came from a much bigger one."
              />
              <Reveal delay={0.2} className="mt-10">
                <Button to="/why-kyrocodex" variant="outline" arrow>
                  Our philosophy
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-white/8">
              {whyPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05} className="group py-10 first:pt-0 last:pb-0">
                  <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
                    <div className="sm:col-span-4">
                      <div className="font-display text-5xl font-semibold tracking-tight text-gradient sm:text-6xl">{p.stat}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{p.statLabel}</div>
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-white">
                        <span className="text-sm font-medium text-slate-600">0{i + 1}</span>
                        {p.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-slate-400">{p.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
