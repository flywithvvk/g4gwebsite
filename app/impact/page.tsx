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
    const step = target / (1800 / 16);
    const timer = setInterval(() => { start += step; if (start >= target) { setCount(target); clearInterval(timer); } else { setCount(Math.floor(start * 10) / 10); } }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
}

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

const impactAreas = [
  { title: 'Regulatory Impact', icon: 'gavel', color: 'text-primary', border: 'border-l-primary', items: ['Real-time compliance tracking across 33 states', 'Automated regulatory updates and alerts', 'Zero compliance penalties for users', '95% reduction in documentation time'] },
  { title: 'Operational Impact', icon: 'settings', color: 'text-secondary', border: 'border-l-secondary', items: ['3x faster incident resolution', 'Unified dashboard for all metrics', 'Predictive maintenance reducing downtime 60%', 'Seamless integration with existing systems'] },
  { title: 'Workforce Impact', icon: 'group', color: 'text-tertiary', border: 'border-l-tertiary', items: ['Comprehensive EV technician training', 'Industry-standard certifications', '50+ trained professionals in ecosystem', 'Career advancement in EV services'] },
];

const whyChoose = [
  { title: 'Proven ROI', desc: '95% cost reduction and 3x operational improvement within 6 months', icon: 'insights' },
  { title: 'Zero Compliance Risk', desc: '100% regulatory compliance across all states and changing requirements', icon: 'shield' },
  { title: 'Instant Integration', desc: 'Seamless integration with existing systems — no operational disruption', icon: 'hub' },
  { title: 'Expert Support', desc: '24/7 support from automobile industry experts who understand your challenges', icon: 'support_agent' },
  { title: 'Continuous Innovation', desc: 'Regular updates and features based on feedback and regulatory changes', icon: 'rocket_launch' },
  { title: 'Scalability', desc: 'Grows with you — from single location to nationwide operations', icon: 'trending_up' },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Measurable Results</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">Our <span className="gradient-text">Impact</span></h1>
            <p className="text-lg text-on-surface-variant">Real results transforming India&apos;s automobile ecosystem.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── KEY METRICS ─── */}
      <section className="py-16 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 89.5, suffix: '%', label: 'Compliance Automation', desc: 'Reduction in manual work', icon: 'verified' },
              { value: 3, suffix: 'x', label: 'Faster Operations', desc: 'Speed improvement', icon: 'speed' },
              { value: 95, suffix: '%', label: 'Cost Savings', desc: 'Average reduction', icon: 'savings' },
              { value: 100, suffix: '%', label: 'India Coverage', desc: 'All states', icon: 'public' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <Icon name={stat.icon} size={28} className="text-primary mb-2" />
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1 font-display"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="text-sm font-semibold text-on-surface mb-0.5">{stat.label}</div>
                <div className="text-xs text-on-surface-variant">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT AREAS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Where We Make a Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Impact <span className="gradient-text">Areas</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {impactAreas.map((area, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className={`bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${area.border} shadow-sm hover:shadow-md transition-all group`}>
                <Icon name={area.icon} size={32} className={`${area.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className={`text-xl font-bold mb-4 ${area.color} font-display`}>{area.title}</h3>
                <ul className="space-y-2.5">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <Icon name="add" size={16} className={`${area.color} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOMER STORY ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Customer <span className="gradient-text">Success Story</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-surface-bright p-10 rounded-2xl border border-outline-variant/30 shadow-sm relative">
            <div className="absolute top-6 left-8 text-7xl text-primary/10 font-serif leading-none">&ldquo;</div>
            <div className="relative z-10 pt-8">
              <p className="text-lg text-on-surface-variant leading-relaxed mb-4">Go4Garage has been transformative for our operations. Before implementation, our compliance team spent 80% of their time on manual documentation and regulatory updates. Now, the platform handles all of that automatically.</p>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">What used to take 3 weeks now happens in 2-3 days. The cost savings alone — over 90% — justified the investment in the first quarter. But the real win? Zero compliance errors.</p>
              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center text-lg font-bold text-white">R</div>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-primary">Operations Director</div>
                  <div className="text-xs text-on-surface-variant">Leading CPO Network, India</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-outline-variant/20">
                {[
                  { value: '90%', label: 'Cost Reduction', color: 'text-primary' },
                  { value: '14x', label: 'Faster Processing', color: 'text-secondary' },
                  { value: '0', label: 'Compliance Errors', color: 'text-tertiary' },
                ].map((m, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl font-black mb-0.5 ${m.color} font-display`}>{m.value}</div>
                    <div className="text-xs text-on-surface-variant">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY GO4GARAGE ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Why Organizations Choose <span className="gradient-text">Go4Garage</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyChoose.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ y: -4 }} className="bg-surface-bright p-5 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <Icon name={item.icon} size={24} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors font-display">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to See Your <span className="gradient-text">Impact?</span></h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join organizations already transforming their operations with Go4Garage.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">Schedule a Demo</motion.button></Link>
              <Link href="/platform"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">Explore Platform</motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
