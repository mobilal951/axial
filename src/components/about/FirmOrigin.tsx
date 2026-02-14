"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";

export function FirmOrigin() {
  return (
    <SectionContainer background="parchment" spacing="default" className="pt-28 md:pt-48">
      <Container width="narrow">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            About the Firm
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
            Built on a single premise.
          </h1>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          <ScrollReveal delay={160}>
            <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
              Axial Accounting was established to deliver something increasingly
              difficult to find in public practice: sustained, attentive,
              structurally sound advisory — delivered by a practitioner with
              direct accountability for the outcome.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
              The firm serves a deliberately focused client base. Owner-managed
              businesses, professionals with complex tax positions, individuals
              navigating significant financial transitions — each engagement is
              selected for alignment, not volume. This is a practice built on
              depth, not breadth.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
              The name itself reflects the approach. An axis is a fixed reference
              line — the point from which everything else is measured. At Axial,
              that reference line is the client&apos;s actual position: financial,
              structural, and strategic. Every recommendation is oriented from
              that centre.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </SectionContainer>
  );
}
