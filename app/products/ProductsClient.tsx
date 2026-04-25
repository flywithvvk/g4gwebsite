'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsCard } from '@/components/StatsCard';
import { AnimatedCounter } from '@/components/AnimatedCounter';

/* ───────────────────────── DATA ───────────────────────── */

interface Product {
  id: string;
  name: string;
  prdCode: string;
  tagline: string;
  description: string;
  problemLabel: string;
  problemCount: number;
  icon: string;
  features: string[];
  colorFamily: 'primary' | 'secondary' | 'tertiary';
  slug?: string;
  setupTime?: string;
}

const products: Product[] = [
  {
    id: 'urgaa',
    name: 'URGAA (ऊर्जा)',
    prdCode: 'PRD-URG-001',
    tagline: 'Regulatory & Grid Intelligence',
    description:
      'Navigate India\u2019s 33-state regulatory landscape with AI-powered compliance automation. From DISCOM applications to carbon credits, URGAA (ऊर्जा) digitises every step of EV infrastructure permitting and grid management.',
    problemLabel: 'problems',
    problemCount: 48,
    icon: 'ev_station',
    slug: 'urgaa',
    setupTime: '2-3 weeks (regulatory setup required)',
    features: [
      'DISCOM Application Wizard: reduces 6-month delays to weeks',
      'Site Scoring Engine: 12 parameters including grid & footfall',
      'Tariff Management: real-time updates across 33 states',
      'Compliance Tracker: deadline alerts & document management',
      'Carbon Credit Tracking: automated calculation & trading',
      'Grid Capacity Estimator: AI-powered upgrade analysis',
    ],
    colorFamily: 'primary',
  },
  {
    id: 'gstsaas',
    name: 'GST (Go4Garage Service Tools)',
    prdCode: 'PRD-GST-001',
    tagline: 'Workshop & Commerce Engine',
    description:
      'End-to-end workshop and service-centre operations \u2014 inventory, invoicing, insurance, and RSA dispatch. GST (Go4Garage Service Tools) turns every garage into a digitally-native, GST-compliant profit centre.',
    problemLabel: 'problems',
    problemCount: 17,
    icon: 'build',
    slug: 'gstsaas',
    setupTime: '1-2 weeks setup',
    features: [
      'Digital Job Cards: real-time status tracking for customers',
      'GST Invoicing: automated calculation & filing-ready exports',
      'Inventory Management: auto-reorder alerts & OEM integration',
      'Market Price Engine: AI-powered spare parts pricing',
      'Customer Management: 360° profiles with service reminders',
      'Service History: digital history shareable for resale proof',
    ],
    colorFamily: 'secondary',
  },
  {
    id: 'ignition',
    name: 'Ignition App',
    prdCode: 'PRD-APP-001',
    tagline: 'Consumer Experience App',
    description:
      'The consumer-facing mobile app that makes EV ownership delightful. Charger discovery, payments, roadside assistance, and a personal carbon tracker \u2014 all in one pocket-sized experience.',
    problemLabel: 'problems',
    problemCount: 10,
    icon: 'electric_car',
    slug: 'ignition',
    setupTime: '1 week setup',
    features: [
      'Real-Time Charging Map: live availability, pricing & wait times',
      'Vehicle Health Monitor: battery health & range prediction',
      'Service Booking: certified centers with transparent pricing',
      'Cost Calculator: TCO & optimised charging schedules',
      'Roadside Assistance: one-tap emergency + technician dispatch',
      'EV Learning Hub: tips & guides to maximise range',
    ],
    colorFamily: 'tertiary',
  },
  {
    id: 'arjun',
    name: 'EV VIDYA ARJUN',
    prdCode: 'PRD-ARJ-001',
    tagline: 'Workforce Skilling Platform',
    description:
      'India\u2019s EV workforce platform bridging the 100 K+ technician gap. Adaptive courses, certifications, gamification, and an AI tutor ensure every mechanic becomes EV-ready.',
    problemLabel: 'problems',
    problemCount: 8,
    icon: 'school',
    slug: 'arjun',
    setupTime: '2 weeks curriculum setup',
    features: [
      'Curriculum Builder: battery, motor & power electronics',
      'Assessment Engine: practical & theoretical with auto-grading',
      'Certification System: QR-verified credentials & digital badges',
      'Hands-On Modules: simulation-based battery & safety training',
      'Placement Tracking: industry connections for certified techs',
      'Progress Analytics: cohort-level insights for institutions',
    ],
    colorFamily: 'secondary',
  },
  {
    id: 'kailash',
    name: 'KAILASH-AI',
    prdCode: 'PRD-KAI-001',
    tagline: 'Predictive Analytics & AI Engine',
    description:
      'The intelligence backbone powering every Go4Garage product. From battery health grading to OTA rollout monitoring, KAILASH-AI turns raw telemetry into actionable foresight.',
    problemLabel: 'primary problems',
    problemCount: 2,
    icon: 'psychology',
    slug: 'kailash-ai',
    setupTime: 'Included with any product',
    features: [
      'Predictive Diagnostics: predict failures 2-4 weeks ahead',
      'Analytics Dashboard: real-time intelligence across products',
      'Anomaly Detection: unusual patterns in energy & compliance',
      'Battery Health Scoring: degradation models for fleet & insurance',
      'Revenue Forecasting: AI demand forecasting for CPOs & workshops',
      'Intelligence API: REST API for third-party integration',
    ],
    colorFamily: 'primary',
  },
  {
    id: 'eka',
    name: 'Eka-AI',
    prdCode: 'PRD-EKA-001',
    tagline: 'AI Agent Orchestration',
    description:
      'The orchestration layer that coordinates every AI agent in the ecosystem. Multi-lingual Q&A, guided actions, and cross-product intelligence \u2014 Eka makes the platform feel like one brain.',
    problemLabel: 'agent orchestration',
    problemCount: 0,
    icon: 'smart_toy',
    slug: 'eka-ai',
    setupTime: 'Included with Professional/Enterprise plans',
    features: [
      'Conversational AI: English, Hindi & regional language natural language interface',
      'Multi-Agent Orchestration: compliance, diagnostics & finance agents',
      'Knowledge Retrieval: instant access to India auto regulations',
      'Operator Automation: AI-triggered compliance & scheduling workflows',
      'Guided Actions: step-by-step AI-guided workflows for any task',
      'Platform Integration: deep integration with URGAA, GST (Go4Garage Service Tools), KAILASH-AI',
    ],
    colorFamily: 'tertiary',
  },
];

