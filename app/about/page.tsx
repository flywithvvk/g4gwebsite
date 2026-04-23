import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Go4Garage's mission to accelerate EV adoption in India through AI-powered automobile intelligence, our journey, values, and the team building the future.",
  alternates: { canonical: 'https://www.go4garage.in/about' },
  openGraph: {
    title: 'About Go4Garage | AI-Powered EV Platform',
    description: "Learn how Go4Garage is solving 84 problems across India's EV ecosystem with 7 AI-powered products.",
    url: 'https://www.go4garage.in/about',
    siteName: 'Go4Garage',
    images: [{ url: 'https://www.go4garage.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutClient />;
}
