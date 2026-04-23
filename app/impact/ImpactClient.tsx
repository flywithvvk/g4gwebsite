'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';

/* ─── Data ─── */

const bigStats = [
  { value: 89.5, suffix: '%', label: 'Compliance Automation', icon: 'verified', color: '#904d00', percent: 89.5 },
  { value: 3, suffix: 'x', label: 'Faster Operations', icon: 'speed', color: '#7b41b3', percent: 100 },
  { value: 95, suffix: '%', label: 'Cost Reduction', icon: 'savings', color: '#006e2f', percent: 95 },
  { value: 100, suffix: '%', label: 'India Coverage', icon: 'public', color: '#904d00', percent: 100 },
] as const;

const layers = [
  { name: 'Regulatory & Compliance', icon: 'gavel', total: 48, solved: 43, metric: '89.5% automated*', color: 'text-primary', bg: 'bg-primary-container/10', bar: 'bg-primary' },
  { name: 'Operational Excellence', icon: 'settings', total: 27, solved: 23, metric: '3x faster*', color: 'text-secondary', bg: 'bg-secondary-container/10', bar: 'bg-secondary' },
  { name: 'Workforce & Training', icon: 'school', total: 8, solved: 8, metric: '100% coverage', color: 'text-tertiary', bg: 'bg-tertiary-container/10', bar: 'bg-tertiary' },
  { name: 'Financial & GST', icon: 'account_balance_wallet', total: 6, solved: 6, metric: '95% cost cut*', color: 'text-primary', bg: 'bg-primary-container/10', bar: 'bg-primary' },
  { name: 'Customer Experience', icon: 'person', total: 4, solved: 3, metric: 'NPS 85+ (Target)', color: 'text-secondary', bg: 'bg-secondary-container/10', bar: 'bg-secondary' },
  { name: 'Technology & AI', icon: 'smart_toy', total: 5, solved: 5, metric: '12+ AI agents', color: 'text-tertiary', bg: 'bg-tertiary-container/10', bar: 'bg-tertiary' },
  { name: 'Infrastructure', icon: 'ev_station', total: 3, solved: 2, metric: '99.5% uptime (Target)', color: 'text-primary', bg: 'bg-primary-container/10', bar: 'bg-primary' },
  { name: 'Market & Growth', icon: 'trending_up', total: 4, solved: 3, metric: '33 states', color: 'text-secondary', bg: 'bg-secondary-container/10', bar: 'bg-secondary' },
] as const;

const beforeItems = [
  'Manual compliance filing across 33 states',
  '6-8 weeks for regulatory approvals',
  'Paper-based GST invoicing',
  'No standardized technician training',
  'Siloed tools for each function',
  'Reactive maintenance approach',
];

const afterItems = [
  '89.5% automated compliance across all states',
  '2-3 weeks with AI-assisted processing (Based on pilot customer experience)',
  'Fully digital GST automation (95% cost reduction*)',
  'AI-powered training with certification in 4-6 weeks',
  'Unified platform with 7 integrated products',
  'Predictive AI maintenance with 99.5% uptime (Architecture target)',
];

const productMatrix = [
  { product: 'URGAA (ऊर्जा)', layers: ['Regulatory & Compliance', 'Operational Excellence', 'Infrastructure'] as string[] },
  { product: 'GST (Go4Garage Service Tools)', layers: ['Financial & GST', 'Operational Excellence', 'Customer Experience'] as string[] },
  { product: 'Ignition', layers: ['Customer Experience', 'Operational Excellence', 'Market & Growth'] as string[] },
  { product: 'EV VIDYA ARJUN', layers: ['Workforce & Training', 'Technology & AI'] as string[] },
  { product: 'KAILASH-AI', layers: ['Technology & AI', 'Operational Excellence', 'Market & Growth'] as string[] },
  { product: 'Eka-AI', layers: ['Technology & AI', 'Customer Experience', 'Workforce & Training'] as string[] },
];

const matrixColumns = [
  'Regulatory & Compliance',
  'Operational Excellence',
  'Workforce & Training',
  'Financial & GST',
  'Customer Experience',
  'Technology & AI',
  'Infrastructure',
  'Market & Growth',
] as const;

const whyChoose = [
  { title: 'Proven ROI', icon: 'insights', desc: '95% cost reduction and 3x operational improvement within 6 months' },
  { title: 'Zero Risk Deployment', icon: 'shield', desc: 'Start with a pilot, scale when you see results. No lock-in contracts.' },
  { title: 'Seamless Integration', icon: 'hub', desc: 'Works with your existing systems. API-first architecture for easy connectivity.' },
  { title: '24/7 Support', icon: 'support_agent', desc: 'Round-the-clock expert support from automobile industry specialists' },
  { title: 'Continuous Innovation', icon: 'rocket_launch', desc: 'Monthly updates, new AI capabilities, and regulatory compliance kept current' },
  { title: 'Enterprise Scalability', icon: 'trending_up', desc: 'From single location to pan-India operations. Built to scale.' },
] as const;

