'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsCard } from '@/components/StatsCard';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { EVJourneyVisual } from '@/components/EVJourneyVisual';


/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const capabilityTabs = [
  {
    label: 'Regulatory Intelligence',
    icon: 'gavel',
    color: 'primary' as const,
    title: '33-State Policy Engine',
    description:
      'Navigate India\u2019s fragmented regulatory landscape with an AI engine that tracks, interprets, and automates compliance across every state, authority, and policy domain \u2014 from DISCOM approvals to pollution board permits.',
    features: [
      { icon: 'bolt', name: 'DISCOM Automation', desc: 'Automated application wizard for connection requests, load sanctioning, and meter installation across all DISCOMs' },
      { icon: 'currency_rupee', name: 'Subsidy Tracking', desc: 'Real-time tracking of FAME-II, state-level incentives, and subsidy disbursement workflows' },
      { icon: 'task_alt', name: 'Compliance Workflows', desc: 'Multi-authority approval orchestration covering fire dept, electrical inspector, pollution board, and municipal permits' },
      { icon: 'auto_awesome', name: 'Regulatory Rules Engine', desc: 'AI-powered engine covering regulations across 33 states with auto-updates on policy changes' },
    ],
  },
  {
    label: 'Operational Excellence',
    icon: 'precision_manufacturing',
    color: 'secondary' as const,
    title: 'End-to-End Operations',
    description:
      'Digitize every operational touchpoint \u2014 from charge-point installation and fleet management to workshop job cards and smart charging \u2014 on a single pane of glass with predictive insights.',
    features: [
      { icon: 'ev_station', name: 'CPO Management', desc: 'Complete charge point operator lifecycle \u2014 site intake, feasibility, installation, monitoring, and SLA management' },
      { icon: 'local_shipping', name: 'Fleet Operations', desc: 'Vehicle tracking, trip logging, driver management, and predictive maintenance for fleet operators' },
      { icon: 'build', name: 'Workshop Digitization', desc: 'Job cards, technician assignment, service SOP library, and parts inventory with reorder automation' },
      { icon: 'electric_bolt', name: 'Smart Charging', desc: 'Dynamic tariff optimization, transformer overload monitoring, and OCPP/OCPI interoperability' },
    ],
  },
  {
    label: 'Commercial Intelligence',
    icon: 'payments',
    color: 'tertiary' as const,
    title: 'Revenue & Compliance Automation',
    description:
      'Eliminate revenue leakage and automate every financial workflow \u2014 invoicing, GST filing, carbon credits, and working capital management \u2014 with AI-driven anomaly detection.',
    features: [
      { icon: 'receipt_long', name: 'Billing Automation', desc: 'Invoice generation, payment reconciliation, and collections management with multi-channel support' },
      { icon: 'verified', name: 'GST Compliance', desc: 'HSN/SAC validation, auto-filing, and anomaly detection for 100% tax compliance' },
      { icon: 'trending_up', name: 'Revenue Optimization', desc: 'Revenue leakage detection, working capital dashboard, and financing offer routing' },
      { icon: 'eco', name: 'Carbon Credits', desc: 'Carbon credit ledger, ESG reporting, and EPR compliance tracking' },
    ],
  },
  {
    label: 'Workforce Development',
    icon: 'school',
    color: 'secondary' as const,
    title: 'Bridging the Skill Gap',
    description:
      'Address India\u2019s 100K+ EV technician shortage with adaptive learning, industry-recognized certifications, and an apprenticeship marketplace that connects talent to opportunity.',
    features: [
      { icon: 'menu_book', name: 'Technician Training', desc: 'Adaptive learning paths from ICE to EV, covering high-voltage safety, battery management, and diagnostics' },
      { icon: 'workspace_premium', name: 'Certification', desc: 'Industry-recognized certifications with assessment engine, proctoring, and digital credential management' },
      { icon: 'handshake', name: 'Placement', desc: 'Apprenticeship marketplace connecting trained technicians with workshops, OEMs, and fleet operators' },
      { icon: 'query_stats', name: 'Skill Gap Analysis', desc: 'AI-driven proficiency tracking, competency mapping, and personalized learning recommendations' },
    ],
  },
];

const comparisonRows = [
  { traditional: 'Manual regulatory filings', g4g: 'AI-automated compliance across 33 states' },
  { traditional: 'Spreadsheet-based operations', g4g: 'Real-time digital dashboards' },
  { traditional: 'Fragmented billing & tax', g4g: 'Unified GST-compliant automation' },
  { traditional: 'No predictive insights', g4g: 'AI-driven forecasting & anomaly detection' },
  { traditional: 'Classroom-only training', g4g: 'AI-powered adaptive learning with offline access' },
  { traditional: 'Siloed data systems', g4g: 'Integrated data platform with cross-product intelligence' },
  { traditional: 'Reactive maintenance', g4g: 'Predictive maintenance with Battery SoH grading' },
  { traditional: 'Paper-based approvals', g4g: 'Multi-authority digital approval orchestration' },
];

