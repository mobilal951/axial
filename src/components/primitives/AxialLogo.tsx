"use client";

import { cn } from "@/lib/utils";

interface AxialLogoProps {
  variant?: "full" | "monogram";
  color?: "gold" | "parchment";
  className?: string;
}

function Monogram({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left leg of A */}
      <path
        d="M12 68L36 8h2L22 68H12z"
        fill={color}
      />
      {/* Right leg of A */}
      <path
        d="M68 68L44 8h-2l16 60h10z"
        fill={color}
      />
      {/* Diamond cutout at apex */}
      <path
        d="M40 16L34 28h12L40 16z"
        fill={color}
      />
      {/* Horizontal axis line */}
      <rect
        x="6"
        y="43"
        width="68"
        height="1.5"
        fill={color}
      />
      {/* Inner crossbar */}
      <rect
        x="24"
        y="48"
        width="32"
        height="1.2"
        fill={color}
        opacity="0.4"
      />
    </svg>
  );
}

export function AxialLogo({
  variant = "full",
  color = "gold",
  className,
}: AxialLogoProps) {
  const fillColor = color === "gold" ? "#C4A265" : "#F5F0E8";

  if (variant === "monogram") {
    return <Monogram color={fillColor} className={cn("w-12 h-12", className)} />;
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Monogram color={fillColor} className="w-10 h-10" />
      <div className="flex flex-col leading-none">
        <span
          className="text-[15px] font-light tracking-[0.18em]"
          style={{ color: fillColor }}
        >
          AXIAL
        </span>
        <span
          className="text-[9.5px] font-light tracking-[0.22em] mt-[2px]"
          style={{ color: fillColor, opacity: 0.8 }}
        >
          ACCOUNTING
        </span>
      </div>
    </div>
  );
}
