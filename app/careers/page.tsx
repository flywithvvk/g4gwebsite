import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Go4Garage and build the future of India\'s automobile industry. Explore open roles in engineering, AI, product, design, and growth.',
};

export default function Page() {
  return <CareersClient />;
}
