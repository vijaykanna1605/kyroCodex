import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Frames                                                              */
/* ------------------------------------------------------------------ */

export function BrowserFrame({
  children,
  className,
  url = "kyrocodex.com",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/8 bg-ink-850 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[60%] items-center justify-center gap-1.5 rounded-md bg-white/5 text-[10px] text-slate-500">
          <span className="h-2 w-2 rounded-sm border border-slate-500" />
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-56 overflow-hidden rounded-[2.4rem] border-[6px] border-ink-700 bg-ink-900 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-950" />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Skeleton primitives                                                 */
/* ------------------------------------------------------------------ */

function Bar({ w = "w-24", h = "h-2", className }: { w?: string; h?: string; className?: string }) {
  return <div className={cn("rounded-full bg-white/10", w, h, className)} />;
}

function Sparkline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={cn("h-full w-full", className)} preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4f85ff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4f85ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 45 C 20 40, 30 20, 50 28 S 80 50, 100 30 S 140 5, 160 18 S 190 30, 200 12 V60 H0 Z" fill="url(#spark)" />
      <path d="M0 45 C 20 40, 30 20, 50 28 S 80 50, 100 30 S 140 5, 160 18 S 190 30, 200 12" fill="none" stroke="#7fa8ff" strokeWidth="2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Screens                                                             */
/* ------------------------------------------------------------------ */

export function DashboardScreen({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex h-full min-h-[22rem] bg-ink-900 text-[10px]", className)}>
      {/* sidebar */}
      <aside className={cn("w-40 shrink-0 flex-col gap-3 border-r border-white/6 p-4", compact ? "hidden" : "hidden sm:flex")}>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-linear-to-br from-electric-500 to-violet-500" />
          <Bar w="w-16" h="h-2" />
        </div>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5", i === 1 && "bg-electric-500/15")}>
            <span className={cn("h-2.5 w-2.5 rounded-sm", i === 1 ? "bg-electric-400" : "bg-white/15")} />
            <Bar w={i % 2 ? "w-16" : "w-12"} className={i === 1 ? "bg-electric-300/60" : ""} />
          </div>
        ))}
      </aside>
      {/* main */}
      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <Bar w="w-28" h="h-2.5" className="bg-white/25" />
            <Bar w="w-40" />
          </div>
          <div className="flex gap-2">
            <span className="h-6 w-16 rounded-md border border-white/10" />
            <span className="h-6 w-16 rounded-md bg-linear-to-r from-electric-500 to-violet-500" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: "₹18.4L", d: "+24%" },
            { v: "3,842", d: "+12%" },
            { v: "98.2%", d: "+0.8%" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <Bar w="w-12" />
              <div className="mt-2 font-display text-sm font-semibold text-white">{s.v}</div>
              <div className="mt-1 text-[9px] text-emerald-400">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-5 gap-3">
          <div className="col-span-3 flex flex-col rounded-xl border border-white/8 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between">
              <Bar w="w-20" className="bg-white/20" />
              <Bar w="w-10" />
            </div>
            <div className="mt-3 flex-1">
              <Sparkline />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3">
            <Bar w="w-16" className="bg-white/20" />
            {[70, 45, 85, 30].map((p, i) => (
              <div key={i} className="mt-1 space-y-1">
                <Bar w="w-12" />
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <div className="h-full rounded-full bg-linear-to-r from-electric-500 to-violet-400" style={{ width: `${p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebsiteScreen({ className, accent = "blue" }: { className?: string; accent?: "blue" | "violet" | "cyan" }) {
  const grad = {
    blue: "from-electric-500/40 to-violet-500/20",
    violet: "from-violet-500/40 to-electric-500/20",
    cyan: "from-cyan-500/40 to-electric-500/20",
  }[accent];
  return (
    <div className={cn("flex h-full min-h-[20rem] flex-col bg-ink-900 text-[10px]", className)}>
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-md bg-linear-to-br from-electric-500 to-violet-500" />
          <Bar w="w-14" className="bg-white/25" />
        </div>
        <div className="hidden gap-4 sm:flex">
          {[1, 2, 3, 4].map((i) => (
            <Bar key={i} w="w-8" />
          ))}
        </div>
        <span className="h-5 w-14 rounded-full bg-white" />
      </div>
      <div className="relative flex-1 px-6 pb-6">
        <div className={cn("absolute inset-x-0 top-0 h-40 bg-linear-to-b opacity-60 blur-2xl", grad)} />
        <div className="relative mt-6 space-y-2.5">
          <Bar w="w-20" h="h-1.5" className="bg-electric-300/60" />
          <Bar w="w-3/4" h="h-4" className="bg-white/60" />
          <Bar w="w-2/3" h="h-4" className="bg-white/40" />
          <Bar w="w-1/2" h="h-2" />
          <div className="flex gap-2 pt-2">
            <span className="h-6 w-20 rounded-full bg-linear-to-r from-electric-500 to-violet-500" />
            <span className="h-6 w-20 rounded-full border border-white/15" />
          </div>
        </div>
        <div className="relative mt-6 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-white/8 bg-white/[0.04] p-3">
              <span className="block h-6 w-6 rounded-md bg-electric-500/30" />
              <Bar w="w-14" className="mt-2 bg-white/25" />
              <Bar w="w-full" className="mt-1.5" />
              <Bar w="w-3/4" className="mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-ink-900 px-4 pb-4 pt-9 text-[9px]", className)}>
      <div className="flex items-center justify-between">
        <div>
          <Bar w="w-16" h="h-1.5" />
          <Bar w="w-24" h="h-2.5" className="mt-1.5 bg-white/40" />
        </div>
        <span className="h-7 w-7 rounded-full bg-linear-to-br from-electric-500 to-violet-500" />
      </div>
      <div className="mt-4 rounded-2xl bg-linear-to-br from-electric-500 to-violet-500 p-3.5 text-white">
        <div className="text-[8px] opacity-80">Total balance</div>
        <div className="mt-1 font-display text-base font-semibold">₹2,48,320</div>
        <div className="mt-2 flex gap-1.5">
          <span className="h-4 w-12 rounded-full bg-white/25" />
          <span className="h-4 w-12 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="h-8 w-8 rounded-xl bg-white/8" />
            <Bar w="w-6" h="h-1" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Bar w="w-16" h="h-2" className="bg-white/30" />
        <Bar w="w-8" h="h-1.5" className="bg-electric-400/60" />
      </div>
      <div className="mt-2 space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl border border-white/6 bg-white/[0.03] p-2">
            <span className="h-6 w-6 rounded-lg bg-white/10" />
            <div className="flex-1">
              <Bar w="w-16" h="h-1.5" className="bg-white/25" />
              <Bar w="w-10" h="h-1" className="mt-1" />
            </div>
            <Bar w="w-8" h="h-1.5" className="bg-white/30" />
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-around border-t border-white/6 pt-3">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={cn("h-3 w-3 rounded-sm", i === 1 ? "bg-electric-400" : "bg-white/15")} />
        ))}
      </div>
    </div>
  );
}

export function StorefrontScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full min-h-[20rem] flex-col bg-[#0b0f1e] text-[10px]", className)}>
      <div className="flex items-center justify-between px-6 py-3">
        <Bar w="w-16" className="bg-white/30" />
        <div className="hidden gap-4 sm:flex">
          {[1, 2, 3].map((i) => (
            <Bar key={i} w="w-8" />
          ))}
        </div>
        <div className="flex gap-2">
          <span className="h-4 w-4 rounded-full bg-white/10" />
          <span className="h-4 w-4 rounded-full bg-electric-500" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-4 px-6 pb-6">
        <div className="flex flex-col justify-center gap-2.5">
          <Bar w="w-14" h="h-1.5" className="bg-violet-300/60" />
          <Bar w="w-full" h="h-4" className="bg-white/60" />
          <Bar w="w-5/6" h="h-4" className="bg-white/40" />
          <Bar w="w-2/3" />
          <span className="mt-2 h-6 w-24 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-white/8 bg-white/[0.03]">
              <div className={cn("h-14 bg-linear-to-br", i % 2 ? "from-electric-500/40 to-ink-800" : "from-violet-500/40 to-ink-800")} />
              <div className="p-2">
                <Bar w="w-10" className="bg-white/25" />
                <Bar w="w-6" h="h-1.5" className="mt-1.5 bg-electric-300/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortalScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full min-h-[20rem] flex-col bg-ink-900 text-[10px]", className)}>
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-md bg-cyan-400/70" />
          <Bar w="w-16" className="bg-white/25" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-5 w-16 rounded-md bg-white/6" />
          <span className="h-5 w-5 rounded-full bg-linear-to-br from-cyan-400 to-electric-500" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-3 p-5">
        <div className="col-span-2 space-y-3">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
            <Bar w="w-24" className="bg-white/25" />
            <div className="mt-3 grid grid-cols-7 gap-1">
              {Array.from({ length: 21 }).map((_, i) => (
                <span key={i} className={cn("h-5 rounded-sm", [3, 8, 12, 17].includes(i) ? "bg-cyan-400/60" : "bg-white/6")} />
              ))}
            </div>
          </div>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <span className="h-8 w-8 rounded-lg bg-white/8" />
              <div className="flex-1">
                <Bar w="w-24" className="bg-white/25" />
                <Bar w="w-32" className="mt-1.5" />
              </div>
              <span className="h-5 w-14 rounded-full bg-emerald-500/20" />
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="rounded-xl bg-linear-to-br from-cyan-500/30 to-electric-500/20 p-3">
            <Bar w="w-14" className="bg-white/40" />
            <div className="mt-2 font-display text-sm font-semibold text-white">Next visit</div>
            <Bar w="w-20" className="mt-2 bg-white/30" />
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3 space-y-2">
            <Bar w="w-16" className="bg-white/25" />
            {[1, 2, 3].map((i) => (
              <Bar key={i} w="w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CorporateScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full min-h-[20rem] flex-col bg-[#0a0c14] text-[10px]", className)}>
      <div className="flex items-center justify-between px-8 py-4">
        <Bar w="w-20" h="h-2.5" className="bg-white/40" />
        <div className="hidden gap-5 sm:flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Bar key={i} w="w-8" />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-8 pb-8">
        <Bar w="w-12" h="h-1.5" className="bg-slate-400/60" />
        <div className="mt-3 space-y-2">
          <Bar w="w-2/3" h="h-6" className="bg-white/70" />
          <Bar w="w-1/2" h="h-6" className="bg-white/50" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6 border-t border-white/8 pt-5">
          {["₹4,200Cr", "38", "14 yrs"].map((v) => (
            <div key={v}>
              <div className="font-display text-base font-semibold text-white">{v}</div>
              <Bar w="w-16" className="mt-1.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BookingScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full min-h-[20rem] flex-col bg-ink-900 text-[10px]", className)}>
      <div className="relative h-28 bg-linear-to-br from-violet-500/50 via-electric-500/30 to-ink-900 px-6 pt-4">
        <div className="flex items-center justify-between">
          <Bar w="w-16" className="bg-white/50" />
          <span className="h-5 w-14 rounded-full bg-white/90" />
        </div>
        <Bar w="w-48" h="h-4" className="mt-6 bg-white/70" />
      </div>
      <div className="-mt-6 mx-6 grid grid-cols-4 gap-2 rounded-xl border border-white/10 bg-ink-850 p-3 shadow-xl">
        {["Check-in", "Check-out", "Guests", ""].map((l, i) => (
          <div key={i} className={cn("rounded-lg p-2", i === 3 ? "bg-linear-to-r from-electric-500 to-violet-500" : "bg-white/5")}>
            {l && <div className="text-[8px] text-slate-500">{l}</div>}
            <Bar w="w-10" className={cn("mt-1", i === 3 && "mx-auto mt-2 bg-white/60")} />
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-3 gap-3 px-6 py-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
            <div className={cn("h-16 bg-linear-to-br", i === 2 ? "from-violet-500/40 to-ink-800" : "from-electric-500/30 to-ink-800")} />
            <div className="p-2.5">
              <Bar w="w-14" className="bg-white/30" />
              <div className="mt-2 flex items-center justify-between">
                <Bar w="w-8" h="h-1.5" />
                <Bar w="w-10" h="h-2" className="bg-electric-300/70" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsScreen({ className, compact }: { className?: string; compact?: boolean }) {
  return <DashboardScreen className={className} compact={compact} />;
}
