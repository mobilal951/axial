"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";

export function ServicesPhilosophy() {
  return (
    <SectionContainer background="parchment" spacing="default" className="pt-40 md:pt-48">
      <Container width="narrow">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            Services
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
            Four disciplines. One integrated practice.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-8 text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
            Axial does not offer services as isolated transactions. Tax planning
            informs corporate structure. Advisory shapes compensation design.
            Assurance strengthens the foundation on which every other decision
            rests. Each discipline below operates within this integrated
            framework — because the most consequential work happens at the
            intersections.
          </p>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
