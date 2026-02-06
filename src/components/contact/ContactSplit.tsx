"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { ContactForm } from "./ContactForm";

export function ContactSplit() {
  return (
    <SectionContainer background="parchment">
      <Container width="standard">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24">
          {/* Left — Firm details */}
          <ScrollReveal>
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
                The Firm
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[1.125rem] text-obsidian font-medium">
                    Axial Accounting
                  </p>
                  <p className="text-[1rem] text-slate mt-1">Ontario, Canada</p>
                </div>

                <div>
                  <p className="text-[1.125rem] text-obsidian">
                    contact@axialaccounting.com
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-[0.9375rem] text-slate leading-relaxed">
                    Monday through Friday
                    <br />
                    9:00 AM – 5:00 PM Eastern
                  </p>
                  <p className="text-[0.875rem] text-slate/60 mt-3">
                    Initial consultations are scheduled by appointment.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Contact form */}
          <ScrollReveal delay={80}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </SectionContainer>
  );
}
