import type { Metadata } from "next";
import { inter, cormorant } from "@/lib/fonts";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axial Accounting · Strategic Accounting & Advisory",
  description:
    "Axial Accounting provides strategic accounting, tax planning, and advisory services for businesses and individuals in Ontario, Canada.",
  metadataBase: new URL("https://axialaccounting.com"),
  openGraph: {
    siteName: "Axial Accounting",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-parchment text-obsidian">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
