import type { LucideIcon } from "lucide-react";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  PenTool,
  Code2,
  Workflow,
  LifeBuoy,
  Lightbulb,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
  href: string;
  accent: "blue" | "violet" | "cyan" | "indigo";
};

export const solutions: Solution[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    icon: Globe,
    description:
      "Fast, search-ready websites that make your brand feel established from the very first visit.",
    capabilities: ["Business & corporate sites", "E-commerce storefronts", "Landing pages", "Technical SEO"],
    href: "/solutions/web-development",
    accent: "blue",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    shortTitle: "Web Apps",
    icon: LayoutDashboard,
    description:
      "Browser-based products with real logic — portals, dashboards and SaaS built to handle real users.",
    capabilities: ["Customer portals", "Admin dashboards", "SaaS platforms", "Role-based access"],
    href: "/solutions/application-development",
    accent: "violet",
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    description:
      "Cross-platform iOS and Android apps with native feel, offline support and push notifications.",
    capabilities: ["iOS & Android", "React Native / Flutter", "Push notifications", "App Store launch"],
    href: "/solutions/application-development",
    accent: "cyan",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    icon: PenTool,
    description:
      "Interfaces that look premium and feel obvious. Research-led, system-driven, built to convert.",
    capabilities: ["UX research & flows", "Wireframes & prototypes", "Design systems", "Brand-aligned UI"],
    href: "/contact?need=ui-ux-design",
    accent: "indigo",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Custom Software",
    icon: Code2,
    description:
      "Purpose-built systems for workflows that off-the-shelf tools can't handle — ERP, CRM, internal tools.",
    capabilities: ["Internal tools", "CRM / ERP modules", "Integrations & APIs", "Legacy modernisation"],
    href: "/solutions/application-development",
    accent: "blue",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    icon: Workflow,
    description:
      "Remove manual work with connected workflows, automated reporting and smart notifications.",
    capabilities: ["Workflow automation", "WhatsApp & email flows", "Automated reports", "Third-party sync"],
    href: "/contact?need=business-automation",
    accent: "violet",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortTitle: "Support",
    icon: LifeBuoy,
    description:
      "Keep everything fast, secure and up to date with proactive monitoring and a team on call.",
    capabilities: ["Uptime monitoring", "Security patches", "Content updates", "Performance tuning"],
    href: "/contact?need=maintenance-support",
    accent: "cyan",
  },
];

/** The four headline solution areas shown on the Home page. */
export const homeSolutions = [
  {
    title: "Web Development",
    icon: Globe,
    description: "Websites that load in under a second, rank on search and convert visitors into enquiries.",
    href: "/solutions/web-development",
    points: ["Business & e-commerce", "SEO-ready", "CMS optional"],
  },
  {
    title: "Application Development",
    icon: LayoutDashboard,
    description: "Web, mobile and business applications with authentication, dashboards and clean APIs.",
    href: "/solutions/application-development",
    points: ["Web · Mobile · SaaS", "Secure auth", "Scalable backend"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description: "Interfaces designed around the way your customers think — not around a template.",
    href: "/solutions#ui-ux-design",
    points: ["Research-led", "Design systems", "Prototyping"],
  },
  {
    title: "Digital Solutions & Consulting",
    icon: Lightbulb,
    description: "Automation, integrations and technology strategy that turn operations into an advantage.",
    href: "/solutions#business-automation",
    points: ["Automation", "Integrations", "Tech roadmap"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business, users and goals. Scope, priorities and success metrics are agreed before design starts.",
    outputs: ["Kick-off workshop", "Requirements & sitemap", "Timeline & milestones"],
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes become high-fidelity UI in your brand language. You review and approve every screen before build.",
    outputs: ["User flows", "UI design", "Interactive prototype"],
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, typed, tested code. Weekly previews so you see progress — not surprises — throughout the build.",
    outputs: ["Staging previews", "QA & device testing", "Performance budget"],
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deployment, analytics, search indexing and handover. Then we stay on to support, optimise and grow.",
    outputs: ["Deployment & DNS", "Analytics & SEO", "Training & support"],
  },
];

export const industries = [
  { name: "Startups & SaaS", description: "MVPs that scale into products." },
  { name: "Retail & E-commerce", description: "Storefronts built for conversion." },
  { name: "Healthcare & Clinics", description: "Booking, records and patient portals." },
  { name: "Education", description: "LMS, admissions and student dashboards." },
  { name: "Real Estate", description: "Listings, CRM and virtual tours." },
  { name: "Finance & Fintech", description: "Secure dashboards and reporting." },
  { name: "Manufacturing", description: "Inventory, orders and operations." },
  { name: "Professional Services", description: "Corporate sites and client portals." },
  { name: "Hospitality & Travel", description: "Bookings and guest experiences." },
  { name: "Logistics", description: "Tracking and fleet management." },
];

export const whyPoints = [
  {
    title: "Quality",
    description:
      "Pixel-accurate UI, typed code, code reviews and QA on real devices. We ship work we'd put our own name on — and we do.",
    stat: "100%",
    statLabel: "code-reviewed",
  },
  {
    title: "Performance",
    description:
      "Performance is a feature. We set budgets from day one and target 90+ Lighthouse scores across every page.",
    stat: "90+",
    statLabel: "Lighthouse target",
  },
  {
    title: "Scalability",
    description:
      "Architecture that grows with you — modular components, clean APIs and infrastructure that doesn't need a rebuild at 10x.",
    stat: "10x",
    statLabel: "growth-ready",
  },
  {
    title: "Client-focused",
    description:
      "One point of contact, weekly updates, transparent pricing and honest advice — even when it means a smaller project.",
    stat: "1",
    statLabel: "dedicated lead",
  },
];
