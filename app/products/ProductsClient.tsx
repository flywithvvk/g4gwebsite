'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

interface Product {
  id: number; name: string; tagline: string; description: string; problemsSolved: number; icon: string; keyFeatures: string[]; aiType: string; color: string;
}

const products: Product[] = [
  { id: 1, name: 'URGAA (URJA) Platform', tagline: 'Regulatory & Grid Intelligence', icon: 'bolt', description: 'Navigate India\'s 33-state regulatory landscape with AI-powered compliance automation. URGAA handles DISCOM connections, load sanctioning, electrical inspector certifications, fire NOCs, subsidy disbursement, and real-time charger monitoring.', problemsSolved: 48, aiType: 'Regulatory AI', color: 'border-l-primary', keyFeatures: ['DISCOM connection & load sanctioning automation', 'Multi-state regulatory compliance (33 states)', 'Electrical inspector & fire dept workflows', 'Grid infrastructure & transformer monitoring', 'Subsidy tracking (FAME-II, state schemes)', 'Charger uptime & SLA monitoring', 'Carbon credit & ESG compliance'] },
  { id: 2, name: 'GSTSAAS', tagline: 'Workshop, Service & Commerce', icon: 'build', description: 'End-to-end workshop and service center operations — service scheduling, spare parts inventory, technician dispatch, GST-compliant invoicing, insurance coordination, and vendor procurement.', problemsSolved: 17, aiType: 'Operations AI', color: 'border-l-secondary', keyFeatures: ['Service scheduling & technician dispatch', 'Spare parts inventory & procurement', 'GST-compliant invoicing & tax automation', 'Insurance partner integration', 'Financing & lending marketplace', 'Warranty management & dispute resolution', 'Working capital optimization'] },
  { id: 3, name: 'Ignition Mobile App', tagline: 'Consumer Experience & Adoption', icon: 'smartphone', description: 'Unified consumer app for EV drivers — charger discovery, booking, payments, notifications, and support. Tackles range anxiety and trust deficit through real-time information.', problemsSolved: 10, aiType: 'Conversational AI', color: 'border-l-tertiary', keyFeatures: ['Charger discovery & real-time availability', 'Booking, payments & wallet integration', 'Range planning & navigation', 'Consumer awareness & education', 'Multi-channel support (WhatsApp, push, SMS)', 'Loyalty programs & EV incentives', 'Tier 2/3 city charger coverage maps'] },
  { id: 4, name: 'EV VIDYA ARJUN', tagline: 'Workforce Skilling & Certification', icon: 'school', description: 'India\'s EV workforce platform bridging the 100K+ technician gap. Adaptive learning paths, high-voltage safety training, certification management, and mentor-apprentice pairing.', problemsSolved: 8, aiType: 'Learning AI', color: 'border-l-secondary', keyFeatures: ['Adaptive learning paths (ICE to EV)', 'High-voltage safety competency training', 'Hands-on simulation & virtual labs', 'Industry-recognized certifications', 'Mentor-apprentice pairing', 'Multilingual content delivery', 'Training analytics & proficiency tracking'] },
  { id: 5, name: 'KAILASH-AI', tagline: 'Document AI & Predictive Analytics', icon: 'analytics', description: 'AI/ML engine powering the entire ecosystem. Document verification (OCR, extraction), predictive maintenance, demand forecasting, anomaly detection, and quality control analytics.', problemsSolved: 2, aiType: 'Predictive AI', color: 'border-l-primary', keyFeatures: ['Document AI — OCR, extraction & validation', 'Predictive maintenance & failure prediction', 'Demand forecasting & energy optimization', 'Anomaly detection & risk scoring', 'Quality control analytics', 'RAG-based knowledge retrieval', 'ML model training & deployment pipeline'] },
  { id: 6, name: 'Eka-AI', tagline: 'Agent Orchestration & Internal Q&A', icon: 'smart_toy', description: 'Internal AI assistant orchestrating all 14 sub-agents across the platform. Cross-product queries, agent coordination, knowledge management, and domain-aware conversational support.', problemsSolved: 0, aiType: 'Orchestration AI', color: 'border-l-tertiary', keyFeatures: ['Multi-agent orchestration (14 sub-agents)', 'Cross-product internal Q&A', 'Domain-specific knowledge base', 'Agent coordination & task routing', 'Real-time learning from interactions', 'Escalation to human experts', 'Integration with all products'] },
];

