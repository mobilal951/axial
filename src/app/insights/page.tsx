import { buildMetadata } from "@/lib/metadata";
import { InsightsHeader } from "@/components/insights/InsightsHeader";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightIndex } from "@/components/insights/InsightIndex";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Analysis, commentary, and structural thinking on tax, advisory, and business topics from Axial Accounting.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main id="main-content">
      <InsightsHeader />
      <FeaturedInsight />
      <InsightIndex />
    </main>
  );
}
