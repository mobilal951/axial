import { buildMetadata } from "@/lib/metadata";
import { FirmOrigin } from "@/components/about/FirmOrigin";
import { ManagingPartner } from "@/components/about/ManagingPartner";
import { Principles } from "@/components/about/Principles";
import { ProfessionalStanding } from "@/components/about/ProfessionalStanding";

export const metadata = buildMetadata({
  title: "About the Firm",
  description:
    "Founded by Stephen Douglas Thompson, CPA CA, Axial Accounting delivers structurally rigorous accounting and advisory services in Ontario.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <FirmOrigin />
      <ManagingPartner />
      <Principles />
      <ProfessionalStanding />
    </main>
  );
}