const integrations = [
  { pair: 'URGAA + GSTSAAS', description: 'Compliance requirements auto-flow into service scheduling and vendor management', icon: 'sync_alt' },
  { pair: 'EV VIDYA + KAILASH', description: 'Predictive failures trigger just-in-time training for relevant skill gaps', icon: 'school' },
  { pair: 'Ignition + Eka-AI', description: 'Conversational AI powers customer support while learning from interactions', icon: 'smart_toy' },
  { pair: 'Full Ecosystem', description: 'Every product feeds insights to improve the entire platform intelligence', icon: 'hub' },
];

export default function ProductsClient() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const totalProblems = products.reduce((sum, p) => sum + p.problemsSolved, 0);

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">6 Products &bull; {totalProblems} Problems Solved</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Our Complete <span className="gradient-text">Product Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              From regulatory compliance to customer experience — all in one integrated platform powering India&apos;s entire EV value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: `${products.length}`, label: 'Integrated Products', icon: 'inventory_2' },
              { value: `${totalProblems}`, label: 'Problems Solved', icon: 'check_circle' },
              { value: '360°', label: 'Complete Coverage', icon: 'public' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <Icon name={stat.icon} size={28} className="text-primary mb-2" />
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1 font-display">{stat.value}</div>
                <div className="text-sm text-on-surface-variant font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CARDS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} layout>
                <motion.div onClick={() => setExpandedId(expandedId === product.id ? null : product.id)} whileHover={{ y: -4 }} className={`p-6 rounded-2xl bg-surface-bright border border-outline-variant/30 border-l-4 ${product.color} cursor-pointer group transition-all shadow-sm hover:shadow-md`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center">
                      <Icon name={product.icon} size={26} className="text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary-container/15 text-secondary font-semibold">{product.aiType}</span>
                      {product.problemsSolved > 0 && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-container/15 text-primary border border-primary/15">
                          {product.problemsSolved}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors font-display">{product.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{product.description}</p>

                  <AnimatePresence>
                    {expandedId === product.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="p-4 bg-surface-container-low rounded-xl mb-4 border border-outline-variant/20">
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 font-display">Key Features</h4>
                          <ul className="space-y-2">
                            {product.keyFeatures.map((feature, i) => (
                              <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2 text-xs text-on-surface-variant">
                                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                    <span className="text-xs text-on-surface-variant">{expandedId === product.id ? 'Click to collapse' : 'Click to expand'}</span>
                    <motion.span animate={{ rotate: expandedId === product.id ? 180 : 0 }} className="text-primary text-sm">
                      <Icon name="expand_more" size={20} />
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW THEY CONNECT ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Integration</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">How They <span className="gradient-text">Work Together</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { step: '1', title: 'Unified Intelligence Layer', desc: 'All products share a single AI backbone trained on Indian automobile regulations and workflows', icon: 'psychology' },
                { step: '2', title: 'Real-time Data Sync', desc: 'Changes in one product instantly update across the ecosystem for consistency', icon: 'sync' },
                { step: '3', title: 'Cross-Product Intelligence', desc: 'Regulatory changes auto-trigger training updates and operational workflows', icon: 'hub' },
                { step: '4', title: 'Single Dashboard', desc: 'Manage all products from one unified control center with role-based access', icon: 'dashboard' },
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-md">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors font-display">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6 font-display">Seamless Integration</h3>
              {integrations.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ x: 4 }} className="bg-surface-bright p-4 rounded-xl border-l-4 border-l-primary/30 border border-outline-variant/20 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={item.icon} size={18} className="text-primary" />
                    <h4 className="font-semibold text-primary text-sm">{item.pair}</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Go Live</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Quick <span className="gradient-text">Implementation</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { phase: 'Week 1', title: 'Assessment', desc: 'Understand your workflows and pain points', icon: 'search' },
              { phase: 'Week 2', title: 'Setup', desc: 'Deploy core products and integrate systems', icon: 'settings' },
              { phase: 'Week 3', title: 'Training', desc: 'Team onboarding and feature training', icon: 'school' },
              { phase: 'Week 4+', title: 'Optimization', desc: 'Continuous improvement and scaling', icon: 'trending_up' },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <Icon name={item.icon} size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-primary mb-2 font-display">{item.phase}</div>
                <h3 className="font-bold mb-2 font-display">{item.title}</h3>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Transform Your <span className="gradient-text">Operations?</span></h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Experience the complete Go4Garage ecosystem. Schedule a personalized demo with our product specialists.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">Schedule Demo</motion.button>
              </Link>
              <Link href="/">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">Back to Home</motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
