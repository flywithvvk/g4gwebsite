'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import type { ProductData } from './productData';

const colorMap = {
  primary: {
    heroBg: 'from-primary-container/20 via-surface to-surface',
    heroBlob1: 'bg-primary-container/25',
    heroBlob2: 'bg-secondary-container/15',
    border: 'border-[#904d00]',
    borderLight: 'border-primary/20',
    text: 'text-primary',
    iconBg: 'bg-primary-container/15',
    badge: 'bg-primary-container/15 text-primary',
    chipBg: 'bg-primary-container/10 text-primary border-primary/20',
    cardBorder: 'border-primary/15',
    metricBg: 'bg-primary-container/10',
    ctaBg: 'bg-primary hover:bg-primary/90 text-white',
    dot: 'bg-primary',
    leftBorder: 'border-[#f18a22]',
    ctaDarkBg: 'from-[#1a0a00] to-[#4a2000]',
    tabActiveBg: 'bg-primary-container/10',
    tabActiveBorder: 'border-l-4 border-[#904d00]',
    metricPillBg: 'bg-primary',
    stepCircleBg: 'bg-primary',
    statAfterText: 'text-primary',
    highlightBadgeBg: 'bg-primary',
  },
  secondary: {
    heroBg: 'from-secondary-container/20 via-surface to-surface',
    heroBlob1: 'bg-secondary-container/25',
    heroBlob2: 'bg-primary-container/15',
    border: 'border-[#7b41b3]',
    borderLight: 'border-secondary/20',
    text: 'text-secondary',
    iconBg: 'bg-secondary-container/15',
    badge: 'bg-secondary-container/15 text-secondary',
    chipBg: 'bg-secondary-container/10 text-secondary border-secondary/20',
    cardBorder: 'border-secondary/15',
    metricBg: 'bg-secondary-container/10',
    ctaBg: 'bg-secondary hover:bg-secondary/90 text-white',
    dot: 'bg-secondary',
    leftBorder: 'border-[#c588fe]',
    ctaDarkBg: 'from-[#1a0030] to-[#3d0075]',
    tabActiveBg: 'bg-secondary-container/10',
    tabActiveBorder: 'border-l-4 border-[#7b41b3]',
    metricPillBg: 'bg-secondary',
    stepCircleBg: 'bg-secondary',
    statAfterText: 'text-secondary',
    highlightBadgeBg: 'bg-secondary',
  },
  tertiary: {
    heroBg: 'from-tertiary-container/20 via-surface to-surface',
    heroBlob1: 'bg-tertiary-container/25',
    heroBlob2: 'bg-secondary-container/15',
    border: 'border-[#006e2f]',
    borderLight: 'border-tertiary/20',
    text: 'text-tertiary',
    iconBg: 'bg-tertiary-container/15',
    badge: 'bg-tertiary-container/15 text-tertiary',
    chipBg: 'bg-tertiary-container/10 text-tertiary border-tertiary/20',
    cardBorder: 'border-tertiary/15',
    metricBg: 'bg-tertiary-container/10',
    ctaBg: 'bg-tertiary hover:bg-tertiary/90 text-white',
    dot: 'bg-tertiary',
    leftBorder: 'border-[#22bc5a]',
    ctaDarkBg: 'from-[#001a0a] to-[#003518]',
    tabActiveBg: 'bg-tertiary-container/10',
    tabActiveBorder: 'border-l-4 border-[#006e2f]',
    metricPillBg: 'bg-tertiary',
    stepCircleBg: 'bg-tertiary',
    statAfterText: 'text-tertiary',
    highlightBadgeBg: 'bg-tertiary',
  },
};

function parseStatNumber(value: string): { num: number; prefix: string; suffix: string } | null {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (match) {
    return { num: parseFloat(match[1]), prefix: '', suffix: match[2] };
  }
  return null;
}

