import {
  Building2,
  Briefcase,
  ShoppingBag,
  Image as ImageIcon,
  Rocket,
  Layers,
  Gauge,
  ShieldCheck,
  Search,
  Accessibility,
  Cloud,
  BarChart3,
  Check,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { FAQSection } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/pricing/PricingCard";
import { BrowserFrame, PhoneFrame, WebsiteScreen, MobileScreen } from "@/components/mockups/Mockups";
import { webPlans } from "@/data/plans";
import { webFaqs } from "@/data/faqs";

const websiteTypes = [
  { icon: Briefcase, title: "Business websites", text: "Present your services clearly and turn visitors into enquiries." },
  { icon: Building2, title: "Corporate websites", text: "Multi-section sites with investor, careers and news modules." },
  { icon: ShoppingBag, title: "E-commerce", text: "Fast storefronts with secure payments and inventory sync." },
  { icon: ImageIcon, title: "Portfolio", text: "Visual-first sites for creators, studios and professionals." },
  { icon: Rocket, title: "Landing pages", text: "Single-goal pages built for campaigns and conversion." },
  { icon: Layers, title: "Custom platforms", text: "Directories, marketplaces, members-only and content platforms." },
];

const webProcess = [
  { step: "01", title: "Design", description: "Wireframes and high-fidelity UI in your brand language, approved before a line of code is written." },
  { step: "02", title: "Development", description: "Component-based, typed code with a CMS where needed. Weekly staging previews." },
  { step: "03", title: "SEO", description: "Technical SEO, metadata, schema, sitemaps and Search Console — configured, not bolted on." },
  { step: "04", title: "Deployment", description: "Global CDN, HTTPS, analytics and monitoring. Then training and handover." },
];

const features = [
  { icon: Gauge, title: "Performance budgets", text: "Under 1s first paint on 4G, 90+ Lighthouse across every page." },
  { icon: ShieldCheck, title: "Security hardening", text: "HTTPS, security headers, form protection and dependency audits." },
  { icon: Search, title: "Search-ready", text: "Clean semantics, structured data and fast indexing." },
  { icon: Accessibility, title: "Accessible", text: "Keyboard-friendly, screen-reader tested, WCAG-aware." },
  { icon: Cloud, title: "Reliable hosting", text: "Edge delivery, automatic backups and 99.9% uptime." },
  { icon: BarChart3, title: "Measured", text: "GA4 events and dashboards so you know what's working." },
];

export default function WebDevelopment() {
  useSEO(
    "Web Development",
    "Business, corporate, e-commerce and custom websites designed for performance, search and conversion.",
  );

  return (
    <>
      <PageHero
        eyebrow="Solutions · Web Development"
        title={
          <>
            Websites that look premium <span className="text-gradient">and perform like it.</span>
          </>
        }
        description="Fast, search-ready, mobile-first websites — designed around your customers and engineered to convert visitors into enquiries and sales."
        actions={
          <>
            <Button to="/contact?need=website-development" size="lg" arrow>
              Start Your Website
            </Button>
            <Button to="/plans/web" variant="outline" size="lg">
              View Website Plans
            </Button>
          </>
        }
      >
        <Reveal delay={0.25} className="mt-16">
          <BrowserFrame url="yourbusiness.com" className="border-gradient shadow-glow">
            <WebsiteScreen className="min-h-[18rem] sm:min-h-[26rem]" />
          </BrowserFrame>
        </Reveal>
      </PageHero>

      {/* Website types */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Website types"
            title="Whatever you're building, we've built it before."
            description="Each type has its own patterns for structure, content and conversion. We apply them — and then tailor everything to your brand."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {websiteTypes.map((t) => (
              <StaggerItem key={t.title}>
                <div className="group h-full rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric-500/12 text-electric-300 transition-colors group-hover:bg-electric-500/20">
                    <t.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="How we build"
            align="center"
            title="Design → Development → SEO → Deployment"
            description="Four stages, each with a clear deliverable and your sign-off. No surprises at launch."
            className="mb-16"
          />
          <ProcessSteps steps={webProcess} variant="timeline" />
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Performance & security"
                title={
                  <>
                    Fast, secure, <span className="text-gradient">built to last.</span>
                  </>
                }
                description="Speed and security aren't upgrades — they're the baseline. Every site ships with the same engineering standards, regardless of plan."
              />
              <Reveal delay={0.15} className="mt-10 rounded-3xl glass p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-500">Lighthouse</span>
                  <span className="text-xs text-emerald-400">Mobile · 4G</span>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {[
                    { l: "Performance", v: 98 },
                    { l: "Accessibility", v: 100 },
                    { l: "Best practices", v: 100 },
                    { l: "SEO", v: 100 },
                  ].map((m) => (
                    <div key={m.l} className="text-center">
                      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-400/70 font-display text-sm font-semibold text-white">
                        {m.v}
                      </div>
                      <div className="mt-2 text-[10px] leading-tight text-slate-500">{m.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7" stagger={0.06}>
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="flex h-full gap-4 rounded-2xl glass p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-electric-300 shadow-glow">
                      <f.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-white">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Responsive showcase */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/12 blur-[150px]" />
        </div>
        <Container className="relative">
          <SectionHeading
            eyebrow="Responsive by design"
            align="center"
            title="One design. Every device. No compromises."
            description="Designed mobile-first and tested on real phones, tablets and desktops — because 70% of your visitors are on a phone."
          />
          <Reveal className="relative mt-16 flex items-end justify-center gap-6">
            <BrowserFrame url="yourbusiness.com" className="w-full max-w-3xl">
              <WebsiteScreen accent="violet" className="min-h-[16rem] sm:min-h-[24rem]" />
            </BrowserFrame>
            <PhoneFrame className="absolute -bottom-6 right-2 hidden w-40 sm:block md:right-[8%] lg:w-48">
              <MobileScreen />
            </PhoneFrame>
          </Reveal>
        </Container>
      </section>

      {/* Plans preview */}
      <section id="plans" className="border-t border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Website plans"
              title="Transparent pricing. No surprises."
              description="Choose a plan that fits where your business is today. Every plan includes design, development, SEO setup and deployment."
            />
            <Button to="/plans/web" variant="outline" arrow className="shrink-0">
              Compare all plans
            </Button>
          </div>
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {webPlans.map((p) => (
              <StaggerItem key={p.id}>
                <PricingCard plan={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {["Fixed quotes", "You own the code", "Free discovery call", "GST invoices"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-electric-400" /> {t}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <FAQSection items={webFaqs} title="Website questions, answered." />

      <CTASection
        title={
          <>
            Ready for a website that <span className="text-gradient">works as hard as you do?</span>
          </>
        }
        primaryLabel="Start Your Website"
        primaryTo="/contact?need=website-development"
      />
    </>
  );
}
