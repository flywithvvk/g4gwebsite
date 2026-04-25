import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Go4Garage privacy policy: how we collect, use, and protect your personal data under the Digital Personal Data Protection Act, 2023.',
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
