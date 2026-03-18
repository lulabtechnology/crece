import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.url),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: [...siteContent.seo.keywords],
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.url,
    siteName: siteContent.brand.name,
    images: [
      {
        url: siteContent.seo.image,
        width: 1200,
        height: 630,
        alt: siteContent.brand.name
      }
    ],
    locale: "es_PA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.image]
  },
  alternates: {
    canonical: siteContent.seo.url
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
