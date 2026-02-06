import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Container } from "@/components/primitives/Container";
import { AxialLogo } from "@/components/primitives/AxialLogo";
import { GoldRule } from "@/components/primitives/GoldRule";

export default function NotFound() {
  return (
    <main>
      <SectionContainer background="obsidian" spacing="hero">
        <Container width="narrow" className="text-center">
          <AxialLogo variant="monogram" color="gold" className="!w-14 !h-14 mx-auto" />

          <h1 className="mt-10 text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.03em] leading-[1.15] text-parchment">
            Page not found.
          </h1>

          <GoldRule width="60px" animate={false} className="mx-auto mt-8" />

          <p className="mt-8 text-[1.125rem] text-slate max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="text-gold text-[1rem] hover:text-gold-muted transition-colors duration-200"
            >
              Return home
            </Link>
            <span className="text-gold/30 hidden sm:block">·</span>
            <Link
              href="/contact"
              className="text-parchment/60 text-[1rem] hover:text-gold transition-colors duration-200"
            >
              Contact the firm
            </Link>
          </div>
        </Container>
      </SectionContainer>
    </main>
  );
}
