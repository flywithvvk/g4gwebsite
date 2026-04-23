import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'News — Go4Garage',
  description:
    "Latest news from India's EV ecosystem — policy updates, industry developments, technology announcements, and Go4Garage platform updates.",
};

export default function Page() {
  return <NewsClient />;
}
