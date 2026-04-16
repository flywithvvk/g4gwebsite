'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Persona {
  id: string;
  name: string;
  icon: string;
  color: string;
  border: string;
  challenges: string[];
  products: Array<{ name: string; description: string }>;
  impact: string;
  impactMetrics: Array<{ value: string; label: string }>;
  ctaText: string;
}

const personas: Persona[] = [
  {
    id: 'cpo', name: 'CPO Operators', icon: '⚡', color: 'from-cyan-500/15 to-blue-500/15', border: 'border-cyan-400/30',
    challenges: ['DISCOM delays and load sanctioning bottlenecks', '33-state policy fragmentation', 'Fire dept NOCs and electrical inspector certification', 'Subsidy disbursement delays under FAME-II', 'Charger uptime and SLA breach management', 'Revenue leakage and manual audit prep'],
    products: [{ name: 'URGAA', description: 'Automate 48 regulatory problems with AI-driven compliance' }, { name: 'KAILASH-AI', description: 'Predictive analytics for charger uptime and operations' }],
    impact: '48 regulatory problems automated, real-time compliance', impactMetrics: [{ value: '48', label: 'Problems solved' }, { value: '89%', label: 'Automation' }, { value: '0', label: 'Audit gaps' }], ctaText: 'Explore URGAA',
  },
  {
    id: 'workshops', name: 'Workshops & Service Centers', icon: '🔧', color: 'from-green-500/15 to-emerald-500/15', border: 'border-green-400/30',
    challenges: ['Service network gaps across EV coverage', 'Spare parts availability and procurement delays', 'High EV repair costs and diagnostic tool shortage', 'Warranty disputes with OEMs', 'GST anomalies in service invoicing', 'Technician shortage and skill standardization'],
    products: [{ name: 'GSTSAAS', description: 'Automated GST invoicing and service commerce management' }, { name: 'EV VIDYA ARJUN', description: 'AI-powered training for technician upskilling' }],
    impact: '17 service problems solved, automated GST invoicing', impactMetrics: [{ value: '17', label: 'Problems solved' }, { value: '40%', label: 'More volume' }, { value: '95%', label: 'Cost saving' }], ctaText: 'Explore GSTSAAS',
  },
  {
    id: 'fleet', name: 'Fleet Operators', icon: '🚗', color: 'from-purple-500/15 to-indigo-500/15', border: 'border-purple-400/30',
    challenges: ['Fleet compliance management across states', 'Total cost of ownership (TCO) uncertainty', 'Charging optimization for fleet routes', 'Predictive maintenance and downtime reduction', 'Real-time fleet monitoring and diagnostics'],
    products: [{ name: 'URGAA', description: 'Regulatory compliance for fleet operations' }, { name: 'GSTSAAS', description: 'Fleet service management and invoicing' }, { name: 'KAILASH-AI', description: 'Predictive maintenance and route optimization' }],
    impact: 'Operational cost reduction, 99.5% uptime', impactMetrics: [{ value: '99.5%', label: 'Uptime' }, { value: '3x', label: 'Faster ops' }, { value: '35%', label: 'Cost cut' }], ctaText: 'Explore Fleet Solutions',
  },
  {
    id: 'technicians', name: 'EV Technicians & Trainees', icon: '🎓', color: 'from-orange-500/15 to-red-500/15', border: 'border-orange-400/30',
    challenges: ['100K+ technician shortage in India', 'Low ICE-to-EV skill overlap', 'High-voltage safety competency gap', 'Training infrastructure gaps across regions', 'High attrition in EV service roles'],
    products: [{ name: 'EV VIDYA ARJUN', description: 'Comprehensive AI-driven training with certifications' }, { name: 'Eka-AI', description: 'Conversational AI for instant technical guidance' }],
    impact: '8 workforce problems addressed, certified professionals', impactMetrics: [{ value: '8', label: 'Problems solved' }, { value: '3mo', label: 'To certified' }, { value: '100%', label: 'Job ready' }], ctaText: 'Explore Training',
  },
  {
    id: 'govt', name: 'Government & Regulators', icon: '🏛️', color: 'from-yellow-500/15 to-orange-500/15', border: 'border-yellow-400/30',
    challenges: ['Policy fragmentation across 33 states', 'Inter-ministerial coordination challenges', 'FAME-II implementation failures', 'Document verification burden across departments'],
    products: [{ name: 'URGAA Platform APIs', description: 'Digitized approval workflows and compliance dashboards' }],
    impact: 'Digitized approvals, real-time compliance dashboards', impactMetrics: [{ value: '33', label: 'States covered' }, { value: '95%', label: 'Doc automation' }, { value: '0', label: 'Bottlenecks' }], ctaText: 'Explore Regulatory',
  },
  {
    id: 'oems', name: 'OEMs & Manufacturers', icon: '🏭', color: 'from-blue-500/15 to-cyan-500/15', border: 'border-blue-400/30',
    challenges: ['CPO integration and ecosystem connectivity', 'Vehicle health monitoring post-sale', 'Warranty management and dispute resolution', 'Demand forecasting and inventory planning', 'Localization verification across markets'],
    products: [{ name: 'Platform APIs', description: 'Enterprise APIs for ecosystem integration' }, { name: 'KAILASH-AI', description: 'Quality analytics and demand forecasting' }],
    impact: 'Real-time market insights, ecosystem integration', impactMetrics: [{ value: 'API', label: 'First arch' }, { value: 'RT', label: 'Insights' }, { value: '360°', label: 'Visibility' }], ctaText: 'Explore API Platform',
  },
];

