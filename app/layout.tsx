import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl, brand, tagline } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand} — Car Loan Interest Tax Deduction Checker`,
    template: `%s | ${brand}`,
  },
  description: tagline,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: brand,
    title: `${brand} — Car Loan Interest Tax Deduction Checker`,
    description: tagline,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Does your car qualify for the $10,000 car loan interest deduction?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand} — Car Loan Interest Tax Deduction Checker`,
    description: tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-neutral-900`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
