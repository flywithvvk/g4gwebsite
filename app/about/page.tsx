import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Go4Garage's mission to accelerate EV adoption in India through AI-powered automobile intelligence, our journey, values, and the team building the future.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Go4Garage | AI-Powered EV Platform',
    description: "Learn how Go4Garage is solving 85 problems across India's EV ecosystem with 7 AI-powered products.",
    url: `${SITE_URL}/about`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'About Go4Garage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Go4Garage | AI-Powered EV Platform',
    description: "Learn how Go4Garage is solving 85 problems across India's EV ecosystem.",
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'About Go4Garage' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="About Go4Garage"
        description="Learn about Go4Garage's mission to accelerate EV adoption in India through AI-powered automobile intelligence."
        url={`${SITE_URL}/about`}
        dateModified="2026-04-16"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'About Us', url: `${SITE_URL}/about` },
        ]}
      />
      <AboutClient />
    </>
  );
}
