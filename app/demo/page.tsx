import type { Metadata } from 'next';
import DemoClient from './DemoClient';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a personalized 30-minute demo of Go4Garage — GST (Go4Garage Service Tools), URGAA, KAILASH-AI and more.',
  alternates: { canonical: 'https://www.go4garage.in/demo' },
  openGraph: {
    title: 'Book a Demo | Go4Garage',
    description: 'Schedule a personalized 30-minute demo. See URGAA, GST, KAILASH-AI and the full AI platform live.',
    url: 'https://www.go4garage.in/demo',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <DemoClient />;
}
