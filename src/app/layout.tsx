import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.highwellgroup.com"),
  title: {
    default: "Highwell Group | Make It Real",
    template: "%s | Highwell Group",
  },
  description:
    "Print. Produce. Fabricate. Deliver. Highwell Group helps Florida and Southeast businesses turn files, campaigns, and ideas into physical things.",
  openGraph: {
    title: "Highwell Group | Make It Real",
    description:
      "Print. Produce. Fabricate. Deliver. Highwell Group helps Florida and Southeast businesses turn files, campaigns, and ideas into physical things.",
    url: "https://www.highwellgroup.com",
    siteName: "Highwell Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Highwell Group | Make It Real",
    description:
      "Print. Produce. Fabricate. Deliver. Highwell Group helps Florida and Southeast businesses turn files, campaigns, and ideas into physical things.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Highwell Group",
              description:
                "Print, wide-format, 3D, laser, fabrication, packaging, mail, and fulfillment production under one roof.",
              url: "https://www.highwellgroup.com",
              email: "hello@highwellgroup.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Largo",
                addressRegion: "FL",
                addressCountry: "US",
              },
              foundingDate: "1997",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
