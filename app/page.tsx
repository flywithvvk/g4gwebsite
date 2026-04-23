import type { Metadata } from 'next';
import HomePage from './HomeClient';
import { WebPageStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

export const metadata: Metadata = {
  title: "AI Platform Powering India's Automobile Future",
  description: "Go4Garage is the AI-first platform unifying regulatory compliance, operations, and workforce development across India's automobile ecosystem with 7 products solving 84 problems.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Go4Garage — AI Platform Powering India's Automobile Future",
    description: "India's first AI-powered automobile intelligence platform — 7 products solving 84 problems across EV charging, workshop operations, fleet management, and workforce training.",
    url: SITE_URL,
    siteName: 'Go4Garage',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Go4Garage — AI Platform for India's EV Ecosystem" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Go4Garage — AI Platform Powering India's Automobile Future",
    description: "7 AI products solving 84 problems across India's EV and automobile ecosystem.",
    images: [{ url: `${SITE_URL}/og-image.png`, alt: "Go4Garage AI Platform" }],
  },
};

export default function Page() {
  return (
    <>
      {/* Preload hero poster — makes it the LCP element, loads before JS hydration */}
      <link rel="preload" href="/images/journey-poster.jpg" as="image" fetchPriority="high" />
      <WebPageStructuredData
        name="Go4Garage — AI Platform Powering India's Automobile Future"
        description="India's first AI-powered automobile intelligence platform — 7 products solving 84 problems across EV charging, workshop operations, fleet management, and workforce training."
        url={SITE_URL}
        dateModified="2026-04-16"
      />
      <HomePage />
    </>
  );
}
