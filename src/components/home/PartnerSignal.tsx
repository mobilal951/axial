"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";

export function PartnerSignal() {
  return (
    <SectionContainer background="obsidian">
      <Container width="standard">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          {/* Left — Statement */}
          <ScrollReveal>
            <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-parchment/85">
              Axial was founded on a conviction: that accounting, practised with
              intention, is one of the most consequential advisory disciplines a
              business can access. Every structure we build, every position we
              take, every plan we design reflects that conviction. The work is
              precise because the stakes are real.
            </p>
          </ScrollReveal>

          {/* Right — Partner name block */}
          <ScrollReveal delay={120}>
            <div className="lg:text-right">
              <GoldRule
                width="60px"
                animate={true}
                delay={0.5}
                className="mb-8 lg:ml-auto"
              />

              <p className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.25] tracking-[0.01em] text-parchment">
                Stephen Douglas Thompson
              </p>

              <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-gold">
                CPA, CA
              </p>

              <p className="mt-1 text-[13px] font-semibold tracking-[0.08em] uppercase text-slate">
                Managing Partner
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </SectionContainer>
  );
}
