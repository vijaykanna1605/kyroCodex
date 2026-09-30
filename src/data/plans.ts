/**
 * Pricing data. Prices are indicative starting points in INR — update to match your actual offers.
 */

export type PlanFeature = { label: string; value: string | boolean };

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  highlight?: boolean;
  badge?: string;
  features: PlanFeature[];
  cta: string;
  idealFor: string;
};

export const webPlans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "A sharp, professional presence for new businesses.",
    price: "₹24,999",
    priceNote: "starting at",
    idealFor: "New businesses, freelancers, local services",
    features: [
      { label: "Pages", value: "Up to 5" },
      { label: "Responsive design", value: true },
      { label: "Contact forms", value: "1 form" },
      { label: "SEO setup", value: "Basic on-page" },
      { label: "Google Search Console", value: true },
      { label: "Analytics", value: "GA4 setup" },
      { label: "WhatsApp integration", value: "Click-to-chat" },
      { label: "Hosting / deployment", value: "Deployment included" },
      { label: "Maintenance", value: "30 days" },
    ],
    cta: "Start with Starter",
  },
  {
    id: "business",
    name: "Business",
    tagline: "For growing companies that need to generate enquiries.",
    price: "₹49,999",
    priceNote: "starting at",
    highlight: true,
    badge: "Most popular",
    idealFor: "Growing SMEs, clinics, agencies, consultants",
    features: [
      { label: "Pages", value: "Up to 12" },
      { label: "Responsive design", value: true },
      { label: "Contact forms", value: "Multiple + enquiry routing" },
      { label: "SEO setup", value: "Full on-page + schema" },
      { label: "Google Search Console", value: true },
      { label: "Analytics", value: "GA4 + conversion events" },
      { label: "WhatsApp integration", value: "Chat + form → WhatsApp" },
      { label: "Hosting / deployment", value: "Deployment + 1yr hosting" },
      { label: "Maintenance", value: "3 months" },
    ],
    cta: "Choose Business",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Content-rich, CMS-powered sites and e-commerce.",
    price: "₹99,999",
    priceNote: "starting at",
    idealFor: "E-commerce, corporates, multi-location brands",
    features: [
      { label: "Pages", value: "Up to 25 + CMS" },
      { label: "Responsive design", value: true },
      { label: "Contact forms", value: "Advanced + CRM sync" },
      { label: "SEO setup", value: "Technical + content SEO" },
      { label: "Google Search Console", value: true },
      { label: "Analytics", value: "GA4 + dashboards" },
      { label: "WhatsApp integration", value: "Business API ready" },
      { label: "Hosting / deployment", value: "Deployment + CDN + 1yr hosting" },
      { label: "Maintenance", value: "6 months" },
    ],
    cta: "Choose Professional",
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Bespoke platforms, portals and anything not in a box.",
    price: "Let's talk",
    priceNote: "scoped to your needs",
    idealFor: "Platforms, marketplaces, complex integrations",
    features: [
      { label: "Pages", value: "Unlimited" },
      { label: "Responsive design", value: true },
      { label: "Contact forms", value: "Custom workflows" },
      { label: "SEO setup", value: "Strategy + ongoing" },
      { label: "Google Search Console", value: true },
      { label: "Analytics", value: "Custom event tracking" },
      { label: "WhatsApp integration", value: "Full automation" },
      { label: "Hosting / deployment", value: "Custom infrastructure" },
      { label: "Maintenance", value: "SLA-based" },
    ],
    cta: "Talk to us",
  },
];

export const webComparison: { feature: string; values: (string | boolean)[] }[] = [
  { feature: "Number of pages", values: ["Up to 5", "Up to 12", "Up to 25 + CMS", "Unlimited"] },
  { feature: "Custom UI design", values: [true, true, true, true] },
  { feature: "Mobile-first responsive", values: [true, true, true, true] },
  { feature: "Contact / enquiry forms", values: ["1", "Multiple", "Advanced", "Custom"] },
  { feature: "Content management system", values: [false, "Optional", true, true] },
  { feature: "Blog / news module", values: [false, "Optional", true, true] },
  { feature: "E-commerce & payments", values: [false, false, true, true] },
  { feature: "On-page SEO", values: ["Basic", "Full", "Full + technical", "Strategy"] },
  { feature: "Schema markup", values: [false, true, true, true] },
  { feature: "Google Search Console", values: [true, true, true, true] },
  { feature: "Google Analytics 4", values: [true, "+ events", "+ dashboards", "Custom"] },
  { feature: "WhatsApp integration", values: ["Click-to-chat", "Form → WhatsApp", "Business API ready", "Automation"] },
  { feature: "Performance target", values: ["85+", "90+", "90+", "95+"] },
  { feature: "SSL & security hardening", values: [true, true, true, true] },
  { feature: "Hosting included", values: [false, "1 year", "1 year + CDN", "Custom"] },
  { feature: "Maintenance period", values: ["30 days", "3 months", "6 months", "SLA"] },
  { feature: "Revision rounds", values: ["2", "3", "Unlimited*", "Unlimited*"] },
  { feature: "Typical delivery", values: ["2–3 weeks", "3–5 weeks", "6–8 weeks", "Scoped"] },
];

