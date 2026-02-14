"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { services } from "@/data/services";

export function ServiceIndex() {
  return (
    <SectionContainer background="stone" spacing="default">
      <Container width="standard">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-12">
            Services
          </p>
        </ScrollReveal>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 80}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 py-6 border-t border-border-light last:border-b transition-colors duration-200"
              >
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-medium tracking-[0.015em] text-obsidian group-hover:text-gold transition-colors duration-200 leading-snug">
                  {service.name}
                </h3>

                <p className="text-[0.9375rem] text-slate leading-relaxed md:text-right max-w-sm shrink-0 hidden lg:block">
                  {service.shortDescription}
                </p>

                <span className="text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 10h10M11 6l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionContainer>
  );
}
