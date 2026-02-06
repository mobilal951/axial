"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { services } from "@/data/services";

export function ServiceEntries() {
  return (
    <SectionContainer background="parchment" spacing="compact" className="pb-24 md:pb-32 lg:pb-40">
      <Container width="standard">
        {services.map((service, i) => {
          const isTypeB = i % 2 === 1;

          if (isTypeB) {
            return (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block py-12 border-t border-border-light"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16">
                    <div>
                      <h2 className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-normal tracking-[0.02em] leading-[1.2] text-obsidian group-hover:text-gold transition-colors duration-200">
                        {service.name}
                      </h2>
                      <p className="mt-4 text-[1.125rem] leading-[1.7] text-slate">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 lg:pt-2">
                      {service.focusAreas.slice(0, 4).map((area) => (
                        <span
                          key={area.title}
                          className="text-[0.9375rem] text-obsidian/70 leading-relaxed"
                        >
                          {area.title}
                        </span>
                      ))}
                      <span className="mt-3 text-gold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                        Explore this service
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 8h8M9 5l3 3-3 3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={service.slug} delay={i * 60}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-8 border-t border-border-light"
              >
                <div className="flex-1">
                  <h2 className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-normal tracking-[0.02em] leading-[1.2] text-obsidian group-hover:text-gold transition-colors duration-200">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-[1.125rem] leading-[1.7] text-slate max-w-lg">
                    {service.shortDescription}
                  </p>
                </div>

                <span className="text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          );
        })}
      </Container>
    </SectionContainer>
  );
}
