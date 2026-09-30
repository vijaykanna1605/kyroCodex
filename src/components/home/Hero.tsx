import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { KStroke } from "@/components/brand/KSymbol";
import { BrowserFrame, DashboardScreen, MobileScreen, PhoneFrame } from "@/components/mockups/Mockups";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const kRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-80" />
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[160px]" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-[140px] animate-float" />
        <div className="absolute right-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-electric-400/10 blur-[140px] animate-float-delayed" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink-950 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <motion.div style={{ opacity }} className="relative z-10 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate-300 backdrop-blur"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-electric-500 to-violet-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3" /> Studio
              </span>
              <span className="font-display tracking-wide">
                Ideas <span className="text-electric-300">→</span> Products <span className="text-electric-300">→</span> Impact
              </span>
            </motion.div>

            <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
              {["We build digital", "products that", "move business"].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}
                  >
                    {i === 2 ? (
                      <>
                        move <span className="text-gradient">forward.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl text-pretty"
            >
              KYROCODEX designs and engineers premium websites, applications and business software — built for
              quality, performance and the kind of scale that turns a good idea into real impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button to="/contact" size="lg" arrow>
                Start Your Project
              </Button>
              <Button to="/solutions" variant="outline" size="lg" arrow>
                Explore Our Solutions
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500"
            >
              {["Websites", "Web & mobile apps", "UI/UX", "Automation"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-electric-400" /> {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <div className="relative lg:col-span-6">
            <motion.div style={{ y: yArt }} className="relative mx-auto max-w-[36rem] lg:max-w-none lg:pl-10">
              {/* K symbol */}
              <motion.div
                style={{ rotate: kRotate }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
                className="absolute -right-4 -top-24 sm:-right-8 sm:-top-32 lg:-right-24 lg:-top-44"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-electric-500/30 blur-[80px]" />
                  <KStroke className="relative h-56 w-56 opacity-90 drop-shadow-[0_0_40px_rgba(79,133,255,0.5)] sm:h-72 sm:w-72 lg:h-[32rem] lg:w-[32rem]" />
                </div>
              </motion.div>

              {/* Browser */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease }}
                style={{ transformPerspective: 1200 }}
                className="relative mt-24 sm:mt-28 lg:mt-36"
              >
                <BrowserFrame url="app.kyrocodex.com/dashboard" className="border-gradient">
                  <DashboardScreen compact />
                </BrowserFrame>
              </motion.div>

              {/* Phone */}
              <motion.div
                style={{ y: yPhone }}
                initial={{ opacity: 0, y: 80, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.1, delay: 0.6, ease }}
                className="absolute -bottom-14 left-0 hidden sm:block lg:-left-2"
              >
                <PhoneFrame className="w-40 lg:w-48">
                  <MobileScreen />
                </PhoneFrame>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease }}
                className="absolute -right-3 bottom-8 hidden rounded-2xl glass-strong px-4 py-3 shadow-glow sm:block lg:-right-8"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Performance</div>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-display text-2xl font-semibold text-white">98</span>
                  <span className="mb-1 text-xs text-emerald-400">Lighthouse</span>
                </div>
                <div className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 1.4, delay: 1.3, ease }}
                    className="h-full rounded-full bg-linear-to-r from-emerald-400 to-electric-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
