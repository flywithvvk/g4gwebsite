'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 max-w-3xl ${alignment}`}
    >
      {badge && (
        <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-on-surface-variant text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
