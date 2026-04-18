'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const capabilities = [
  { title: 'Regulatory Intelligence', description: 'Automated compliance tracking across 95+ requirements spanning central, state, and sector-specific mandates.', icon: 'gavel', features: ['Real-time regulatory updates across 33 states', 'Automated audit readiness & filing', 'DISCOM & subsidy tracking'], stat: '95+', statLabel: 'Requirements tracked' },
  { title: 'Operational Excellence', description: 'Unified platform for CPO operations, service management, and fleet optimization with predictive insights.', icon: 'settings', features: ['Unified operations dashboard', 'Service workflow automation', 'Fleet analytics & routing'], stat: '3x', statLabel: 'Faster operations' },
  { title: 'Commercial Intelligence', description: 'Predictive analytics and market insights powered by our proprietary Automobile LLM.', icon: 'insights', features: ['Market trend analysis', 'Revenue optimization engine', 'Customer intelligence & segmentation'], stat: '95%', statLabel: 'Cost reduction' },
  { title: 'Workforce Development', description: 'AI-powered training platform for technician certification and skill development in EV ecosystem.', icon: 'group', features: ['Adaptive learning paths', 'Industry-recognized certifications', 'Performance analytics'], stat: '100K+', statLabel: 'Technician gap addressed' },
];

const comparisonData = [
  { metric: 'Regulatory Compliance', traditional: 'Manual tracking, error-prone', go4garage: 'Automated with 89.5% accuracy', icon: 'checklist' },
  { metric: 'Operations Management', traditional: '5+ disconnected systems', go4garage: 'Unified AI-powered platform', icon: 'hub' },
  { metric: 'Time to Audit Ready', traditional: '3-4 weeks per audit', go4garage: 'Always audit-ready', icon: 'schedule' },
  { metric: 'Workforce Training', traditional: 'Ad-hoc, unstructured', go4garage: 'AI-guided certified curriculum', icon: 'school' },
  { metric: 'Decision Making', traditional: 'Reactive, data-scattered', go4garage: '3x faster with predictive insights', icon: 'psychology' },
  { metric: 'Scalability', traditional: 'Limited, manual overhead', go4garage: 'Unlimited, fully automated', icon: 'trending_up' },
];

const techStack = [
  { name: 'Automobile LLM', description: 'Proprietary Large Language Model trained exclusively on Indian automotive regulations, workflows, and industry patterns.', icon: 'psychology', color: 'border-l-primary' },
  { name: 'Real-time Compliance Engine', description: 'Continuous monitoring of regulatory changes across all states with instant alerts and workflow automation.', icon: 'bolt', color: 'border-l-tertiary' },
  { name: 'Predictive Analytics', description: 'ML-powered forecasting for market trends, operational bottlenecks, and business opportunities.', icon: 'analytics', color: 'border-l-secondary' },
];

