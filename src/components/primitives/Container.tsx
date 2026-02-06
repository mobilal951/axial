import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  width?: "narrow" | "standard" | "wide";
  className?: string;
}

const widthMap = {
  narrow: "max-w-[720px]",
  standard: "max-w-[1080px]",
  wide: "max-w-[1280px]",
};

export function Container({
  children,
  width = "wide",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-12",
        widthMap[width],
        className
      )}
    >
      {children}
    </div>
  );
}
