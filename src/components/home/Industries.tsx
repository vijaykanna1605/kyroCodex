import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "@/data/solutions";

export function Industries() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          align="center"
          title={
            <>
              Built for businesses <span className="text-gradient">of every shape.</span>
            </>
          }
          description="We've shipped for startups and established companies across a wide range of sectors. Different industries, the same standards."
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
          {industries.map((ind) => (
            <StaggerItem key={ind.name} y={16}>
              <div className="group h-full rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30">
                <div className="h-1.5 w-8 rounded-full bg-linear-to-r from-electric-500 to-violet-500 opacity-60 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
                <h3 className="mt-4 font-display text-sm font-semibold text-white sm:text-base">{ind.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{ind.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
