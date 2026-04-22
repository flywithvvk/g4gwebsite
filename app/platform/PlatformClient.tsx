'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsCard } from '@/components/StatsCard';
import { Icon } from '@/components/Icon';
import { EVJourneyVisual } from '@/components/EVJourneyVisual';


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

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
  { icon: 'gavel', dimension: 'Compliance Filing', traditional: 'Manual, state-by-state, 6-8 week delays', g4g: 'AI-automated across 33 states, days not weeks' },
  { icon: 'build', dimension: 'Workshop Management', traditional: 'Paper job cards, manual GST filing', g4g: 'Digital job cards with AI diagnostics + auto GST' },
  { icon: 'electric_bolt', dimension: 'EV Diagnostics', traditional: 'Generic OBD tools, manual interpretation', g4g: 'AI fault analysis with predictive maintenance' },
  { icon: 'school', dimension: 'Technician Training', traditional: 'Classroom-only, no certification tracking', g4g: 'AI-personalized learning paths with certification' },
  { icon: 'insights', dimension: 'Analytics & Insights', traditional: 'Excel spreadsheets, monthly reports', g4g: 'Real-time AI dashboards with anomaly detection' },
  { icon: 'hub', dimension: 'Platform Coverage', traditional: 'Single point solution per problem', g4g: '6 integrated products on unified data layer' },
];

