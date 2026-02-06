"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";

const pillars = ["STRUCTURE", "CLARITY", "POSITION"];

export function PracticePillars() {
  return (
    <SectionContainer background="parchment">
      <Container width="standard">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20 items-start">
          {/* Left — Pillars along vertical axis */}
          <ScrollReveal>
            <div className="flex items-start gap-6">
              {/* Vertical gold line */}
              <div className="w-[1.5px] bg-gold self-stretch shrink-0" />

              {/* Pillar labels */}
              <div className="flex flex-col gap-6 py-2">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="text-[13px] font-semibold tracking-[0.08em] text-gold"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Philosophy text */}
          <ScrollReveal delay={80}>
            <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
              Every engagement at Axial begins with the same question: where do
              you need to be, and what stands between here and there? The answer
              is never just a number. It is a structure — of obligations,
              opportunities, and timing. We build that structure with precision,
              maintain it with discipline, and adapt it as your circumstances
              evolve. This is accounting practised as advisory.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </SectionContainer>
  );
}
