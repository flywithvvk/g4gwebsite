import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Go4Garage terms of service — the rules and guidelines governing your use of our SaaS platform and services.',
};

export default function TermsPage() {
  return <TermsClient />;
}
