import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results from real businesses — see how Go4Garage drives compliance automation, operational efficiency, and workforce transformation across India\'s EV ecosystem.',
};

export default function Page() {
  return <CaseStudiesClient />;
}
