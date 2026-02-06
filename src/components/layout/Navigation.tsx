"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AxialLogo } from "@/components/primitives/AxialLogo";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          "bg-obsidian/95 backdrop-blur-sm",
          scrolled && "border-b border-border-dark"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex items-center justify-between h-[72px] md:h-[72px]">
          <Link href="/" aria-label="Axial Accounting — Home">
            <AxialLogo variant="full" color="gold" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 relative",
                  pathname === item.href
                    ? "text-gold"
                    : "text-parchment/80 hover:text-gold"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-parchment p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
