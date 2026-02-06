"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface GoldRuleProps {
  width?: string;
  animate?: boolean;
  className?: string;
  delay?: number;
}

export function GoldRule({
  width = "120px",
  animate = true,
  className,
  delay = 0.3,
}: GoldRuleProps) {
  const { ref, isInView } = useScrollReveal();

  if (!animate) {
    return (
      <div
        className={cn("h-[1.5px] bg-gold origin-center", className)}
        style={{ width }}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn("h-[1.5px] bg-gold origin-center", className)}
      style={{ width }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      }}
    />
  );
}
