import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProject, projects } from "@/data/projects";

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useSEO(project ? `${project.title} — Case Study` : "Case Study", project?.summary);

  if (!project) return <Navigate to="/work" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);
  const fallbackRelated = related.length ? related : projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const sections = [
    { icon: Target, label: "The challenge", text: project.challenge },
    { icon: Lightbulb, label: "The solution", text: project.solution },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
          <div className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full bg-electric-500/15 blur-[130px]" />
        </div>
        <Container className="relative">
          <Reveal y={10}>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All work
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal y={12}>
                <Eyebrow>
                  {project.category} · {project.industry}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl text-balance">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">{project.summary}</p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-4">
              <dl className="grid grid-cols-2 gap-6 rounded-3xl glass p-6 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Client</dt>
                  <dd className="mt-1 font-medium text-white">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Year</dt>
                  <dd className="mt-1 font-medium text-white">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Type</dt>
                  <dd className="mt-1 font-medium text-white">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Industry</dt>
                  <dd className="mt-1 font-medium text-white">{project.industry}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Preview */}
      <section className="pb-24">
        <Container>
          <Reveal delay={0.1}>
            <div className="group overflow-hidden rounded-[2rem] border border-white/10">
              <ProjectVisual project={project} className="aspect-[16/9] sm:aspect-[21/9]" large />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Results */}
      <section className="border-y border-white/6 bg-ink-900/40 py-16">
        <Container>
          <Stagger className="grid gap-8 sm:grid-cols-3" stagger={0.1}>
            {project.results.map((r) => (
              <StaggerItem key={r.label} className="text-center sm:text-left">
                <div className="font-display text-5xl font-semibold tracking-tight text-gradient sm:text-6xl">{r.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.14em] text-slate-500">{r.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Challenge / Solution */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-16 lg:col-span-8">
              {sections.map((s) => (
                <Reveal key={s.label}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-500/12 text-electric-300">
                      <s.icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">{s.label}</h2>
                  </div>
                  <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-slate-200 sm:text-3xl text-pretty">
                    {s.text}
                  </p>
                </Reveal>
              ))}
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300">
                    <TrendingUp className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">The result</h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {project.results.map((r) => (
                    <li key={r.label} className="flex items-center gap-4 rounded-2xl glass px-5 py-4">
                      <span className="font-display text-2xl font-semibold text-white">{r.value}</span>
                      <span className="text-slate-400">{r.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <aside className="lg:col-span-4">
              <Reveal delay={0.1} className="lg:sticky lg:top-32">
                <div className="rounded-3xl glass p-7">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Technologies</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-white/8 pt-6">
                    <p className="text-sm leading-relaxed text-slate-400">Want something similar for your business?</p>
                    <Button to={`/contact?need=${project.category === "Website" ? "website-development" : "application-development"}`} className="mt-4" fullWidth arrow>
                      Start a project like this
                    </Button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      <section className="border-t border-white/6 bg-ink-900/40 py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">Screens</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>
          {project.images && project.images.length > 1 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.slice(1).map((src) => (
                <Reveal key={src}>
                  <img src={src} alt="" className="w-full rounded-3xl border border-white/10" loading="lazy" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="group overflow-hidden rounded-3xl border border-white/10">
                  <ProjectVisual project={project} className="aspect-[4/3]" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="group overflow-hidden rounded-3xl border border-white/10">
                  <ProjectVisual project={{ ...project, visual: project.visual === "mobile" ? "analytics" : "mobile" }} className="aspect-[4/3]" />
                </div>
              </Reveal>
            </div>
          )}
        </Container>
      </section>

      {/* Related / Next */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">More work</h2>
            <Link to={`/work/${next.slug}`} className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
              Next: {next.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {fallbackRelated.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection compact />
    </>
  );
}
