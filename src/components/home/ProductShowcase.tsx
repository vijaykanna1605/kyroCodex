import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gauge, Lock, Smartphone, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame, PhoneFrame, StorefrontScreen, MobileScreen, PortalScreen } from "@/components/mockups/Mockups";

const callouts = [
  { icon: Zap, title: "Sub-second loads", text: "Optimised builds, edge delivery and image pipelines." },
  { icon: Smartphone, title: "Every screen", text: "Designed mobile-first, tested on real devices." },
  { icon: Lock, title: "Secure by default", text: "HTTPS, hardened auth and audited dependencies." },
  { icon: Gauge, title: "Measured", text: "Analytics and conversion tracking from day one." },
];

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [120, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dots-bg mask-radial opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/12 blur-[160px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Product showcase"
          align="center"
          title={
            <>
              Designed to look premium. <span className="text-gradient">Engineered to perform.</span>
            </>
          }
          description="Storefronts, portals, dashboards and mobile apps — every product we ship shares the same obsession with detail."
        />

        <div className="relative mt-20 h-[30rem] sm:h-[40rem] lg:h-[46rem]">
          {/* back browser */}
          <motion.div style={{ y: yBack }} className="absolute left-0 top-0 w-[78%] sm:w-[70%]">
            <BrowserFrame url="nordichome.in" className="opacity-90">
              <StorefrontScreen className="min-h-[16rem] sm:min-h-[22rem]" />
            </BrowserFrame>
          </motion.div>
          {/* front browser */}
          <motion.div style={{ y: yFront }} className="absolute right-0 top-24 w-[72%] sm:top-28 sm:w-[62%]">
            <BrowserFrame url="portal.medicare.clinic" className="border-gradient shadow-glow">
              <PortalScreen className="min-h-[16rem] sm:min-h-[22rem]" />
            </BrowserFrame>
          </motion.div>
          {/* phone */}
          <motion.div style={{ y: yPhone }} className="absolute bottom-16 left-[6%] hidden sm:block lg:left-[12%]">
            <PhoneFrame className="w-44 lg:w-52">
              <MobileScreen />
            </PhoneFrame>
          </motion.div>
        </div>

        <div className="mt-28 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {callouts.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="flex gap-4 rounded-2xl glass p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-500/12 text-electric-300">
                  <c.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-white">{c.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
