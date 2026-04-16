'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start * 10) / 10); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{prefix}{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
}

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

const products = [
  { name: 'URGAA', tagline: 'Regulatory & Grid Intelligence', problems: 48, icon: 'bolt', color: 'bg-primary-container/15 border-primary/20', href: '/products' },
  { name: 'GSTSAAS', tagline: 'Workshop & Commerce Engine', problems: 17, icon: 'build', color: 'bg-secondary-container/15 border-secondary/20', href: '/products' },
  { name: 'Ignition', tagline: 'Consumer Experience App', problems: 10, icon: 'smartphone', color: 'bg-tertiary-container/15 border-tertiary/20', href: '/products' },
  { name: 'EV VIDYA ARJUN', tagline: 'Workforce Skilling Platform', problems: 8, icon: 'school', color: 'bg-secondary-container/15 border-secondary/20', href: '/products' },
  { name: 'KAILASH-AI', tagline: 'Document AI & Predictive Analytics', problems: 2, icon: 'analytics', color: 'bg-primary-container/15 border-primary/20', href: '/products' },
  { name: 'Eka-AI', tagline: 'Agent Orchestration & Q&A', problems: 0, icon: 'smart_toy', color: 'bg-tertiary-container/15 border-tertiary/20', href: '/products' },
];

