import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Go4Garage — from individual workshops to enterprise CPOs. Contact sales for a custom quote.',
};

export default function Page() {
  return <PricingClient />;
}