const techCards = [
  {
    icon: 'psychology',
    title: 'Automobile LLM',
    description: 'Domain-specific large language model trained on Indian automobile regulations, service manuals, and industry knowledge',
    features: ['Contextual policy interpretation', 'Multi-language support', 'Continuous fine-tuning'],
  },
  {
    icon: 'verified',
    title: 'Compliance Engine',
    description: 'Real-time regulatory tracking across 33 states with auto-update capabilities and multi-authority workflow automation',
    features: ['Auto policy change alerts', 'Cross-state rule mapping', 'Approval status tracking'],
  },
  {
    icon: 'insights',
    title: 'Predictive Analytics',
    description: 'ML-powered forecasting for maintenance, demand, revenue, and workforce planning with continuous model improvement',
    features: ['Demand forecasting', 'Anomaly detection', 'Battery health prediction'],
  },
  {
    icon: 'hub',
    title: 'Multi-Agent AI',
    description: 'Orchestrated AI agents across 6 products providing cross-domain intelligence and automated decision support',
    features: ['Cross-product reasoning', 'Autonomous task execution', 'Human-in-the-loop escalation'],
  },
];

const architectureLayers = [
  {
    label: 'Applications',
    color: 'bg-primary-container/15 border-primary/30',
    items: ['Ignition App', 'Admin Console', 'Partner Portal'],
  },
  {
    label: 'Intelligence Engine',
    color: 'bg-secondary-container/15 border-secondary/30',
    items: ['KAILASH-AI', 'Eka-AI Agents'],
  },
  {
    label: 'Platform Services',
    color: 'bg-tertiary-container/15 border-tertiary/30',
    items: ['URGAA (ऊर्जा)', 'GSTSAAS', 'EV VIDYA ARJUN'],
  },
  {
    label: 'Data & Infrastructure',
    color: 'bg-primary-container/10 border-primary/20',
    items: ['Data Lake', 'ML Pipeline', 'API Gateway'],
  },
];

const enterpriseFeatures = [
  { icon: 'security', title: 'Security', description: 'SOC 2 compliant infrastructure with end-to-end encryption, RBAC, and audit logging' },
  { icon: 'trending_up', title: 'Scalability', description: 'Cloud-native architecture handling 10K+ concurrent users with auto-scaling and 99.9% uptime SLA' },
  { icon: 'integration_instructions', title: 'Integration', description: 'REST APIs, webhooks, and pre-built connectors for SAP, Tally, GSTN, and OEM systems' },
  { icon: 'support_agent', title: 'Support', description: '24/7 dedicated support with SLA-backed response times and named account managers' },
  { icon: 'apartment', title: 'Multi-tenancy', description: 'Complete tenant isolation with configurable branding, permissions, and data sovereignty' },
  { icon: 'palette', title: 'White-label', description: 'Fully customizable UI, branding, and domain mapping for partner deployments' },
];

/* ═══════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════ */

