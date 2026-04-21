import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Discover Go4Garage\'s 6-product suite — URGAA (ऊर्जा), GSTSAAS, Ignition, EV VIDYA ARJUN, KAILASH-AI, and Eka-AI — solving 85 problems across India\'s entire EV value chain.',
};

export default function Page() {
  return <ProductsClient />;
}
