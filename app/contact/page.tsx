import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Go4Garage — schedule a demo, ask questions, or explore partnership opportunities. We respond within 2 business hours.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Go4Garage',
    description: 'Schedule a demo, ask questions, or explore partnership opportunities. We respond within 2 business hours.',
    url: `${SITE_URL}/contact`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Contact Go4Garage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Go4Garage',
    description: 'Schedule a demo or explore partnerships. We respond within 2 business hours.',
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Contact Go4Garage' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Contact Go4Garage"
        description="Get in touch with Go4Garage — schedule a demo, ask questions, or explore partnership opportunities."
        url={`${SITE_URL}/contact`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ]}
      />
      <ContactClient />
    </>
  );
}
