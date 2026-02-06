import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticleLayout } from "@/components/insights/InsightArticleLayout";
import { getInsightBySlug, getAllInsightSlugs } from "@/data/insights";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: `${insight.title} · Axial Accounting`,
    description: insight.excerpt,
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return <InsightArticleLayout insight={insight} />;
}
