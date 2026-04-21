import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Login | Go4Garage',
  description: 'Access your Go4Garage dashboard or book a demo to get started.',
};

export default function Page() {
  return <LoginClient />;
}
