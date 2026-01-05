import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://krealabs.studio"),
  title: {
    default: "Krea Labs | Architecting the Future",
    template: "%s | Krea Labs",
  },
  description:
    "Krea Labs is a one-stop engineering lab specializing in AI, Computer Vision, CAD Engineering, and Full-Stack Development. We bridge the gap between abstract innovation and tangible industrial application.",
  keywords: [
    "Krea Labs",
    "Engineering Lab",
    "AI",
    "Computer Vision",
    "CAD",
    "Industrial Design",
    "Web Development",
    "Software Engineering",
    "R&D",
    "Prototyping",
  ],
  authors: [{ name: "Krea Labs Team" }],
  creator: "Krea Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krealabs.studio",
    title: "Krea Labs | Architecting the Future",
    description:
      "From scratch to scale. We are a one-stop engineering lab building complex ideas from the ground up.",
    siteName: "Krea Labs",
    images: [
      {
        url: "/og-image.jpg", // Placeholder - needs actual image
        width: 1200,
        height: 630,
        alt: "Krea Labs - Architecting the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krea Labs | Architecting the Future",
    description:
      "From scratch to scale. We are a one-stop engineering lab building complex ideas from the ground up.",
    creator: "@krealabs.studio",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} font-mono antialiased bg-krea-black text-krea-white overflow-x-hidden`}>
        <JsonLd />
        <div className="scanlines"></div>
        {children}
      </body>
    </html>
  );
}
