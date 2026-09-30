import { useSEO } from "@/hooks/useSEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KStroke } from "@/components/brand/KSymbol";

export default function NotFound() {
  useSEO("Page not found");
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg mask-radial opacity-50" />
        <KStroke className="absolute right-[-5%] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 opacity-[0.08]" />
      </div>
      <Container className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">404</p>
        <h1 className="mt-6 font-display text-6xl font-semibold tracking-[-0.04em] text-white sm:text-8xl">
          This page <span className="text-gradient">doesn't exist.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-slate-400">The link may be outdated, or the page has moved. Let's get you back on track.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/" size="lg" arrow>
            Back to home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
