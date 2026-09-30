import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "whatsapp";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  arrow?: boolean;
  fullWidth?: boolean;
};

type LinkProps = BaseProps & { to: string; href?: never; external?: never };
type AnchorProps = BaseProps & { href: string; to?: never; external?: boolean };
type NativeProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { to?: never; href?: never };

export type ButtonProps = LinkProps | AnchorProps | NativeProps;

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-electric-500 to-violet-500 text-white shadow-[0_10px_30px_-10px_rgba(47,102,255,0.7)] hover:shadow-[0_18px_40px_-12px_rgba(79,133,255,0.8)] hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "bg-white text-ink-900 hover:bg-electric-200 hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(255,255,255,0.5)]",
  outline:
    "border border-white/15 bg-white/[0.03] text-white hover:border-electric-400/60 hover:bg-electric-500/10 hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  whatsapp:
    "bg-[#25D366] text-ink-950 hover:bg-[#3be07a] hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(37,211,102,0.7)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, icon, arrow, fullWidth } = props;
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  const content = (
    <>
      {icon && <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.external === false ? undefined : "_blank"}
        rel={props.external === false ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, icon: _i, arrow: _a, fullWidth: _f, ...rest } =
    props as NativeProps;
  void _v; void _s; void _c; void _ch; void _i; void _a; void _f;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