const colorMap = {
  primary: {
    bg: 'bg-primary-container/12',
    bgHover: 'hover:bg-primary-container/20',
    border: 'border-[#904d00]',
    borderLight: 'border-primary/20',
    text: 'text-primary',
    iconBg: 'bg-primary-container/15',
    badge: 'bg-primary-container/15 text-primary',
    activeBg: 'bg-primary-container/20',
    dot: 'bg-[#904d00]',
  },
  secondary: {
    bg: 'bg-secondary-container/12',
    bgHover: 'hover:bg-secondary-container/20',
    border: 'border-[#7b41b3]',
    borderLight: 'border-secondary/20',
    text: 'text-secondary',
    iconBg: 'bg-secondary-container/15',
    badge: 'bg-secondary-container/15 text-secondary',
    activeBg: 'bg-secondary-container/20',
    dot: 'bg-[#7b41b3]',
  },
  tertiary: {
    bg: 'bg-tertiary-container/12',
    bgHover: 'hover:bg-tertiary-container/20',
    border: 'border-[#006e2f]',
    borderLight: 'border-tertiary/20',
    text: 'text-tertiary',
    iconBg: 'bg-tertiary-container/15',
    badge: 'bg-tertiary-container/15 text-tertiary',
    activeBg: 'bg-tertiary-container/20',
    dot: 'bg-[#006e2f]',
  },
};

const featureMatrix: { category: string; checks: boolean[] }[] = [
  { category: 'Regulatory Compliance', checks: [true, false, false, false, false, false] },
  { category: 'Workshop Operations', checks: [false, true, false, false, false, false] },
  { category: 'Consumer Experience', checks: [false, false, true, false, false, false] },
  { category: 'Workforce Training', checks: [false, false, false, true, false, false] },
  { category: 'AI & Analytics', checks: [true, true, false, false, true, true] },
  { category: 'Agent Orchestration', checks: [false, false, false, false, false, true] },
];

