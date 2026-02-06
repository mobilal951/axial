import type { Metadata } from "next";
import { FirmOrigin } from "@/components/about/FirmOrigin";
import { ManagingPartner } from "@/components/about/ManagingPartner";
import { Principles } from "@/components/about/Principles";
import { ProfessionalStanding } from "@/components/about/ProfessionalStanding";

export const metadata: Metadata = {
  title: "About the Firm · Axial Accounting",
  description:
    "Founded by Stephen Douglas Thompson, CPA CA, Axial Accounting delivers structurally rigorous accounting and advisory services in Ontario.",
};

export default function AboutPage() {
  return (
    <main>
      <FirmOrigin />
      <ManagingPartner />
      <Principles />
      <ProfessionalStanding />
    </main>
  );
}
