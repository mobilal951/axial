"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { AxialLogo } from "@/components/primitives/AxialLogo";
import { GoldRule } from "@/components/primitives/GoldRule";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content">
      <SectionContainer background="obsidian" spacing="hero">
        <Container width="narrow" className="text-center">
          <AxialLogo variant="monogram" color="gold" className="!w-14 !h-14 mx-auto" />

          <h1 className="mt-10 text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-parchment">
            Something went wrong.
          </h1>

          <GoldRule width="60px" animate={false} className="mx-auto mt-8" />

          <p className="mt-8 text-[1.125rem] text-slate max-w-md mx-auto leading-relaxed">
            An unexpected error has occurred. Please try again or contact the
            firm directly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={reset}
              className="text-gold text-[1rem] hover:text-gold-muted transition-colors duration-200"
            >
              Try again
            </button>
            <span className="text-gold/30 hidden sm:block">&middot;</span>
            <a
              href="mailto:info@axialaccounting.com"
              className="text-parchment/60 text-[1rem] hover:text-gold transition-colors duration-200"
            >
              Email the firm
            </a>
          </div>
        </Container>
      </SectionContainer>
    </main>
  );
}
