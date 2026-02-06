import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";

export const metadata: Metadata = {
  title: "Terms of Use · Axial Accounting",
  description: "Terms of use for the Axial Accounting website.",
};

export default function TermsPage() {
  return (
    <main>
      <SectionContainer background="parchment" spacing="default" className="pt-40 md:pt-48">
        <Container width="narrow">
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            Legal
          </p>

          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
            Terms of Use
          </h1>

          <div className="mt-12 space-y-6 text-[1.125rem] leading-[1.7] text-obsidian/85">
            <p>
              This website is operated by Axial Accounting. By accessing and
              using this website, you accept and agree to the following terms.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              General Information
            </h2>
            <p>
              The content on this website is provided for general informational
              purposes only and does not constitute professional accounting, tax,
              or financial advice. No professional-client relationship is
              established through the use of this website or by submitting an
              inquiry through the contact form.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Professional Advice
            </h2>
            <p>
              Specific accounting, tax, and advisory matters require
              consideration of individual circumstances. Readers should not act
              upon information contained on this website without seeking
              professional counsel appropriate to their specific situation.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, and
              design elements — is the property of Axial Accounting and is
              protected by applicable intellectual property laws. Reproduction
              without written permission is prohibited.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Limitation of Liability
            </h2>
            <p>
              Axial Accounting makes no representations or warranties regarding
              the accuracy or completeness of information on this website. The
              Firm shall not be liable for any damages arising from the use of or
              reliance upon website content.
            </p>
          </div>
        </Container>
      </SectionContainer>
    </main>
  );
}
