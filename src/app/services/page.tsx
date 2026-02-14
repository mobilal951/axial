import { buildMetadata } from "@/lib/metadata";
import { ServicesPhilosophy } from "@/components/services/ServicesPhilosophy";
import { ServiceEntries } from "@/components/services/ServiceEntries";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Tax planning, strategic advisory, assurance engagements, and business structuring. Four disciplines, one integrated practice.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <ServicesPhilosophy />
      <ServiceEntries />
    </main>
  );
}
