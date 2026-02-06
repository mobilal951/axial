import type { Metadata } from "next";

const siteUrl = "https://axialaccounting.com";

export const siteMetadata = {
  name: "Axial Accounting",
  description:
    "Axial Accounting provides strategic accounting, tax planning, and advisory services for businesses and individuals in Ontario, Canada.",
  url: siteUrl,
  locale: "en_CA",
};

export function buildMetadata(overrides: Metadata = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} · Axial Accounting`
    : "Axial Accounting · Strategic Accounting & Advisory";

  const description =
    (overrides.description as string) || siteMetadata.description;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: "website",
      title,
      description,
      url: siteUrl,
      ...((overrides.openGraph as object) || {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
