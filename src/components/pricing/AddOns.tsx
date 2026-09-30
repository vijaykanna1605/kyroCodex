import { Plus } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { webAddOns } from "@/data/plans";

export function AddOns({ items = webAddOns }: { items?: typeof webAddOns }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
      {items.map((a) => (
        <StaggerItem key={a.name}>
          <div className="group flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display text-base font-semibold text-white">{a.name}</h4>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors group-hover:border-electric-400/50 group-hover:text-electric-300">
                <Plus className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{a.description}</p>
            <div className="mt-4 text-sm font-medium text-electric-300">{a.price}</div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
