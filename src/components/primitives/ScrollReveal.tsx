"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: direction === "up" ? 20 : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: direction === "up" ? 20 : 0 }
      }
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
