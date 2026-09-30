import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Heart, Layers, Lock, Repeat, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { KStroke } from "@/components/brand/KSymbol";
import { cn } from "@/lib/utils";

const beliefs = [
  "Design is how it works, not how it looks.",
  "Fast is a feature. Slow is a bug.",
  "Ship what's needed — not what's billable.",
  "Every line of code is a promise.",
];

const chapters = [
  {
    id: "approach",
    number: "01",
    eyebrow: "Our approach",
    icon: Target,
    title: "Start with the problem. Not the technology.",
    text: "We spend the first conversations understanding your business, your customers and what success actually looks like. Only then do we talk about screens and stacks.",
    points: ["Business goals first", "Users, not personas", "Scope that fits the budget"],
  },
  {
    id: "quality",
    number: "02",
    eyebrow: "Quality standards",
    icon: Sparkles,
    title: "Premium is in the details nobody notices — until they're missing.",
    text: "Consistent spacing. Typed code. Reviewed pull requests. Real-device testing. Copy that reads well. These aren't extras; they're how we work by default.",
    points: ["Design system on every project", "Peer-reviewed code", "QA on real devices"],
  },
  {
    id: "technology",
    number: "03",
    eyebrow: "Technology philosophy",
    icon: Layers,
    title: "Boring where it should be. Modern where it matters.",
    text: "Proven, well-supported technology for foundations. Modern tooling where it delivers a real advantage in speed, experience or cost. Never a framework for its own sake.",
    points: ["React · TypeScript · Node · Rails", "PostgreSQL by default", "Open standards, no lock-in"],
  },
  {
    id: "security",
    number: "04",
    eyebrow: "Security & scalability",
    icon: Lock,
    title: "Built to be trusted at 10 users. Ready for 10,000.",
    text: "Secure authentication, encrypted data, least-privilege access and audited dependencies from day one. Architecture that scales horizontally when growth arrives.",
    points: ["OWASP-aligned practices", "Encrypted at rest & in transit", "Horizontally scalable infrastructure"],
  },
  {
    id: "client",
    number: "05",
    eyebrow: "Client-first approach",
    icon: Heart,
    title: "Honest advice — even when it costs us the bigger project.",
    text: "One dedicated lead. Weekly updates in plain language. Transparent pricing. And recommendations based on what you need, not what earns us more.",
    points: ["Single point of contact", "Weekly progress updates", "Fixed, transparent quotes"],
  },
  {
    id: "delivery",
    number: "06",
    eyebrow: "Delivery methodology",
    icon: Repeat,
    title: "Working software every two weeks. No big reveal.",
    text: "Short sprints, a shared board and a live staging environment. You see progress as it happens, give feedback early and never wonder what's going on.",
    points: ["Two-week sprints", "Live staging previews", "Shared project board"],
  },
  {
    id: "support",
    number: "07",
    eyebrow: "Long-term support",
    icon: ShieldCheck,
    title: "Launch is the start of the relationship, not the end.",
    text: "Monitoring, updates, security patches and new features — with a team that already knows your product inside out. Most of our clients are still with us years later.",
    points: ["Proactive monitoring", "Security & dependency updates", "Feature roadmap support"],
  },
];

function Chapter({ chapter, index }: { chapter: (typeof chapters)[number]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <section id={chapter.id} className="relative py-20 sm:py-28">
      <Container>
        <div className={cn("grid items-center gap-12 lg:grid-cols-12 lg:gap-20")}>
          <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-medium text-slate-600">{chapter.number}</span>
                <span className="h-px w-10 bg-white/15" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">{chapter.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white text-balance sm:text-5xl lg:text-6xl">
                {chapter.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{chapter.text}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className={cn("lg:col-span-5", flip && "lg:order-1")} x={flip ? -24 : 24} y={0}>
            <div className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-10">
              <div
                className={cn(
                  "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl",
                  index % 2 === 0 ? "bg-electric-500/25" : "bg-violet-500/25",
                )}
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-electric-300 shadow-glow">
                <chapter.icon className="h-6 w-6" strokeWidth={1.4} />
              </span>
              <ul className="relative mt-8 space-y-4">
                {chapter.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-display text-base font-medium text-white sm:text-lg">
                    <Check className="h-4 w-4 shrink-0 text-electric-400" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function WhyKyrocodex() {
  useSEO(
    "Why Kyrocodex",
    "More than just code. Our beliefs, approach, quality standards, technology philosophy and the way we work with clients.",
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const kY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const kScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
          <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/15 blur-[180px]" />
          <motion.div style={{ y: kY, scale: kScale }} className="absolute right-[-10%] top-1/2 -translate-y-1/2 lg:right-[5%]">
            <KStroke className="h-[28rem] w-[28rem] opacity-[0.12] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem]" />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink-950 to-transparent" />
        </div>
        <Container className="relative">
          <motion.div style={{ opacity: textOpacity }}>
            <Reveal y={12}>
              <Eyebrow>Why Kyrocodex</Eyebrow>
            </Reveal>
            <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-8xl lg:text-[9.5rem]">
              {["More than", "just code."].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className={cn("block", i === 1 && "text-gradient")}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-xl text-xl leading-relaxed text-slate-400"
            >
              Anyone can write code. We build products people trust — with the standards, honesty and care that make
              the difference between something that launches and something that lasts.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Beliefs */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">What we believe</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>
          <Stagger className="mt-12 divide-y divide-white/8" stagger={0.12}>
            {beliefs.map((b, i) => (
              <StaggerItem key={b}>
                <div className="group flex items-baseline gap-6 py-8 sm:gap-10 sm:py-10">
                  <span className="font-display text-sm text-slate-600 sm:text-base">0{i + 1}</span>
                  <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-300 transition-colors duration-500 group-hover:text-white sm:text-5xl lg:text-6xl text-balance">
                    {b}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Chapters */}
      <div className="divide-y divide-white/6">
        {chapters.map((c, i) => (
          <Chapter key={c.id} chapter={c} index={i} />
        ))}
      </div>

      {/* Big statement */}
      <section className="relative overflow-hidden py-32 sm:py-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[160px]" />
        </div>
        <Container className="relative text-center">
          <Reveal>
            <Users className="mx-auto h-8 w-8 text-electric-300" strokeWidth={1.4} />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-8 max-w-4xl font-display text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl text-balance">
              "We measure success by what your product does for your business —{" "}
              <span className="text-gradient">not by how many features we shipped.</span>"
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-slate-500">The KYROCODEX team</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <Button to="/about" variant="outline" arrow>
              Meet the studio
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Work with us"
        title={
          <>
            Let's build something <span className="text-gradient">worth building.</span>
          </>
        }
      />
    </>
  );
}
