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
          {/* Left — Firm details + Map */}
          <div className="flex flex-col gap-10">
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
                    <p className="text-[1rem] text-slate mt-1">
                      918 Dundas St E, Suite 301
                      <br />
                      Mississauga, ON L4Y 4H9
                    </p>
                  </div>

                  <div>
                    <a
                      href="mailto:info@axialaccounting.com"
                      className="text-[1.125rem] text-obsidian hover:text-gold transition-colors duration-200 block"
                    >
                      info@axialaccounting.com
                    </a>
                    <a
                      href="tel:+14374768079"
                      className="text-[1.125rem] text-obsidian hover:text-gold transition-colors duration-200 block mt-1"
                    >
                      (437) 476-8079
                    </a>
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

            <ScrollReveal delay={120}>
              <div className="overflow-hidden rounded-sm border border-border-light aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.123!2d-79.5928!3d43.5988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b471ae4a4f5e1%3A0x0!2s918+Dundas+St+E%2C+Mississauga%2C+ON+L4Y+4H9!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Axial Accounting — 918 Dundas St E, Suite 301, Mississauga, ON"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal delay={80}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </SectionContainer>
  );
}
