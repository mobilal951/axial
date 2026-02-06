"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { insights, categories } from "@/data/insights";

export function InsightIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  return (
    <SectionContainer background="parchment">
      <Container width="standard">
        {/* Category filter */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-6 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 pb-1 border-b-2 ${
                  activeCategory === cat
                    ? "text-gold border-gold"
                    : "text-slate border-transparent hover:text-obsidian"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Insight list */}
        <div className="flex flex-col">
          {filtered.map((insight, i) => (
            <ScrollReveal key={insight.slug} delay={i * 60}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-t border-border-light last:border-b"
              >
                <span className="text-[13px] tracking-[0.08em] text-slate w-28 shrink-0">
                  {new Date(insight.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                <h3 className="flex-1 text-[1.25rem] font-medium tracking-[0.015em] leading-snug text-obsidian group-hover:text-gold transition-colors duration-200">
                  {insight.title}
                </h3>

                <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold shrink-0 hidden md:block">
                  {insight.category}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionContainer>
  );
}