/* ─── Progress Ring Component ─── */

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ProgressRing({ percent, color, children }: { percent: number; color: string; children: React.ReactNode }) {
  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={RING_RADIUS} fill="none" stroke="currentColor" strokeWidth="8" className="text-outline-variant/20" />
        <motion.circle
          cx="60"
          cy="60"
          r={RING_RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * percent) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function ImpactClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-primary-container/12 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary-container/10 rounded-full blur-[140px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Measurable Results</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Measurable Impact,{' '}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Every metric backed by real data. See how Go4Garage drives measurable transformation
              across India&apos;s automobile aftermarket ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. BIG 4 STATS WITH PROGRESS RINGS ─── */}
      <section className="py-20 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {bigStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className="text-center"
              >
                <ProgressRing percent={stat.percent} color={stat.color}>
                  <span className="text-2xl md:text-3xl font-black font-display">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                </ProgressRing>
                <p className="text-sm font-semibold text-on-surface mt-3">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURE SCALE ─── */}
      <section className="py-16 bg-surface border-b border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '95',  label: 'Industry Problems Classified', sub: '84 solvable by platform',   icon: 'checklist',      color: 'text-primary' },
              { value: '12',  label: 'AI Industry Branches',          sub: '12 specialist personas', icon: 'account_tree',   color: 'text-secondary' },
              { value: '32',  label: 'Custom ML Models',              sub: 'Designed & planned', icon: 'model_training', color: 'text-tertiary' },
              { value: '7',   label: 'Integrated Products',           sub: 'One platform',       icon: 'widgets',        color: 'text-primary' },
            ].map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20"
              >
                <div className={`text-3xl font-black font-display mb-1 ${s.color}`}>{s.value}+</div>
                <div className="text-sm font-semibold text-on-surface mb-1">{s.label}</div>
                <div className="text-[11px] text-on-surface-variant">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. IMPACT BY LAYER ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="8 Problem Layers" title="Impact Across" highlight="Every Layer" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-14">
            {layers.map((layer, idx) => {
              const pct = Math.round((layer.solved / layer.total) * 100);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-surface-bright p-5 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-sm mb-2 font-display group-hover:text-primary transition-colors">{layer.name}</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-2xl font-black font-display">{layer.solved}</span>
                    <span className="text-xs text-on-surface-variant">/ {layer.total} solved</span>
                  </div>
                  <p className={`text-xs font-semibold ${layer.color} mb-3`}>{layer.metric}</p>
                  <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${layer.bar}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
                    />
                  </div>
                  <p className="text-[10px] text-on-surface-variant mt-1 text-right">{pct}%</p>
                </motion.div>
              );
            })}
          </div>
          {/* Footnote for projected metrics */}
          <p className="text-xs text-on-surface-variant/60 text-center mt-8 max-w-3xl mx-auto">
            * Metrics marked with asterisk are projections based on internal testing, pilot deployments, or architecture targets.
            Regulatory automation (89.5%) based on platform capabilities; 3x faster operations based on pilot deployment comparisons;
            95% cost reduction is the target reduction vs manual processes.
          </p>
        </div>
      </section>

      {/* ─── 4. BEFORE VS AFTER ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="The Transformation" title="Before vs" highlight="After Go4Garage" align="center" />

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 max-w-5xl mx-auto mt-14 items-start">
            {/* Before column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50/60 dark:bg-red-950/10 rounded-2xl border border-red-200/40 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <h3 className="font-bold text-lg font-display text-red-700 dark:text-red-400">Before</h3>
              </div>
              <ul className="space-y-3">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-2.5 text-sm text-on-surface-variant"
                  >
                    <span className="text-red-400 flex-shrink-0 mt-0.5">—</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow separator */}
            <div className="hidden md:flex items-center justify-center self-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-14 h-14 rounded-full bg-primary-container/20 border border-primary/20 flex items-center justify-center"
              >
                <Icon name="arrow_forward" size={28} className="text-primary" />
              </motion.div>
            </div>
            {/* Mobile arrow */}
            <div className="flex md:hidden items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary/20 flex items-center justify-center"
              >
                <Icon name="arrow_downward" size={22} className="text-primary" />
              </motion.div>
            </div>

            {/* After column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-emerald-50/60 dark:bg-emerald-950/10 rounded-2xl border border-emerald-200/40 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <h3 className="font-bold text-lg font-display text-tertiary">After Go4Garage</h3>
              </div>
              <ul className="space-y-3">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-2.5 text-sm text-on-surface-variant"
                  >
                    <span className="text-tertiary flex-shrink-0 mt-0.5">—</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 5. PRODUCT IMPACT MATRIX ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Product Coverage" title="Which Products Impact" highlight="Which Layers" align="center" />

          {/* Desktop matrix */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block max-w-6xl mx-auto mt-14 overflow-x-auto"
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-display font-bold p-3 border-b border-outline-variant/30 text-on-surface">Product</th>
                  {matrixColumns.map((col) => (
                    <th key={col} className="text-center font-display font-medium p-3 border-b border-outline-variant/30 text-on-surface-variant text-xs">
                      {col.split(' ')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productMatrix.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="hover:bg-primary-container/5 transition-colors"
                  >
                    <td className="p-3 font-bold font-display border-b border-outline-variant/15">{row.product}</td>
                    {matrixColumns.map((col) => {
                      const active = row.layers.includes(col);
                      return (
                        <td key={col} className="p-3 text-center border-b border-outline-variant/15">
                          {active ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-container/20">
                              <Icon name="check" size={16} className="text-primary" />
                            </span>
                          ) : (
                            <span className="text-outline-variant/30">—</span>
                          )}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile card layout */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-14">
            {productMatrix.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-surface-bright p-4 rounded-2xl border border-outline-variant/30 shadow-sm"
              >
                <h4 className="font-bold font-display text-sm mb-2">{row.product}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {row.layers.map((layer) => (
                    <span key={layer} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary-container/15 text-primary">
                      {layer.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY CHOOSE US ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Promise" title="Why Organizations Choose" highlight="Go4Garage" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-14">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-container/10 mb-4 group-hover:bg-primary-container/20 transition-colors">
                  <Icon name={item.icon} size={20} className="text-on-surface-variant" />
                </div>
                <h3 className="font-bold text-base mb-2 font-display group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-container/8 rounded-full blur-[180px]"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to See Your <span className="gradient-text">Impact?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Join organizations already transforming their operations with Go4Garage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Schedule a Demo
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Explore Platform
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
