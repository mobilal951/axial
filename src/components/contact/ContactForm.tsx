"use client";

import { useState, type FormEvent } from "react";

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <p className="text-[1.125rem] text-obsidian">
          Thank you. Your message has been received.
        </p>
        <p className="text-[0.9375rem] text-slate">
          The Managing Partner will review your inquiry and respond within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-border-light focus:border-gold outline-none py-3 text-[1.125rem] text-obsidian transition-colors duration-200 placeholder:text-obsidian/20"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-border-light focus:border-gold outline-none py-3 text-[1.125rem] text-obsidian transition-colors duration-200 placeholder:text-obsidian/20"
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
          className="w-full bg-transparent border-b border-border-light focus:border-gold outline-none py-3 text-[1.125rem] text-obsidian transition-colors duration-200 placeholder:text-obsidian/20"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Regarding
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-transparent border-b border-border-light focus:border-gold outline-none py-3 text-[1.125rem] text-obsidian transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled selected className="text-obsidian/20">
            Select a topic
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-obsidian/60 mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-border-light focus:border-gold outline-none py-3 text-[1.125rem] text-obsidian transition-colors duration-200 resize-none placeholder:text-obsidian/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 text-gold text-[1.125rem] tracking-wide hover:gap-3 transition-all duration-200 disabled:opacity-50 pt-4"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 8h8M9 5l3 3-3 3" />
          </svg>
        )}
      </button>
    </form>
  );
}
