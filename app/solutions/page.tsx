'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

interface Persona {
  id: string; name: string; icon: string; challenges: string[]; products: Array<{ name: string; description: string }>; impact: string; impactMetrics: Array<{ value: string; label: string }>; ctaText: string;
}

const personas: Persona[] = [
  { id: 'cpo', name: 'CPO Operators', icon: 'ev_station', challenges: ['DISCOM delays and load sanctioning bottlenecks', '33-state policy fragmentation', 'Fire dept NOCs and electrical inspector certification', 'Subsidy disbursement delays under FAME-II', 'Charger uptime and SLA breach management', 'Revenue leakage and manual audit prep'], products: [{ name: 'URGAA', description: 'Automate 48 regulatory problems with AI-driven compliance' }, { name: 'KAILASH-AI', description: 'Predictive analytics for charger uptime and operations' }], impact: '48 regulatory problems automated, real-time compliance', impactMetrics: [{ value: '48', label: 'Problems solved' }, { value: '89%', label: 'Automation' }, { value: '0', label: 'Audit gaps' }], ctaText: 'Explore URGAA' },
  { id: 'workshops', name: 'Workshops & Service Centers', icon: 'build', challenges: ['Service network gaps across EV coverage', 'Spare parts availability and procurement delays', 'High EV repair costs and diagnostic tool shortage', 'Warranty disputes with OEMs', 'GST anomalies in service invoicing', 'Technician shortage and skill standardization'], products: [{ name: 'GSTSAAS', description: 'Automated GST invoicing and service commerce management' }, { name: 'EV VIDYA ARJUN', description: 'AI-powered training for technician upskilling' }], impact: '17 service problems solved, automated GST invoicing', impactMetrics: [{ value: '17', label: 'Problems solved' }, { value: '40%', label: 'More volume' }, { value: '95%', label: 'Cost saving' }], ctaText: 'Explore GSTSAAS' },
  { id: 'fleet', name: 'Fleet Operators', icon: 'local_shipping', challenges: ['Fleet compliance management across states', 'Total cost of ownership (TCO) uncertainty', 'Charging optimization for fleet routes', 'Predictive maintenance and downtime reduction', 'Real-time fleet monitoring and diagnostics'], products: [{ name: 'URGAA', description: 'Regulatory compliance for fleet operations' }, { name: 'GSTSAAS', description: 'Fleet service management and invoicing' }, { name: 'KAILASH-AI', description: 'Predictive maintenance and route optimization' }], impact: 'Operational cost reduction, 99.5% uptime', impactMetrics: [{ value: '99.5%', label: 'Uptime' }, { value: '3x', label: 'Faster ops' }, { value: '35%', label: 'Cost cut' }], ctaText: 'Explore Fleet Solutions' },
  { id: 'technicians', name: 'EV Technicians & Trainees', icon: 'school', challenges: ['100K+ technician shortage in India', 'Low ICE-to-EV skill overlap', 'High-voltage safety competency gap', 'Training infrastructure gaps across regions', 'High attrition in EV service roles'], products: [{ name: 'EV VIDYA ARJUN', description: 'Comprehensive AI-driven training with certifications' }, { name: 'Eka-AI', description: 'Conversational AI for instant technical guidance' }], impact: '8 workforce problems addressed, certified professionals', impactMetrics: [{ value: '8', label: 'Problems solved' }, { value: '3mo', label: 'To certified' }, { value: '100%', label: 'Job ready' }], ctaText: 'Explore Training' },
  { id: 'govt', name: 'Government & Regulators', icon: 'account_balance', challenges: ['Policy fragmentation across 33 states', 'Inter-ministerial coordination challenges', 'FAME-II implementation failures', 'Document verification burden across departments'], products: [{ name: 'URGAA Platform APIs', description: 'Digitized approval workflows and compliance dashboards' }], impact: 'Digitized approvals, real-time compliance dashboards', impactMetrics: [{ value: '33', label: 'States covered' }, { value: '95%', label: 'Doc automation' }, { value: '0', label: 'Bottlenecks' }], ctaText: 'Explore Regulatory' },
  { id: 'oems', name: 'OEMs & Manufacturers', icon: 'factory', challenges: ['CPO integration and ecosystem connectivity', 'Vehicle health monitoring post-sale', 'Warranty management and dispute resolution', 'Demand forecasting and inventory planning', 'Localization verification across markets'], products: [{ name: 'Platform APIs', description: 'Enterprise APIs for ecosystem integration' }, { name: 'KAILASH-AI', description: 'Quality analytics and demand forecasting' }], impact: 'Real-time market insights, ecosystem integration', impactMetrics: [{ value: 'API', label: 'First arch' }, { value: 'RT', label: 'Insights' }, { value: '360°', label: 'Visibility' }], ctaText: 'Explore API Platform' },
];

