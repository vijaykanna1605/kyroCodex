import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * KYROCODEX "K" monogram. Pure SVG so it scales from favicon to hero size.
 */
export function KSymbol({ className, filled = false }: { className?: string; filled?: boolean }) {
  const id = useId().replace(/:/g, "");
  const grad = `kgrad-${id}`;
  const glow = `kglow-${id}`;

  return (
    <svg viewBox="0 0 64 64" className={cn("h-10 w-10", className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fa8ff" />
          <stop offset="0.55" stopColor="#4f85ff" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {filled && <rect x="2" y="2" width="60" height="60" rx="16" fill="#0a0e1d" />}
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#${grad})`} opacity={filled ? 0.18 : 0.1} />
      <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="15.5" stroke={`url(#${grad})`} strokeWidth="1.5" fill="none" opacity="0.8" />
      <g filter={`url(#${glow})`}>
        <path d="M21 17v30" stroke={`url(#${grad})`} strokeWidth="6.5" strokeLinecap="round" />
        <path d="M44 17 26 32l18 15" stroke={`url(#${grad})`} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

/** Large decorative K used in hero art — strokes only, no frame. */
export function KStroke({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const grad = `kstroke-${id}`;
  return (
    <svg viewBox="0 0 64 64" className={cn("h-64 w-64", className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fa8ff" />
          <stop offset="0.5" stopColor="#4f85ff" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <path d="M18 8v48" stroke={`url(#${grad})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M50 8 24 32l26 24" stroke={`url(#${grad})`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