const colorMap = {
  primary: { text: 'text-primary', bg: 'bg-primary-container/15', border: 'border-primary/30', activeBg: 'bg-primary', activeText: 'text-white' },
  secondary: { text: 'text-secondary', bg: 'bg-secondary-container/15', border: 'border-secondary/30', activeBg: 'bg-secondary', activeText: 'text-white' },
  tertiary: { text: 'text-tertiary', bg: 'bg-tertiary-container/15', border: 'border-tertiary/30', activeBg: 'bg-tertiary', activeText: 'text-white' },
};

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function PlatformClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const tab = capabilityTabs[activeTab];
  const clr = colorMap[tab.color];

  // Slide 1 auto-returns to Slide 0 (video) after 10s
  useEffect(() => {
    if (heroSlide !== 1) return;
    const timer = setTimeout(() => setHeroSlide(0), 10000);
    return () => clearTimeout(timer);
  }, [heroSlide]);

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─────────────────────── 1 · HERO SLIDER ─────────────────────── */}
      <section className="relative h-[calc(100vh-4rem)] mt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlide === 0 ? (
            /* ── SLIDE 0: EV Journey Video ── */
            <motion.div
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <EVJourneyVisual
                onComplete={() => {
                  setTimeout(() => setHeroSlide(1), 3000);
                }}
              />
            </motion.div>
          ) : (
            /* ── SLIDE 1: Platform Overview ── */
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[calc(100vh-4rem)] flex items-center justify-center pt-4"
            >
              {/* Animated background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
                />
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/8 rounded-full blur-[150px]"
                />
              </div>
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }}
              />

              <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-center max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-semibold text-primary font-display tracking-wide">Enterprise-Grade Platform</span>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
                    Enterprise-Grade AI{' '}
                    <span className="gradient-text">Intelligence Platform</span>
                  </h1>

                  <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed">
                    One unified platform powering regulatory intelligence, operational excellence, commercial automation, and workforce development across India&apos;s entire automobile ecosystem.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                  >
                    {[
                      { icon: 'bug_report', value: 95, label: 'Problems Mapped' },
                      { icon: 'check_circle', value: 85, label: 'Solvable' },
                      { icon: 'widgets', value: 76, label: 'Features' },
                      { icon: 'inventory_2', value: 7, label: 'Products' },
                    ].map((s, i) => (
                      <StatsCard key={i} icon={s.icon} value={s.value} label={s.label} />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Slide Indicator Dots ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                heroSlide === idx
                  ? 'w-8 h-3 bg-primary shadow-lg'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 border border-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────── 2 · CAPABILITY PILLARS ─────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Core Capabilities"
            title="Four Pillars of"
            highlight="Platform Excellence"
            subtitle="A comprehensive AI-powered solution designed for every layer of India&apos;s automobile value chain."
          />

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {capabilityTabs.map((t, idx) => {
              const c = colorMap[t.color];
              const isActive = activeTab === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? `${c.activeBg} ${c.activeText} shadow-lg`
                      : 'bg-surface-bright text-on-surface-variant border border-outline-variant/30 hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  <Icon name={t.icon} size={20} />
                  <span className="hidden sm:inline">{t.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start"
            >
              {/* Left: overview */}
              <div className={`p-8 rounded-2xl border ${clr.border} ${clr.bg} shadow-sm`}>
                <Icon name={tab.icon} size={44} className={`${clr.text} mb-4`} />
                <h3 className="text-2xl font-bold mb-3 font-display">{tab.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{tab.description}</p>
              </div>

              {/* Right: feature items */}
              <div className="grid sm:grid-cols-2 gap-4">
                {tab.features.map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-surface-bright p-6 rounded-xl border border-outline-variant/30 hover:shadow-md transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${clr.bg} flex items-center justify-center mb-3`}>
                      <Icon name={f.icon} size={22} className={clr.text} />
                    </div>
                    <h4 className="font-bold text-on-surface mb-1.5 font-display">{f.name}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────────── 3 · COMPARISON TABLE ─────────────── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="The Difference"
            title="Traditional vs"
            highlight="Go4Garage Platform"
          />

          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <div className="bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-2 text-sm font-bold border-b border-outline-variant/20">
                <div className="px-6 py-4 text-on-surface-variant font-display bg-surface-container-low/50">Traditional Approach</div>
                <div className="px-6 py-4 text-primary font-display border-l-4 border-primary/40 bg-primary-container/5">Go4Garage Platform</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="grid grid-cols-2 text-sm border-b border-outline-variant/10 last:border-b-0 hover:bg-surface-container-low/30 transition-colors"
                >
                  <div className="px-6 py-4 text-on-surface-variant flex items-start gap-2.5">
                    <Icon name="close" size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="px-6 py-4 text-on-surface font-medium flex items-start gap-2.5 border-l-4 border-primary/10">
                    <Icon name="check_circle" size={18} className="text-tertiary mt-0.5 flex-shrink-0" />
                    <span>{row.g4g}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── 4 · TECHNOLOGY STACK ──────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Technology"
            title="Built on"
            highlight="Cutting-Edge AI"
            subtitle="Four foundational technologies power every product in the Go4Garage ecosystem."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCards.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center mb-4 group-hover:bg-primary-container/25 transition-colors">
                  <Icon name={tech.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-display group-hover:text-primary transition-colors">{tech.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 5 · ARCHITECTURE DIAGRAM ──────────────── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Architecture"
            title="Platform"
            highlight="Architecture"
            subtitle="A layered, modular architecture designed for extensibility, security, and scale."
          />

          <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-4">
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="relative"
              >
                <div className={`rounded-2xl border-2 ${layer.color} p-6`}>
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 font-display">
                    {layer.label}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {layer.items.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.04 }}
                        className="px-5 py-3 rounded-xl bg-surface-bright border border-outline-variant/30 text-sm font-semibold text-on-surface shadow-sm hover:shadow-md transition-all"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Connecting line */}
                {idx < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-4 bg-outline-variant/40 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────── 6 · ENTERPRISE FEATURES GRID ──────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Enterprise Ready"
            title="Built for"
            highlight="Scale & Security"
            subtitle="Enterprise-grade capabilities that meet the demands of India\u2019s largest automobile organizations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {enterpriseFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center mb-4 group-hover:bg-primary-container/25 transition-colors">
                  <Icon name={feat.icon} size={26} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-display group-hover:text-primary transition-colors">{feat.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── 7 · CTA ──────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/12 via-surface to-secondary-container/12" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/6 rounded-full blur-[180px]"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">
              Ready to Experience the{' '}
              <span className="gradient-text">Future of Automobile Intelligence?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a personalized platform walkthrough and discover how Go4Garage can transform your operations, compliance, and revenue workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 bg-primary text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Book Platform Walkthrough
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
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
