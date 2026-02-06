"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";
import { insights } from "@/data/insights";

export function InsightPreview() {
  const featured = insights[0];
  if (!featured) return null;

  return (
    <SectionContainer background="parchment">
      <Container width="narrow" className="text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-10">
            From the Firm
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal tracking-[0.02em] leading-[1.2] text-obsidian">
            {featured.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-6 text-[1.125rem] leading-[1.7] text-slate max-w-lg mx-auto">
            {featured.excerpt}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Link
            href={`/insights/${featured.slug}`}
            className="inline-flex items-center gap-2 mt-8 text-gold text-[1rem] tracking-wide hover:gap-3 transition-all duration-200"
          >
            Continue reading
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8h8M9 5l3 3-3 3" />
            </svg>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <GoldRule width="60px" className="mx-auto mt-12 mb-6" delay={0.6} />
          <Link
            href="/insights"
            className="text-[0.9375rem] text-slate hover:text-gold transition-colors duration-200"
          >
            View all insights →
          </Link>
        </ScrollReveal>
      </Container>
    </SectionContainer>
  );
}
