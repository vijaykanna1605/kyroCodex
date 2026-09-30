import {
  Globe,
  Smartphone,
  Briefcase,
  Users,
  LayoutDashboard,
  Cloud,
  KeyRound,
  ShieldCheck,
  Fingerprint,
  Lock,
  Plug,
  Webhook,
  CreditCard,
  MessageSquare,
  Database,
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
import { BrowserFrame, DashboardScreen, PhoneFrame, MobileScreen } from "@/components/mockups/Mockups";
import { appPlans } from "@/data/plans";
import { appFaqs } from "@/data/faqs";

const appTypes = [
  { icon: Globe, title: "Web applications", text: "Browser-based products with real business logic, accessible anywhere." },
  { icon: Smartphone, title: "Mobile applications", text: "iOS and Android apps with native feel, offline support and push." },
  { icon: Briefcase, title: "Business applications", text: "Internal tools that replace spreadsheets and manual processes." },
  { icon: Users, title: "Customer portals", text: "Self-service accounts, orders, documents and support in one place." },
  { icon: LayoutDashboard, title: "Admin dashboards", text: "Role-based control panels with reporting and audit trails." },
  { icon: Cloud, title: "SaaS products", text: "Multi-tenant platforms with billing, onboarding and analytics." },
];

const security = [
  { icon: KeyRound, title: "Authentication", text: "Email/OTP, social login, SSO and 2FA — with secure session handling." },
  { icon: Fingerprint, title: "Role-based access", text: "Granular permissions so every user sees exactly what they should." },
  { icon: Lock, title: "Data protection", text: "Encryption in transit and at rest, hashed credentials, secure backups." },
  { icon: ShieldCheck, title: "Hardened by default", text: "Rate limiting, input validation, dependency scanning and audit logs." },
];

const integrations = [
  { icon: Plug, title: "REST & GraphQL APIs", text: "Clean, documented APIs for web, mobile and partners." },
  { icon: Webhook, title: "Webhooks & events", text: "Real-time sync with the tools you already run." },
  { icon: CreditCard, title: "Payments", text: "Razorpay, Stripe, PayPal, UPI and subscription billing." },
  { icon: MessageSquare, title: "Messaging", text: "WhatsApp Business API, SMS, email and push notifications." },
  { icon: Database, title: "Data & reporting", text: "PostgreSQL, caching, exports and BI-ready data models." },
];

const appProcess = [
  {
    step: "01",
    title: "Discovery & scoping",
    description: "User roles, workflows, data model and integrations mapped. You get a scoped plan with milestones and a fixed quote.",
    outputs: ["User stories", "Data model", "Architecture plan"],
  },
  {
    step: "02",
    title: "UX & UI design",
    description: "Flows and screens designed for the people who'll actually use them — then prototyped and tested before build.",
    outputs: ["User flows", "Clickable prototype", "Design system"],
  },
  {
    step: "03",
    title: "Agile development",
    description: "Two-week sprints with a live staging environment. You see working features every fortnight, not a big reveal at the end.",
    outputs: ["Sprint demos", "Automated tests", "Staging access"],
  },
  {
    step: "04",
    title: "Launch & scale",
    description: "CI/CD, monitoring, backups and documentation. Then ongoing support, new features and performance tuning.",
    outputs: ["Production deploy", "Monitoring", "Support plan"],
  },
];

export default function ApplicationDevelopment() {
  useSEO(
    "Application Development",
    "Web, mobile and business applications with secure authentication, dashboards, APIs and integrations — built to scale.",
  );

  return (
    <>
      <PageHero
        eyebrow="Solutions · Application Development"
        title={
          <>
            Applications that run <span className="text-gradient">your business.</span>
          </>
        }
        description="Web apps, mobile apps, portals, dashboards and SaaS products — engineered with secure authentication, clean APIs and architecture that scales with you."
        actions={
          <>
            <Button to="/contact?need=application-development" size="lg" arrow>
              Start Your Application
            </Button>
            <Button to="/plans/application" variant="outline" size="lg">
              View Application Plans
            </Button>
          </>
        }
      >
        <Reveal delay={0.25} className="relative mt-16">
          <BrowserFrame url="app.yourbusiness.com" className="border-gradient shadow-glow">
            <DashboardScreen className="min-h-[18rem] sm:min-h-[26rem]" />
          </BrowserFrame>
          <PhoneFrame className="absolute -bottom-10 -right-2 hidden w-40 sm:block lg:right-8 lg:w-48">
            <MobileScreen />
          </PhoneFrame>
        </Reveal>
      </PageHero>

      {/* App types */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="From internal tools to products with thousands of users."
            description="Different application types call for different architecture. We've shipped all of these — and know where the hard parts are."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {appTypes.map((t) => (
              <StaggerItem key={t.title}>
                <div className="group h-full rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-300 transition-colors group-hover:bg-violet-500/20">
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

      {/* Security */}
      <section className="border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Authentication & security"
                title={
                  <>
                    Security isn't a feature. <span className="text-gradient">It's the foundation.</span>
                  </>
                }
                description="Every application we build starts with a secure authentication layer and follows OWASP-aligned practices — so you never have to retrofit trust."
              />
              <Reveal delay={0.15} className="mt-10 rounded-3xl glass p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-slate-500">Auth methods supported</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Email + password", "OTP (SMS / WhatsApp)", "Google", "Apple", "Microsoft", "SSO / SAML", "2FA / TOTP", "Magic link"].map(
                    (m) => (
                      <span key={m} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                        {m}
                      </span>
                    ),
                  )}
                </div>
              </Reveal>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7" stagger={0.07}>
              {security.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="h-full rounded-3xl glass p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-electric-300 shadow-glow">
                      <s.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                    </span>
                    <h4 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="API & integrations"
            align="center"
            title="Connected to everything you already use."
            description="If it has an API, we can integrate it. Payments, messaging, accounting, CRM, logistics — your application becomes the hub."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
            {integrations.map((it) => (
              <StaggerItem key={it.title}>
                <div className="h-full rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-electric-500/12 text-electric-300">
                    <it.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h4 className="mt-5 font-display text-base font-semibold text-white">{it.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{it.text}</p>
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
            eyebrow="Development process"
            align="center"
            title="Working software every two weeks."
            description="An agile process that keeps you close to the build — with demos, a shared board and a staging environment you can open anytime."
            className="mb-16"
          />
          <ProcessSteps steps={appProcess} />
        </Container>
      </section>

      {/* Plans */}
      <section id="plans" className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Application plans"
              title="Start focused. Scale when you're ready."
              description="Indicative starting points for typical scopes. After discovery you get a fixed quote with milestones."
            />
            <Button to="/plans/application" variant="outline" arrow className="shrink-0">
              Compare application plans
            </Button>
          </div>
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {appPlans.map((p) => (
              <StaggerItem key={p.id}>
                <PricingCard plan={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {["Fixed milestone quotes", "You own the code & IP", "Staging access", "Documentation included"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-electric-400" /> {t}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <div className="border-t border-white/6 bg-ink-900/40">
        <FAQSection items={appFaqs} title="Application questions, answered." />
      </div>

      <CTASection
        title={
          <>
            Have a product in mind? <span className="text-gradient">Let's scope it together.</span>
          </>
        }
        primaryLabel="Start Your Application"
        primaryTo="/contact?need=application-development"
      />
    </>
  );
}
