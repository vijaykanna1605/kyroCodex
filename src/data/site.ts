/**
 * Global site configuration.
 * Update contact details, social links and map embed here — every page reads from this file.
 */
export const site = {
  name: "KYROCODEX",
  tagline: "Ideas → Products → Impact",
  description:
    "KYROCODEX is a digital product studio building premium websites, web & mobile applications, and business software engineered for quality, performance and scale.",
  url: "https://kyrocodex.com",

  // WhatsApp number in international format WITHOUT "+" or spaces (e.g. 919876543210)
  whatsappNumber: "919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@kyrocodex.com",
  location: "India · Working with clients worldwide",
  hours: "Mon – Sat · 9:30 AM – 7:00 PM IST",

  // Paste a Google Maps "Embed a map" iframe src here to show a map on the Contact page. Leave empty to hide.
  mapEmbedUrl: "",

  social: {
    linkedin: "https://linkedin.com/company/kyrocodex",
    instagram: "https://instagram.com/kyrocodex",
    x: "https://x.com/kyrocodex",
    github: "https://github.com/kyrocodex",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsappMessage =
  "Hi KYROCODEX team, I'd like to discuss a project with you.";

export type NavItem = { label: string; to: string; children?: NavItem[] };

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "All Solutions", to: "/solutions" },
      { label: "Web Development", to: "/solutions/web-development" },
      { label: "Application Development", to: "/solutions/application-development" },
      { label: "Website Plans", to: "/plans/web" },
      { label: "Application Plans", to: "/plans/application" },
    ],
  },
  { label: "Why Kyrocodex", to: "/why-kyrocodex" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks = {
  solutions: [
    { label: "Website Development", to: "/solutions/web-development" },
    { label: "Application Development", to: "/solutions/application-development" },
    { label: "UI/UX Design", to: "/solutions#ui-ux-design" },
    { label: "Business Automation", to: "/solutions#business-automation" },
    { label: "Maintenance & Support", to: "/solutions#maintenance-support" },
  ],
  plans: [
    { label: "Website Plans", to: "/plans/web" },
    { label: "Application Plans", to: "/plans/application" },
    { label: "Compare Features", to: "/plans/web#compare" },
    { label: "Add-ons", to: "/plans/web#add-ons" },
  ],
  company: [
    { label: "Why Kyrocodex", to: "/why-kyrocodex" },
    { label: "About", to: "/about" },
    { label: "Our Work", to: "/work" },
    { label: "Contact", to: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ],
};