const timelinePhases = [
  { phase: 'Week 1', title: 'Assessment', icon: 'search', desc: 'Workflow analysis & pain point mapping' },
  { phase: 'Week 2\u20133', title: 'Setup & Configuration', icon: 'settings', desc: 'Deploy products & integrate existing systems' },
  { phase: 'Week 4', title: 'Training & Onboarding', icon: 'school', desc: 'Team training & feature walkthrough' },
  { phase: 'Week 5+', title: 'Optimization', icon: 'trending_up', desc: 'AI learns, adapts & scales with your operations' },
];

/* ──────────────────── FLOATING ICONS ──────────────────── */

function FloatingProductIcons() {
  const icons = products.map((p) => ({ icon: p.icon, color: colorMap[p.colorFamily].text }));
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, i) => {
        const angle = (360 / icons.length) * i;
        const radius = 220;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ width: 44, height: 44, marginLeft: -22, marginTop: -22 }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className={`w-11 h-11 rounded-xl bg-surface-bright/80 backdrop-blur border border-outline-variant/30 flex items-center justify-center shadow-sm ${item.color}`}
              style={{ transform: `translateX(${radius}px)` }}
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <Icon name={item.icon} size={22} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ──────────────────── TECH ARCH DIAGRAM ──────────────────── */

function TechArchDiagram() {
  const userTypes = [
    { icon: 'engineering', label: 'Workshop Owners' },
    { icon: 'local_shipping', label: 'Fleet Operators' },
    { icon: 'ev_station', label: 'CPO Operators' },
    { icon: 'person', label: 'EV Consumers' },
    { icon: 'account_balance', label: 'Government' },
    { icon: 'account_balance_wallet', label: 'NBFC & Lenders' },
    { icon: 'groups', label: 'Training Bodies' },
  ];

  const appProducts = [
    { icon: 'ev_station', name: 'URGAA', tagline: 'Regulatory & Grid Intelligence', color: 'text-primary' },
    { icon: 'receipt_long', name: 'GST (Go4Garage Service Tools)', tagline: 'Workshop & Commerce Engine', color: 'text-secondary' },
    { icon: 'electric_car', name: 'Ignition', tagline: 'Consumer Experience App', color: 'text-tertiary' },
    { icon: 'school', name: 'EV VIDYA ARJUN', tagline: 'Workforce Skilling Platform', color: 'text-secondary' },
    { icon: 'psychology', name: 'KAILASH-AI', tagline: 'Predictive Analytics', color: 'text-primary' },
    { icon: 'smart_toy', name: 'Eka-AI', tagline: 'AI Agent Orchestration', color: 'text-tertiary' },
  ];

  const intelligenceLeft = [
    { icon: 'hub', name: 'Adaptive Model Selection', note: '12-dimension scoring matrix' },
    { icon: 'library_books', name: 'Domain Knowledge Engine', note: '50K+ structured automotive records' },
  ];
  const intelligenceCenter = [
    { icon: 'psychology', name: 'EKA Orchestrator', note: 'Unified intelligence coordinator' },
    { icon: 'manage_search', name: 'Semantic Retrieval Engine', note: 'Dense vector similarity matching' },
  ];
  const intelligenceRight = [
    { icon: 'security', name: 'Intent & Safety Filter', note: 'Multi-stage context guardrails' },
    { icon: 'rule', name: 'Compliance Rules Graph', note: '33-state regulatory ruleset' },
  ];

  const dataComponents = [
    { icon: 'storage', name: 'Proprietary Vector Index', note: 'High-dimension semantic store' },
    { icon: 'speed', name: 'Real-Time State Layer', note: 'Sub-10ms response cache' },
    { icon: 'computer', name: 'Edge AI Processing', note: 'On-premises secure inference' },
    { icon: 'cloud', name: 'Cloud Intelligence Fabric', note: 'Elastic multi-model inference' },
    { icon: 'history', name: 'Telemetry & Audit Store', note: 'Immutable compliance log' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      {/* LAYER 1: USER INTERFACES */}
      <div className="rounded-t-xl border border-outline-variant/30 bg-surface-variant/10 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            Layer 1: User Interfaces
          </p>
          <span className="text-[9px] font-mono text-on-surface-variant/30 border border-outline-variant/20 rounded px-2 py-0.5">
            REST · WebSocket · Mobile SDK
          </span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {userTypes.map((u) => (
            <div
              key={u.label}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant/30 rounded-full text-on-surface-variant bg-surface/50"
            >
              <Icon name={u.icon} size={13} className="text-on-surface-variant/60" />
              <span className="text-[11px]">{u.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1.5 border-x border-outline-variant/20">
        <span className="flex flex-col items-center text-on-surface-variant/40 text-[10px] font-mono leading-tight">
          <span>↓</span>
          <span>authenticated requests · session context</span>
        </span>
      </div>

      {/* LAYER 2: APPLICATION LAYER */}
      <div className="border border-outline-variant/30 bg-primary-container/5 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            Layer 2: Application Products
          </p>
          <span className="text-[9px] font-mono text-on-surface-variant/30 border border-outline-variant/20 rounded px-2 py-0.5">
            7 integrated modules · shared session context
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {appProducts.map((p) => (
            <div
              key={p.name}
              className="border border-outline-variant/25 rounded-lg p-3 bg-surface/50 flex items-start gap-2"
            >
              <Icon name={p.icon} size={20} className={`${p.color} shrink-0 mt-0.5`} />
              <div className="min-w-0">
                <div className="text-sm font-bold text-on-surface leading-tight">{p.name}</div>
                <div className="text-[10px] text-on-surface-variant/60 mt-0.5 leading-tight">{p.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1.5 border-x border-outline-variant/20">
        <span className="flex flex-col items-center text-on-surface-variant/40 text-[10px] font-mono leading-tight">
          <span>↓</span>
          <span>intelligence requests · context injection · feedback signals</span>
        </span>
      </div>

      {/* LAYER 3: EKA INTELLIGENCE PLATFORM */}
      <div className="border border-outline-variant/30 bg-secondary-container/5 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            Layer 3: EKA Intelligence Platform
          </p>
          <span className="text-[9px] font-mono text-tertiary/60 border border-tertiary/20 rounded px-2 py-0.5 bg-tertiary-container/10">
            Proprietary · AI Core
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Left column */}
          <div className="space-y-2">
            {intelligenceLeft.map((c) => (
              <div key={c.name} className="border border-outline-variant/20 rounded-lg p-3 bg-surface/40">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon name={c.icon} size={13} className="text-on-surface-variant/60" />
                  <div className="text-xs font-semibold text-on-surface leading-tight">{c.name}</div>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant/40">{c.note}</div>
              </div>
            ))}
          </div>
          {/* Center column: highlighted */}
          <div className="space-y-2">
            {intelligenceCenter.map((c) => (
              <div key={c.name} className="border border-secondary/30 rounded-lg p-3 bg-secondary-container/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon name={c.icon} size={13} className="text-secondary/70" />
                  <div className="text-xs font-bold text-on-surface leading-tight">{c.name}</div>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant/40">{c.note}</div>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-2">
            {intelligenceRight.map((c) => (
              <div key={c.name} className="border border-outline-variant/20 rounded-lg p-3 bg-surface/40">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon name={c.icon} size={13} className="text-on-surface-variant/60" />
                  <div className="text-xs font-semibold text-on-surface leading-tight">{c.name}</div>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant/40">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1.5 border-x border-outline-variant/20">
        <span className="flex flex-col items-center text-on-surface-variant/40 text-[10px] font-mono leading-tight">
          <span>↓</span>
          <span>vector queries · model inference · state reads · write-back</span>
        </span>
      </div>

      {/* LAYER 4: DATA & INFRASTRUCTURE */}
      <div className="rounded-b-xl border border-outline-variant/30 bg-surface-bright/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            Layer 4: Data & Infrastructure
          </p>
          <span className="text-[9px] font-mono text-on-surface-variant/30 border border-outline-variant/20 rounded px-2 py-0.5">
            data sovereignty · encrypted at rest & in transit
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {dataComponents.map((d) => (
            <div
              key={d.name}
              className="border border-outline-variant/20 rounded-lg p-2.5 bg-surface/40 flex flex-col items-center text-center gap-1"
            >
              <Icon name={d.icon} size={16} className="text-on-surface-variant/50" />
              <div className="text-[10px] font-medium text-on-surface-variant/80 leading-tight">{d.name}</div>
              <div className="text-[9px] font-mono text-on-surface-variant/35 leading-tight">{d.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-connects */}
      <div className="hidden md:flex gap-3 mt-4 justify-center flex-wrap">
        <span className="text-[10px] font-mono text-on-surface-variant/40 border border-outline-variant/20 rounded-full px-3 py-1 bg-surface/30">
          all modules → EKA Orchestrator (shared intelligence)
        </span>
        <span className="text-[10px] font-mono text-on-surface-variant/40 border border-outline-variant/20 rounded-full px-3 py-1 bg-surface/30">
          analytics signals → cross-product insights
        </span>
        <span className="text-[10px] font-mono text-on-surface-variant/40 border border-outline-variant/20 rounded-full px-3 py-1 bg-surface/30">
          every action → immutable audit trail
        </span>
      </div>
    </div>
  );
}

/* ──────────────────── COMPONENT ──────────────────── */

export default function ProductsClient() {
  const [activeProduct, setActiveProduct] = useState(0);
  const selected = products[activeProduct];
  const colors = colorMap[selected.colorFamily];

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ━━━ 1 · HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* bg blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 hidden md:block w-[520px] h-[520px] bg-primary-container/10 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 hidden md:block w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[140px]"
        />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
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
            className="text-center max-w-4xl mx-auto"
          >
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">
                7 Products &bull; Complete Ecosystem
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Complete Ecosystem{' '}
              <span className="gradient-text">Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              95 problems identified &rarr; 85 solvable &rarr; one integrated platform.
              <br className="hidden md:block" />
              India&apos;s first AI-powered automobile intelligence ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━ 2 · STATS BAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 bg-gradient-to-r from-primary-container/8 via-surface to-secondary-container/8 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard icon="inventory_2" value={7} label="Products" description="Integrated ecosystem" />
            <StatsCard icon="featured_play_list" value={76} label="Features" description="Across all products" />
            <StatsCard icon="check_circle" value={85} label="Problems Solved" description="End-to-end coverage" />
            <StatsCard icon="map" value={33} label="States Covered" description="Pan-India compliance" />
          </div>
        </div>
      </section>

      {/* ━━━ 3 · INTERACTIVE PRODUCT SHOWCASE ━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Product Suite"
            title="Explore Our"
            highlight="Products"
            subtitle="Click any product to dive into its capabilities, features, and the problems it solves."
          />

          <div className="mt-16 flex flex-col lg:flex-row gap-8">
            {/* ── Left: vertical tabs ── */}
            <div className="lg:w-[340px] flex-shrink-0 space-y-2">
              {products.map((p, idx) => {
                const c = colorMap[p.colorFamily];
                const isActive = activeProduct === idx;
                return (
                  <div key={p.id} className="relative group">
                  <motion.button
                    onClick={() => setActiveProduct(idx)}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all border ${
                      isActive
                        ? `${c.activeBg} ${c.border} border-l-4 shadow-sm`
                        : 'border-transparent hover:bg-surface-bright'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? c.iconBg : 'bg-surface-bright'
                      }`}
                    >
                      <Icon
                        name={p.icon}
                        size={22}
                        className={isActive ? c.text : 'text-on-surface-variant'}
                      />
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`block font-semibold text-sm truncate font-display ${
                          isActive ? c.text : 'text-on-surface'
                        }`}
                      >
                        {p.name}
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        {p.problemCount > 0
                          ? `${p.problemCount} ${p.problemLabel}`
                          : p.problemLabel}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`ml-auto w-1.5 h-8 rounded-full ${c.dot}`}
                      />
                    )}
                  </motion.button>
                  {p.slug && (
                    <Link
                      href={`/products/${p.slug}`}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 rounded-lg ${c.iconBg} flex items-center justify-center z-10`}
                      title={`View ${p.name} details`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="open_in_new" size={14} className={c.text} />
                    </Link>
                  )}
                  </div>
                );
              })}
            </div>

            {/* ── Right: detail card ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-2xl bg-surface-bright border-l-4 ${colors.border} border border-outline-variant/30 p-8 md:p-10 shadow-sm`}
                >
                  {/* header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
                        <Icon name={selected.icon} size={30} className={colors.text} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display">{selected.name}</h3>
                        <p className={`text-sm font-medium ${colors.text}`}>{selected.tagline}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full ${colors.badge}`}>
                      {selected.prdCode}
                    </span>
                  </div>

                  {/* problem counter */}
                  {selected.problemCount > 0 && (
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`text-3xl font-black ${colors.text} font-display`}>
                        <AnimatedCounter target={selected.problemCount} />
                      </div>
                      <span className="text-sm text-on-surface-variant">{selected.problemLabel} addressed</span>
                    </div>
                  )}

                  {/* description */}
                  <p className="text-on-surface-variant leading-relaxed mb-8">{selected.description}</p>

                  {/* features */}
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-4 font-display">
                    Key Capabilities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {selected.features.map((feat, i) => (
                      <motion.li
                        key={feat}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-2 text-sm text-on-surface-variant"
                      >
                        <Icon name="check_circle" size={18} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>

                  {/* View full details link */}
                  <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between flex-wrap gap-3">
                    {selected.setupTime && (
                      <span className="text-xs text-on-surface-variant">
                        Setup time:{' '}
                        <span className="font-medium text-on-surface">{selected.setupTime}</span>
                      </span>
                    )}
                    <Link
                      href={selected.slug ? `/products/${selected.slug}` : '/products'}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:underline font-display`}
                    >
                      View Full Details
                      <Icon name="arrow_forward" size={16} className={colors.text} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 4 · PRODUCT INTEGRATION DIAGRAM ━━━━━━━━━ */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Architecture"
            title="How Everything"
            highlight="Connects"
            subtitle="Every product feeds intelligence into a shared AI core, creating a compounding data advantage."
          />

          <TechArchDiagram />
        </div>
      </section>

      {/* ━━━ 5 · IMPLEMENTATION TIMELINE ━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Go Live"
            title="Quick"
            highlight="Implementation"
            subtitle="From assessment to full optimisation in under five weeks."
          />

          <div className="mt-16 relative max-w-5xl mx-auto">
            {/* connecting progress bar (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-1 bg-outline-variant/20 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#904d00] via-[#7b41b3] to-[#006e2f] rounded-full"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {timelinePhases.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-surface-bright p-6 pt-16 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group"
                >
                  {/* circle icon */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md z-10">
                    <Icon name={item.icon} size={26} className="text-white" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-2 font-display uppercase tracking-wider">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* per-product setup times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-6 font-display">
              Per-product setup time
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {products.map((p) => {
                const c = colorMap[p.colorFamily];
                return (
                  <div
                    key={p.id}
                    className={`${c.bg} border ${c.borderLight} rounded-xl p-3 text-center`}
                  >
                    <Icon name={p.icon} size={18} className={`${c.text} mx-auto mb-1`} />
                    <p className={`text-[11px] font-bold font-display ${c.text} mb-1 truncate`}>
                      {p.name.split(' ')[0]}
                    </p>
                    <p className="text-[10px] text-on-surface-variant leading-snug">{p.setupTime}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ 6 · FEATURE COMPARISON MATRIX ━━━━━━━━━━━ */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Comparison"
            title="Feature"
            highlight="Matrix"
            subtitle="See at a glance which capabilities each product delivers."
          />

          <div className="mt-16 max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-outline-variant/30 shadow-sm">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-surface-bright">
                  <th className="text-left px-5 py-4 font-display font-semibold text-on-surface">
                    Feature Category
                  </th>
                  {products.map((p) => {
                    const c = colorMap[p.colorFamily];
                    return (
                      <th key={p.id} className="px-3 py-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <Icon name={p.icon} size={20} className={c.text} />
                          <span className={`text-xs font-bold font-display ${c.text}`}>
                            {p.name.split(' ')[0]}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row, rIdx) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rIdx * 0.05 }}
                    className={rIdx % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}
                  >
                    <td className="px-5 py-3.5 font-medium text-on-surface">{row.category}</td>
                    {row.checks.map((ok, cIdx) => (
                      <td key={cIdx} className="px-3 py-3.5 text-center">
                        {ok ? (
                          <Icon
                            name="check_circle"
                            size={20}
                            className={colorMap[products[cIdx].colorFamily].text}
                          />
                        ) : (
                          <span className="text-on-surface-variant/40">&mdash;</span>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ━━━ 7 · CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/12 via-surface to-secondary-container/12" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 hidden md:block w-[400px] h-[400px] bg-tertiary-container/8 rounded-full blur-[140px]"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Transform Your{' '}
              <span className="gradient-text">Operations?</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a personalised demo and see how the complete Go4Garage platform can simplify
              your workflows, cut costs, and drive AI-powered growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-primary text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors"
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
