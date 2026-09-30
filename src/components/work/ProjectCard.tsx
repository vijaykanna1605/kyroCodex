import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, size = "md" }: { project: Project; size?: "md" | "lg" }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/30"
    >
      <ProjectVisual project={project} className={cn(size === "lg" ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/3]")} large={size === "lg"} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-500">
          <span className="text-electric-300">{project.category}</span>
          <span>·</span>
          <span>{project.industry}</span>
          <span className="ml-auto">{project.year}</span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className={cn("font-display font-semibold tracking-tight text-white", size === "lg" ? "text-2xl" : "text-xl")}>
            {project.title}
          </h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-electric-400/60 group-hover:bg-electric-500/15 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/8 pt-5">
          {project.results.slice(0, 3).map((r) => (
            <div key={r.label}>
              <div className="font-display text-base font-semibold text-white">{r.value}</div>
              <div className="text-[11px] text-slate-500">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
