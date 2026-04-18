'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

const values = [
  { icon: 'psychology', title: 'AI-First', desc: 'Intelligence over tooling. Every feature is powered by our proprietary Automobile LLM.', color: 'border-l-primary' },
  { icon: 'flag', title: 'India-Focused', desc: 'Built for India\'s unique regulatory, operational, and workforce landscape.', color: 'border-l-secondary' },
  { icon: 'hub', title: 'Ecosystem Thinking', desc: 'Not point solutions — a complete interconnected platform for the entire value chain.', color: 'border-l-tertiary' },
  { icon: 'rocket_launch', title: 'Speed to Value', desc: 'From assessment to live in 4 weeks. Immediate ROI with measurable impact.', color: 'border-l-primary' },
];

const timeline = [
  { year: '2024', title: 'Founded', desc: 'Go4Garage founded with the vision to unify India\'s fragmented automobile ecosystem.' },
  { year: '2024', title: 'Platform Built', desc: '6 products, 14 AI agents, and 69 features developed. 85 problems mapped and solvable.' },
  { year: '2025', title: 'Market Entry', desc: 'First CPO operators and service centers onboarded. 89.5% compliance automation achieved.' },
  { year: '2026', title: 'Scaling', desc: 'Expanding across 33 states. Workforce training platform live. Series A in progress.' },
];

const team = [
  { role: 'Founder & CEO', expertise: '10+ years in automobile tech', icon: 'person', bg: 'from-primary to-primary-container', details: ['Former Head of Operations at India\'s largest EV charging network', 'Deep expertise in regulatory compliance and operational efficiency', 'B.Tech, IIT Delhi • Serial entrepreneur'] },
  { role: 'Co-Founder & CTO', expertise: 'AI researcher, 8+ years', icon: 'psychology', bg: 'from-secondary to-secondary-container', details: ['PhD in Machine Learning — built LLM systems at major tech companies', 'Leading development of proprietary Automobile LLM', 'PhD, IIT Bombay • Published researcher'] },
  { role: 'Advisory Board', expertise: 'Industry veterans', icon: 'groups', bg: 'from-tertiary to-tertiary-container', details: ['Former executives from Ather, Hero MotoCorp, leading automotive firms', '50+ years combined experience in automotive industry', 'Government relationships • Market expertise'] },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #4A0E78 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Our Story</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">About <span className="gradient-text">Go4Garage</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">Building the intelligent infrastructure that powers India&apos;s automobile revolution.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 border-l-primary shadow-sm">
              <Icon name="flag" size={36} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">Accelerate EV adoption and charging/service scale in India by reducing compliance friction, improving uptime, and improving unit economics.</p>
              <p className="text-primary font-semibold text-sm">95 problems identified. 85 solved. One platform.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 border-l-secondary shadow-sm">
              <Icon name="rocket_launch" size={36} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">A comprehensive B2B2C ecosystem — 6 products, 11 departments, 14 AI sub-agents, and 69 features solving India&apos;s entire EV value chain.</p>
              <p className="text-secondary font-semibold text-sm">The intelligence layer for India&apos;s automobile industry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Our <span className="gradient-text">Values</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((v, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -4 }} className={`bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${v.color} shadow-sm hover:shadow-md transition-all group`}>
                <Icon name={v.icon} size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors font-display">{v.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Why We <span className="gradient-text">Built This</span></h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: 'The Problem We Saw', icon: 'search', text: 'India\'s EV ecosystem is fragmented. Operators juggle 95+ compliance requirements, manage disconnected systems, and struggle to find trained technicians. 48 regulatory problems, 27 operational issues, 20 workforce challenges — all solved manually.' },
              { title: 'What Inspired Us', icon: 'lightbulb', text: 'Traditional tools couldn\'t solve this. It requires deep understanding of India\'s unique regulatory landscape, operational workflows, and industry dynamics. We needed an AI system trained specifically on Indian automobile regulations.' },
              { title: 'How We Built It', icon: 'settings', text: 'Go4Garage is powered by a proprietary Automobile LLM — an AI model trained on Indian regulations, workflows, and industry nuances. It automates compliance (89.5% reduction), accelerates operations (3x faster), and reduces costs (95% savings).' },
              { title: 'Our Commitment', icon: 'flag', text: 'We\'re not building tools — we\'re building intelligence. Committed to becoming the market leader in AI-powered automobile intelligence within 3 years. Every decision driven by one goal: powering India\'s automobile future.' },
            ].map((card, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ x: 4 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 border-l-primary/30 shadow-sm group">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={card.icon} size={24} className="text-primary" />
                  <h3 className="text-lg font-bold text-primary font-display">{card.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Our <span className="gradient-text">Journey</span></h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-on flex-shrink-0 font-display">{item.year}</div>
                  {idx < timeline.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />}
                </div>
                <div className="bg-surface-bright p-5 rounded-xl flex-1 mb-2 border border-outline-variant/30 shadow-sm">
                  <h3 className="font-bold text-sm mb-1 font-display">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Meet the <span className="gradient-text">Team</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${member.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={member.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1 font-display">{member.role}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.expertise}</p>
                <div className="space-y-2 text-left">
                  {member.details.map((d, i) => (
                    <p key={i} className="text-xs text-on-surface-variant flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 bg-gradient-to-r from-primary-container/10 via-surface to-secondary-container/10 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '89.5%', label: 'Compliance Automation', icon: 'verified' },
              { value: '3x', label: 'Faster Operations', icon: 'speed' },
              { value: '95%', label: 'Cost Reduction', icon: 'savings' },
              { value: '100%', label: 'India-Focused', icon: 'public' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <Icon name={stat.icon} size={28} className="text-primary mb-2" />
                <div className="text-4xl font-black gradient-text mb-1 font-display">{stat.value}</div>
                <div className="text-sm text-on-surface-variant">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Join Us in Building <span className="gradient-text">India&apos;s Automobile Future</span></h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Whether you&apos;re looking to transform your operations or partner with us, let&apos;s talk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow">Get in Touch</motion.button></Link>
              <Link href="/platform"><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-2xl font-semibold text-lg border border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low transition-colors">Explore Platform</motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
