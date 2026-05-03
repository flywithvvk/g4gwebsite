import type { Metadata } from 'next';
import DemoClient from './DemoClient';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://go4garage.com';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a personalized 30-minute demo of Go4Garage: GST (Go4Garage Service Tools), URGAA, KAILASH-AI and more.',
  alternates: { canonical: `${SITE_URL}/demo` },
  openGraph: {
    title: 'Book a Demo | Go4Garage',
    description: 'Schedule a personalized 30-minute demo. See URGAA, GST, KAILASH-AI and the full AI platform live.',
    url: `${SITE_URL}/demo`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Book a Go4Garage Demo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo | Go4Garage',
    description: 'Schedule a personalized 30-minute demo of the Go4Garage AI platform.',
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Book a Go4Garage Demo' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Book a Demo: Go4Garage"
        description="Schedule a personalized 30-minute demo of Go4Garage's full AI platform for the EV industry."
        url={`${SITE_URL}/demo`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Book a Demo', url: `${SITE_URL}/demo` },
        ]}
      />
      <DemoClient />
    </>
  );
}
