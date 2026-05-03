import type { Metadata } from 'next';
import PricingClient from './PricingClient';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://go4garage.com';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Go4Garage: from individual workshops to enterprise CPOs. Contact sales for a custom quote.',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Pricing | Go4Garage',
    description: 'From individual workshops to enterprise CPOs. Flexible plans for every scale of EV operation.',
    url: `${SITE_URL}/pricing`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Go4Garage Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Go4Garage',
    description: 'Flexible plans from workshops to enterprise CPOs.',
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Go4Garage Pricing' }],
  },
};

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Go4Garage Pricing"
        description="Simple, transparent pricing for Go4Garage: from individual workshops to enterprise CPOs."
        url={`${SITE_URL}/pricing`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Pricing', url: `${SITE_URL}/pricing` },
        ]}
      />
      <PricingClient />
    </>
  );
}
