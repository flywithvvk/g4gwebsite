import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articleData } from '@/lib/articleData';
import ArticleClient from './ArticleClient';
import { ArticleStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

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
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      tags: ['EV India', 'Electric Vehicle', article.category],
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — Go4Garage Blog`,
      description: article.excerpt,
      images: [{ url: `${SITE_URL}/og-image.png`, alt: article.title }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articleData[slug];
  if (!article) notFound();
  return (
    <>
      <ArticleStructuredData
        slug={article.slug}
        title={article.title}
        excerpt={article.excerpt}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        author={article.author}
        category={article.category}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
        ]}
      />
      <ArticleClient article={article} />
    </>
  );
}