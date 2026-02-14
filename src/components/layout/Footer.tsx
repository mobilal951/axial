import Link from "next/link";
import { AxialLogo } from "@/components/primitives/AxialLogo";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/primitives/Container";
import { GoldRule } from "@/components/primitives/GoldRule";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian">
      <Container width="wide">
        <GoldRule width="100%" animate={false} className="opacity-20" />

        {/* Main grid */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Axial Accounting — Home">
              <AxialLogo
                variant="monogram"
                color="gold"
                className="!w-10 !h-10 hover:scale-[1.02] transition-transform duration-300"
              />
            </Link>
            <p className="mt-4 text-[0.8125rem] leading-relaxed text-parchment/50 max-w-[260px]">
              Strategic accounting, tax planning, and advisory services for
              businesses and individuals in Ontario.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.8125rem] text-parchment/60 hover:text-gold transition-colors duration-200 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5 text-[0.8125rem] text-parchment/60">
              <p>918 Dundas St E, Suite 301<br />Mississauga, ON L4Y 4H9</p>
              <a
                href="mailto:info@axialaccounting.com"
                className="hover:text-gold transition-colors duration-200 w-fit"
              >
                info@axialaccounting.com
              </a>
              <a
                href="tel:+14374768079"
                className="hover:text-gold transition-colors duration-200 w-fit"
              >
                (437) 476-8079
              </a>
            </div>
            <p className="mt-5 text-[11px] tracking-[0.06em] text-parchment/30">
              CPA Ontario &middot; Member in Good Standing
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-parchment/30 tracking-wide">
            &copy; {year} Axial Accounting. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[12px] text-parchment/30 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-parchment/30 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
