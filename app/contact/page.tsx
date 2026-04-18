import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Go4Garage — schedule a demo, ask questions, or explore partnership opportunities. We respond within 2 business hours.',
};

export default function Page() {
  return <ContactClient />;
}
