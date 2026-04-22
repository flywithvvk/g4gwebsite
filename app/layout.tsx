import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { GlobalStructuredData } from "@/components/StructuredData";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { FirebaseAppCheck } from "@/components/FirebaseAppCheck";
import { RemoteConfigInit } from "@/components/RemoteConfigInit";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { PromoBanner } from "@/components/PromoBanner";

const SITE_URL = "https://www.go4garage.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Go4Garage - The AI Platform Powering India's Automobile Future",
    template: "%s | Go4Garage",
  },
  description: "From regulatory chaos to operational excellence. One platform. Zero friction. India's first AI-powered automobile intelligence platform.",
  keywords: [
    "EV charging India", "automobile AI platform", "India EV infrastructure",
    "CPO management software", "automotive intelligence", "Go4Garage",
    "URGAA EV charging", "GST (Go4Garage Service Tools) GST compliance", "EV VIDYA ARJUN",
    "KAILASH-AI", "Eka-AI", "EV workshop management India",
    "electric vehicle compliance India", "fleet management EV India",
  ],
  authors: [{ name: "Go4Garage", url: SITE_URL }],
  creator: "Go4Garage",
  publisher: "Go4Garage Technologies Pvt. Ltd.",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Go4Garage - The AI Platform Powering India's Automobile Future",
    description: "India's first AI-powered automobile intelligence platform. 6 products. 85 problems solved. Zero friction.",
    url: SITE_URL,
    siteName: "Go4Garage",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Go4Garage — AI-Powered Automobile Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go4Garage - AI-Powered Automobile Intelligence",
    description: "India's first AI-powered automobile intelligence platform. 6 products solving 85 problems across India's EV ecosystem.",
    creator: "@go4garage",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=3",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_ID ?? "go4garage-d66fc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* DNS prefetch + preconnect for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://firebase.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#904d00" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <GlobalStructuredData />
      </head>
      <body className="font-sans antialiased bg-surface text-on-surface">
        <FirebaseAnalytics />
        <GoogleTagManager />
        <FirebaseAppCheck />
        <RemoteConfigInit />
        <PromoBanner />
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
        <ExitIntentModal />
      </body>
    </html>
  );
}
