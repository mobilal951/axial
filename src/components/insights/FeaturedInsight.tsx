"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { insights } from "@/data/insights";

export function FeaturedInsight() {
  const featured = insights[0];
  if (!featured) return null;

  return (
    <SectionContainer background="obsidian" spacing="compact">
      <Container width="standard">
        <Link href={`/insights/${featured.slug}`} className="group block">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold shrink-0">
                Featured
              </span>
              <div className="flex-1">
                <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-normal tracking-[0.02em] leading-[1.25] text-parchment group-hover:text-gold transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[1rem] leading-[1.7] text-slate max-w-2xl">
                  {featured.excerpt}
                </p>
              </div>
              <span className="text-gold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200 shrink-0">
                Read
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 8h8M9 5l3 3-3 3" />
                </svg>
              </span>
            </div>
          </ScrollReveal>
        </Link>
      </Container>
    </SectionContainer>
  );
}
