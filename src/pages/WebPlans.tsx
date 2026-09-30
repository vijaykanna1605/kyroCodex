import { Check, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProcessSection } from "@/components/ui/ProcessSteps";
import { FAQSection } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { AddOns } from "@/components/pricing/AddOns";
import { webPlans, webComparison } from "@/data/plans";
import { pricingFaqs } from "@/data/faqs";

const assurances = [
  { icon: Wallet, title: "Fixed quotes", text: "The price we agree is the price you pay. Scope changes are quoted before work starts." },
  { icon: ShieldCheck, title: "You own everything", text: "Code, design files, domain, hosting and analytics accounts — all in your name." },
  { icon: Sparkles, title: "Same quality bar", text: "Every plan gets the same design attention, performance targets and security standards." },
];

export default function WebPlans() {
  useSEO(
    "Website Plans & Pricing",
    "Transparent website pricing — Starter, Business, Professional and Custom plans with SEO, analytics, WhatsApp integration and deployment included.",
  );

  return (
    <>
      <PageHero
        eyebrow="Website plans"
        align="center"
        title={
          <>
            Choose the right foundation for <span className="text-gradient">your digital presence.</span>
          </>
        }
        description="Every plan includes custom design, responsive development, SEO setup, analytics and deployment. Pick the scope that matches your business today — you can always grow into the next one."
        glow="blue"
      >
        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          {["No hidden fees", "Free discovery call", "GST invoices", "Milestone payments"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-electric-400" /> {t}
            </span>
          ))}
        </Reveal>
      </PageHero>

      {/* Pricing cards */}
      <section className="pb-24 sm:pb-32">
        <Container size="wide">
          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {webPlans.map((p) => (
              <StaggerItem key={p.id}>
                <PricingCard plan={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6 text-center text-xs text-slate-500">
            Prices are indicative starting points in INR and exclude GST. Final quotes depend on scope and content readiness.
          </Reveal>
        </Container>
      </section>

      {/* Assurances */}
      <section className="border-y border-white/6 bg-ink-900/40 py-16">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.08}>
            {assurances.map((a) => (
              <StaggerItem key={a.title}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-electric-300 shadow-glow">
                    <a.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-white">{a.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{a.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Feature comparison"
            align="center"
            title="Everything, side by side."
            description="A detailed look at what's included in each plan so you can choose with confidence."
            className="mb-14"
          />
          <Reveal>
            <ComparisonTable plans={webPlans.map((p) => p.name)} rows={webComparison} />
          </Reveal>
          <p className="mt-4 text-center text-xs text-slate-500">* Unlimited revisions within the agreed scope and timeline.</p>
        </Container>
      </section>

      {/* Add-ons */}
      <section id="add-ons" className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Add-ons"
              title="Extend any plan."
              description="Mix and match add-ons to fit your exact needs. All add-ons are designed and built to match your site seamlessly."
            />
            <Button to="/contact?plan=Add-ons" variant="outline" arrow className="shrink-0">
              Ask about add-ons
            </Button>
          </div>
          <div className="mt-14">
            <AddOns />
          </div>
        </Container>
      </section>

      <ProcessSection
        title="From first call to launch."
        description="The same four-stage process regardless of plan — you always know what's happening and what comes next."
      />

      <div className="border-t border-white/6 bg-ink-900/40">
        <FAQSection items={pricingFaqs} title="Pricing questions, answered." />
      </div>

      <CTASection
        eyebrow="Still deciding?"
        title={
          <>
            Not sure which plan fits? <span className="text-gradient">We'll help you choose.</span>
          </>
        }
        description="Tell us about your business and goals. We'll recommend the right plan honestly — even if it's the smaller one."
        primaryLabel="Get a recommendation"
        primaryTo="/contact?need=website-development"
      />
    </>
  );
}
