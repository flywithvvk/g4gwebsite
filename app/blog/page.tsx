import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, updates, and deep dives into India\'s EV ecosystem — from regulatory intelligence to AI-powered operations and workforce development.',
};

export default function Page() {
  return <BlogClient />;
}