const personas = [
  { icon: 'ev_station', label: 'CPO Operators', href: '/solutions' },
  { icon: 'build', label: 'Workshops', href: '/solutions' },
  { icon: 'local_shipping', label: 'Fleet Operators', href: '/solutions' },
  { icon: 'school', label: 'EV Technicians', href: '/solutions' },
  { icon: 'account_balance', label: 'Government', href: '/solutions' },
  { icon: 'factory', label: 'OEMs', href: '/solutions' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Warm gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/8 rounded-full blur-[150px]" />
        </div>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">AI-Powered Automobile Intelligence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-on-surface mb-6 leading-[1.05] tracking-tight font-display">
              The AI Platform{' '}
              <br className="hidden md:block" />
              Powering{' '}
              <span className="gradient-text">India&apos;s</span>
              <br className="hidden md:block" />
              <span className="gradient-text">Automobile Future</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              From regulatory chaos to operational excellence. One platform. 6 products. 85 problems solved. Zero friction.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow">
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">
                  Explore Platform
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-outline-variant flex items-start justify-center p-1.5">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              India&apos;s Automobile Ecosystem Needs{' '}
              <span className="gradient-text">Intelligent Infrastructure</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: '33', title: 'Regulatory & Infrastructure', description: 'States with different policies, DISCOM delays, fire permits, electrical inspector certifications — a compliance nightmare.', icon: 'gavel', color: 'border-l-primary' },
              { stat: '32', title: 'Operational Fragmentation', description: 'Disconnected systems for CPO operations, service centers, fleet management, billing, and grid integration.', icon: 'hub', color: 'border-l-secondary' },
              { stat: '20', title: 'Workforce & Lifecycle Gap', description: '100K+ technician shortage, no standardized EV training, battery recycling infrastructure missing.', icon: 'group', color: 'border-l-tertiary' },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} whileHover={{ y: -4 }} className={`bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 ${item.color} shadow-sm hover:shadow-md transition-all group`}>
                <Icon name={item.icon} size={32} className="text-primary mb-4" />
                <div className="text-4xl font-black gradient-text mb-3 font-display">
                  <AnimatedCounter target={parseInt(item.stat)} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12 text-lg text-on-surface-variant">
            Total: <span className="text-primary font-bold">85 problems</span> across the value chain — all solvable by Go4Garage.
          </motion.p>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="py-16 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 89.5, suffix: '%', label: 'Compliance Automation', icon: 'verified' },
              { value: 3, suffix: 'x', label: 'Faster Operations', icon: 'speed' },
              { value: 95, suffix: '%', label: 'Cost Reduction', icon: 'savings' },
              { value: 100, suffix: '%', label: 'India-Focused', icon: 'public' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <Icon name={stat.icon} size={28} className="text-primary mb-2" />
                <div className="text-4xl md:text-5xl font-black gradient-text mb-1 font-display">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-on-surface-variant font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT ECOSYSTEM ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Complete <span className="gradient-text">Ecosystem Platform</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              6 integrated products working as one unified intelligence layer across the entire EV value chain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <Link href={product.href}>
                  <motion.div whileHover={{ y: -4 }} className={`relative p-6 rounded-2xl border ${product.color} transition-all cursor-pointer group h-full bg-surface-bright shadow-sm hover:shadow-md`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center">
                        <Icon name={product.icon} size={24} className="text-primary" />
                      </div>
                      {product.problems > 0 && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-container/15 text-primary border border-primary/15">
                          {product.problems} problems
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors font-display">{product.name}</h3>
                    <p className="text-sm text-on-surface-variant">{product.tagline}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      <span>Learn more</span>
                      <Icon name="arrow_forward" size={14} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Link href="/products">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 bg-primary text-primary-on rounded-2xl font-semibold shadow-md hover:shadow-lg transition-shadow">
                Explore All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Built for <span className="gradient-text">Every Stakeholder</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personas.map((persona, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                <Link href={persona.href}>
                  <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-outline-variant/30 bg-surface-bright hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center group-hover:bg-primary-container/25 transition-colors">
                      <Icon name={persona.icon} size={24} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">{persona.label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI DIFFERENTIATOR ─── */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Why Go4Garage</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  The <span className="gradient-text">Intelligence</span> Behind India&apos;s Auto Industry
                </h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  We&apos;re not building tools — we&apos;re building intelligence. Our proprietary Automobile LLM
                  understands every regulation, workflow, and edge case in India&apos;s EV ecosystem.
                </p>

                <div className="space-y-4">
                  {[
                    'First AI platform trained on Indian automobile regulations',
                    '89.5% reduction in manual compliance work',
                    'Real-time updates across all 33 states',
                    'End-to-end CPO operations + service + workforce',
                  ].map((item, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + idx * 0.1 }} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="check" size={14} className="text-primary" />
                      </div>
                      <span className="text-on-surface-variant text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* AI metrics card */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative">
                <div className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-lg">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 font-display">Platform Intelligence</div>

                  <div className="space-y-6">
                    {[
                      { label: 'Regulatory Coverage', value: 95, color: 'bg-primary' },
                      { label: 'Automation Rate', value: 89, color: 'bg-secondary' },
                      { label: 'Accuracy Score', value: 97, color: 'bg-tertiary' },
                    ].map((bar, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-on-surface-variant">{bar.label}</span>
                          <span className="text-on-surface font-semibold">{bar.value}%</span>
                        </div>
                        <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar.value}%` }} viewport={{ once: true }} transition={{ delay: 0.5 + idx * 0.2, duration: 1.2 }} className={`h-full ${bar.color} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
                    {[
                      { val: '14', label: 'AI Agents', color: 'text-primary' },
                      { val: '69', label: 'Features', color: 'text-secondary' },
                      { val: '33', label: 'States', color: 'text-tertiary' },
                    ].map((m, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold font-display ${m.color}`}>{m.val}</div>
                        <div className="text-xs text-on-surface-variant">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 px-4 py-2 bg-primary text-primary-on rounded-xl text-xs font-bold shadow-lg font-display">
                  Proprietary LLM
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="bg-surface-bright p-10 rounded-2xl border border-outline-variant/30 shadow-sm relative">
              <div className="absolute top-6 left-8 text-7xl text-primary/10 font-serif leading-none">&ldquo;</div>
              <div className="relative z-10">
                <p className="text-xl text-on-surface-variant leading-relaxed mb-8 pt-8">
                  Go4Garage transformed our operations completely. What used to take us weeks now happens
                  in hours. Their AI understands Indian regulations better than any consultant we&apos;ve worked with.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center text-lg font-bold text-white">
                    R
                  </div>
                  <div>
                    <div className="font-semibold text-on-surface">Rajesh Kumar</div>
                    <div className="text-sm text-on-surface-variant">Operations Director, Leading CPO Network</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-on-surface-variant mb-10">
              Join the platform that&apos;s powering India&apos;s automobile future with AI-first intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/investors">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">
                  For Investors
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
