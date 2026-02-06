"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { GoldRule } from "@/components/primitives/GoldRule";

export function ManagingPartner() {
  return (
    <SectionContainer background="obsidian">
      <Container width="standard">
        <div className="max-w-3xl">
          <div>
            <ScrollReveal delay={80}>
              <GoldRule width="60px" delay={0.4} className="mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.25] tracking-[0.01em] text-parchment">
                Stephen Douglas Thompson
              </p>
              <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-gold">
                CPA, CA
              </p>
              <p className="mt-1 text-[13px] font-semibold tracking-[0.08em] uppercase text-slate">
                Managing Partner
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-5">
              <ScrollReveal delay={200}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-parchment/85">
                  Stephen Douglas Thompson founded Axial Accounting to practice
                  public accounting the way he believes it should be practised — with
                  direct engagement, structural rigour, and a perspective that extends
                  well beyond the current fiscal year.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={280}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-parchment/85">
                  His career spans public practice and advisory work across a range
                  of industries, with particular depth in owner-managed businesses,
                  professional corporations, and high-net-worth individual planning.
                  He holds the Chartered Professional Accountant and Chartered
                  Accountant designations and is a member in good standing with CPA
                  Ontario.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={360}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-parchment/85">
                  Thompson&apos;s approach to client relationships is defined by two
                  commitments. The first is availability — clients of the firm work
                  directly with the Managing Partner, not through layers of
                  delegation. The second is continuity — understanding a client&apos;s
                  full financial architecture, maintained over years, produces
                  advisory outcomes that episodic engagements cannot.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={440}>
                <p className="text-[1.125rem] leading-[1.7] tracking-[0.005em] text-parchment/85">
                  He established Axial with the belief that the profession&apos;s
                  greatest value lies not in compliance alone, but in the
                  interpretive, structural, and strategic work that surrounds it. The
                  firm is the embodiment of that belief.
                </p>
              </ScrollReveal>
            </div>

            {/* Credentials */}
            <ScrollReveal delay={520}>
              <div className="mt-12 pt-8 border-t border-border-dark space-y-3">
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold w-32 shrink-0">
                    Designations
                  </span>
                  <span className="text-[0.9375rem] text-parchment/70">
                    Chartered Professional Accountant (CPA), Chartered Accountant (CA)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold w-32 shrink-0">
                    Licensing
                  </span>
                  <span className="text-[0.9375rem] text-parchment/70">
                    CPA Ontario, Member in Good Standing
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold w-32 shrink-0">
                    Focus Areas
                  </span>
                  <span className="text-[0.9375rem] text-parchment/70">
                    Owner-Manager Advisory, Tax Architecture, Corporate Reorganisation, Succession & Transition Planning
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
}
