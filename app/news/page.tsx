import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'Industry News & Updates',
  description:
    "Latest news from India's EV ecosystem — policy updates, industry developments, technology announcements, and Go4Garage platform updates.",
  alternates: { canonical: 'https://www.go4garage.in/news' },
  openGraph: {
    title: 'Industry News & Updates | Go4Garage',
    description: "Latest news from India's EV ecosystem — policy, funding, technology, and Go4Garage platform updates.",
    url: 'https://www.go4garage.in/news',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <NewsClient />;
}
