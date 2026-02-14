import Link from "next/link";
import { AxialLogo } from "@/components/primitives/AxialLogo";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/primitives/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian py-20 md:py-24">
      <Container width="wide" className="flex flex-col items-center text-center">
        {/* Monogram */}
        <Link href="/" aria-label="Axial Accounting — Home">
          <AxialLogo
            variant="monogram"
            color="gold"
            className="!w-12 !h-12 hover:scale-[1.02] transition-transform duration-300"
          />
        </Link>

        {/* Nav links */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {navItems.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="text-[13px] font-semibold tracking-[0.08em] uppercase text-parchment/70 hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
              {i < navItems.length - 1 && (
                <span className="text-gold/40 text-xs">·</span>
              )}
            </span>
          ))}
        </nav>

        {/* Contact details */}
        <div className="mt-10 flex flex-col items-center gap-2 text-[12px] md:text-[13px] text-parchment/50 tracking-wide">
          <p className="text-center">918 Dundas St E, Suite 301, Mississauga, ON L4Y 4H9</p>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <a
              href="mailto:info@axialaccounting.com"
              className="hover:text-gold transition-colors duration-200"
            >
              info@axialaccounting.com
            </a>
            <span className="text-gold/40 hidden sm:inline">·</span>
            <a
              href="tel:+14374768079"
              className="hover:text-gold transition-colors duration-200"
            >
              (437) 476-8079
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-[13px] text-slate tracking-wide">
            &copy; {year} Axial Accounting. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-[12px] text-slate/60 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-slate/60 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
