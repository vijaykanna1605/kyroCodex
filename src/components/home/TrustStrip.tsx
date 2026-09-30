import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "React Native",
  "Flutter",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Figma",
  "GraphQL",
  "Redis",
  "Stripe · Razorpay",
  "WhatsApp Business API",
];

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "12+", label: "Industries served" },
  { value: "98", label: "Avg. Lighthouse score" },
  { value: "<24h", label: "Response time" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/6 bg-ink-900/50 py-10">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
      <div className="mt-10">
        <Marquee speed="slow">
          {capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-2 font-display text-sm font-medium tracking-wide text-slate-400"
            >
              {c}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
