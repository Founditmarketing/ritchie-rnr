import type { Metadata, Viewport } from "next";
import { fraunces, inter, plexMono } from "@/lib/fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const siteUrl = "https://ritchie4nar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matt Ritchie for 2027 & 2028 NAR Treasurer",
    template: "%s · Ritchie for NAR Treasurer",
  },
  description:
    "Matt Ritchie is an eligible candidate for the 2027 & 2028 Treasurer of the National Association of REALTORS®. Proven, trusted, prepared to guard our finances and guide our future.",
  keywords: [
    "Matt Ritchie",
    "NAR Treasurer",
    "National Association of REALTORS",
    "2027 NAR Treasurer",
    "2028 NAR Treasurer",
    "Louisiana REALTORS",
  ],
  authors: [{ name: "Matt Ritchie" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Matt Ritchie for 2027 & 2028 NAR Treasurer",
    description:
      "I will guard our finances and guide our future. Learn more about Matt Ritchie, candidate for 2027 & 2028 NAR Treasurer.",
    siteName: "Ritchie for NAR Treasurer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Ritchie for 2027 & 2028 NAR Treasurer",
    description:
      "I will guard our finances and guide our future. Eligible candidate, 25+ years in real estate leadership.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f2e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="paper-grain">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
