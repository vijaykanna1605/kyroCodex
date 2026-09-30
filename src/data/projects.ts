/**
 * Portfolio data. Replace these sample case studies with your real projects.
 * `visual` controls the generated preview artwork; swap in real screenshots via `images` when available.
 */
export type ProjectCategory = "Website" | "Application" | "Dashboard";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  technologies: string[];
  visual: "storefront" | "portal" | "analytics" | "mobile" | "corporate" | "booking";
  featured?: boolean;
  images?: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "nordic-home-storefront",
    title: "Nordic Home Storefront",
    client: "Nordic Home",
    category: "Website",
    industry: "Retail & E-commerce",
    year: "2025",
    summary: "A high-conversion e-commerce experience for a premium furniture brand.",
    challenge:
      "Nordic Home's old store loaded in six seconds on mobile, had a 78% cart abandonment rate and made it hard to showcase product craftsmanship.",
    solution:
      "We rebuilt the storefront on a headless architecture with cinematic product pages, one-page checkout, WhatsApp order support and structured data for rich search results.",
    results: [
      { value: "0.9s", label: "mobile load time" },
      { value: "+64%", label: "conversion rate" },
      { value: "-41%", label: "cart abandonment" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Razorpay"],
    visual: "storefront",
    featured: true,
    gradient: "from-electric-500/30 via-violet-500/20 to-transparent",
  },
  {
    slug: "medicare-patient-portal",
    title: "MediCare Patient Portal",
    client: "MediCare Clinics",
    category: "Application",
    industry: "Healthcare",
    year: "2025",
    summary: "Appointments, records and reminders for a 12-branch clinic network.",
    challenge:
      "Front-desk teams spent hours a day on phone bookings and paper records. Patients had no way to see reports or reschedule without calling.",
    solution:
      "A secure patient portal with OTP login, real-time slot booking across branches, digital reports, WhatsApp reminders and a role-based admin panel for doctors and staff.",
    results: [
      { value: "38k+", label: "bookings in year one" },
      { value: "-70%", label: "front-desk call volume" },
      { value: "12", label: "branches on one system" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp Business API", "AWS"],
    visual: "portal",
    featured: true,
    gradient: "from-cyan-500/25 via-electric-500/20 to-transparent",
  },
  {
    slug: "fleetview-operations-dashboard",
    title: "FleetView Operations Dashboard",
    client: "Swift Logistics",
    category: "Dashboard",
    industry: "Logistics",
    year: "2024",
    summary: "Real-time visibility across 400 vehicles and three regional hubs.",
    challenge:
      "Dispatchers juggled spreadsheets, GPS vendor portals and phone calls. Delays were spotted hours late and reporting took a full day each week.",
    solution:
      "A live operations dashboard aggregating GPS, order and driver data with alerting, route health scores, automated daily reports and an executive summary view.",
    results: [
      { value: "400", label: "vehicles tracked live" },
      { value: "-52%", label: "late deliveries" },
      { value: "8h → 5m", label: "weekly reporting" },
    ],
    technologies: ["React", "TypeScript", "Ruby on Rails", "Redis", "Mapbox", "Docker"],
    visual: "analytics",
    featured: true,
    gradient: "from-violet-500/30 via-electric-500/15 to-transparent",
  },
  {
    slug: "fitpulse-mobile-app",
    title: "FitPulse Mobile App",
    client: "FitPulse Studios",
    category: "Application",
    industry: "Fitness & Wellness",
    year: "2024",
    summary: "Class booking, memberships and progress tracking on iOS and Android.",
    challenge:
      "A fast-growing studio chain relied on a third-party app with generic branding, frequent outages and no way to run its own promotions.",
    solution:
      "A branded cross-platform app with class schedules, membership payments, trainer profiles, push notifications and an admin console for studio managers.",
    results: [
      { value: "4.8★", label: "store rating" },
      { value: "21k", label: "active members" },
      { value: "+35%", label: "class attendance" },
    ],
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "Stripe", "Firebase"],
    visual: "mobile",
    gradient: "from-electric-400/25 via-violet-400/15 to-transparent",
  },
  {
    slug: "atlas-capital-corporate",
    title: "Atlas Capital Corporate Site",
    client: "Atlas Capital Partners",
    category: "Website",
    industry: "Finance",
    year: "2025",
    summary: "A restrained, editorial web presence for an investment firm.",
    challenge:
      "The firm's site looked dated next to competitors and offered no way to publish insights or capture qualified investor enquiries.",
    solution:
      "An editorial-style corporate site with a CMS for insights, team and portfolio sections, gated document downloads and enquiry routing to the right partner.",
    results: [
      { value: "98", label: "Lighthouse performance" },
      { value: "3x", label: "qualified enquiries" },
      { value: "2 wks", label: "content to launch" },
    ],
    technologies: ["Astro", "React", "Tailwind CSS", "Sanity CMS", "Vercel"],
    visual: "corporate",
    gradient: "from-slate-400/20 via-electric-500/15 to-transparent",
  },
  {
    slug: "stayeasy-booking-platform",
    title: "StayEasy Booking Platform",
    client: "StayEasy Hospitality",
    category: "Application",
    industry: "Hospitality",
    year: "2024",
    summary: "Direct bookings for a boutique hotel group — without OTA commissions.",
    challenge:
      "Over 80% of bookings came through OTAs, costing 15–20% commission on every stay. The direct site could not take payments or show live availability.",
    solution:
      "A booking engine with live inventory, dynamic pricing, secure payments, guest accounts and a property manager dashboard synced with their channel manager.",
    results: [
      { value: "+58%", label: "direct bookings" },
      { value: "₹1.2Cr", label: "commission saved / yr" },
      { value: "6", label: "properties live" },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "Channel Manager API"],
    visual: "booking",
    gradient: "from-violet-500/25 via-cyan-500/15 to-transparent",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Website", "Application", "Dashboard"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
