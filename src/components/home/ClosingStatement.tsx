"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";
import { AxialLogo } from "@/components/primitives/AxialLogo";

export function ClosingStatement() {
  return (
    <SectionContainer background="obsidian" spacing="hero">
      <Container width="narrow" className="flex flex-col items-center text-center">
        <ScrollReveal>
          <AxialLogo variant="monogram" color="gold" className="!w-16 !h-16" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-10 text-[clamp(1.5rem,3vw,2.25rem)] font-light tracking-[0.02em] leading-[1.2] text-parchment">
            The right firm is not the largest firm.
            <br />
            It is the most considered one.
          </h2>
        </ScrollReveal>

        <GoldRule width="80px" className="mt-10" delay={0.5} />

        <ScrollReveal delay={240}>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 text-gold text-[1.125rem] tracking-wide transition-all duration-200"
          >
            Begin a conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M4 8h8M9 5l3 3-3 3" />
            </svg>
          </Link>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
