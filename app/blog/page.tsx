import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Insights, updates, and deep dives into India's EV ecosystem — from regulatory intelligence to AI-powered operations and workforce development.",
  alternates: { canonical: 'https://www.go4garage.in/blog' },
  openGraph: {
    title: 'Blog | Go4Garage',
    description: "Deep dives into India's EV ecosystem — regulatory intelligence, AI operations, and the future of mobility.",
    url: 'https://www.go4garage.in/blog',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <BlogClient />;
}
