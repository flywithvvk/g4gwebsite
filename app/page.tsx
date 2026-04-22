import type { Metadata } from 'next';
import HomePage from './HomeClient';

export const metadata: Metadata = {
  title: "AI Platform Powering India's Automobile Future",
  description: 'Go4Garage is the AI-first platform unifying regulatory compliance, operations, and workforce development across India\'s automobile ecosystem with 7 products solving 85 problems.',
};

export default function Page() {
  return <HomePage />;
}
