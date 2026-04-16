'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  problemsSolved: number;
  icon: string;
  keyFeatures: string[];
  gradient: string;
  border: string;
  aiType: string;
}

const products: Product[] = [
  {
    id: 1, name: 'URGAA (URJA) Platform', tagline: 'Regulatory & Grid Intelligence', icon: '⚡',
    description: 'Navigate India\'s 33-state regulatory landscape with AI-powered compliance automation. URGAA handles DISCOM connections, load sanctioning, electrical inspector certifications, fire NOCs, subsidy disbursement, and real-time charger monitoring.',
    problemsSolved: 48, gradient: 'from-cyan-500/15 to-blue-600/15', border: 'border-cyan-400/30', aiType: 'Regulatory AI',
    keyFeatures: ['DISCOM connection & load sanctioning automation', 'Multi-state regulatory compliance (33 states)', 'Electrical inspector & fire dept workflows', 'Grid infrastructure & transformer monitoring', 'Subsidy tracking (FAME-II, state schemes)', 'Charger uptime & SLA monitoring', 'Carbon credit & ESG compliance'],
  },
  {
    id: 2, name: 'GSTSAAS', tagline: 'Workshop, Service & Commerce', icon: '🔧',
    description: 'End-to-end workshop and service center operations — service scheduling, spare parts inventory, technician dispatch, GST-compliant invoicing, insurance coordination, and vendor procurement.',
    problemsSolved: 17, gradient: 'from-orange-500/15 to-red-500/15', border: 'border-orange-400/30', aiType: 'Operations AI',
    keyFeatures: ['Service scheduling & technician dispatch', 'Spare parts inventory & procurement', 'GST-compliant invoicing & tax automation', 'Insurance partner integration', 'Financing & lending marketplace', 'Warranty management & dispute resolution', 'Working capital optimization'],
  },
  {
    id: 3, name: 'Ignition Mobile App', tagline: 'Consumer Experience & Adoption', icon: '📱',
    description: 'Unified consumer app for EV drivers — charger discovery, booking, payments, notifications, and support. Tackles range anxiety and trust deficit through real-time information.',
    problemsSolved: 10, gradient: 'from-green-500/15 to-emerald-500/15', border: 'border-green-400/30', aiType: 'Conversational AI',
    keyFeatures: ['Charger discovery & real-time availability', 'Booking, payments & wallet integration', 'Range planning & navigation', 'Consumer awareness & education', 'Multi-channel support (WhatsApp, push, SMS)', 'Loyalty programs & EV incentives', 'Tier 2/3 city charger coverage maps'],
  },
  {
    id: 4, name: 'EV VIDYA ARJUN', tagline: 'Workforce Skilling & Certification', icon: '🎓',
    description: 'India\'s EV workforce platform bridging the 100K+ technician gap. Adaptive learning paths, high-voltage safety training, certification management, and mentor-apprentice pairing.',
    problemsSolved: 8, gradient: 'from-purple-500/15 to-pink-500/15', border: 'border-purple-400/30', aiType: 'Learning AI',
    keyFeatures: ['Adaptive learning paths (ICE to EV)', 'High-voltage safety competency training', 'Hands-on simulation & virtual labs', 'Industry-recognized certifications', 'Mentor-apprentice pairing', 'Multilingual content delivery', 'Training analytics & proficiency tracking'],
  },
  {
    id: 5, name: 'KAILASH-AI', tagline: 'Document AI & Predictive Analytics', icon: '🔮',
    description: 'AI/ML engine powering the entire ecosystem. Document verification (OCR, extraction), predictive maintenance, demand forecasting, anomaly detection, and quality control analytics.',
    problemsSolved: 2, gradient: 'from-indigo-500/15 to-violet-500/15', border: 'border-indigo-400/30', aiType: 'Predictive AI',
    keyFeatures: ['Document AI — OCR, extraction & validation', 'Predictive maintenance & failure prediction', 'Demand forecasting & energy optimization', 'Anomaly detection & risk scoring', 'Quality control analytics', 'RAG-based knowledge retrieval', 'ML model training & deployment pipeline'],
  },
  {
    id: 6, name: 'Eka-AI', tagline: 'Agent Orchestration & Internal Q&A', icon: '💬',
    description: 'Internal AI assistant orchestrating all 14 sub-agents across the platform. Cross-product queries, agent coordination, knowledge management, and domain-aware conversational support.',
    problemsSolved: 0, gradient: 'from-sky-500/15 to-blue-500/15', border: 'border-sky-400/30', aiType: 'Orchestration AI',
    keyFeatures: ['Multi-agent orchestration (14 sub-agents)', 'Cross-product internal Q&A', 'Domain-specific knowledge base', 'Agent coordination & task routing', 'Real-time learning from interactions', 'Escalation to human experts', 'Integration with all products'],
  },
];

