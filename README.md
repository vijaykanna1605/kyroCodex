# KYROCODEX — Company Website

Premium multi-page company website for **KYROCODEX** — *Ideas → Products → Impact*.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**, React Router 7, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build → dist/
npm run preview    # serve the production build
```

## Pages

| Route | Page | Character |
|---|---|---|
| `/` | Home | Cinematic hero, trust strip, solutions, why, product showcase, process, industries, CTA |
| `/solutions` | Solutions | Structured cards for all 7 solution areas |
| `/solutions/web-development` | Web Development | Website types, Design → Dev → SEO → Deploy, features, responsive showcase, plans, FAQ |
| `/solutions/application-development` | Application Development | App types, auth & security, API/integrations, process, plans, FAQ |
| `/plans/web` | Website Plans | Conversion-focused pricing, comparison table, add-ons, process, FAQ |
| `/plans/application` | Application Plans | Pricing, comparison, “Tell us what you want to build” CTA |
| `/why-kyrocodex` | Why Kyrocodex | Large-typography manifesto with 7 chapters |
| `/about` | About | Brand-driven: vision, mission, values, journey, team, philosophy |
| `/work` | Our Work | Featured projects + filterable case-study grid |
| `/work/:slug` | Case Study | Challenge · Solution · Result · Technologies · Screens |
| `/contact` | Contact | Enquiry form (opens WhatsApp / email pre-filled), contact cards, optional map, FAQ |
| `/privacy`, `/terms` | Legal | Privacy Policy, Terms & Conditions |

Global: sticky glass header with Solutions dropdown and mobile menu, footer, floating WhatsApp / scroll-to-top / enquiry buttons.

## Customise — everything lives in `src/data/`

| File | What to edit |
|---|---|
| `site.ts` | **WhatsApp number**, email, phone, location, hours, Google Maps embed URL, social links, navigation & footer links |
| `plans.ts` | Website & application plans, prices (currently indicative INR placeholders), comparison rows, add-ons |
| `solutions.ts` | Solution cards, home solution tiles, process steps, industries, “why” points |
| `projects.ts` | Portfolio case studies. Add `images: [...]` to a project to replace the generated mockup art with real screenshots |
| `faqs.ts` | FAQ content per page |

Team members and the company journey are in `src/pages/About.tsx`.

## Project structure

```
src/
  components/
    brand/      KSymbol, Logo
    layout/     Header, Footer, FloatingActions, Layout (scroll management)
    ui/         Button, Container, SectionHeading, GlassCard, Reveal, FAQ,
                CTASection, ProcessSteps, PageHero, Marquee
    mockups/    CSS-built browser / phone frames and product screens
    home/       Hero, TrustStrip, SolutionsGrid, WhyKyrocodex, ProductShowcase, Industries
    pricing/    PricingCard, ComparisonTable, AddOns
    work/       ProjectCard, ProjectVisual
  data/         All editable content (see above)
  hooks/        useSEO (per-page title + meta description)
  pages/        One file per route
  index.css     Design tokens (Tailwind v4 @theme) + custom utilities
```

## Design system

- **Colours**: `ink-*` (deep navy / near-black surfaces), `electric-*` (blue accent), `violet-*` (secondary accent) — defined in `src/index.css`
- **Type**: Sora (display) + Inter (body), loaded from Google Fonts in `index.html`
- **Utilities**: `.glass`, `.glass-strong`, `.text-gradient`, `.grid-bg`, `.dots-bg`, `.border-gradient`, `.mask-*`
- **Motion**: `Reveal` / `Stagger` wrappers (Framer Motion, once-in-view), subtle parallax on hero and showcase; respects `prefers-reduced-motion`

## Deployment

The build output in `dist/` is a static SPA. `public/_redirects` is included for Netlify; on Vercel add a rewrite of `/(.*)` → `/index.html`, or enable SPA fallback on your host.

The contact form has no backend by design: it opens WhatsApp (or the visitor's email client) with the enquiry pre-filled. Swap `send()` in `src/pages/Contact.tsx` for an API call if you later add a backend.
