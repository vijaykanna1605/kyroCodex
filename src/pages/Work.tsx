import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Work() {
  useSEO("Our Work", "Featured websites, applications and dashboards built by KYROCODEX — with the challenge, solution and results behind each one.");
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const featured = projects.filter((p) => p.featured);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Products we've shipped. <span className="text-gradient">Results they delivered.</span>
          </>
        }
        description="A selection of websites, applications and dashboards — each with the challenge we were given, what we built and what changed for the business."
        actions={
          <Button to="/contact" size="lg" arrow>
            Start Your Project
          </Button>
        }
      />

      {/* Featured */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">Featured projects</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className={cn(i === 0 && "lg:col-span-2")}>
                <ProjectCard project={p} size={i === 0 ? "lg" : "md"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* All projects with filter */}
      <section className="border-t border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Case studies" title="Browse by type." size="md" />
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    filter === c
                      ? "border-electric-400/60 bg-electric-500/15 text-white"
                      : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white",
                  )}
                >
                  {c}
                  {c !== "All" && <span className="ml-1.5 text-xs text-slate-500">{projects.filter((p) => p.category === c).length}</span>}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CTASection
        eyebrow="Your project next?"
        title={
          <>
            Let's write your <span className="text-gradient">success story.</span>
          </>
        }
        description="Every project here started with a conversation. Tell us what you're trying to achieve and we'll show you how we'd approach it."
      />
    </>
  );
}
