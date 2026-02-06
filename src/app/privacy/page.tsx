import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";

export const metadata: Metadata = {
  title: "Privacy Policy · Axial Accounting",
  description: "Privacy policy for Axial Accounting.",
};

export default function PrivacyPage() {
  return (
    <main>
      <SectionContainer background="parchment" spacing="default" className="pt-40 md:pt-48">
        <Container width="narrow">
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-gold mb-8">
            Legal
          </p>

          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-obsidian">
            Privacy Policy
          </h1>

          <div className="mt-12 space-y-6 text-[1.125rem] leading-[1.7] text-obsidian/85">
            <p>
              Axial Accounting (&ldquo;the Firm&rdquo;) is committed to
              protecting the privacy and confidentiality of personal information
              collected in the course of providing professional services.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Information Collection
            </h2>
            <p>
              The Firm collects personal information that is voluntarily provided
              through the contact form on this website, including name, email
              address, phone number, and the content of your inquiry. This
              information is used solely to respond to your inquiry and, where
              applicable, to facilitate professional engagement.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Use of Information
            </h2>
            <p>
              Personal information collected through this website is used
              exclusively for the purpose of responding to inquiries, providing
              professional services, and maintaining the client relationship. The
              Firm does not sell, trade, or otherwise transfer personal
              information to third parties.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Professional Obligations
            </h2>
            <p>
              As a Chartered Professional Accountant, the Managing Partner is
              bound by professional standards of confidentiality established by
              CPA Ontario and the Chartered Professional Accountants of Canada.
              These obligations extend to all information received in the course
              of professional engagement.
            </p>

            <h2 className="text-[1.5rem] font-medium tracking-[0.015em] pt-4">
              Contact
            </h2>
            <p>
              Questions regarding this privacy policy may be directed to
              contact@axialaccounting.com.
            </p>
          </div>
        </Container>
      </SectionContainer>
    </main>
  );
}
