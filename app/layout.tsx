import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  openGraph: {
    type: "website",
    siteName: brand,
    title: `${brand} — Car Loan Interest Tax Deduction Checker`,
    description: tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand} — Car Loan Interest Tax Deduction Checker`,
    description: tagline,
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
      </body>
    </html>
  );
}
