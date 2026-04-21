'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

interface StatsCardProps {
  icon?: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export function StatsCard({ value, suffix = '', prefix = '', label, description }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="relative p-6 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-full -translate-y-8 translate-x-8 group-hover:bg-primary-container/10 transition-colors" />
      <div className="text-3xl md:text-4xl font-black gradient-text mb-1 font-display">
        <AnimatedCounter target={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-sm font-semibold text-on-surface mb-1">{label}</div>
      {description && (
        <p className="text-xs text-on-surface-variant leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
