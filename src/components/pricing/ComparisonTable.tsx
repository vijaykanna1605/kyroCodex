import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Row = { feature: string; values: (string | boolean)[] };

export function ComparisonTable({ plans, rows }: { plans: string[]; rows: Row[] }) {
  const highlightIndex = 1;
  return (
    <div className="overflow-hidden rounded-3xl glass">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/8">
              <th className="sticky left-0 bg-ink-900/90 px-6 py-5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 backdrop-blur">
                Feature
              </th>
              {plans.map((p, i) => (
                <th
                  key={p}
                  className={cn(
                    "px-5 py-5 text-center font-display text-base font-semibold text-white",
                    i === highlightIndex && "bg-electric-500/[0.08]",
                  )}
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} className={cn("border-b border-white/6 last:border-0", ri % 2 && "bg-white/[0.015]")}>
                <td className="sticky left-0 bg-ink-900/90 px-6 py-4 font-medium text-slate-300 backdrop-blur">{row.feature}</td>
                {row.values.map((v, i) => (
                  <td key={i} className={cn("px-5 py-4 text-center text-slate-400", i === highlightIndex && "bg-electric-500/[0.06]")}>
                    {v === true ? (
                      <Check className="mx-auto h-4 w-4 text-electric-300" />
                    ) : v === false ? (
                      <Minus className="mx-auto h-4 w-4 text-slate-600" />
                    ) : (
                      <span className={cn(i === highlightIndex && "text-slate-200")}>{v}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
