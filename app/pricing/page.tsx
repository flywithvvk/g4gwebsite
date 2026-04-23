import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Go4Garage — from individual workshops to enterprise CPOs. Contact sales for a custom quote.',
  alternates: { canonical: 'https://www.go4garage.in/pricing' },
  openGraph: {
    title: 'Pricing | Go4Garage',
    description: 'From individual workshops to enterprise CPOs. Flexible plans for every scale of EV operation.',
    url: 'https://www.go4garage.in/pricing',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PricingClient />;
}
