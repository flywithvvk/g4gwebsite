import type { Metadata } from 'next';
import InvestorsClient from './InvestorsClient';

export const metadata: Metadata = {
  title: 'Investors',
  description: 'Invest in Go4Garage: the AI platform powering India\'s $50B+ EV transformation. Series A actively raising with proven unit economics and zero direct competition.',
};

export default function Page() {
  return <InvestorsClient />;
}
