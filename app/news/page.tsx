import type { Metadata } from 'next';
import NewsClient from './NewsClient';
import { NewsArticleListStructuredData, BreadcrumbStructuredData, WebPageStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://go4garage.com';

export const metadata: Metadata = {
  title: 'Industry News & Updates',
  description:
    "Latest news from India's EV ecosystem: policy updates, industry developments, technology announcements, and Go4Garage platform updates.",
  alternates: { canonical: `${SITE_URL}/news` },
  openGraph: {
    title: 'Industry News & Updates | Go4Garage',
    description: "Latest news from India's EV ecosystem: policy, funding, technology, and Go4Garage platform updates.",
    url: `${SITE_URL}/news`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Go4Garage Industry News' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry News & Updates | Go4Garage',
    description: "Latest news from India's EV ecosystem.",
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Go4Garage Industry News' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Industry News & Updates"
        description="Latest news from India's EV ecosystem: policy updates, industry developments, technology announcements."
        url={`${SITE_URL}/news`}
        dateModified="2026-04-16"
      />
      <NewsArticleListStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'News', url: `${SITE_URL}/news` },
        ]}
      />
      <NewsClient />
    </>
  );
}
