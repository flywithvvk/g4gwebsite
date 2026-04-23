import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData, slugs } from './productData';
import ProductDetailClient from './ProductDetailClient';
import { SoftwareAppStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

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
  const url = `${SITE_URL}/products/${slug}`;
  return {
    title: `${product.shortName} — Go4Garage`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.shortName} — Go4Garage | AI-Powered EV Platform`,
      description: product.description,
      url,
      siteName: 'Go4Garage',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: `${product.shortName} — Go4Garage` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.shortName} — Go4Garage`,
      description: product.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();
  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}` },
    { name: 'Products', url: `${SITE_URL}/products` },
    { name: product.shortName, url: `${SITE_URL}/products/${slug}` },
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