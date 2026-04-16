'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start * 10) / 10); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
}

const capabilities = [
  {
    title: 'Regulatory Intelligence',
    description: 'Automated compliance tracking across 95+ requirements spanning central, state, and sector-specific mandates.',
    icon: '⚖️',
    features: ['Real-time regulatory updates across 33 states', 'Automated audit readiness & filing', 'DISCOM & subsidy tracking'],
    stat: '95+',
    statLabel: 'Requirements tracked',
  },
  {
    title: 'Operational Excellence',
    description: 'Unified platform for CPO operations, service management, and fleet optimization with predictive insights.',
    icon: '⚙️',
    features: ['Unified operations dashboard', 'Service workflow automation', 'Fleet analytics & routing'],
    stat: '3x',
    statLabel: 'Faster operations',
  },
  {
    title: 'Commercial Intelligence',
    description: 'Predictive analytics and market insights powered by our proprietary Automobile LLM.',
    icon: '📊',
    features: ['Market trend analysis', 'Revenue optimization engine', 'Customer intelligence & segmentation'],
    stat: '95%',
    statLabel: 'Cost reduction',
  },
  {
    title: 'Workforce Development',
    description: 'AI-powered training platform for technician certification and skill development in EV ecosystem.',
    icon: '👥',
    features: ['Adaptive learning paths', 'Industry-recognized certifications', 'Performance analytics'],
    stat: '100K+',
    statLabel: 'Technician gap addressed',
  },
];

const comparisonData = [
  { metric: 'Regulatory Compliance', traditional: 'Manual tracking, error-prone', go4garage: 'Automated with 89.5% accuracy', icon: '📋' },
  { metric: 'Operations Management', traditional: '5+ disconnected systems', go4garage: 'Unified AI-powered platform', icon: '🔗' },
  { metric: 'Time to Audit Ready', traditional: '3-4 weeks per audit', go4garage: 'Always audit-ready', icon: '⏱️' },
  { metric: 'Workforce Training', traditional: 'Ad-hoc, unstructured', go4garage: 'AI-guided certified curriculum', icon: '🎓' },
  { metric: 'Decision Making', traditional: 'Reactive, data-scattered', go4garage: '3x faster with predictive insights', icon: '🧠' },
  { metric: 'Scalability', traditional: 'Limited, manual overhead', go4garage: 'Unlimited, fully automated', icon: '📈' },
];

const techStack = [
  {
    name: 'Automobile LLM',
    description: 'Proprietary Large Language Model trained exclusively on Indian automotive regulations, workflows, and industry patterns.',
    icon: '🧠',
    gradient: 'from-accent-cyan/10 to-accent-blue/10',
    border: 'border-accent-cyan/20',
  },
  {
    name: 'Real-time Compliance Engine',
    description: 'Continuous monitoring of regulatory changes across all states with instant alerts and workflow automation.',
    icon: '⚡',
    gradient: 'from-green-500/10 to-emerald-500/10',
    border: 'border-green-500/20',
  },
  {
    name: 'Predictive Analytics',
    description: 'ML-powered forecasting for market trends, operational bottlenecks, and business opportunities.',
    icon: '🔮',
    gradient: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
  },
];