const integrations = [
  { pair: 'URGAA + GSTSAAS', description: 'Compliance requirements auto-flow into service scheduling and vendor management' },
  { pair: 'EV VIDYA + KAILASH', description: 'Predictive failures trigger just-in-time training for relevant skill gaps' },
  { pair: 'Ignition + Eka-AI', description: 'Conversational AI powers customer support while learning from interactions' },
  { pair: 'Full Ecosystem', description: 'Every product feeds insights to improve the entire platform intelligence' },
];

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const totalProblems = products.reduce((sum, p) => sum + p.problemsSolved, 0);

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">6 Products • {totalProblems} Problems Solved</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Our Complete <span className="gradient-text">Product Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              From regulatory compliance to customer experience — all in one integrated platform powering India&apos;s entire EV value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 bg-gradient-to-r from-accent-cyan/5 via-accent-blue/5 to-accent-cyan/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: `${products.length}`, label: 'Integrated Products' },
              { value: `${totalProblems}`, label: 'Problems Solved' },
              { value: '360°', label: 'Complete Coverage' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CARDS ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                layout
              >
                <motion.div
                  onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.border} cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-accent-cyan font-semibold">{product.aiType}</span>
                      {product.problemsSolved > 0 && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                          {product.problemsSolved}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent-cyan transition-colors">{product.name}</h3>
                  <p className="text-sm text-accent-cyan/80 font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.description}</p>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {expandedId === product.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-primary/40 rounded-xl mb-4 border border-white/10">
                          <h4 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {product.keyFeatures.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                className="flex items-start gap-2 text-xs text-gray-300"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-gray-500">{expandedId === product.id ? 'Click to collapse' : 'Click to expand'}</span>
                    <motion.span animate={{ rotate: expandedId === product.id ? 180 : 0 }} className="text-accent-cyan text-sm">▾</motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW THEY CONNECT ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Integration</span>
            <h2 className="text-4xl md:text-5xl font-bold">How They <span className="gradient-text">Work Together</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Flow steps */}
            <div className="space-y-6">
              {[
                { step: '1', title: 'Unified Intelligence Layer', desc: 'All products share a single AI backbone trained on Indian automobile regulations and workflows' },
                { step: '2', title: 'Real-time Data Sync', desc: 'Changes in one product instantly update across the ecosystem for consistency' },
                { step: '3', title: 'Cross-Product Intelligence', desc: 'Regulatory changes auto-trigger training updates and operational workflows' },
                { step: '4', title: 'Single Dashboard', desc: 'Manage all products from one unified control center with role-based access' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:shadow-lg group-hover:shadow-accent-cyan/20 transition-shadow">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Integration pairs */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Seamless Integration</h3>
              {integrations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-effect p-4 rounded-xl border-l-2 border-l-accent-cyan/50"
                >
                  <h4 className="font-semibold text-accent-cyan text-sm mb-1">{item.pair}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Go Live</span>
            <h2 className="text-4xl md:text-5xl font-bold">Quick <span className="gradient-text">Implementation</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { phase: 'Week 1', title: 'Assessment', desc: 'Understand your workflows and pain points', icon: '🔍' },
              { phase: 'Week 2', title: 'Setup', desc: 'Deploy core products and integrate systems', icon: '⚙️' },
              { phase: 'Week 3', title: 'Training', desc: 'Team onboarding and feature training', icon: '🎓' },
              { phase: 'Week 4+', title: 'Optimization', desc: 'Continuous improvement and scaling', icon: '📈' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-xs font-bold text-accent-cyan mb-2">{item.phase}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your <span className="gradient-text">Operations?</span></h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Experience the complete Go4Garage ecosystem. Schedule a personalized demo with our product specialists.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-xl shadow-accent-cyan/20">
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
