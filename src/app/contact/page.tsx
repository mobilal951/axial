import type { Metadata } from "next";
import { ContactInvitation } from "@/components/contact/ContactInvitation";
import { ContactSplit } from "@/components/contact/ContactSplit";
import { ContactAssurance } from "@/components/contact/ContactAssurance";

export const metadata: Metadata = {
  title: "Contact · Axial Accounting",
  description:
    "Begin a conversation with Axial Accounting. Strategic accounting and advisory services in Ontario, Canada.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactInvitation />
      <ContactSplit />
      <ContactAssurance />
    </main>
  );
}
