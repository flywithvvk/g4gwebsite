'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';

/* ─────────────────────────────────────────────
   Stakeholder Data
   ───────────────────────────────────────────── */

interface StakeholderMetric {
  icon: string;
  value: string;
  label: string;
}

interface StakeholderProduct {
  name: string;
  description: string;
}

interface Stakeholder {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  challenges: string[];
  products: StakeholderProduct[];
  metrics: StakeholderMetric[];
  ctaText: string;
  ctaHref: string;
}

const stakeholders: Stakeholder[] = [
  {
    id: 'cpo',
    name: 'CPO Operators',
    subtitle: 'EV Charging Point Operators',
    icon: 'ev_station',
    challenges: [
      'DISCOM application delays (3-6 months)',
      '33-state compliance complexity',
      'Site feasibility assessment',
      'Uptime monitoring & maintenance',
    ],
    products: [
      {
        name: 'URGAA (Urja)',
        description: 'Regulatory & Grid Intelligence — automate 48 compliance checkpoints with AI-driven approval workflows across all 33 states.',
      },
      {
        name: 'KAILASH-AI',
        description: 'Predictive analytics for charger uptime, fault detection, and energy optimisation.',
      },
    ],
    metrics: [
      { icon: 'verified', value: '89%', label: 'Compliance Automation' },
      { icon: 'timer', value: '30 days', label: 'Avg Approval Time' },
      { icon: 'map', value: '33 states', label: 'States Covered' },
    ],
    ctaText: 'Book a Demo',
    ctaHref: '/contact',
  },
  {
    id: 'workshops',
    name: 'Workshop Owners',
    subtitle: 'EV Service Centers',
    icon: 'build',
    challenges: [
      'Paper-based job cards causing errors',
      'GST invoicing complexity',
      'No intelligent diagnostics for EVs',
      'Customer retention without digital tools',
    ],
    products: [
      {
        name: 'GSTSAAS',
        description: 'Complete workshop management — GST-compliant invoicing, job cards, inventory, and CRM in one platform.',
      },
      {
        name: 'KAILASH-AI',
        description: 'AI-powered EV diagnostics and fault analysis for faster, more accurate servicing.',
      },
      {
        name: 'Eka-AI',
        description: 'Conversational AI assistant for technicians — instant answers and guided repair workflows.',
      },
    ],
    metrics: [
      { icon: 'speed', value: '3x faster', label: 'Job Turnaround' },
      { icon: 'receipt_long', value: '95%', label: 'GST Automation' },
      { icon: 'people', value: '40% better', label: 'Customer Retention' },
    ],
    ctaText: 'Book a Demo',
    ctaHref: '/contact',
  },
  {
    id: 'fleet',
    name: 'Fleet Owners',
    subtitle: 'Commercial EV Fleet Operators',
    icon: 'local_shipping',
    challenges: [
      'Unpredictable Total Cost of Ownership',
      'Driver training gaps',
      'Reactive maintenance scheduling',
      'No route optimisation for charging',
    ],
    products: [
      {
        name: 'Ignition',
        description: 'Real-time fleet monitoring, charging analytics, route intelligence, and driver management.',
      },
      {
        name: 'KAILASH-AI',
        description: 'Predictive maintenance alerts and TCO optimisation powered by machine learning.',
      },
      {
        name: 'GSTSAAS',
        description: 'Fleet-wide GST compliance, multi-state invoicing, and procurement management.',
      },
    ],
    metrics: [
      { icon: 'savings', value: '20%', label: 'TCO Reduction' },
      { icon: 'notifications_active', value: 'Predictive', label: 'Maintenance Alerts' },
      { icon: 'monitor_heart', value: 'Real-time', label: 'Fleet Health' },
    ],
    ctaText: 'Book a Demo',
    ctaHref: '/contact',
  },
  {
    id: 'insurance',
    name: 'Insurance Companies',
    subtitle: 'EV Insurance Underwriters & Providers',
    icon: 'verified_user',
    challenges: [
      'Unknown EV risk pricing models',
      'Battery valuation uncertainty',
      'Fraud detection in new vehicle category',
      'Claims processing complexity',
    ],
    products: [
      {
        name: 'KAILASH-AI',
        description: 'AI risk scoring engine for EV-specific underwriting, battery health assessment, and claims intelligence.',
      },
      {
        name: 'Eka-AI',
        description: 'Conversational claims assistant with automated document verification and fraud pattern detection.',
      },
    ],
    metrics: [
      { icon: 'psychology', value: 'AI-powered', label: 'Risk Scoring' },
      { icon: 'security', value: 'Automated', label: 'Fraud Detection' },
      { icon: 'battery_full', value: 'Real-time', label: 'Battery Assessment' },
    ],
    ctaText: 'Contact Enterprise Sales',
    ctaHref: '/contact',
  },
  {
    id: 'govt',
    name: 'Government & Regulators',
    subtitle: 'Policy Makers & Regulatory Bodies',
    icon: 'account_balance',
    challenges: [
      'Policy enforcement across states',
      'Subsidy tracking & disbursement',
      'Ecosystem health monitoring',
      'Compliance verification',
    ],
    products: [
      {
        name: 'URGAA (Urja)',
        description: 'Pan-India compliance dashboard with real-time policy enforcement, subsidy tracking, and digitised approval workflows.',
      },
      {
        name: 'KAILASH-AI',
        description: 'Ecosystem intelligence — monitoring EV adoption trends, infrastructure gaps, and compliance health across all 33 states.',
      },
    ],
    metrics: [
      { icon: 'dashboard', value: 'Real-time', label: 'Compliance Monitoring' },
      { icon: 'map', value: '33 states', label: 'State Coverage' },
      { icon: 'policy', value: 'Live updates', label: 'Policy Tracking' },
    ],
    ctaText: 'Contact for Partnership',
    ctaHref: '/contact',
  },
  {
    id: 'training',
    name: 'Training Institutions',
    subtitle: 'EV Skill Development Centres',
    icon: 'school',
    challenges: [
      'No standardised EV curriculum',
      'Growing skill gap in EV sector',
      'Certification fragmentation',
      'Placement tracking gaps',
    ],
    products: [
      {
        name: 'EV VIDYA ARJUN',
        description: 'Industry-aligned EV training platform with AI-personalised learning paths, certification management, and placement tracking.',
      },
    ],
    metrics: [
      { icon: 'workspace_premium', value: '200+', label: 'Technicians Certified' },
      { icon: 'schedule', value: '4-6 weeks', label: 'Program Duration' },
      { icon: 'factory', value: 'Industry-aligned', label: 'Curriculum' },
    ],
    ctaText: 'Explore Training Platform',
    ctaHref: '/products',
  },
  {
    id: 'consumers',
    name: 'EV Buyers / Consumers',
    subtitle: 'Individual EV Owners',
    icon: 'electric_car',
    challenges: [
      'Range anxiety & charging access',
      'Maintenance cost uncertainty',
      'Resale value unpredictability',
      'Finding certified EV service centers',
    ],
    products: [
      {
        name: 'Ignition App',
        description: "India's EV companion — real-time charging network map, service cost estimator, certified workshop locator, and resale value insights.",
      },
    ],
    metrics: [
      { icon: 'ev_station', value: 'Real-time', label: 'Charging Network' },
      { icon: 'receipt', value: 'Transparent', label: 'Service Costs' },
      { icon: 'verified', value: 'Certified', label: 'Service Locator' },
    ],
    ctaText: 'Download Ignition App',
    ctaHref: '/products',
  },
  {
    id: 'oems',
    name: 'OEMs / Manufacturers',
    subtitle: 'EV Original Equipment Manufacturers',
    icon: 'precision_manufacturing',
    challenges: [
      'After-sales quality monitoring',
      'Warranty management complexity',
      'Dealer network training readiness',
      'Field failure pattern analysis',
    ],
    products: [
      {
        name: 'KAILASH-AI',
        description: 'Field intelligence platform — warranty analytics, failure pattern detection, and dealer readiness scoring.',
      },
      {
        name: 'EV VIDYA ARJUN',
        description: 'Dealer and technician training at scale with certification tracking and readiness dashboards.',
      },
      {
        name: 'GSTSAAS',
        description: 'Dealer network commerce management with GST-compliant invoicing and inventory control.',
      },
    ],
    metrics: [
      { icon: 'savings', value: 'Reduced', label: 'Warranty Cost' },
      { icon: 'leaderboard', value: 'Scored', label: 'Dealer Readiness' },
      { icon: 'bug_report', value: 'Insights-driven', label: 'Field Failures' },
    ],
    ctaText: 'Contact Enterprise Sales',
    ctaHref: '/contact',
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
   Metric Card
   ───────────────────────────────────────────── */

function MetricCard({ metric }: { metric: StakeholderMetric }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="relative p-5 rounded-2xl bg-surface border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group overflow-hidden text-center"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary-container/5 rounded-full -translate-y-6 translate-x-6 group-hover:bg-primary-container/10 transition-colors" />
      <Icon name={metric.icon} size={24} className="text-primary mb-2 mx-auto" />
      <div className="text-xl font-black gradient-text font-display mb-1 leading-tight">
        {metric.value}
      </div>
      <div className="text-xs font-semibold text-on-surface-variant">{metric.label}</div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Stakeholder Section
   ───────────────────────────────────────────── */

function StakeholderSection({
  stakeholder,
  index,
  sectionRef,
}: {
  stakeholder: Stakeholder;
  index: number;
  sectionRef: (el: HTMLElement | null) => void;
}) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={stakeholder.id}
      ref={sectionRef}
      className={`py-20 scroll-mt-32 ${isAlt ? 'bg-surface-variant/5' : 'bg-surface'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/15 flex items-center justify-center shrink-0">
                <Icon name={stakeholder.icon} size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight">
                  {stakeholder.name}
                </h2>
                <p className="text-sm text-on-surface-variant font-medium">{stakeholder.subtitle}</p>
              </div>
            </div>
            <Link href={stakeholder.ctaHref}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 px-6 py-3 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                {stakeholder.ctaText}
              </motion.button>
            </Link>
          </div>

          <div className="h-px bg-outline-variant/30 mb-8" />

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-7 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm"
            >
              <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-5 font-display flex items-center gap-2">
                <Icon name="report_problem" size={15} className="text-primary" />
                Key Challenges
              </h3>
              <ul className="space-y-3">
                {stakeholder.challenges.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                  >
                    <Icon name="cancel" size={17} className="text-error/70 mt-0.5 shrink-0" />
                    {c}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="p-7 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm"
              >
                <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-5 font-display flex items-center gap-2">
                  <Icon name="inventory_2" size={15} className="text-primary" />
                  Recommended Products
                </h3>
                <div className={`grid gap-3 ${stakeholder.products.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {stakeholder.products.map((product, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 + i * 0.08 }}
                      className="px-4 py-3 bg-primary-container/8 rounded-xl border border-primary/10"
                    >
                      <p className="font-bold text-sm text-on-surface font-display mb-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 font-display flex items-center gap-2 px-1">
                  <Icon name="analytics" size={15} className="text-primary" />
                  Impact Metrics
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {stakeholder.metrics.map((m, i) => (
                    <MetricCard key={i} metric={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function SolutionsClient() {
  const [activeId, setActiveId] = useState<string>('cpo');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stakeholders.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(s.id);
        },
        { rootMargin: '-35% 0px -60% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const btn = selectorRef.current?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const offset = 128;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
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
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">
                Tailored for Every Stakeholder
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Solutions for{' '}
              <span className="gradient-text">Every Role</span>
              <br />
              <span className="text-3xl md:text-4xl font-semibold text-on-surface-variant">
                in India&apos;s EV Ecosystem
              </span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
              Eight specialised solutions — built for CPO operators, workshops, fleets,
              insurers, regulators, trainers, consumers, and OEMs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {stakeholders.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-outline-variant/40 bg-surface-bright hover:border-primary/40 hover:text-primary text-on-surface-variant transition-all"
                >
                  <Icon name={s.icon} size={14} />
                  {s.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STICKY ROLE SELECTOR */}
      <div className="sticky top-16 z-30 backdrop-blur-xl bg-surface-bright/92 border-b border-outline-variant/20 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div
            ref={selectorRef}
            className="flex gap-2 overflow-x-auto pb-0.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stakeholders.map((s) => (
              <motion.button
                key={s.id}
                data-id={s.id}
                onClick={() => scrollToSection(s.id)}
                whileTap={{ scale: 0.96 }}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeId === s.id
                    ? 'bg-primary text-primary-on shadow-md'
                    : 'bg-transparent text-on-surface-variant border border-outline-variant/30 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <Icon name={s.icon} size={16} />
                <span className="whitespace-nowrap">{s.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* 8 STAKEHOLDER SECTIONS */}
      {stakeholders.map((s, idx) => (
        <StakeholderSection
          key={s.id}
          stakeholder={s}
          index={idx}
          sectionRef={(el) => { sectionRefs.current[s.id] = el; }}
        />
      ))}

      {/* COMPARISON TABLE */}
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
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-outline-variant/20">
              <div className="px-6 py-4 text-on-surface font-display">Capability</div>
              <div className="px-6 py-4 text-center text-primary font-display">Go4Garage</div>
              <div className="px-6 py-4 text-center text-on-surface-variant font-display">Generic Solutions</div>
            </div>

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

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-surface-container-low">
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
