"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";

export function ProfessionalStanding() {
  return (
    <SectionContainer background="stone" spacing="compact">
      <Container width="narrow">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            Professional Standing
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="text-[0.9375rem] leading-[1.7] text-obsidian/75">
            Axial Accounting is a public accounting practice registered in the
            Province of Ontario, Canada. The firm maintains professional liability
            coverage and adheres to the standards of practice established by CPA
            Ontario and the Chartered Professional Accountants of Canada.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-4 text-[0.9375rem] leading-[1.7] text-obsidian/75">
            All assurance, review, and compilation engagements are performed in
            accordance with Canadian Auditing Standards (CAS) and Canadian
            Standards on Review Engagements (CSRE) as applicable.
          </p>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
