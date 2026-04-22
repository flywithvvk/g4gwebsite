import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData, slugs } from './productData';
import ProductDetailClient from './ProductDetailClient';
import { SoftwareAppStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

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
    title: `${product.shortName} — Go4Garage`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.go4garage.in' },
    { name: 'Products', url: 'https://www.go4garage.in/products' },
    { name: product.shortName, url: `https://www.go4garage.in/products/${slug}` },
  ];
  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbs} />
      <SoftwareAppStructuredData
        name={product.shortName}
        description={product.description}
        slug={slug}
        category="BusinessApplication"
        features={product.features.map((f) => f.title)}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
