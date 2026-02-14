"use client";

import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";
import { JsonLd } from "@/components/primitives/JsonLd";
import type { Insight } from "@/data/insights";

interface InsightArticleLayoutProps {
  insight: Insight;
}

export function InsightArticleLayout({ insight }: InsightArticleLayoutProps) {
  const formattedDate = new Date(insight.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.excerpt,
          datePublished: insight.date,
          author: {
            "@type": "Person",
            name: "Stephen Douglas Thompson",
          },
          publisher: {
            "@type": "Organization",
            name: "Axial Accounting",
            url: "https://axialaccounting.com",
          },
        }}
      />
      <article>
      <SectionContainer background="parchment" spacing="default" className="pt-28 md:pt-48">
        <Container width="narrow">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] tracking-[0.08em] text-slate">
                {formattedDate}
              </span>
              <span className="text-gold/40">·</span>
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold">
                {insight.category}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-[0.02em] leading-[1.15] text-obsidian">
              {insight.title}
            </h1>
          </ScrollReveal>

          <GoldRule width="60px" className="mt-8 mb-12" delay={0.4} />

          <div className="space-y-6">
            {insight.content.map((paragraph, i) => (
              <ScrollReveal key={i} delay={160 + i * 40}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-obsidian/90">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border-light flex flex-col sm:flex-row justify-between gap-6">
            <Link
              href="/insights"
              className="text-slate hover:text-gold transition-colors duration-200 text-[0.9375rem]"
            >
              ← Back to Insights
            </Link>
            <Link
              href="/contact"
              className="text-gold hover:text-gold-muted transition-colors duration-200 text-[0.9375rem]"
            >
              Contact the firm about this topic →
            </Link>
          </div>
        </Container>
      </SectionContainer>
      </article>
    </main>
  );
}
