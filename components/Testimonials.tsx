'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const deliverables = [
  {
    target: 95,
    label: 'Problems Mapped',
    icon: 'travel_explore',
    desc: "Across 8 critical layers of India's EV value chain",
    colorIcon: 'text-primary',
    colorBg: 'bg-primary-container/20',
    colorBgHover: 'group-hover:bg-primary-container/30',
    colorBorder: 'border-primary/20',
  },
  {
    target: 85,
    label: 'Solvable by Platform',
    icon: 'check_circle',
    desc: 'Platform-addressable challenges with built-in workflows',
    colorIcon: 'text-secondary',
    colorBg: 'bg-secondary-container/20',
    colorBgHover: 'group-hover:bg-secondary-container/30',
    colorBorder: 'border-secondary/20',
  },
  {
    target: 76,
    label: 'Features Built',
    icon: 'widgets',
    desc: 'Production-ready features across all 6 products',
    colorIcon: 'text-tertiary',
    colorBg: 'bg-tertiary-container/20',
    colorBgHover: 'group-hover:bg-tertiary-container/30',
    colorBorder: 'border-tertiary/20',
  },
  {
    target: 6,
    label: 'Products Live',
    icon: 'rocket_launch',
    desc: 'Integrated products working as a unified intelligence layer',
    colorIcon: 'text-primary',
    colorBg: 'bg-primary-container/20',
    colorBgHover: 'group-hover:bg-primary-container/30',
    colorBorder: 'border-primary/20',
  },
];

export function Testimonials() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {deliverables.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl bg-surface-bright border ${item.colorBorder} shadow-sm hover:shadow-md transition-all group text-center`}
        >
          <div className={`w-12 h-12 rounded-xl ${item.colorBg} ${item.colorBgHover} flex items-center justify-center mx-auto mb-4 transition-colors`}>
            <Icon name={item.icon} size={24} className={item.colorIcon} />
          </div>
          <div className="text-4xl font-black gradient-text font-display mb-1">
            <AnimatedCounter target={item.target} />
          </div>
          <div className="text-sm font-bold text-on-surface font-display mb-2">{item.label}</div>
          <div className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}
