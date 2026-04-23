import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articleData } from '@/lib/articleData';
import ArticleClient from './ArticleClient';

export async function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articleData[params.slug];
  if (!article) return {};
  return {
    title: `${article.title} — Go4Garage Blog`,
    description: article.excerpt,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug];
  if (!article) notFound();
  return <ArticleClient article={article} />;
}