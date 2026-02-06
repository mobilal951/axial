"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";

export function ContactInvitation() {
  return (
    <SectionContainer background="obsidian" spacing="hero">
      <Container width="narrow" className="text-center">
        <ScrollReveal>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-parchment">
            Every engagement begins
            <br />
            with a conversation.
          </h1>
        </ScrollReveal>

        <GoldRule width="80px" className="mx-auto mt-8" delay={0.3} />

        <ScrollReveal delay={120}>
          <p className="mt-8 text-[1.125rem] leading-[1.7] text-slate max-w-lg mx-auto">
            If you are considering a change in your accounting relationship,
            evaluating a structural question, or seeking advisory perspective on a
            matter of consequence — this is where that conversation starts.
          </p>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
