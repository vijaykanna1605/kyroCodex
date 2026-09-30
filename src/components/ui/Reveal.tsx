import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 28,
  x = 0,
  scale = 1,
  once = true,
  as = "div",
  amount = 0.2,
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

/** Staggers children that use <StaggerItem/> */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
