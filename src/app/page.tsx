import { HeroThreshold } from "@/components/home/HeroThreshold";
import { PracticePillars } from "@/components/home/PracticePillars";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { PartnerSignal } from "@/components/home/PartnerSignal";
import { InsightPreview } from "@/components/home/InsightPreview";
import { ClosingStatement } from "@/components/home/ClosingStatement";

export default function Home() {
  return (
    <main id="main-content">
      <HeroThreshold />
      <PracticePillars />
      <ServiceIndex />
      <PartnerSignal />
      <InsightPreview />
      <ClosingStatement />
    </main>
  );
}
