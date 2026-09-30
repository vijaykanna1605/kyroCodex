import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FAQSection } from "@/components/ui/FAQ";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { KSymbol } from "@/components/brand/KSymbol";
import { appPlans } from "@/data/plans";
import { pricingFaqs, appFaqs } from "@/data/faqs";
import { whatsappLink } from "@/data/site";

const featureKeys = ["Users", "Authentication", "Dashboard", "Database", "Admin panel", "API", "Notifications", "Reports", "Deployment", "Maintenance"];

const comparisonRows = featureKeys.map((key) => ({
  feature: key,
  values: appPlans.map((p) => p.features.find((f) => f.label === key)?.value ?? false),
}));

const included = [
  "Discovery workshop & scoped plan",
  "UX flows and UI design",
  "Typed, tested, documented code",
  "Staging environment during build",
  "Production deployment & monitoring",
  "Handover, training & source code",
];

export default function ApplicationPlans() {
  useSEO(
    "Application Plans & Pricing",
    "Application development plans — Starter, Business, Professional and Enterprise — covering users, authentication, dashboards, APIs, notifications and deployment.",
  );

  return (
    <>
      <PageHero
        eyebrow="Application plans"
        align="center"
        title={
          <>
            Plans for products at <span className="text-gradient">every stage.</span>
          </>
        }
        description="From a focused MVP to an enterprise platform. Each plan defines users, authentication, dashboards, data, APIs and support — so you know exactly what you're getting."
        glow="violet"
      >
        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          {["Milestone-based quotes", "You own the code & IP", "Sprint demos every 2 weeks", "Post-launch support"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-violet-300" /> {t}
            </span>
          ))}
        </Reveal>
      </PageHero>

      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {appPlans.map((p) => (
              <StaggerItem key={p.id}>
                <PricingCard plan={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6 text-center text-xs text-slate-500">
            Prices are indicative starting points in INR and exclude GST and third-party costs (cloud, SMS, API usage).
          </Reveal>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Included in every plan"
                title="The essentials are never optional."
                description="Regardless of plan, every application gets the same engineering discipline — because cutting corners on foundations costs more later."
              />
            </div>
            <Stagger className="grid gap-3 sm:grid-cols-2 lg:col-span-7" stagger={0.05}>
              {included.map((i) => (
                <StaggerItem key={i} y={12}>
                  <div className="flex items-center gap-3 rounded-2xl glass px-5 py-4 text-sm text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-electric-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {i}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            align="center"
            title="What each plan covers."
            className="mb-14"
          />
          <Reveal>
            <ComparisonTable plans={appPlans.map((p) => p.name)} rows={comparisonRows} />
          </Reveal>
        </Container>
      </section>

      {/* Tell us what you want to build */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 grid-bg mask-radial opacity-60" />
                <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/25 blur-[130px]" />
                <div className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-electric-500/20 blur-[120px]" />
                <KSymbol className="absolute -right-12 -top-16 h-80 w-80 opacity-[0.06]" />
              </div>
              <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">Let's scope it</span>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl text-balance">
                    Tell us what you <span className="text-gradient">want to build.</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    Share your idea in a few sentences. We'll come back within one business day with the right plan, a rough
                    timeline and what to expect on the first call.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:col-span-5">
                  <Button to="/contact?need=application-development" size="lg" arrow>
                    Describe your application
                  </Button>
                  <Button href={whatsappLink("Hi KYROCODEX, I'd like to discuss building an application.")} variant="outline" size="lg" icon={<MessageCircle />}>
                    Chat on WhatsApp
                  </Button>
                  <Link to="/work" className="mt-2 inline-flex items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                    See applications we've built <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <div className="border-t border-white/6 bg-ink-900/40">
        <FAQSection items={[...pricingFaqs.slice(0, 3), ...appFaqs.slice(1, 4)]} title="Common questions." />
      </div>
    </>
  );
}
