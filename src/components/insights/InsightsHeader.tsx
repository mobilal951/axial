"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";

export function InsightsHeader() {
  return (
    <SectionContainer background="parchment" spacing="compact" className="pt-40 md:pt-48 pb-8">
      <Container width="narrow">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            Insights
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
            Perspective from the firm.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-6 text-[1.125rem] leading-[1.7] tracking-[0.005em] text-slate">
            Analysis, commentary, and structural thinking on the topics that
            shape our clients&apos; decisions.
          </p>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
