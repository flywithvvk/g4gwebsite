import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData, slugs } from './productData';
import ProductDetailClient from './ProductDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) return {};
  return {
    title: product.shortName,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
