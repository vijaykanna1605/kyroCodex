import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Plan } from "@/data/plans";
import { cn } from "@/lib/utils";

export function PricingCard({ plan, contactPath = "/contact" }: { plan: Plan; contactPath?: string }) {
  const to = `${contactPath}?plan=${encodeURIComponent(plan.name)}`;
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
        plan.highlight
          ? "border-gradient bg-linear-to-b from-ink-800 to-ink-900 shadow-glow"
          : "glass hover:border-white/15",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-linear-to-r from-electric-500 to-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
          {plan.badge}
        </span>
      )}

      <div>
        <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
        <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-slate-400">{plan.tagline}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
        <span className="whitespace-nowrap font-display text-4xl font-semibold tracking-tight text-white">{plan.price}</span>
        <span className="mb-1.5 whitespace-nowrap text-xs text-slate-500">{plan.priceNote}</span>
      </div>

      <div className="mt-6">
        <Button to={to} variant={plan.highlight ? "primary" : "outline"} fullWidth arrow>
          {plan.cta}
        </Button>
      </div>

      <div className="mt-6 text-xs text-slate-500">
        <span className="text-slate-400">Ideal for:</span> {plan.idealFor}
      </div>

      <ul className="mt-6 space-y-3 border-t border-white/8 pt-6">
        {plan.features.map((f) => {
          const off = f.value === false;
          return (
            <li key={f.label} className="flex items-start gap-3 text-sm">
              <span
                className={cn(
                  "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                  off ? "bg-white/5 text-slate-600" : "bg-electric-500/15 text-electric-300",
                )}
              >
                {off ? <Minus className="h-3 w-3" /> : <Check className="h-3 w-3" />}
              </span>
              <span className={cn("flex-1", off ? "text-slate-600" : "text-slate-300")}>
                {f.label}
                {typeof f.value === "string" && <span className="block text-xs text-slate-500">{f.value}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
