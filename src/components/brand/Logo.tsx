import { Link } from "react-router-dom";
import { KSymbol } from "./KSymbol";
import { cn } from "@/lib/utils";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const symbol = { sm: "h-8 w-8", md: "h-9 w-9", lg: "h-11 w-11" }[size];
  const text = { sm: "text-base", md: "text-lg", lg: "text-2xl" }[size];
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="KYROCODEX home">
      <KSymbol filled className={cn(symbol, "transition-transform duration-500 group-hover:rotate-[-6deg]")} />
      <span className={cn("font-display font-bold tracking-[0.14em] text-white", text)}>
        KYRO<span className="text-gradient">CODEX</span>
      </span>
    </Link>
  );
}
