import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { KSymbol } from "@/components/brand/KSymbol";
import { Container } from "@/components/ui/Container";
import { footerLinks, site, whatsappLink, defaultWhatsappMessage } from "@/data/site";

type IconProps = { className?: string };

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-5.4-7.06L3.9 22H.64l8.02-9.17L.5 2h7.07l4.88 6.45L18.24 2Zm-1.21 18h1.8L7.05 3.9H5.12L17.03 20Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socials = [
  { label: "WhatsApp", href: whatsappLink(defaultWhatsappMessage), Icon: MessageCircle },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "X", href: site.social.x, Icon: XIcon },
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-sm text-slate-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[60rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-electric-500/10 blur-[140px]" />
        <KSymbol className="absolute -right-24 -bottom-24 h-[26rem] w-[26rem] opacity-[0.04]" />
      </div>

      <Container className="relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.name} is a digital product studio. We turn ideas into websites, applications and software that
              perform — engineered with the care your business deserves.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-electric-400/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-7 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-electric-400" /> {site.email}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <LinkColumn title="Solutions" links={footerLinks.solutions} />
            <LinkColumn title="Plans" links={footerLinks.plans} />
            <LinkColumn title="Company" links={footerLinks.company} />
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp · {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li>{site.location}</li>
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
