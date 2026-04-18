import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Go4Garage\'s mission to accelerate EV adoption in India through AI-powered automobile intelligence, our journey, values, and the team building the future.',
};

export default function Page() {
  return <AboutClient />;
}
