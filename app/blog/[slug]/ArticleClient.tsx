'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { articleData } from '@/lib/articleData';
import type { Article, ArticleSection } from '@/lib/articleData';

const categoryColors: Record<string, string> = {
  Regulatory: 'bg-primary/10 text-primary',
  Workshop: 'bg-secondary/10 text-secondary',
  Charging: 'bg-tertiary/10 text-tertiary',
  'AI & Tech': 'bg-primary-container/20 text-on-surface',
  Policy: 'bg-secondary-container/20 text-secondary',
};

function renderSection(section: ArticleSection, idx: number) {
  switch (section.type) {
    case 'heading':
      if (section.level === 3) {
        return (
          <h3
            key={idx}
            className="text-xl font-bold font-display mt-8 mb-3 text-on-surface"
          >
            {section.content}
          </h3>
        );
      }
      return (
        <h2
          key={idx}
          className="text-2xl md:text-3xl font-bold font-display mt-10 mb-4 text-on-surface border-b border-outline-variant/20 pb-3"
        >
          {section.content}
        </h2>
      );

    case 'paragraph':
      return (
        <p
          key={idx}
          className="text-on-surface-variant leading-relaxed mb-5 text-base"
        >
          {section.content}
        </p>
      );

    case 'list':
      return (
        <ul key={idx} className="my-5 space-y-3">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-on-surface-variant">
              <Icon
                name="check_circle"
                size={18}
                className="text-primary mt-0.5 flex-shrink-0"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div
          key={idx}
          className="my-7 p-6 bg-primary-container/10 border-l-4 border-primary rounded-r-2xl"
        >
          <div className="flex items-start gap-3">
            <Icon
              name="lightbulb"
              size={20}
              className="text-primary mt-0.5 flex-shrink-0"
            />
            <p className="text-on-surface font-medium leading-relaxed">
              {section.content}
            </p>
          </div>
        </div>
      );

    case 'stat-row':
      return (
        <div
          key={idx}
          className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {section.stats?.map((stat, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl border border-outline-variant/30 p-5 text-center shadow-sm"
            >
              <p className="text-3xl font-bold gradient-text font-display leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-on-surface-variant mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function ArticleClient({ article }: { article: Article }) {
  const related = Object.values(articleData)
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const colorClass =
    categoryColors[article.category] ?? 'bg-primary/10 text-primary';

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-[8.25rem] pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/6" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 transition-all hover:gap-3 group"
          >
            <Icon name="arrow_back" size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${colorClass}`}
            >
              {article.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6 text-on-surface">
              {article.title}
            </h1>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant pb-6 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <Icon name="person" size={18} className="text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-on-surface">{article.author}</span>
                  <span className="text-on-surface-variant ml-1">· {article.authorRole}</span>
                </div>
              </div>
              <span className="text-outline-variant/60">·</span>
              <span>{article.date}</span>
              <span className="text-outline-variant/60">·</span>
              <span className="inline-flex items-center gap-1">
                <Icon name="schedule" size={14} />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─── */}
      <section className="py-12 bg-surface-container-low">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-surface-bright rounded-3xl border border-outline-variant/30 shadow-sm p-8 md:p-12"
          >
            {article.sections.map((section, idx) => renderSection(section, idx))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-on mb-4 font-display">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto leading-relaxed">
              See how Go4Garage&apos;s AI platform handles compliance, maintenance, and operations
              — end to end, across all 33 states.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="calendar_month" size={20} />
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      {related.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold font-display mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="block bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all p-6 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center mb-4">
                      <Icon name={rel.icon} size={22} className="text-primary" />
                    </div>
                    <span
                      className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        categoryColors[rel.category] ?? 'bg-primary/10 text-primary'
                      }`}
                    >
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold font-display leading-snug mb-2 group-hover:text-primary transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Read Article →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}