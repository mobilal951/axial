import { inter, cormorant } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/primitives/JsonLd";
import "./globals.css";

export const metadata = buildMetadata({ path: "/" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-parchment text-obsidian">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Axial Accounting",
            url: "https://axialaccounting.com",
            description:
              "Strategic accounting, tax planning, and advisory services for businesses and individuals in Ontario, Canada.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "918 Dundas St E, Suite 301",
              addressLocality: "Mississauga",
              addressRegion: "ON",
              postalCode: "L4Y 4H9",
              addressCountry: "CA",
            },
            telephone: "+1-437-476-8079",
            email: "info@axialaccounting.com",
            founder: {
              "@type": "Person",
              name: "Stephen Douglas Thompson",
              jobTitle: "Managing Partner, CPA, CA",
            },
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Ontario, Canada",
            },
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-obsidian focus:text-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:tracking-wide"
        >
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
