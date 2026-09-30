import type { Project } from "@/data/projects";
import {
  AnalyticsScreen,
  BookingScreen,
  BrowserFrame,
  CorporateScreen,
  MobileScreen,
  PhoneFrame,
  PortalScreen,
  StorefrontScreen,
} from "@/components/mockups/Mockups";
import { cn } from "@/lib/utils";

/**
 * Generates preview artwork for a project. If `project.images` is set, the first image is used instead.
 */
export function ProjectVisual({ project, className, large = false }: { project: Project; className?: string; large?: boolean }) {
  if (project.images?.length) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  const screenClass = large ? "min-h-[30rem]" : "min-h-[22rem]";
  const screen = (() => {
    switch (project.visual) {
      case "storefront":
        return <StorefrontScreen className={screenClass} />;
      case "portal":
        return <PortalScreen className={screenClass} />;
      case "analytics":
        return <AnalyticsScreen className={screenClass} compact={!large} />;
      case "corporate":
        return <CorporateScreen className={screenClass} />;
      case "booking":
        return <BookingScreen className={screenClass} />;
      case "mobile":
        return null;
    }
  })();

  return (
    <div className={cn("relative overflow-hidden bg-ink-950", className)}>
      <div className={cn("absolute inset-0 bg-linear-to-br", project.gradient)} />
      <div className="absolute inset-0 grid-bg opacity-40 mask-radial" />
      {project.visual === "mobile" ? (
        <div className="absolute inset-0 flex items-end justify-center gap-6 px-8 pt-10">
          <PhoneFrame className={cn("translate-y-10 rotate-[-6deg]", large ? "w-56" : "w-40")}>
            <MobileScreen />
          </PhoneFrame>
          <PhoneFrame className={cn("translate-y-20 rotate-[6deg] opacity-80", large ? "w-56" : "w-40")}>
            <MobileScreen />
          </PhoneFrame>
        </div>
      ) : (
        <div className={cn("absolute inset-x-8 top-10 transition-transform duration-700 group-hover:-translate-y-3", large ? "inset-x-10 top-12 sm:inset-x-16 sm:top-16" : "")}>
          <BrowserFrame url={`${project.client.toLowerCase().replace(/\s+/g, "")}.com`}>{screen}</BrowserFrame>
        </div>
      )}
    </div>
  );
}