const successStories = [
  { persona: 'Leading CPO Operator', quote: 'URGAA reduced our compliance team workload by 85%. What took 2 weeks now happens in 2 days.', metric: '85% efficiency gain', icon: 'ev_station' },
  { persona: 'Service Center Network', quote: 'GSTSAAS transformed our operations. We now handle 40% more vehicles with the same staff.', metric: '40% volume increase', icon: 'build' },
  { persona: 'EV Fleet Operator', quote: 'KAILASH-AI predictive maintenance saved us crores in unexpected downtime.', metric: '35% cost reduction', icon: 'local_shipping' },
  { persona: 'Technician Community', quote: 'ARJUN training platform made me job-ready for EV repair in just 3 months.', metric: 'Certified & hired', icon: 'school' },
];

export default function SolutionsPage() {
  const [activePersona, setActivePersona] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Tailored for Every Stakeholder</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Solutions for{' '}<span className="gradient-text">Every Role</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              From CPO operators to government regulators — discover how Go4Garage transforms your specific challenges into competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PERSONA SELECTOR ─── */}
      <section className="py-4 bg-surface-bright/90 border-y border-outline-variant/20 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {personas.map((p) => (
              <motion.button key={p.id} onClick={() => setActivePersona(activePersona === p.id ? null : p.id)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activePersona === p.id ? 'bg-primary text-primary-on shadow-md' : 'bg-surface-bright text-on-surface-variant border border-outline-variant/30 hover:border-primary/30 hover:text-primary'}`}>
                <Icon name={p.icon} size={18} />
                <span className="hidden sm:inline">{p.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERSONA CARDS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.filter(p => !activePersona || p.id === activePersona).map((persona, idx) => (
              <motion.div key={persona.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: idx * 0.08 }} layout>
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center">
                      <Icon name={persona.icon} size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display">{persona.name}</h3>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 font-display">Key Challenges</h4>
                    <ul className="space-y-1.5">
                      {persona.challenges.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                          <Icon name="warning" size={14} className="text-error mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                      {persona.challenges.length > 3 && (
                        <li className="text-xs text-primary font-medium">+{persona.challenges.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-5 flex-grow">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 font-display">Recommended Products</h4>
                    <div className="space-y-2">
                      {persona.products.map((product, i) => (
                        <div key={i} className="px-3 py-2 bg-surface-container-low rounded-lg border border-outline-variant/20">
                          <p className="font-semibold text-xs text-on-surface">{product.name}</p>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">{product.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {persona.impactMetrics.map((m, i) => (
                      <div key={i} className="text-center p-2 bg-primary-container/10 rounded-lg border border-primary/10">
                        <div className="text-sm font-bold text-primary">{m.value}</div>
                        <div className="text-[10px] text-on-surface-variant">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href="/products">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-2.5 px-4 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
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
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Why Choose <span className="gradient-text">Go4Garage</span></h2>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-outline-variant/20">
              <div className="px-6 py-4 text-on-surface font-display">Capability</div>
              <div className="px-6 py-4 text-center text-primary">Go4Garage</div>
              <div className="px-6 py-4 text-center text-on-surface-variant">Generic</div>
            </div>
            {['India-Specific Compliance', 'Multi-Persona Support', 'AI-Powered Intelligence', 'Integrated Ecosystem', 'Workforce Training', '24/7 Conversational AI'].map((cap, idx) => (
              <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="grid grid-cols-3 text-sm border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                <div className="px-6 py-3 font-medium text-on-surface">{cap}</div>
                <div className="px-6 py-3 text-center"><Icon name="check_circle" size={20} className="text-tertiary" /></div>
                <div className="px-6 py-3 text-center"><Icon name="cancel" size={20} className="text-error/40" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUCCESS STORIES ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Success Stories from Our <span className="gradient-text">Community</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <Icon name={story.icon} size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                  <div>
                    <p className="font-semibold text-sm text-on-surface">{story.persona}</p>
                    <p className="text-xs text-primary">{story.metric}</p>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Transform Your <span className="gradient-text">Operations</span>?</h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join industry leaders leveraging Go4Garage to solve their toughest challenges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">Schedule a Demo</motion.button></Link>
              <Link href="/products"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">View Products</motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