const securityBadges = [
  { label: 'End-to-End Encryption', icon: '🔐' },
  { label: 'Role-Based Access', icon: '🛡️' },
  { label: 'Audit Logging', icon: '📝' },
  { label: '99.99% Uptime SLA', icon: '✅' },
];

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">Enterprise-Grade AI Platform</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              The AI Platform Redefining{' '}<span className="gradient-text">Automobile Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Regulatory intelligence, operational excellence, and predictive insights — unified in one enterprise platform built for India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-lg shadow-accent-cyan/20">
                  Request Demo
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all">
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CAPABILITIES (Tabs) ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Four Pillars of <span className="gradient-text">Platform Excellence</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive AI-powered solution designed for India&apos;s automobile industry.</p>
          </motion.div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {capabilities.map((cap, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === idx ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/20' : 'bg-white/5 text-gray-400 border border-white/10 hover:border-accent-cyan/30 hover:text-white'}`}
              >
                <span className="text-lg">{cap.icon}</span>
                <span className="hidden sm:inline">{cap.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-5xl mb-4">{capabilities[activeTab].icon}</div>
              <h3 className="text-2xl font-bold mb-3">{capabilities[activeTab].title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{capabilities[activeTab].description}</p>
              <ul className="space-y-3">
                {capabilities[activeTab].features.map((f, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0"><span className="w-2 h-2 rounded-full bg-accent-cyan" /></span>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="glass-effect p-8 rounded-2xl text-center">
                <div className="text-5xl font-black gradient-text mb-2">{capabilities[activeTab].stat}</div>
                <div className="text-sm text-gray-400">{capabilities[activeTab].statLabel}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent-cyan mb-1"><AnimatedCounter target={89.5} suffix="%" /></div>
                  <div className="text-xs text-gray-500">Automation</div>
                </div>
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent-blue mb-1">24/7</div>
                  <div className="text-xs text-gray-500">Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Traditional vs <span className="gradient-text">Go4Garage AI</span></h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_1fr_1fr] text-sm font-semibold border-b border-white/10">
                <div className="px-6 py-4 text-white">Metric</div>
                <div className="px-6 py-4 text-gray-400 text-center">Traditional</div>
                <div className="px-6 py-4 text-accent-cyan text-center">Go4Garage AI</div>
              </div>
              {comparisonData.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-[1fr_1fr_1fr] text-sm border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="px-6 py-4 font-semibold text-white flex items-center gap-2">
                    <span>{row.icon}</span> {row.metric}
                  </div>
                  <div className="px-6 py-4 text-gray-500 text-center flex items-center justify-center">
                    <span className="text-red-400/60 mr-2">✕</span> {row.traditional}
                  </div>
                  <div className="px-6 py-4 text-accent-cyan text-center flex items-center justify-center font-medium">
                    <span className="text-accent-cyan mr-2">✓</span> {row.go4garage}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Under the Hood</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced <span className="gradient-text">Technology Stack</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${tech.gradient} border ${tech.border} transition-all duration-300 group`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{tech.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE FEATURES ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Enterprise Ready</span>
            <h2 className="text-4xl md:text-5xl font-bold">Enterprise-Grade <span className="gradient-text">Features</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Security', items: ['End-to-end encryption', 'RBAC controls', 'Audit logging', 'SOC 2 Type II'], icon: '🔒' },
              { title: 'Scalability', items: ['Multi-tenant architecture', 'Auto-scaling infra', 'Zero-downtime deploys', '99.99% uptime SLA'], icon: '📈' },
              { title: 'Integration', items: ['REST & GraphQL APIs', 'Webhook support', 'Pre-built connectors', 'Custom integration'], icon: '🔗' },
              { title: 'Support', items: ['24/7 dedicated support', 'Real-time dashboards', 'Custom reporting', 'Data export & BI'], icon: '🎧' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl hover:border-accent-cyan/30 transition-all group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-accent-cyan">{feature.title}</h3>
                <ul className="space-y-2.5">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-accent-cyan flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE METRICS ─── */}
      <section className="py-16 bg-gradient-to-r from-accent-cyan/5 via-accent-blue/5 to-accent-cyan/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 89.5, suffix: '%', label: 'Compliance Automation' },
              { value: 3, suffix: 'x', label: 'Faster Operations' },
              { value: 99.99, suffix: '%', label: 'Platform Uptime' },
              { value: 24, suffix: '/7', label: 'Support Available' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECURITY BANNER ─── */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Enterprise-Grade <span className="gradient-text">Security</span></h3>
            <p className="text-gray-400">ISO 27001 certified, SOC 2 Type II compliant, GDPR ready.</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center">
            {securityBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,229,255,0.4)' }}
                className="glass-effect px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 cursor-default"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-medium text-gray-300">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/8 via-primary to-accent-blue/8" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the <span className="gradient-text">Platform Difference</span></h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Join leading automobile companies transforming operations with AI-powered intelligence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-xl shadow-accent-cyan/20">
                  Request Demo
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
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
