'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import type { ProductData } from './productData';

/* ─────────────── COLOR MAP ─────────────── */

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
  },
};

/* ─────────────── COMPONENT ─────────────── */

export default function ProductDetailClient({ product }: { product: ProductData }) {
  const c = colorMap[product.color];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ━━━ 1 · HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br ${c.heroBg}`}>
        {/* blobs */}
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
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl mx-auto"
          >
            {/* breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-2 text-sm text-on-surface-variant mb-8"
            >
              <Link href="/products" className="hover:text-on-surface transition-colors">Products</Link>
              <Icon name="chevron_right" size={16} className="text-on-surface-variant/50" />
              <span className={c.text + ' font-medium'}>{product.shortName}</span>
            </motion.div>

            {/* icon + badge */}
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

            {/* name + tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-3 leading-tight tracking-tight font-display"
            >
              {product.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl md:text-2xl font-semibold mb-5 ${c.text} font-display`}
            >
              {product.tagline}
            </motion.p>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl"
            >
              {product.description}
            </motion.p>

            {/* target user chips */}
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

            {/* CTA */}
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
        </div>
      </section>

      {/* ━━━ 2 · FEATURES GRID ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
              Everything You <span className="gradient-text">Need</span>
            </h2>
            <p className="mt-4 text-on-surface-variant text-lg">
              Six powerful modules, built for India&apos;s EV ecosystem.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {product.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`bg-surface-bright rounded-2xl p-6 border border-outline-variant/30 ${c.cardBorder} hover:shadow-lg transition-all group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={feat.icon} size={24} className={c.text} />
                </div>
                <h3 className="text-base font-bold mb-2 font-display">{feat.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 3 · INTEGRATIONS ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>
                Ecosystem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Works With the Whole <span className="gradient-text">Platform</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.integrations.map((integration, i) => (
                <motion.div
                  key={integration}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
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

      {/* ━━━ 4 · IMPACT METRICS ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>
              Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Real <span className="gradient-text">Results</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {product.metrics.map((metric, i) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`${c.metricBg} border ${c.borderLight} rounded-2xl p-6 text-center shadow-sm`}
              >
                <Icon name="trending_up" size={28} className={`${c.text} mx-auto mb-3`} />
                <p className={`text-base font-bold font-display ${c.text}`}>{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 5 · TARGET USERS ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`text-sm font-semibold uppercase tracking-widest mb-3 block font-display ${c.text}`}>
              Audience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Who Is This <span className="gradient-text">For?</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {product.targetUsers.map((user, i) => (
              <motion.div
                key={user}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                whileHover={{ y: -3 }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl bg-surface-bright border ${c.borderLight} shadow-sm`}
              >
                <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name="person" size={18} className={c.text} />
                </div>
                <span className="text-sm font-semibold text-on-surface font-display">{user}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 6 · CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${c.heroBg} opacity-60`} />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={`absolute top-1/3 right-1/4 w-[350px] h-[350px] ${c.heroBlob1} rounded-full blur-[140px]`}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border ${c.borderLight} ${c.badge}`}>
              <Icon name={product.icon} size={18} className={c.text} />
              <span className="text-sm font-medium font-display">{product.shortName}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 font-display">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
              See {product.shortName} in action. Book a personalised walkthrough with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={product.ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow ${c.ctaBg}`}
                >
                  {product.cta}
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
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
