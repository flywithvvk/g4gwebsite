'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const milestones = [
  { year: '2021', title: 'Company Founded', desc: 'URGAA v1 Launched, India\u2019s first EV regulatory AI', color: 'border-primary bg-primary/10', textColor: 'text-primary', dotColor: 'bg-primary' },
  { year: '2022', title: 'GST & EV VIDYA ARJUN Live', desc: 'Workshop digitisation + workforce skilling platform launched', color: 'border-secondary bg-secondary/10', textColor: 'text-secondary', dotColor: 'bg-secondary' },
  { year: '2023', title: 'KAILASH-AI & EkaAI Launched', desc: '500+ operators onboarded, document AI + agent orchestration', color: 'border-tertiary bg-tertiary/10', textColor: 'text-tertiary', dotColor: 'bg-tertiary' },
  { year: '2024-25', title: 'Ignition App & 7 Products', desc: '85 Problems Solved, consumer app and full product suite complete', color: 'border-primary bg-primary/10', textColor: 'text-primary', dotColor: 'bg-primary' },
  { year: '2026', title: '5 Years: 1 Lakh+ Apps', desc: '1 Lakh+ DISCOM Applications Processed, 5 years of innovation', color: 'border-secondary bg-secondary/10', textColor: 'text-secondary', dotColor: 'bg-secondary' },
];

// Hardcoded particle positions to avoid hydration mismatch (no Math.random())
const particles = [
  { id: 1, left: '8%', top: '15%', size: 'w-2 h-2', delay: 0, dur: 4 },
  { id: 2, left: '18%', top: '70%', size: 'w-1 h-1', delay: 0.5, dur: 5 },
  { id: 3, left: '28%', top: '30%', size: 'w-1.5 h-1.5', delay: 1, dur: 6 },
  { id: 4, left: '42%', top: '80%', size: 'w-1 h-1', delay: 1.5, dur: 4.5 },
  { id: 5, left: '55%', top: '20%', size: 'w-2 h-2', delay: 0.8, dur: 5.5 },
  { id: 6, left: '65%', top: '60%', size: 'w-1 h-1', delay: 0.3, dur: 4 },
  { id: 7, left: '75%', top: '40%', size: 'w-1.5 h-1.5', delay: 1.2, dur: 6 },
  { id: 8, left: '85%', top: '75%', size: 'w-1 h-1', delay: 0.7, dur: 5 },
  { id: 9, left: '92%', top: '25%', size: 'w-2 h-2', delay: 0.4, dur: 4.5 },
  { id: 10, left: '12%', top: '50%', size: 'w-1 h-1', delay: 1.8, dur: 5 },
  { id: 11, left: '48%', top: '45%', size: 'w-1.5 h-1.5', delay: 0.9, dur: 6 },
  { id: 12, left: '32%', top: '85%', size: 'w-1 h-1', delay: 1.4, dur: 4 },
];

export default function FiveYearsBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#1a0a00] via-[#2d1000] to-[#1a0a1a]">
      {/* Radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-secondary/8 rounded-full blur-[100px]" />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.size} rounded-full bg-amber-400/30 pointer-events-none`}
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #f18a22 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Anniversary badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold">
            🎉 5-Year Anniversary: April 14, 2021 to 2026
          </span>
        </motion.div>

        {/* Hero number + title */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
            className="relative"
          >
            {/* Giant "5" */}
            <span
              className="text-[120px] md:text-[180px] lg:text-[220px] font-black leading-none font-display select-none"
              style={{
                background: 'linear-gradient(135deg, #f18a22 0%, #ffd700 40%, #904d00 70%, #f18a22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(241,138,34,0.4))',
              }}
            >
              5
            </span>
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)',
                backgroundClip: 'text',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-display -mt-4 md:-mt-8">
              Years of Innovation
            </h2>
            <p className="text-amber-300/80 text-lg md:text-xl mt-3 font-medium">
              Driving India&apos;s EV Revolution Since 2021
            </p>
          </motion.div>
        </div>

        {/* Milestone timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          {/* Scrollable container on mobile */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`relative flex-shrink-0 w-56 md:w-auto p-4 rounded-2xl border ${m.color} backdrop-blur-sm`}
                >
                  {/* Year badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${m.textColor} bg-white/10 border border-white/10`}>
                    {m.year}
                  </span>
                  {/* Connector dot */}
                  <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${m.dotColor} border-2 border-white/20 hidden md:block`} />
                  <h4 className="text-white font-bold text-sm mb-1 font-display">{m.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block h-0.5 bg-gradient-to-r from-primary/20 via-amber-400/40 to-secondary/20 mt-2 rounded-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16"
        >
          {[
            { value: 5, suffix: '+', label: 'Years', color: 'text-amber-400' },
            { value: 85, suffix: '', label: 'Problems Solved', color: 'text-primary-container' },
            { value: 7, suffix: '', label: 'Products Built', color: 'text-secondary-container' },
            { value: 100000, suffix: '+', label: 'DISCOM Apps Processed', color: 'text-tertiary-container' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className={`text-3xl md:text-4xl font-black font-display ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(241,138,34,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-semibold text-lg shadow-lg"
            >
              Our Journey
            </motion.button>
          </Link>
          <Link href="/impact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-amber-500/40 bg-white/5 text-amber-300 hover:bg-amber-500/10 hover:border-amber-500/60 transition-all backdrop-blur-sm"
            >
              See Our Impact
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
