'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { StatsCard } from '@/components/StatsCard';

/* ─────────────────────────────────────────────
   Persona Data
   ───────────────────────────────────────────── */

interface PersonaMetric {
  icon: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

interface PersonaProduct {
  name: string;
  description: string;
  href: string;
}

interface Persona {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  challenges: string[];
  products: PersonaProduct[];
  metrics: PersonaMetric[];
  ctaText: string;
  ctaHref: string;
}

const personas: Persona[] = [
  {
    id: 'cpo',
    name: 'CPO Operators',
    icon: 'ev_station',
    tagline: 'End-to-end compliance automation for charge-point operators across India.',
    challenges: [
      'DISCOM delays and load sanctioning bottlenecks',
      'Compliance fragmentation across 33 states',
      'Charger uptime consistently below 85%',
      'Profitability pressure from subsidies & tariffs',
    ],
    products: [
      { name: 'URGAA (ऊर्जा)', description: 'Regulatory & Grid Intelligence — automate 48 compliance checkpoints with AI-driven workflows.', href: '/products' },
      { name: 'Ignition', description: 'Consumer Experience — seamless charging sessions, payments, and loyalty.', href: '/products' },
    ],
    metrics: [
      { icon: 'verified', value: 89.5, suffix: '%', label: 'Compliance Automation', description: 'Automated regulatory coverage' },
      { icon: 'speed', value: 3, suffix: 'x', label: 'Faster Approvals', description: 'Vs. manual processing' },
      { icon: 'task_alt', value: 48, label: 'Problems Solved', description: 'Regulatory checkpoints automated' },
    ],
    ctaText: 'Explore URGAA (ऊर्जा)',
    ctaHref: '/products',
  },
  {
    id: 'workshops',
    name: 'Workshops',
    icon: 'build',
    tagline: 'Digitise your workshop operations — from service invoicing to technician upskilling.',
    challenges: [
      'Digital transformation lag across service centres',
      'Spare parts sourcing delays and procurement friction',
      'GST compliance complexity in multi-state invoicing',
      'Technician skill gaps slowing EV service quality',
    ],
    products: [
      { name: 'GSTSAAS', description: 'Workshop & Commerce Engine — automated GST invoicing, inventory, and service management.', href: '/products' },
      { name: 'EV VIDYA ARJUN', description: 'Workforce Skilling — AI-powered training modules for technician certification.', href: '/products' },
    ],
    metrics: [
      { icon: 'savings', value: 95, suffix: '%', label: 'Cost Reduction', description: 'Operational overhead savings' },
      { icon: 'task_alt', value: 17, label: 'Problems Solved', description: 'Service workflow gaps addressed' },
      { icon: 'trending_up', value: 40, suffix: '%', label: 'More Volume', description: 'Service throughput increase' },
    ],
    ctaText: 'Explore GSTSAAS',
    ctaHref: '/products',
  },
  {
    id: 'fleet',
    name: 'Fleet Operators',
    icon: 'local_shipping',
    tagline: 'Optimise total cost of ownership and fleet compliance in real time.',
    challenges: [
      'Total cost of ownership (TCO) uncertainty',
      'Charging cost optimisation across routes',
      'Compliance tracking across multiple states',
      'Route planning gaps impacting fleet efficiency',
    ],
    products: [
      { name: 'Ignition Fleet Portal', description: 'Real-time fleet monitoring, charging analytics, and route intelligence.', href: '/products' },
      { name: 'URGAA (ऊर्जा)', description: 'Fleet Compliance — multi-state regulatory tracking for commercial EV fleets.', href: '/products' },
    ],
    metrics: [
      { icon: 'timer', value: 99.5, suffix: '%', label: 'Uptime', description: 'Fleet operational availability' },
      { icon: 'speed', value: 3, suffix: 'x', label: 'Faster Ops', description: 'Operational decision speed' },
      { icon: 'savings', value: 35, suffix: '%', label: 'Cost Reduction', description: 'TCO savings achieved' },
    ],
    ctaText: 'Explore Fleet Solutions',
    ctaHref: '/products',
  },
  {
    id: 'technicians',
    name: 'EV Technicians',
    icon: 'engineering',
    tagline: 'Bridge the 100K+ EV skill gap with AI-powered training and certification.',
    challenges: [
      '100K+ technician skill gap across India',
      'ICE-to-EV transition difficulty for existing mechanics',
      'Safety certification needs for high-voltage systems',
      'Limited career growth paths in EV servicing',
    ],
    products: [
      { name: 'EV VIDYA ARJUN', description: 'AI Training — personalised learning paths from basics to advanced EV diagnostics.', href: '/products' },
      { name: 'Eka-AI', description: 'Technical Guidance — conversational AI for instant troubleshooting support.', href: '/products' },
    ],
    metrics: [
      { icon: 'school', value: 4, suffix: '–6 wks', label: 'To Certified', description: 'Fast-track certification timeline' },
      { icon: 'task_alt', value: 8, label: 'Problems Solved', description: 'Workforce readiness gaps closed' },
      { icon: 'workspace_premium', value: 100, suffix: '%', label: 'Job Ready', description: 'Post-certification placement rate' },
    ],
    ctaText: 'Explore Training',
    ctaHref: '/products',
  },
  {
    id: 'govt',
    name: 'Government',
    icon: 'account_balance',
    tagline: 'Unified dashboards for policy coordination, subsidy tracking, and infrastructure planning.',
    challenges: [
      'Policy coordination across multiple ministries',
      'Subsidy tracking complexity under FAME-II',
      'Infrastructure planning gaps in tier-2/3 cities',
      'Compliance monitoring across 33 states',
    ],
    products: [
      { name: 'URGAA (ऊर्जा) Govt Dashboard', description: 'Real-time compliance monitoring, digitised approval workflows, and subsidy disbursement tracking.', href: '/products' },
    ],
    metrics: [
      { icon: 'map', value: 33, label: 'States Covered', description: 'Pan-India regulatory coverage' },
      { icon: 'description', value: 95, suffix: '%', label: 'Doc Automation', description: 'Document processing automated' },
      { icon: 'dashboard', value: 100, suffix: '%', label: 'Real-Time Dashboards', description: 'Live compliance visibility' },
    ],
    ctaText: 'Explore Regulatory',
    ctaHref: '/products',
  },
  {
    id: 'oems',
    name: 'OEMs',
    icon: 'factory',
    tagline: 'End-to-end visibility into dealer networks, warranty tracking, and market intelligence.',
    challenges: [
      'Dealer network management at scale',
      'Warranty tracking and dispute resolution',
      'Service quality monitoring across partners',
      'Actionable market insights from field data',
    ],
    products: [
      { name: 'GSTSAAS', description: 'Dealer & service network commerce management with GST-compliant invoicing.', href: '/products' },
      { name: 'KAILASH-AI', description: 'Quality analytics, demand forecasting, and market intelligence.', href: '/products' },
    ],
    metrics: [
      { icon: 'visibility', value: 100, suffix: '%', label: 'End-to-End Visibility', description: 'Full supply-chain transparency' },
      { icon: 'insights', value: 100, suffix: '%', label: 'Real-Time Insights', description: 'Live data from the field' },
      { icon: 'public', value: 360, suffix: '°', label: 'Coverage', description: 'Holistic ecosystem view' },
    ],
    ctaText: 'Explore API Platform',
    ctaHref: '/products',
  },
];

const comparisonRows = [
  'India-Specific Compliance',
  'Multi-Persona Support',
  'AI-Powered Intelligence',
  'Integrated Ecosystem',
  'Workforce Training',
  '24/7 Conversational AI',
];

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */

export default function SolutionsClient() {
  const [activePersona, setActivePersona] = useState<string>('cpo');

  const selected = personas.find((p) => p.id === activePersona)!;

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated blur orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[130px]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">
                Tailored for Every Stakeholder
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Solutions for{' '}
              <span className="gradient-text">Every Role</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Discover how Go4Garage transforms your specific challenges into
              competitive advantages — from CPO operators to government
              regulators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PERSONA TABS (sticky)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="sticky top-16 z-30 backdrop-blur-xl bg-surface-bright/90 border-y border-outline-variant/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {personas.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activePersona === p.id
                    ? 'bg-primary text-primary-on shadow-md'
                    : 'bg-surface-bright text-on-surface-variant border border-outline-variant/30 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <Icon name={p.icon} size={18} />
                <span className="hidden sm:inline">{p.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PERSONA DETAIL SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* ── Header ── */}
              <div className="flex flex-col md:flex-row items-center gap-5 mb-14">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/15 flex items-center justify-center shrink-0">
                  <Icon name={selected.icon} size={36} className="text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    {selected.name}
                  </h2>
                  <p className="text-on-surface-variant text-lg mt-1 max-w-2xl">
                    {selected.tagline}
                  </p>
                </div>
              </div>

              {/* ── Two-column: Challenges + Products ── */}
              <div className="grid lg:grid-cols-2 gap-10 mb-14">
                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-8 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm"
                >
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-6 font-display flex items-center gap-2">
                    <Icon name="warning" size={16} className="text-primary" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-4">
                    {selected.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                      >
                        <Icon
                          name="warning"
                          size={18}
                          className="text-error mt-0.5 flex-shrink-0"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Products */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="p-8 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm"
                >
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-6 font-display flex items-center gap-2">
                    <Icon name="inventory_2" size={16} className="text-primary" />
                    Recommended Products
                  </h3>
                  <div className="space-y-4">
                    {selected.products.map((product, i) => (
                      <Link key={i} href={product.href}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="group px-5 py-4 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-bold text-sm text-on-surface font-display">
                              {product.name}
                            </p>
                            <Icon
                              name="arrow_forward"
                              size={16}
                              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            {product.description}
                          </p>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Impact Metrics ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-14"
              >
                <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-8 font-display text-center flex items-center justify-center gap-2">
                  <Icon name="analytics" size={16} className="text-primary" />
                  Impact Metrics
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {selected.metrics.map((m, i) => (
                    <StatsCard
                      key={`${selected.id}-${i}`}
                      icon={m.icon}
                      value={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix}
                      label={m.label}
                      description={m.description}
                    />
                  ))}
                </div>
              </motion.div>

              {/* ── CTA Button ── */}
              <div className="text-center">
                <Link href={selected.ctaHref}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    {selected.ctaText}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          COMPARISON TABLE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="The Difference"
            title="Why Choose"
            highlight="Go4Garage"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-outline-variant/20">
              <div className="px-6 py-4 text-on-surface font-display">Capability</div>
              <div className="px-6 py-4 text-center text-primary font-display">Go4Garage</div>
              <div className="px-6 py-4 text-center text-on-surface-variant font-display">Generic Solutions</div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="grid grid-cols-3 text-sm border-b border-outline-variant/10 last:border-b-0 hover:bg-surface-container-low/50 transition-colors"
              >
                <div className="px-6 py-4 font-medium text-on-surface">{cap}</div>
                <div className="px-6 py-4 flex justify-center">
                  <Icon name="check_circle" size={22} className="text-tertiary" />
                </div>
                <div className="px-6 py-4 flex justify-center">
                  <Icon name="cancel" size={22} className="text-error/40" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 relative overflow-hidden bg-surface-container-low">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/8 rounded-full blur-[180px]"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Transform Your{' '}
              <span className="gradient-text">Operations</span>?
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Join industry leaders leveraging Go4Garage to solve their toughest
              EV ecosystem challenges.
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
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
