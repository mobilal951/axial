import type { Metadata } from "next";
import { InsightsHeader } from "@/components/insights/InsightsHeader";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightIndex } from "@/components/insights/InsightIndex";

export const metadata: Metadata = {
  title: "Insights · Axial Accounting",
  description:
    "Analysis, commentary, and structural thinking on tax, advisory, and business topics from Axial Accounting.",
};

export default function InsightsPage() {
  return (
    <main>
      <InsightsHeader />
      <FeaturedInsight />
      <InsightIndex />
    </main>
  );
}
