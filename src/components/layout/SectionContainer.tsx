import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  background?: "obsidian" | "parchment" | "stone" | "white";
  spacing?: "default" | "compact" | "hero";
  className?: string;
  id?: string;
}

const bgMap = {
  obsidian: "bg-obsidian text-parchment",
  parchment: "bg-parchment text-obsidian",
  stone: "bg-stone text-obsidian",
  white: "bg-warm-white text-obsidian",
};

const spacingMap = {
  default: "py-24 md:py-32 lg:py-40",
  compact: "py-16 md:py-20 lg:py-24",
  hero: "py-24 md:py-40 lg:py-0 lg:min-h-screen lg:max-h-[900px] lg:flex lg:items-center",
};

export function SectionContainer({
  children,
  background = "parchment",
  spacing = "default",
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(bgMap[background], spacingMap[spacing], className)}
    >
      {children}
    </section>
  );
}
