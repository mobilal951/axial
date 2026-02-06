"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { AxialLogo } from "@/components/primitives/AxialLogo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-parchment p-2"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <AxialLogo variant="monogram" color="gold" className="mb-12 !w-14 !h-14" />

          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-gold"
                      : "text-parchment hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
