"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { AxialLogo } from "@/components/primitives/AxialLogo";

export function ContactAssurance() {
  return (
    <SectionContainer background="stone" spacing="compact">
      <Container width="narrow" className="text-center">
        <ScrollReveal>
          <p className="text-[0.9375rem] text-obsidian/60 mb-8">
            All inquiries are reviewed directly by the Managing Partner. You can
            expect a response within two business days.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex justify-center">
            <AxialLogo variant="monogram" color="gold" className="!w-10 !h-10 opacity-40" />
          </div>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