const successStories = [
  { persona: 'Leading CPO Operator', quote: 'URGAA reduced our compliance team workload by 85%. What took 2 weeks now happens in 2 days.', metric: '85% efficiency gain', icon: '⚡' },
  { persona: 'Service Center Network', quote: 'GSTSAAS transformed our operations. We now handle 40% more vehicles with the same staff.', metric: '40% volume increase', icon: '🔧' },
  { persona: 'EV Fleet Operator', quote: 'KAILASH-AI predictive maintenance saved us crores in unexpected downtime.', metric: '35% cost reduction', icon: '🚗' },
  { persona: 'Technician Community', quote: 'ARJUN training platform made me job-ready for EV repair in just 3 months.', metric: 'Certified & hired', icon: '🎓' },
];

export default function SolutionsPage() {
  const [activePersona, setActivePersona] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">Tailored for Every Stakeholder</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Solutions for{' '}<span className="gradient-text">Every Role</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              From CPO operators to government regulators — discover how Go4Garage transforms your specific challenges into competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PERSONA SELECTOR ─── */}
      <section className="py-6 bg-primary-light/50 border-y border-white/5 sticky top-20 z-30 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {personas.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActivePersona(activePersona === p.id ? null : p.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activePersona === p.id ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/20' : 'bg-white/5 text-gray-400 border border-white/10 hover:border-accent-cyan/30 hover:text-white'}`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERSONA CARDS ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.filter(p => !activePersona || p.id === activePersona).map((persona, idx) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.08 }}
                layout
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${persona.color} border ${persona.border} transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{persona.icon}</span>
                    <h3 className="text-xl font-bold">{persona.name}</h3>
                  </div>

                  {/* Challenges */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-3">Key Challenges</h4>
                    <ul className="space-y-1.5">
                      {persona.challenges.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-red-400/60 mt-1.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                      {persona.challenges.length > 3 && (
                        <li className="text-xs text-accent-cyan font-medium">+{persona.challenges.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="mb-5 flex-grow">
                    <h4 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-3">Recommended Products</h4>
                    <div className="space-y-2">
                      {persona.products.map((product, i) => (
                        <div key={i} className="px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                          <p className="font-semibold text-xs text-white">{product.name}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5">{product.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {persona.impactMetrics.map((m, i) => (
                      <div key={i} className="text-center p-2 bg-accent-cyan/5 rounded-lg border border-accent-cyan/10">
                        <div className="text-sm font-bold text-accent-cyan">{m.value}</div>
                        <div className="text-[10px] text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-sm shadow-lg shadow-accent-cyan/10 transition-all"
                    >
                      {persona.ctaText}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose <span className="gradient-text">Go4Garage</span></h2>
          </motion.div>

          <div className="max-w-3xl mx-auto glass-effect rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-white/10">
              <div className="px-6 py-4 text-white">Capability</div>
              <div className="px-6 py-4 text-center text-accent-cyan">Go4Garage</div>
              <div className="px-6 py-4 text-center text-gray-500">Generic</div>
            </div>
            {['India-Specific Compliance', 'Multi-Persona Support', 'AI-Powered Intelligence', 'Integrated Ecosystem', 'Workforce Training', '24/7 Conversational AI'].map((cap, idx) => (
              <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="grid grid-cols-3 text-sm border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                <div className="px-6 py-3 font-medium text-white">{cap}</div>
                <div className="px-6 py-3 text-center text-accent-cyan text-lg">✓</div>
                <div className="px-6 py-3 text-center text-gray-600 text-lg">✕</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUCCESS STORIES ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold">Success Stories from Our <span className="gradient-text">Community</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl group"
              >
                <span className="text-3xl mb-3 inline-block group-hover:scale-110 transition-transform">{story.icon}</span>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <p className="font-semibold text-sm text-white">{story.persona}</p>
                    <p className="text-xs text-accent-cyan">{story.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Your Journey with <span className="gradient-text">Go4Garage</span></h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { phase: 'Phase 1: Assessment', timeline: 'Week 1', desc: 'Analyze your challenges and customize solutions for your role' },
              { phase: 'Phase 2: Integration', timeline: 'Week 2-3', desc: 'Seamless integration with your existing systems' },
              { phase: 'Phase 3: Training', timeline: 'Week 4', desc: 'Comprehensive team training and knowledge transfer' },
              { phase: 'Phase 4: Optimization', timeline: 'Ongoing', desc: 'Continuous optimization, support, and new features' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center font-bold text-sm flex-shrink-0">{idx + 1}</div>
                  {idx < 3 && <div className="w-0.5 h-full bg-gradient-to-b from-accent-cyan/50 to-transparent mt-2" />}
                </div>
                <div className="glass-effect p-5 rounded-xl flex-1 mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm">{item.phase}</h3>
                    <span className="text-xs text-accent-cyan font-semibold">{item.timeline}</span>
                  </div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your <span className="gradient-text">Operations</span>?</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Join industry leaders leveraging Go4Garage to solve their toughest challenges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-xl shadow-accent-cyan/20">
                  Schedule a Demo
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
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
