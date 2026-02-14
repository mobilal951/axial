"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";
import { ServiceCallout } from "./ServiceCallout";
import { JsonLd } from "@/components/primitives/JsonLd";
import type { Service } from "@/data/services";

interface ServiceDetailLayoutProps {
  service: Service;
}

export function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          provider: {
            "@type": "AccountingService",
            name: "Axial Accounting",
            url: "https://axialaccounting.com",
          },
        }}
      />
      {/* Header */}
      <SectionContainer background="parchment" spacing="default" className="pt-28 md:pt-48">
        <Container width="narrow">
          <ScrollReveal>
            <Link
              href="/services"
              className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold hover:text-gold-muted transition-colors duration-200"
            >
              ← Services
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="mt-8 text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
              {service.headline}
            </h1>
          </ScrollReveal>

          <div className="mt-10 space-y-5">
            {service.opening.map((paragraph, i) => (
              <ScrollReveal key={i} delay={160 + i * 80}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionContainer>

      {/* Focus Areas */}
      <SectionContainer background="parchment" spacing="compact" className="pt-0">
        <Container width="narrow">
          <div className="space-y-12">
            {service.focusAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 60}>
                <div>
                  <h3 className="text-[1.25rem] md:text-[1.5rem] font-medium tracking-[0.015em] leading-[1.3] text-obsidian">
                    {area.title}
                  </h3>
                  <GoldRule width="40px" delay={0.3} className="mt-3 mb-5" />
                  <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/85">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionContainer>

      {/* Callout */}
      <ServiceCallout text={service.callout} />

      {/* CTA */}
      <SectionContainer background="parchment" spacing="compact">
        <Container width="narrow" className="text-center">
          <ScrollReveal>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-gold text-[1.125rem] tracking-wide transition-all duration-200"
            >
              Discuss this with the firm
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M4 8h8M9 5l3 3-3 3" />
              </svg>
            </Link>
          </ScrollReveal>
        </Container>
      </SectionContainer>
    </main>
  );
}
