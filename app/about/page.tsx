'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const values = [
  { icon: '🧠', title: 'AI-First', desc: 'Intelligence over tooling. Every feature is powered by our proprietary Automobile LLM.', color: 'border-cyan-400/30' },
  { icon: '🇮🇳', title: 'India-Focused', desc: 'Built for India\'s unique regulatory, operational, and workforce landscape.', color: 'border-orange-400/30' },
  { icon: '🔗', title: 'Ecosystem Thinking', desc: 'Not point solutions — a complete interconnected platform for the entire value chain.', color: 'border-green-400/30' },
  { icon: '🚀', title: 'Speed to Value', desc: 'From assessment to live in 4 weeks. Immediate ROI with measurable impact.', color: 'border-purple-400/30' },
];

const timeline = [
  { year: '2024', title: 'Founded', desc: 'Go4Garage founded with the vision to unify India\'s fragmented automobile ecosystem.' },
  { year: '2024', title: 'Platform Built', desc: '6 products, 14 AI agents, and 69 features developed. 85 problems mapped and solvable.' },
  { year: '2025', title: 'Market Entry', desc: 'First CPO operators and service centers onboarded. 89.5% compliance automation achieved.' },
  { year: '2026', title: 'Scaling', desc: 'Expanding across 33 states. Workforce training platform live. Series A in progress.' },
];

const team = [
  { role: 'Founder & CEO', expertise: '10+ years in automobile tech', avatar: '👨‍💼', bg: 'from-accent-cyan to-accent-blue', details: ['Former Head of Operations at India\'s largest EV charging network', 'Deep expertise in regulatory compliance and operational efficiency', 'B.Tech, IIT Delhi • Serial entrepreneur'] },
  { role: 'Co-Founder & CTO', expertise: 'AI researcher, 8+ years', avatar: '🧠', bg: 'from-accent-blue to-green-400', details: ['PhD in Machine Learning — built LLM systems at major tech companies', 'Leading development of proprietary Automobile LLM', 'PhD, IIT Bombay • Published researcher'] },
  { role: 'Advisory Board', expertise: 'Industry veterans', avatar: '🎯', bg: 'from-green-400 to-purple-400', details: ['Former executives from Ather, Hero MotoCorp, leading automotive firms', '50+ years combined experience in automotive industry', 'Government relationships • Market expertise'] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">Our Story</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              About <span className="gradient-text">Go4Garage</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Building the intelligent infrastructure that powers India&apos;s automobile revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-effect p-8 rounded-2xl border-l-4 border-l-accent-cyan/50">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Accelerate EV adoption and charging/service scale in India by reducing compliance friction, improving uptime, and improving unit economics.
              </p>
              <p className="text-accent-cyan font-semibold text-sm">95 problems identified. 85 solved. One platform.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-effect p-8 rounded-2xl border-l-4 border-l-accent-blue/50">
              <span className="text-4xl mb-4 block">🚀</span>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                A comprehensive B2B2C ecosystem — 6 products, 11 departments, 14 AI sub-agents, and 69 features solving India&apos;s entire EV value chain.
              </p>
              <p className="text-accent-blue font-semibold text-sm">The Anthropic of India&apos;s automobile industry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold">Our <span className="gradient-text">Values</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-effect p-6 rounded-2xl border-t-2 ${v.color} group`}
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{v.icon}</span>
                <h3 className="font-bold mb-2 group-hover:text-accent-cyan transition-colors">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold">Why We <span className="gradient-text">Built This</span></h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: 'The Problem We Saw', color: 'text-accent-cyan', icon: '🔍', text: 'India\'s EV ecosystem is fragmented. Operators juggle 95+ compliance requirements, manage disconnected systems, and struggle to find trained technicians. 48 regulatory problems, 27 operational issues, 20 workforce challenges — all solved manually.' },
              { title: 'What Inspired Us', color: 'text-accent-blue', icon: '💡', text: 'Traditional tools couldn\'t solve this. It requires deep understanding of India\'s unique regulatory landscape, operational workflows, and industry dynamics. We needed an AI system trained specifically on Indian automobile regulations.' },
              { title: 'How We Built It', color: 'text-accent-cyan', icon: '⚙️', text: 'Go4Garage is powered by a proprietary Automobile LLM — an AI model trained on Indian regulations, workflows, and industry nuances. It automates compliance (89.5% reduction), accelerates operations (3x faster), and reduces costs (95% savings).' },
              { title: 'Our Commitment', color: 'text-accent-blue', icon: '🎯', text: 'We\'re not building tools — we\'re building intelligence. Committed to becoming the market leader in AI-powered automobile intelligence within 3 years. Every decision driven by one goal: powering India\'s automobile future.' },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass-effect p-6 rounded-2xl border-l-2 border-l-accent-cyan/30 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className={`text-lg font-bold ${card.color}`}>{card.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our <span className="gradient-text">Journey</span></h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center text-xs font-bold flex-shrink-0">{item.year}</div>
                  {idx < timeline.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-accent-cyan/50 to-transparent mt-2" />}
                </div>
                <div className="glass-effect p-5 rounded-xl flex-1 mb-2">
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold">Meet the <span className="gradient-text">Team</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${member.bg} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold mb-1">{member.role}</h3>
                <p className="text-accent-cyan text-sm font-medium mb-4">{member.expertise}</p>
                <div className="space-y-2 text-left">
                  {member.details.map((d, i) => (
                    <p key={i} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-r from-accent-cyan/5 via-accent-blue/5 to-accent-cyan/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '89.5%', label: 'Compliance Automation' },
              { value: '3x', label: 'Faster Operations' },
              { value: '95%', label: 'Cost Reduction' },
              { value: '100%', label: 'India-Focused' },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us in Building <span className="gradient-text">India&apos;s Automobile Future</span></h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Whether you&apos;re looking to transform your operations or partner with us, let&apos;s talk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold text-lg shadow-xl shadow-accent-cyan/20">Get in Touch</motion.button></Link>
              <Link href="/platform"><motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 rounded-xl font-semibold text-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">Explore Platform</motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