export default function PlatformClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/8 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Enterprise-Grade AI Platform</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              The AI Platform Redefining{' '}<span className="gradient-text">Automobile Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-3xl mx-auto">
              Regulatory intelligence, operational excellence, and predictive insights — unified in one enterprise platform built for India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow">
                  Request Demo
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CAPABILITIES (Tabs) ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Four Pillars of <span className="gradient-text">Platform Excellence</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A comprehensive AI-powered solution designed for India&apos;s automobile industry.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {capabilities.map((cap, idx) => (
              <motion.button key={idx} onClick={() => setActiveTab(idx)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === idx ? 'bg-primary text-primary-on shadow-md' : 'bg-surface-bright text-on-surface-variant border border-outline-variant/30 hover:border-primary/30 hover:text-primary'}`}>
                <Icon name={cap.icon} size={20} />
                <span className="hidden sm:inline">{cap.title}</span>
              </motion.button>
            ))}
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
              <Icon name={capabilities[activeTab].icon} size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 font-display">{capabilities[activeTab].title}</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">{capabilities[activeTab].description}</p>
              <ul className="space-y-3">
                {capabilities[activeTab].features.map((f, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <div className="w-5 h-5 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="check" size={14} className="text-primary" />
                    </div>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-surface-bright p-8 rounded-2xl text-center border border-outline-variant/30 shadow-sm">
                <div className="text-5xl font-black gradient-text mb-2 font-display">{capabilities[activeTab].stat}</div>
                <div className="text-sm text-on-surface-variant">{capabilities[activeTab].statLabel}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-bright p-6 rounded-xl text-center border border-outline-variant/30">
                  <div className="text-3xl font-bold text-primary mb-1 font-display"><AnimatedCounter target={89.5} suffix="%" /></div>
                  <div className="text-xs text-on-surface-variant">Automation</div>
                </div>
                <div className="bg-surface-bright p-6 rounded-xl text-center border border-outline-variant/30">
                  <div className="text-3xl font-bold text-secondary mb-1 font-display">24/7</div>
                  <div className="text-xs text-on-surface-variant">Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Traditional vs <span className="gradient-text">Go4Garage AI</span></h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
              <div className="grid grid-cols-[1fr_1fr_1fr] text-sm font-semibold border-b border-outline-variant/20">
                <div className="px-6 py-4 text-on-surface font-display">Metric</div>
                <div className="px-6 py-4 text-on-surface-variant text-center">Traditional</div>
                <div className="px-6 py-4 text-primary text-center">Go4Garage AI</div>
              </div>
              {comparisonData.map((row, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="grid grid-cols-[1fr_1fr_1fr] text-sm border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                  <div className="px-6 py-4 font-semibold text-on-surface flex items-center gap-2">
                    <Icon name={row.icon} size={18} className="text-primary" /> {row.metric}
                  </div>
                  <div className="px-6 py-4 text-on-surface-variant text-center flex items-center justify-center">
                    <Icon name="close" size={16} className="text-error mr-2" /> {row.traditional}
                  </div>
                  <div className="px-6 py-4 text-primary text-center flex items-center justify-center font-medium">
                    <Icon name="check" size={16} className="text-tertiary mr-2" /> {row.go4garage}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Under the Hood</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Advanced <span className="gradient-text">Technology Stack</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className={`bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 ${tech.color} shadow-sm hover:shadow-md transition-all group`}>
                <Icon name={tech.icon} size={36} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">{tech.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE FEATURES ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Enterprise Ready</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Enterprise-Grade <span className="gradient-text">Features</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Security', items: ['End-to-end encryption', 'RBAC controls', 'Audit logging', 'SOC 2 Type II'], icon: 'lock' },
              { title: 'Scalability', items: ['Multi-tenant architecture', 'Auto-scaling infra', 'Zero-downtime deploys', '99.99% uptime SLA'], icon: 'trending_up' },
              { title: 'Integration', items: ['REST & GraphQL APIs', 'Webhook support', 'Pre-built connectors', 'Custom integration'], icon: 'hub' },
              { title: 'Support', items: ['24/7 dedicated support', 'Real-time dashboards', 'Custom reporting', 'Data export & BI'], icon: 'support_agent' },
            ].map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 hover:border-primary/20 shadow-sm hover:shadow-md transition-all group">
                <Icon name={feature.icon} size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4 text-primary font-display">{feature.title}</h3>
                <ul className="space-y-2.5">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="py-16 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 89.5, suffix: '%', label: 'Compliance Automation', icon: 'verified' },
              { value: 3, suffix: 'x', label: 'Faster Operations', icon: 'speed' },
              { value: 99.99, suffix: '%', label: 'Platform Uptime', icon: 'cloud_done' },
              { value: 24, suffix: '/7', label: 'Support Available', icon: 'support_agent' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <Icon name={stat.icon} size={28} className="text-primary mb-2" />
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1 font-display"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="text-sm text-on-surface-variant font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECURITY BANNER ─── */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 font-display">Enterprise-Grade <span className="gradient-text">Security</span></h3>
            <p className="text-on-surface-variant">ISO 27001 certified, SOC 2 Type II compliant, GDPR ready.</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'End-to-End Encryption', icon: 'encrypted' },
              { label: 'Role-Based Access', icon: 'shield' },
              { label: 'Audit Logging', icon: 'description' },
              { label: '99.99% Uptime SLA', icon: 'verified' },
            ].map((badge, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.05 }} className="bg-surface-bright px-6 py-4 rounded-xl border border-outline-variant/30 flex items-center gap-3 hover:border-primary/30 transition-all">
                <Icon name={badge.icon} size={22} className="text-primary" />
                <span className="text-sm font-medium text-on-surface">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Experience the <span className="gradient-text">Platform Difference</span></h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join leading automobile companies transforming operations with AI-powered intelligence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">
                  Request Demo
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
