'use client';

import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent-cyan/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

const products = [
  {
    name: 'URGAA',
    tagline: 'Regulatory & Grid Intelligence',
    problems: 48,
    icon: '⚡',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    border: 'hover:border-cyan-400/50',
    href: '/products',
  },
  {
    name: 'GSTSAAS',
    tagline: 'Workshop & Commerce Engine',
    problems: 17,
    icon: '🔧',
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'hover:border-orange-400/50',
    href: '/products',
  },
  {
    name: 'Ignition',
    tagline: 'Consumer Experience App',
    problems: 10,
    icon: '📱',
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'hover:border-green-400/50',
    href: '/products',
  },
  {
    name: 'EV VIDYA ARJUN',
    tagline: 'Workforce Skilling Platform',
    problems: 8,
    icon: '🎓',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-400/50',
    href: '/products',
  },
  {
    name: 'KAILASH-AI',
    tagline: 'Document AI & Predictive Analytics',
    problems: 2,
    icon: '🔮',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    border: 'hover:border-indigo-400/50',
    href: '/products',
  },
  {
    name: 'Eka-AI',
    tagline: 'Agent Orchestration & Q&A',
    problems: 0,
    icon: '💬',
    gradient: 'from-sky-500/20 to-blue-500/20',
    border: 'hover:border-sky-400/50',
    href: '/products',
  },
];

const personas = [
  { icon: '⚡', label: 'CPO Operators', href: '/solutions' },
  { icon: '🔧', label: 'Workshops', href: '/solutions' },
  { icon: '🚗', label: 'Fleet Operators', href: '/solutions' },
  { icon: '🎓', label: 'EV Technicians', href: '/solutions' },
  { icon: '🏛️', label: 'Government', href: '/solutions' },
  { icon: '🏭', label: 'OEMs', href: '/solutions' },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradientX = useTransform(mouseX, [0, 1], ['30%', '70%']);
  const gradientY = useTransform(mouseY, [0, 1], ['30%', '70%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated gradient that follows cursor */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(800px circle at var(--mx) var(--my), rgba(0,229,255,0.15), transparent 60%)`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={0.5} x="80%" y="15%" size={4} />
          <FloatingParticle delay={1} x="25%" y="70%" size={8} />
          <FloatingParticle delay={1.5} x="70%" y="60%" size={5} />
          <FloatingParticle delay={2} x="50%" y="30%" size={7} />
          <FloatingParticle delay={2.5} x="15%" y="50%" size={4} />
          <FloatingParticle delay={3} x="85%" y="75%" size={6} />
          <FloatingParticle delay={0.8} x="40%" y="85%" size={5} />
        </div>

        {/* Background orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/15 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[120px]"
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">AI-Powered Automobile Intelligence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              The AI Platform{' '}
              <br className="hidden md:block" />
              Powering{' '}
              <span className="gradient-text">India&apos;s</span>
              <br className="hidden md:block" />
              <span className="gradient-text">Automobile Future</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              From regulatory chaos to operational excellence.
              One platform. 6 products. 85 problems solved. Zero friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,229,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-lg shadow-accent-cyan/20 transition-all"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: 'rgba(0,229,255,0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all"
                >
                  Explore Platform
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="py-24 bg-primary-light relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              India&apos;s Automobile Ecosystem Needs{' '}
              <span className="gradient-text">Intelligent Infrastructure</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '33',
                title: 'Regulatory & Infrastructure',
                description: 'States with different policies, DISCOM delays, fire permits, electrical inspector certifications — a compliance nightmare.',
                color: 'border-cyan-500/30',
              },
              {
                stat: '32',
                title: 'Operational Fragmentation',
                description: 'Disconnected systems for CPO operations, service centers, fleet management, billing, and grid integration.',
                color: 'border-blue-500/30',
              },
              {
                stat: '20',
                title: 'Workforce & Lifecycle Gap',
                description: '100K+ technician shortage, no standardized EV training, battery recycling infrastructure missing.',
                color: 'border-purple-500/30',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-effect p-8 rounded-2xl border-l-4 ${item.color} cursor-default group`}
              >
                <div className="text-5xl font-black gradient-text mb-4">
                  <AnimatedCounter target={parseInt(item.stat)} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-lg text-gray-400"
          >
            Total: <span className="text-accent-cyan font-bold">85 problems</span> across the value chain — all solvable by Go4Garage.
          </motion.p>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="py-16 bg-gradient-to-r from-accent-cyan/5 via-accent-blue/5 to-accent-cyan/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 89.5, suffix: '%', label: 'Compliance Automation' },
              { value: 3, suffix: 'x', label: 'Faster Operations' },
              { value: 95, suffix: '%', label: 'Cost Reduction' },
              { value: 100, suffix: '%', label: 'India-Focused' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT ECOSYSTEM ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="gradient-text">Ecosystem Platform</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              6 integrated products working as one unified intelligence layer across the entire EV value chain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link href={product.href}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className={`relative p-6 rounded-2xl border border-white/10 ${product.border} bg-gradient-to-br ${product.gradient} backdrop-blur-sm transition-all duration-300 cursor-pointer group h-full`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{product.icon}</span>
                      {product.problems > 0 && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                          {product.problems} problems
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-accent-cyan transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.tagline}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,229,255,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold shadow-lg shadow-accent-cyan/10 transition-all"
              >
                Explore All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for <span className="gradient-text">Every Stakeholder</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personas.map((persona, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Link href={persona.href}>
                  <motion.div
                    whileHover={{ y: -8, borderColor: 'rgba(0,229,255,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all cursor-pointer group text-center"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{persona.icon}</span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{persona.label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI DIFFERENTIATOR ─── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Why Go4Garage</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The <span className="gradient-text">Anthropic</span> of India&apos;s Automobile Industry
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
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
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual: AI metrics card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="glass-effect p-8 rounded-2xl border border-accent-cyan/20">
                  <div className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-6">Platform Intelligence</div>

                  <div className="space-y-6">
                    {[
                      { label: 'Regulatory Coverage', value: 95, color: 'bg-accent-cyan' },
                      { label: 'Automation Rate', value: 89, color: 'bg-accent-blue' },
                      { label: 'Accuracy Score', value: 97, color: 'bg-accent-green' },
                    ].map((bar, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">{bar.label}</span>
                          <span className="text-white font-semibold">{bar.value}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.2, duration: 1.2, ease: 'easeOut' }}
                            className={`h-full ${bar.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-cyan">14</div>
                      <div className="text-xs text-gray-500">AI Agents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-blue">69</div>
                      <div className="text-xs text-gray-500">Features</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green">33</div>
                      <div className="text-xs text-gray-500">States</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl text-xs font-bold shadow-lg shadow-accent-cyan/20"
                >
                  Proprietary LLM
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-effect p-10 rounded-2xl relative">
              <div className="absolute top-6 left-8 text-7xl text-accent-cyan/20 font-serif leading-none">&ldquo;</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-300 leading-relaxed mb-8 pt-8">
                  Go4Garage transformed our operations completely. What used to take us weeks now happens
                  in hours. Their AI understands Indian regulations better than any consultant we&apos;ve worked with.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full flex items-center justify-center text-lg font-bold">
                    R
                  </div>
                  <div>
                    <div className="font-semibold text-white">Rajesh Kumar</div>
                    <div className="text-sm text-gray-400">Operations Director, Leading CPO Network</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/8 via-primary to-accent-blue/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-[200px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Join the platform that&apos;s powering India&apos;s automobile future with AI-first intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-xl shadow-accent-cyan/20 transition-all"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/investors">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all"
                >
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
