import type { Metadata } from 'next';
import HomePage from './HomeClient';

export const metadata: Metadata = {
  title: "AI Platform Powering India's Automobile Future",
  description: "Go4Garage is the AI-first platform unifying regulatory compliance, operations, and workforce development across India's automobile ecosystem with 7 products solving 84 problems.",
};

export default function Page() {
  return (
    <>
      {/* Preload hero poster — makes it the LCP element, loads before JS hydration */}
      <link rel="preload" href="/images/journey-poster.jpg" as="image" fetchPriority="high" />
      <HomePage />
    </>
  );
}
