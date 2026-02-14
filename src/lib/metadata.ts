import type { Metadata } from "next";

const siteUrl = "https://axialaccounting.com";

export const siteMetadata = {
  name: "Axial Accounting",
  description:
    "Axial Accounting provides strategic accounting, tax planning, and advisory services for businesses and individuals in Ontario, Canada.",
  url: siteUrl,
  locale: "en_CA",
};

export function buildMetadata(
  overrides: Metadata & { path?: string } = {}
): Metadata {
  const { path, ...rest } = overrides;
  const title = rest.title
    ? `${rest.title} · Axial Accounting`
    : "Axial Accounting · Strategic Accounting & Advisory";

  const description =
    (rest.description as string) || siteMetadata.description;

  const canonical = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: "website",
      title,
      description,
      url: canonical,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Axial Accounting — Strategic Accounting & Advisory",
        },
      ],
      ...((rest.openGraph as object) || {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    ...rest,
  };
}
