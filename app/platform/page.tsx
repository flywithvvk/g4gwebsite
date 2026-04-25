import type { Metadata } from 'next';
import PlatformClient from './PlatformClient';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Explore Go4Garage\'s enterprise-grade AI platform: regulatory intelligence, operational excellence, predictive analytics, and workforce development unified for India\'s automobile industry.',
};

export default function Page() {
  return <PlatformClient />;
}
