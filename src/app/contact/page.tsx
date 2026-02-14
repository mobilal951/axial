import { buildMetadata } from "@/lib/metadata";
import { ContactInvitation } from "@/components/contact/ContactInvitation";
import { ContactSplit } from "@/components/contact/ContactSplit";
import { ContactAssurance } from "@/components/contact/ContactAssurance";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Begin a conversation with Axial Accounting. Strategic accounting and advisory services in Ontario, Canada.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <ContactInvitation />
      <ContactSplit />
      <ContactAssurance />
    </main>
  );
}
