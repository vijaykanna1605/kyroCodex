import { Compass, Eye, Gem, Handshake, Lightbulb, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { KSymbol } from "@/components/brand/KSymbol";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const values = [
  { icon: Gem, title: "Craft", text: "We care about the details other people skip. It shows in everything we ship." },
  { icon: Handshake, title: "Honesty", text: "Straight answers on scope, cost and what will actually move the needle." },
  { icon: Zap, title: "Momentum", text: "Progress you can see every week. Decisions made quickly, communicated clearly." },
  { icon: Lightbulb, title: "Curiosity", text: "We learn your industry, question assumptions and keep improving how we work." },
];

const journey = [
  { year: "2022", title: "The first line", text: "KYROCODEX starts as a two-person studio building websites for local businesses — with a rule: never ship something we wouldn't be proud to put our name on." },
  { year: "2023", title: "From sites to systems", text: "Clients ask for more than websites. We ship our first customer portal and operations dashboard, and application development becomes half of what we do." },
  { year: "2024", title: "Mobile & scale", text: "First cross-platform mobile apps launch on iOS and Android. We formalise our process, design system and security practices." },
  { year: "2025", title: "Products with impact", text: "Forty-plus products shipped across a dozen industries. Most clients from year one are still with us — which is the metric we care about most." },
  { year: "Today", title: "Ideas → Products → Impact", text: "A focused team of designers and engineers, working with startups and established businesses to turn ideas into products that matter." },
];

const team = [
  { name: "Founder & Lead Engineer", role: "Architecture, backend, delivery", initials: "KX" },
  { name: "Co-founder & Design Lead", role: "UX research, UI, brand", initials: "KD" },
  { name: "Senior Frontend Engineer", role: "React, performance, accessibility", initials: "FE" },
  { name: "Mobile Engineer", role: "React Native, Flutter, app store launches", initials: "ME" },
];

const philosophy = [
  { title: "Small team, senior people", text: "You work directly with the people building your product — no account managers in between." },
  { title: "Clear communication", text: "Weekly written updates, a shared board and a staging link you can open at any time." },
  { title: "Fixed scope, fixed price", text: "We scope carefully so we can quote confidently. Changes are agreed before they're built." },
  { title: "Long-term thinking", text: "We make decisions as if we'll maintain this product for five years — because we usually do." },
];

export default function About() {
  useSEO("About", "KYROCODEX is a digital product studio. Our vision, mission, values, journey and the people behind the work.");

  return (
    <>
      <PageHero
        eyebrow="About KYROCODEX"
        title={
          <>
            A studio built to turn ideas into <span className="text-gradient">products that matter.</span>
          </>
        }
        description="KYROCODEX is a digital product studio. We design and engineer websites, applications and software for businesses that want to look established, move fast and build on solid foundations."
        actions={
          <>
            <Button to="/contact" size="lg" arrow>
              Work with us
            </Button>
            <Button to="/work" variant="outline" size="lg">
              See our work
            </Button>
          </>
        }
      >
        {/* Brand block */}
        <Reveal delay={0.25} className="mt-16">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900 p-8 sm:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 grid-bg mask-radial opacity-50" />
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-electric-500/25 blur-[120px]" />
              <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
            </div>
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <KSymbol filled className="h-32 w-32 drop-shadow-[0_0_40px_rgba(79,133,255,0.4)] sm:h-44 sm:w-44" />
              </div>
              <div className="lg:col-span-8">
                <div className="font-display text-4xl font-bold tracking-[0.14em] text-white sm:text-6xl">
                  KYRO<span className="text-gradient">CODEX</span>
                </div>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                  <span className="text-white">Kyro</span> — from the Greek <em>kyrios</em>, meaning authority and mastery.{" "}
                  <span className="text-white">Codex</span> — a body of knowledge, carefully written. Together: a studio
                  that treats code as craft, and every product as something worth getting right.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </PageHero>

      {/* Vision & Mission */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-electric-500/20 blur-3xl" />
                <Eye className="h-7 w-7 text-electric-300" strokeWidth={1.4} />
                <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Vision</div>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl text-balance">
                  A world where every good idea has access to great engineering.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-400">
                  Premium digital products shouldn't be reserved for companies with enormous budgets. We exist to bring
                  that level of craft to businesses of every size.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
                <Compass className="h-7 w-7 text-violet-300" strokeWidth={1.4} />
                <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Mission</div>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl text-balance">
                  Turn ideas into products that create measurable impact.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-400">
                  Through honest advice, thoughtful design and engineering we're proud of — delivered with the
                  communication and care that makes working with us easy.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Values" title="What we hold ourselves to." align="center" className="mb-14" />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl glass p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-electric-300 shadow-glow">
                    <v.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* What we build */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="What we build"
                title="Websites. Applications. Systems."
                description="Seven capabilities, combined however your problem needs them."
              />
              <Reveal delay={0.15} className="mt-8">
                <Button to="/solutions" variant="outline" arrow>
                  Explore solutions
                </Button>
              </Reveal>
            </div>
            <Stagger className="grid gap-3 sm:grid-cols-2 lg:col-span-8" stagger={0.05}>
              {solutions.map((s) => (
                <StaggerItem key={s.slug} y={12}>
                  <div className="flex items-center gap-4 rounded-2xl glass px-5 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-500/12 text-electric-300">
                      <s.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="font-display text-sm font-semibold text-white sm:text-base">{s.title}</div>
                      <div className="text-xs text-slate-500">{s.capabilities.slice(0, 2).join(" · ")}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Journey */}
      <section className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Our journey" title="From two people and a rule, to a studio." className="mb-16" />
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-linear-to-b from-electric-400 via-white/15 to-transparent lg:left-1/2" />
            <div className="space-y-12">
              {journey.map((j, i) => (
                <Reveal key={j.year} delay={i * 0.05}>
                  <div className={cn("relative grid gap-4 pl-10 lg:grid-cols-2 lg:gap-16 lg:pl-0")}>
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-electric-400 bg-ink-950 shadow-[0_0_16px_rgba(79,133,255,0.9)] lg:left-1/2 lg:-translate-x-1/2" />
                    <div className={cn(i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16")}>
                      <div className="font-display text-4xl font-semibold tracking-tight text-gradient">{j.year}</div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">{j.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{j.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="Small team. Senior people. Direct access."
            description="No layers between you and the people doing the work. You'll know everyone on your project by name."
            align="center"
            className="mb-14"
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {team.map((t) => (
              <StaggerItem key={t.name}>
                <div className="group overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30">
                  <div className="relative flex aspect-square items-center justify-center bg-linear-to-br from-ink-800 to-ink-900">
                    <div className="absolute inset-0 grid-bg opacity-30 mask-radial" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-electric-500/30 to-violet-500/30 font-display text-2xl font-semibold text-white">
                      {t.initials}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-base font-semibold text-white">{t.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-t border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Working philosophy"
                title={
                  <>
                    How it feels to <span className="text-gradient">work with us.</span>
                  </>
                }
                description="Most of our clients came from a frustrating experience elsewhere. We designed how we work to be the opposite of that."
              />
            </div>
            <div className="divide-y divide-white/8 lg:col-span-7">
              {philosophy.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="flex gap-6 py-7 first:pt-0 last:pb-0">
                    <span className="font-display text-sm text-slate-600">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-400">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Join our client list"
        title={
          <>
            Let's make your idea <span className="text-gradient">our next case study.</span>
          </>
        }
      />
    </>
  );
}
