import type { Metadata } from "next";
import { ServicesPhilosophy } from "@/components/services/ServicesPhilosophy";
import { ServiceEntries } from "@/components/services/ServiceEntries";

export const metadata: Metadata = {
  title: "Services · Axial Accounting",
  description:
    "Tax planning, strategic advisory, assurance engagements, and business structuring. Four disciplines, one integrated practice.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPhilosophy />
      <ServiceEntries />
    </main>
  );
}
