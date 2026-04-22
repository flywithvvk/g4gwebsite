import type { Metadata } from 'next';
import DemoClient from './DemoClient';

export const metadata: Metadata = {
  title: 'Book a Demo | Go4Garage',
  description:
    'Schedule a personalized 30-minute demo of Go4Garage — GST (Go4Garage Service Tools), URGAA, KAILASH-AI and more.',
};

export default function Page() {
  return <DemoClient />;
}
