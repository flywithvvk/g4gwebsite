import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Insights, updates, and deep dives into India's EV ecosystem — from regulatory intelligence to AI-powered operations and workforce development.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | Go4Garage',
    description: "Deep dives into India's EV ecosystem — regulatory intelligence, AI operations, and the future of mobility.",
    url: `${SITE_URL}/blog`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Go4Garage Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Go4Garage',
    description: "Deep dives into India's EV ecosystem.",
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Go4Garage Blog' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Go4Garage Insights Blog"
        description="Insights, updates, and deep dives into India's EV ecosystem — regulatory intelligence, AI operations, workforce development."
        url={`${SITE_URL}/blog`}
        dateModified="2026-04-16"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />
      <BlogClient />
    </>
  );
}
