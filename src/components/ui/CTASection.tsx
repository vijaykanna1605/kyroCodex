import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { KSymbol } from "@/components/brand/KSymbol";
import { defaultWhatsappMessage, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
  compact?: boolean;
};

export function CTASection({
  eyebrow = "Let's build",
  title = (
    <>
      Have an idea? <span className="text-gradient">Let's turn it into a product.</span>
    </>
  ),
  description = "Tell us what you want to build. We'll reply within one business day with honest recommendations, a timeline and a clear quote.",
  primaryLabel = "Start Your Project",
  primaryTo = "/contact",
  secondaryLabel = "Chat on WhatsApp",
  secondaryHref = whatsappLink(defaultWhatsappMessage),
  className,
  compact = false,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 grid-bg mask-radial opacity-60" />
              <div className="absolute -top-40 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-electric-500/25 blur-[120px]" />
              <div className="absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-[110px]" />
              <KSymbol className="absolute -right-16 -bottom-20 h-72 w-72 opacity-[0.07] sm:h-96 sm:w-96" />
            </div>

            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">{eyebrow}</span>
              <h2
                className={cn(
                  "font-display font-semibold tracking-[-0.03em] text-white text-balance leading-[1.05]",
                  compact ? "text-3xl sm:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl",
                )}
              >
                {title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button to={primaryTo} size="lg" arrow>
                  {primaryLabel}
                </Button>
                <Button href={secondaryHref} variant="outline" size="lg" icon={<MessageCircle />}>
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
