import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articleData } from '@/lib/articleData';
import ArticleClient from './ArticleClient';

const SITE_URL = 'https://www.go4garage.in';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleData[slug];
  if (!article) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} — Go4Garage Blog`,
      description: article.excerpt,
      url,
      siteName: 'Go4Garage',
      type: 'article',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — Go4Garage Blog`,
      description: article.excerpt,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articleData[slug];
  if (!article) notFound();
  return <ArticleClient article={article} />;
}