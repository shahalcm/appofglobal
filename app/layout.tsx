import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B4DFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ubsglobal.app"),
  title: "UBS Global | Global Importing & Exporting",
  description:
    "Connect with global buyers and sellers. Discover products, explore international business opportunities, and grow with the UBS Global mobile app.",
  keywords: [
    "UBS Global",
    "Importing and Exporting",
    "Global Trade",
    "International Marketplace",
    "B2B Sourcing",
    "Cross-Border Commerce",
    "Buy and Sell Globally",
    "Wholesale Products",
  ],
  authors: [{ name: "UBS Global Importing & Exporting" }],
  openGraph: {
    title: "UBS Global | Global Importing & Exporting",
    description:
      "Connect with global buyers and sellers. Discover products, explore international business opportunities, and grow with the UBS Global mobile app.",
    siteName: "UBS Global",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "UBS Global Importing & Exporting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBS Global | Global Importing & Exporting",
    description:
      "Connect with global buyers and sellers. Discover products, explore international business opportunities, and grow with the UBS Global mobile app.",
    images: ["/logo/logo.png"],
  },
  icons: {
    icon: "/logo/icon.png",
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-dark-blue">
        {children}
      </body>
    </html>
  );
}
