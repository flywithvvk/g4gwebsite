import type { Metadata } from 'next';
import SolutionsClient from './SolutionsClient';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Tailored AI-powered solutions for CPO operators, workshops, fleet operators, EV technicians, government regulators, and OEMs across India\'s automobile ecosystem.',
};

export default function Page() {
  return <SolutionsClient />;
}