export const webAddOns = [
  { name: "Additional pages", price: "from ₹2,500 / page", description: "Designed and built to match your existing site." },
  { name: "Blog / CMS", price: "from ₹12,000", description: "Publish articles and updates without touching code." },
  { name: "Copywriting", price: "from ₹1,500 / page", description: "Clear, search-friendly content written for your audience." },
  { name: "Logo & brand kit", price: "from ₹9,000", description: "Logo, colour system and typography for a consistent brand." },
  { name: "Multi-language", price: "from ₹8,000 / language", description: "Reach more customers in the languages they speak." },
  { name: "Payment gateway", price: "from ₹10,000", description: "Razorpay, Stripe or PayPal integration with receipts." },
  { name: "Booking / appointments", price: "from ₹12,000", description: "Calendar-based booking with reminders." },
  { name: "Priority support", price: "from ₹4,000 / month", description: "Same-day response and monthly performance reports." },
];

export const appPlans: Plan[] = [
  {
    id: "starter-app",
    name: "Starter Application",
    tagline: "Validate an idea with a focused, working product.",
    price: "₹1,49,000",
    priceNote: "starting at",
    idealFor: "MVPs, internal tools, single-workflow apps",
    features: [
      { label: "Users", value: "Up to 500" },
      { label: "Authentication", value: "Email + password" },
      { label: "Dashboard", value: "Single-role dashboard" },
      { label: "Database", value: "Managed PostgreSQL" },
      { label: "Admin panel", value: "Basic CRUD" },
      { label: "API", value: "REST API" },
      { label: "Notifications", value: "Email" },
      { label: "Reports", value: "Basic exports" },
      { label: "Deployment", value: "Cloud deployment" },
      { label: "Maintenance", value: "1 month" },
    ],
    cta: "Start building",
  },
  {
    id: "business-app",
    name: "Business Application",
    tagline: "Multi-role systems that run day-to-day operations.",
    price: "₹2,99,000",
    priceNote: "starting at",
    highlight: true,
    badge: "Most chosen",
    idealFor: "SMEs, clinics, schools, service businesses",
    features: [
      { label: "Users", value: "Up to 5,000" },
      { label: "Authentication", value: "Email, OTP, Google login" },
      { label: "Dashboard", value: "Role-based dashboards" },
      { label: "Database", value: "PostgreSQL + backups" },
      { label: "Admin panel", value: "Full admin with permissions" },
      { label: "API", value: "REST + webhooks" },
      { label: "Notifications", value: "Email, SMS, WhatsApp" },
      { label: "Reports", value: "Filters, charts, PDF/Excel" },
      { label: "Deployment", value: "Cloud + staging" },
      { label: "Maintenance", value: "3 months" },
    ],
    cta: "Choose Business",
  },
  {
    id: "professional-app",
    name: "Professional Application",
    tagline: "Web + mobile products ready for real scale.",
    price: "₹5,99,000",
    priceNote: "starting at",
    idealFor: "SaaS products, marketplaces, customer-facing apps",
    features: [
      { label: "Users", value: "Up to 50,000" },
      { label: "Authentication", value: "SSO, 2FA, social login" },
      { label: "Dashboard", value: "Web + mobile apps" },
      { label: "Database", value: "Scaled DB + caching" },
      { label: "Admin panel", value: "Advanced + audit logs" },
      { label: "API", value: "REST/GraphQL + docs" },
      { label: "Notifications", value: "Push, email, SMS, WhatsApp" },
      { label: "Reports", value: "Analytics + scheduled reports" },
      { label: "Deployment", value: "CI/CD + monitoring" },
      { label: "Maintenance", value: "6 months" },
    ],
    cta: "Choose Professional",
  },
  {
    id: "enterprise-app",
    name: "Enterprise / Custom",
    tagline: "Complex systems, integrations and dedicated teams.",
    price: "Let's talk",
    priceNote: "scoped to your needs",
    idealFor: "Enterprises, regulated industries, multi-tenant platforms",
    features: [
      { label: "Users", value: "Unlimited" },
      { label: "Authentication", value: "Enterprise SSO / SAML" },
      { label: "Dashboard", value: "Custom per role & tenant" },
      { label: "Database", value: "Multi-region, HA" },
      { label: "Admin panel", value: "Custom back-office" },
      { label: "API", value: "Integrations & partner APIs" },
      { label: "Notifications", value: "Omnichannel" },
      { label: "Reports", value: "BI & data warehouse" },
      { label: "Deployment", value: "Dedicated infra / on-prem" },
      { label: "Maintenance", value: "SLA + dedicated team" },
    ],
    cta: "Talk to us",
  },
];
