import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Go4Garage — schedule a demo, ask questions, or explore partnership opportunities. We respond within 2 business hours.',
  alternates: { canonical: 'https://www.go4garage.in/contact' },
  openGraph: {
    title: 'Contact Go4Garage',
    description: 'Schedule a demo, ask questions, or explore partnership opportunities. We respond within 2 business hours.',
    url: 'https://www.go4garage.in/contact',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ContactClient />;
}
