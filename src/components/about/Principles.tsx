"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";

const principles = [
  {
    name: "Direct Accountability",
    body: "Every engagement is led by the Managing Partner. There is no handoff to junior staff, no rotation between associates. The person who designs the strategy is the person who executes it and stands behind it. This is not a scalability model — it is an accountability model.",
  },
  {
    name: "Structural Thinking",
    body: "Tax positions, corporate structures, compensation strategies, and transition plans are not isolated decisions. They are interconnected systems. Axial approaches every engagement with an awareness of the full architecture — because a decision that optimises one element while destabilising another is not a solution.",
  },
  {
    name: "Considered Pace",
    body: "The firm does not operate on urgency manufactured by inattention. Deadlines are met because the work is planned well before they arrive. Clients receive the full measure of time their circumstances require — because the cost of a rushed decision in tax or corporate structure is almost always greater than the cost of a considered one.",
  },
];

export function Principles() {
  return (
    <SectionContainer background="parchment">
      <Container width="narrow">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-16 text-center">
            Principles
          </p>
        </ScrollReveal>

        <div className="space-y-10 md:space-y-16">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.name} delay={i * 100}>
              <div>
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-medium tracking-[0.015em] leading-[1.3] text-obsidian">
                  {principle.name}
                </h3>
                <GoldRule width="40px" animate delay={0.3} className="mt-4 mb-6" />
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/85">
                  {principle.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionContainer>
  );
}
