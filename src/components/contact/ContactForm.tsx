"use client";

import { useState, useRef, useEffect, useCallback, type FormEvent } from "react";
import Link from "next/link";

const subjects = [
  "General Inquiry",
  "Tax Planning & Compliance",
  "Advisory & CFO Services",
  "Assurance & Review",
  "Business Structure & Transition",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setSubmitting(true);

    const apiKey = (process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "").trim();
    if (!apiKey) {
      setErrorMessage("Contact form is not configured. Please email us directly at info@axialaccounting.com.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", apiKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  // Keyboard navigation for dropdown
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!dropdownOpen) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
          e.preventDefault();
          setDropdownOpen(true);
          setHighlightedIndex(0);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev + 1) % subjects.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev - 1 + subjects.length) % subjects.length);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (highlightedIndex >= 0) {
            setSelectedSubject(subjects[highlightedIndex]);
            setDropdownOpen(false);
          }
          break;
        case "Escape":
          e.preventDefault();
          setDropdownOpen(false);
          break;
      }
    },
    [dropdownOpen, highlightedIndex]
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12 animate-fade-in">
        <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-[1.5rem] font-light tracking-[0.02em] text-obsidian">
          Message received
        </h3>

        <p className="mt-3 text-[0.9375rem] text-slate max-w-sm leading-relaxed">
          The Managing Partner will review your inquiry and respond within two
          business days.
        </p>

        <Link
          href="/"
          className="mt-8 text-gold text-[0.875rem] tracking-[0.06em] uppercase font-semibold hover:text-gold-muted transition-colors duration-200"
        >
          Return home
        </Link>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-transparent border border-border-light focus:border-gold outline-none px-4 py-3 text-base text-obsidian transition-colors duration-200 placeholder:text-obsidian/20 rounded-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {errorMessage && (
        <div role="alert" className="text-[0.9375rem] text-obsidian bg-stone border border-gold/40 rounded-sm px-4 py-3">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Your Name <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Phone Number
          <span className="text-slate/50 font-normal normal-case tracking-normal ml-2">
            (optional)
          </span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputClasses}
        />
      </div>

      {/* Subject — custom dropdown */}
      <div>
        <label
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          I&apos;m interested in <span className="text-gold">*</span>
        </label>
        <input type="hidden" name="subject" value={selectedSubject} required />
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              if (!dropdownOpen) setHighlightedIndex(selectedSubject ? subjects.indexOf(selectedSubject) : 0);
            }}
            onKeyDown={handleDropdownKeyDown}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
            className={`w-full bg-transparent border border-border-light focus:border-gold outline-none px-4 py-3 text-base transition-colors duration-200 cursor-pointer rounded-sm text-left flex items-center justify-between ${
              selectedSubject ? "text-obsidian" : "text-obsidian/30"
            }`}
          >
            {selectedSubject || "Select a topic"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`text-obsidian/40 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            >
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </button>

          {dropdownOpen && (
            <ul
              role="listbox"
              className="absolute z-10 top-full left-0 right-0 mt-1 bg-parchment border border-border-light rounded-sm shadow-md max-h-[240px] overflow-y-auto"
            >
              {subjects.map((s, i) => (
                <li key={s} role="option" aria-selected={selectedSubject === s}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSubject(s);
                      setDropdownOpen(false);
                    }}
                    onMouseEnter={() => setHighlightedIndex(i)}
                    className={`w-full text-left px-4 py-3 text-[0.9375rem] transition-colors duration-150 ${
                      highlightedIndex === i
                        ? "text-gold bg-obsidian/5"
                        : selectedSubject === s
                          ? "text-gold"
                          : "text-obsidian"
                    }`}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Your Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="border border-gold text-gold px-8 py-3 text-[0.9375rem] font-semibold tracking-[0.06em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
