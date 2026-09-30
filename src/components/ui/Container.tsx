import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
  id?: string;
};

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
};

export function Container({ children, className, as: Tag = "div", size = "default", id }: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </Tag>
  );
}