const techCards = [
  {
    icon: 'psychology',
    title: 'Proprietary Automotive AI Engine',
    description: 'Proprietary Automotive AI Engine — powered by domain-tuned models and a multi-LLM routing system that selects the optimal AI model across 10 dimensions for each task. Includes fine-tuned models for Indian automotive regulations and a RAG-powered knowledge base of 55+ regulatory documents.',
    features: ['Multi-LLM routing across 10 dimensions', 'RAG knowledge base: 55+ regulatory documents', 'Fine-tuned for Indian automotive regulations'],
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

const enterpriseFeatures = [
  { icon: 'security', title: 'Security', description: 'Enterprise security architecture with audit logging, RBAC, and encryption at rest' },
  { icon: 'trending_up', title: 'Scalability', description: 'High availability architecture with redundancy and auto-scaling infrastructure for cloud-native deployments' },
  { icon: 'integration_instructions', title: 'Integration', description: 'API-first architecture with integration support for enterprise systems including GSTN, Tally-compatible exports, and OEM data feeds' },
  { icon: 'support_agent', title: 'Support', description: '24/7 dedicated support with SLA-backed response times and named account managers' },
  { icon: 'apartment', title: 'Multi-tenancy', description: 'Complete tenant isolation with configurable branding, permissions, and data sovereignty' },
  { icon: 'palette', title: 'White-label', description: 'White-label ready architecture for partner deployments' },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HELPERS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const colorMap = {
  primary: { text: 'text-primary', bg: 'bg-primary-container/15', border: 'border-primary/30', activeBg: 'bg-primary', activeText: 'text-white' },
  secondary: { text: 'text-secondary', bg: 'bg-secondary-container/15', border: 'border-secondary/30', activeBg: 'bg-secondary', activeText: 'text-white' },
  tertiary: { text: 'text-tertiary', bg: 'bg-tertiary-container/15', border: 'border-tertiary/30', activeBg: 'bg-tertiary', activeText: 'text-white' },
};

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

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
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ─────────────────────── 1 · HERO SLIDER ─────────────────────── */}
      <section className="relative h-[calc(100vh-4rem)] mt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlide === 0 ? (
            /* ── SLIDE 0: EV Journey Video ── */
            <motion.div
              key="slide-0"
              className="absolute inset-0"
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
                <Icon name={tab.icon} size={28} className={`${clr.text} mb-4`} />
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
                      <Icon name={f.icon} size={20} className="text-on-surface-variant" />
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
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-3 text-sm font-bold">
                <div className="px-6 py-4 text-on-surface-variant font-display bg-surface-container/30">
                  Dimension
                </div>
                <div className="px-6 py-4 text-red-700 font-display bg-red-500/10 flex items-center gap-2 border-l border-red-500/20">
                  <Icon name="cancel" size={18} className="text-red-500" />
                  Traditional Approach
                </div>
                <div className="px-6 py-4 text-green-700 dark:text-green-400 font-display bg-green-500/10 flex items-center gap-2 border-l border-green-500/20">
                  <Icon name="check_circle" size={18} className="text-green-500" />
                  Go4Garage Platform
                </div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-3 text-sm border-t border-outline-variant/10"
                >
                  <div className="px-6 py-4 text-on-surface font-semibold flex items-center gap-3 bg-surface-container/20">
                    <Icon name={row.icon} size={18} className="text-primary flex-shrink-0" />
                    <span>{row.dimension}</span>
                  </div>
                  <div className="px-6 py-4 text-on-surface-variant flex items-start gap-3 bg-red-500/5 hover:bg-red-500/10 transition-colors border-l border-red-500/10">
                    <Icon name="cancel" size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="px-6 py-4 text-on-surface font-medium flex items-start gap-3 bg-green-500/5 hover:bg-green-500/10 transition-colors border-l border-green-500/15">
                    <Icon name="check_circle" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
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
                  <Icon name={tech.icon} size={20} className="text-on-surface-variant" />
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
      <section className="py-24 relative" style={{ background: '#0D1117' }}>
        {/* decorative radial glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* heading forced white on dark bg */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border"
              style={{ background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.35)', color: '#93C5FD' }}>
              <Icon name="architecture" size={14} /> Architecture
            </span>
            <h2 className="text-4xl font-extrabold font-display mb-3 text-white">
              Platform <span style={{ color: '#60A5FA' }}>Architecture</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              A layered, modular architecture designed for extensibility, security, and scale.
            </p>
          </div>

          <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-0">

            {/* ── Applications Layer ── */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,#0F1B2D 0%,#0A1628 100%)', border: '1.5px solid rgba(59,130,246,0.45)', boxShadow: '0 0 24px rgba(59,130,246,0.08), inset 0 1px 0 rgba(59,130,246,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#3B82F6' }} />
                <span className="text-xs font-bold uppercase tracking-widest font-display" style={{ color: '#60A5FA' }}>Applications Layer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'phone_android', name: 'Ignition App' },
                  { icon: 'admin_panel_settings', name: 'Admin Console' },
                  { icon: 'group', name: 'Partner Portal' },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(59,130,246,0.3)' }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: 'rgba(30,50,80,0.8)', border: '1px solid rgba(59,130,246,0.3)', color: '#E2E8F0' }}
                  >
                    <Icon name={item.icon} size={18} className="text-[#60A5FA]" />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Connector ── */}
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(168,85,247,0.5))' }} />
                <Icon name="keyboard_double_arrow_down" size={20} className="text-[#6B7280]" />
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(20,184,166,0.5))' }} />
              </div>
            </div>

            {/* ── AI Intelligence Layer ── */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,#1A0F2E 0%,#12082A 100%)', border: '1.5px solid rgba(168,85,247,0.45)', boxShadow: '0 0 24px rgba(168,85,247,0.08), inset 0 1px 0 rgba(168,85,247,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#A855F7' }} />
                <span className="text-xs font-bold uppercase tracking-widest font-display" style={{ color: '#C084FC' }}>AI Intelligence Layer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'psychology', name: 'KAILASH-AI' },
                  { icon: 'smart_toy', name: 'Eka-AI Agents' },
                  { icon: 'hub', name: 'Proprietary Inference Engine' },
                  { icon: 'dataset', name: '100M+ Training Records' },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(168,85,247,0.3)' }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: 'rgba(40,20,70,0.8)', border: '1px solid rgba(168,85,247,0.3)', color: '#E2E8F0' }}
                  >
                    <Icon name={item.icon} size={18} className="text-[#C084FC]" />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Connector ── */}
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center">
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(20,184,166,0.5))' }} />
                <Icon name="keyboard_double_arrow_down" size={20} className="text-[#6B7280]" />
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(20,184,166,0.5), rgba(245,158,11,0.5))' }} />
              </div>
            </div>

            {/* ── Platform Services Layer ── */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,#0F2420 0%,#091E1A 100%)', border: '1.5px solid rgba(20,184,166,0.45)', boxShadow: '0 0 24px rgba(20,184,166,0.08), inset 0 1px 0 rgba(20,184,166,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#14B8A6' }} />
                <span className="text-xs font-bold uppercase tracking-widest font-display" style={{ color: '#2DD4BF' }}>Platform Services Layer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'electric_bolt', name: 'URGAA (ऊर्जा)' },
                  { icon: 'receipt_long', name: 'GSTSAAS' },
                  { icon: 'school', name: 'EV VIDYA ARJUN' },
                  { icon: 'garage', name: 'Ignition' },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(20,184,166,0.3)' }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: 'rgba(15,50,44,0.8)', border: '1px solid rgba(20,184,166,0.3)', color: '#E2E8F0' }}
                  >
                    <Icon name={item.icon} size={18} className="text-[#2DD4BF]" />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Connector ── */}
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center">
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(20,184,166,0.5), rgba(245,158,11,0.5))' }} />
                <Icon name="keyboard_double_arrow_down" size={20} className="text-[#6B7280]" />
                <div className="w-px h-5" style={{ background: 'linear-gradient(to bottom, rgba(245,158,11,0.5), rgba(100,116,139,0.5))' }} />
              </div>
            </div>

            {/* ── Foundation Layer ── */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 }}
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,#1E1500 0%,#161000 100%)', border: '1.5px solid rgba(245,158,11,0.45)', boxShadow: '0 0 24px rgba(245,158,11,0.08), inset 0 1px 0 rgba(245,158,11,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F59E0B' }} />
                <span className="text-xs font-bold uppercase tracking-widest font-display" style={{ color: '#FCD34D' }}>Foundation Layer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'storage', name: 'Proprietary Data Lake' },
                  { icon: 'model_training', name: 'Secure ML Pipeline' },
                  { icon: 'api', name: 'Unified API Gateway' },
                  { icon: 'security', name: 'Zero-Trust Security' },
                  { icon: 'cloud', name: 'Multi-Region Cloud' },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(245,158,11,0.3)' }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: 'rgba(40,28,0,0.8)', border: '1px solid rgba(245,158,11,0.3)', color: '#E2E8F0' }}
                  >
                    <Icon name={item.icon} size={18} className="text-[#FCD34D]" />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Stats bar ── */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.48 }}
              className="mt-6 rounded-2xl p-5 flex flex-wrap items-center justify-around gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {[
                { label: 'Uptime SLA', value: '99.9%' },
                { label: 'Encrypted Records', value: '100M+' },
                { label: 'API Endpoints', value: '200+' },
                { label: 'Data Residency', value: 'India-only' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold font-display" style={{ color: '#F1F5F9' }}>{value}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#64748B' }}>{label}</div>
                </div>
              ))}
            </motion.div>

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
                  <Icon name={feat.icon} size={20} className="text-on-surface-variant" />
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
