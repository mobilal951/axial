"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";

export function HeroThreshold() {
  return (
    <SectionContainer background="obsidian" spacing="hero">
      <Container width="standard" className="flex flex-col items-center text-center">
        <motion.h1
          className="font-sans font-light text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[0.04em] text-parchment"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Accounting is structure.
          <br />
          Advisory is foresight.
        </motion.h1>

        {/* Gold axis line */}
        <motion.div
          className="h-[1.5px] bg-gold mt-8 md:mt-10 origin-center"
          style={{ width: "120px" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        <motion.p
          className="mt-8 md:mt-10 text-slate text-lg md:text-[1.125rem] leading-relaxed max-w-xl tracking-[0.005em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          Strategic accounting and advisory services for businesses and individuals who expect more from their firm.
        </motion.p>
      </Container>
    </SectionContainer>
  );
}
