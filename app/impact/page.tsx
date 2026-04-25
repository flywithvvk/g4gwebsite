import type { Metadata } from 'next';
import ImpactClient from './ImpactClient';

export const metadata: Metadata = {
  title: 'Impact',
  description: 'See the measurable impact of Go4Garage: 89.5% compliance automation, 3x faster operations, 95% cost savings, and 100% India coverage across the automobile ecosystem.',
};

export default function Page() {
  return <ImpactClient />;
}