export default function ProductDetailClient({ product }: { product: ProductData }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const c = colorMap[product.color];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ━━━ SECTION 1: HERO ━━━ */}
      <section className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br ${c.heroBg}`}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${c.heroBlob1} rounded-full blur-[160px]`}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className={`absolute bottom-1/4 right-1/4 w-[360px] h-[360px] ${c.heroBlob2} rounded-full blur-[140px]`}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-7"
            >
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-2 text-sm text-on-surface-variant mb-8"
              >
                <Link href="/products" className="hover:text-on-surface transition-colors">Products</Link>
                <Icon name="chevron_right" size={16} className="text-on-surface-variant/50" />
                <span className={`${c.text} font-medium`}>{product.shortName}</span>
              </motion.div>

              {/* Icon + badge */}
              <div className="flex flex-wrap items-start gap-5 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, type: 'spring' }}
                  className={`w-20 h-20 rounded-3xl ${c.iconBg} border ${c.borderLight} flex items-center justify-center shadow-lg`}
                >
                  <Icon name={product.icon} size={40} className={c.text} />
                </motion.div>
                {product.problemsSolved > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className={`px-4 py-2 rounded-full ${c.badge} border ${c.borderLight} text-sm font-semibold font-display`}
                  >
                    {product.problemsSolved} problems solved
                  </motion.div>
                )}
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-3 leading-tight tracking-tight font-display"
              >
                {product.name}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-xl md:text-2xl font-semibold mb-5 ${c.text} font-display`}
              >
                {product.tagline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl"
              >
                {product.description}
              </motion.p>

              {/* Target user chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-2 mb-10"
              >
                {product.targetUsers.map((user) => (
                  <span
                    key={user}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border ${c.chipBg}`}
                  >
                    {user}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={product.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-8 py-3.5 rounded-2xl font-semibold text-base shadow-lg transition-all ${c.ctaBg}`}
                  >
                    {product.cta}
                  </motion.button>
                </Link>
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-2xl font-semibold text-base border-2 border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    ← All Products
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column — hero stat cards, hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 justify-center">
              {product.impactStats.slice(0, 2).map((stat, i) => {
                const parsed = parseStatNumber(stat.after);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/50 p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon name={stat.icon} size={20} className={c.text} />
                      </div>
                      <span className="font-semibold text-sm text-on-surface-variant">{stat.label}</span>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                      <span className="text-sm text-on-surface-variant/60">{stat.before}</span>
                      <span className={`text-2xl font-bold ${c.text}`}>→</span>
                      {parsed ? (
                        <span className={`text-2xl font-bold ${c.text}`}>
                          <AnimatedCounter target={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                        </span>
                      ) : (
                        <span className={`text-2xl font-bold ${c.text}`}>{stat.after}</span>
                      )}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.badge}`}>
                      {stat.highlight}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ SECTION 2: PAIN POINTS ━━━ */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Before <span className="gradient-text">{product.shortName}</span>...
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Real challenges faced by {product.targetUsers[0]}s and teams like yours.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`flex items-start gap-3 p-4 rounded-xl bg-surface-bright border-l-4 ${c.leftBorder} shadow-sm border border-outline-variant/20`}
              >
                <Icon name="warning_amber" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-on-surface-variant leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 3: FEATURE DEEP-DIVE ━━━ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              What <span className="gradient-text">{product.shortName}</span> Does
            </h2>
            <p className="mt-4 text-on-surface-variant text-lg">Six powerful modules, built for India&apos;s EV ecosystem.</p>
          </motion.div>

          {/* Desktop: tab layout */}
          <div className="hidden lg:flex gap-8 max-w-5xl mx-auto">
            {/* Left tab list */}
            <div className="w-72 flex-shrink-0 flex flex-col gap-1">
              {product.features.map((feat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all text-left ${
                    activeFeature === i
                      ? `${c.tabActiveBorder} ${c.tabActiveBg} shadow-sm`
                      : 'hover:bg-surface-container-low'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activeFeature === i ? c.iconBg : 'bg-surface-container-low'}`}>
                    <Icon name={feat.icon} size={18} className={activeFeature === i ? c.text : 'text-on-surface-variant'} />
                  </div>
                  <span className={`text-sm font-semibold font-display ${activeFeature === i ? c.text : 'text-on-surface-variant'}`}>{feat.title}</span>
                </button>
              ))}
            </div>

            {/* Right animated panel */}
            <div className="flex-1 min-h-[380px]">
              <AnimatePresence mode="wait">
                {product.features[activeFeature] && (
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="bg-surface-bright rounded-2xl border border-outline-variant/30 p-8 h-full"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center mb-5`}>
                      <Icon name={product.features[activeFeature].icon} size={32} className={c.text} />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">{product.features[activeFeature].title}</h3>
                    <p className="text-on-surface-variant mb-5 leading-relaxed">{product.features[activeFeature].desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {product.features[activeFeature].points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Icon name="check_circle" size={18} className={`${c.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-on-surface leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {product.features[activeFeature].metric && (
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${c.metricPillBg} text-white font-semibold text-sm`}>
                        <Icon name="trending_up" size={16} className="text-white" />
                        {product.features[activeFeature].metric}
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: accordion */}
          <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
            {product.features.map((feat, i) => (
              <div key={i} className="rounded-xl border border-outline-variant/30 bg-surface-bright overflow-hidden">
                <button
                  onClick={() => setActiveFeature(activeFeature === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${activeFeature === i ? c.iconBg : 'bg-surface-container-low'}`}>
                      <Icon name={feat.icon} size={20} className={activeFeature === i ? c.text : 'text-on-surface-variant'} />
                    </div>
                    <span className={`text-sm font-semibold font-display ${activeFeature === i ? c.text : 'text-on-surface'}`}>{feat.title}</span>
                  </div>
                  <Icon name={activeFeature === i ? 'expand_less' : 'expand_more'} size={20} className="text-on-surface-variant flex-shrink-0" />
                </button>
                <AnimatePresence>
                  {activeFeature === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{feat.desc}</p>
                        <ul className="space-y-2 mb-4">
                          {feat.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Icon name="check_circle" size={16} className={`${c.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-on-surface leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                        {feat.metric && (
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${c.metricPillBg} text-white font-semibold text-xs`}>
                            <Icon name="trending_up" size={14} className="text-white" />
                            {feat.metric}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 4: BEFORE/AFTER IMPACT ━━━ */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              What Changes After <span className="gradient-text">Adoption</span>
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Real before-and-after benchmarks from {product.shortName} implementations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {product.impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl bg-surface-bright border border-outline-variant/20 p-5 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={stat.icon} size={20} className={c.text} />
                  </div>
                  <span className="text-sm font-semibold text-on-surface font-display leading-tight">{stat.label}</span>
                </div>
                <div className="rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-sm flex items-center gap-2 mb-2">
                  <Icon name="close" size={16} className="text-red-500 flex-shrink-0" />
                  <span className="text-red-700 text-xs leading-tight">{stat.before}</span>
                </div>
                <div className={`text-3xl font-bold text-center my-1 ${c.text}`}>→</div>
                <div className="rounded-xl bg-green-50 border border-green-100 px-3 py-2 text-sm flex items-center gap-2 mb-3">
                  <Icon name="check_circle" size={16} className="text-green-600 flex-shrink-0" />
                  <span className="text-green-800 font-bold text-xs leading-tight">{stat.after}</span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.highlightBadgeBg} text-white`}>
                  {stat.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 5: HOW IT WORKS ━━━ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Step-by-step — from onboarding to impact in {product.workflowSteps.length} key stages.
            </p>
          </motion.div>

          {/* Desktop: horizontal steps */}
          <div className="hidden md:flex items-start gap-0 max-w-5xl mx-auto">
            {product.workflowSteps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative">
                {i < product.workflowSteps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-outline-variant/30 z-0" />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center px-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${c.stepCircleBg} shadow-md mb-3`}>
                    {step.step}
                  </div>
                  <Icon name={step.icon} size={24} className={`${c.text} mb-2`} />
                  <h3 className="font-bold text-sm md:text-base font-display mt-1">{step.title}</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant mt-1 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical steps */}
          <div className="md:hidden space-y-0 max-w-xl mx-auto">
            {product.workflowSteps.map((step, i) => (
              <div key={i} className="flex gap-4 relative">
                {i < product.workflowSteps.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-0.5 h-full bg-outline-variant/30 z-0" />
                )}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${c.stepCircleBg} shadow-md flex-shrink-0 relative z-10 mt-1`}
                >
                  {step.step}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.05 }}
                  className="pb-8"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={step.icon} size={18} className={c.text} />
                    <h3 className="font-bold text-base font-display">{step.title}</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 6: INTEGRATIONS ━━━ */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Part of a <span className="gradient-text">Bigger Picture</span>
            </h2>
            <p className="mt-3 text-on-surface-variant">
              {product.shortName} connects seamlessly with the Go4Garage ecosystem.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`w-20 h-20 rounded-full ${c.iconBg} border-2 ${c.borderLight} flex items-center justify-center shadow-lg`}
            >
              <Icon name={product.icon} size={36} className={c.text} />
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {product.integrations.map((integration, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl bg-surface-bright border ${c.borderLight} shadow-sm`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className="text-sm font-medium text-on-surface">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 7: FINAL CTA ━━━ */}
      <section className={`py-24 relative overflow-hidden bg-gradient-to-br ${c.ctaDarkBg}`}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 border border-white/20">
              <Icon name={product.icon} size={18} className="text-white" />
              <span className="text-sm font-medium font-display text-white">{product.shortName}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 font-display text-white">
              Ready to Transform Your<br />
              <span className="gradient-text">EV Operations?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              See {product.shortName} in action. Book a personalised walkthrough with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={product.ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg bg-white shadow-xl hover:shadow-2xl transition-shadow text-on-surface"
                >
                  {product.cta}
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Explore All Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

