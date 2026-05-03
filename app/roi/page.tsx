import type { Metadata } from 'next';
import ROIClient from './ROIClient';
import { BreadcrumbStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'ROI Calculator: See Your Savings with Go4Garage',
  description: 'Calculate how much your business saves with Go4Garage. See projected annual savings, compliance cost reduction, and ROI across charging, workshop, and fleet operations.',
};

export default function ROIPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://go4garage.com' },
    { name: 'ROI Calculator', url: 'https://go4garage.com/roi' },
  ];
  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ROIClient />
    </>
  );
}
