import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Go4Garage — our products, implementation, pricing, and technical capabilities for India\'s EV ecosystem.',
};

export default function Page() {
  return <FAQClient />;
}
