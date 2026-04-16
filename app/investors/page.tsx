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
    const step = target / (1800 / 16);
    const timer = setInterval(() => { start += step; if (start >= target) { setCount(target); clearInterval(timer); } else { setCount(Math.floor(start)); } }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const thesis = [
  { num: '1', title: 'Massive Market Opportunity', desc: 'India will have 2.5M+ charging points by 2030, creating a $50B+ opportunity. The market is fragmented and inefficient — ripe for AI disruption.', points: ['TAM: $50B+ by 2030', 'SAM: $5B+ solvable with tech', 'Growing at 40% CAGR'] },
  { num: '2', title: 'No Real Competition', desc: 'Every incumbent is built for the old world. None combine regulatory expertise, operational efficiency, and AI intelligence. We\'re the first.', points: ['Zero direct competitors', 'Proprietary Automobile LLM', 'India-specific advantage'] },
  { num: '3', title: 'Proven Unit Economics', desc: 'Early customers see 95% cost reduction and 3x operational improvement. Payback period: 2-3 months. NPS: 70+.', points: ['$500K+ ARR per customer', '90%+ gross margins', '<3 month payback'] },
  { num: '4', title: 'Regulatory Tailwind', desc: 'Government mandates like EV2030, FAME II, and new CPO regulations create a 10-year runway. Compliance requirements only increasing.', points: ['Government backing', 'Regulatory momentum', '10-year growth runway'] },
];

const traction = [
  { label: 'Customers Onboarded', value: '15+', icon: '👥' },
  { label: 'Average Deal Size', value: '$500K+', icon: '💰' },
  { label: 'Monthly Revenue Growth', value: '35%', icon: '📈' },
  { label: 'Customer Retention', value: '100%', icon: '✅' },
  { label: 'NPS Score', value: '70+', icon: '⭐' },
  { label: 'Market Penetration', value: '<1%', icon: '🎯' },
];

const team = [
  { role: 'Founder & CEO', tag: '10+ years in automobile tech', avatar: '👨‍💼', bg: 'from-accent-cyan to-accent-blue', bio: 'Former Head of Operations at India\'s largest EV charging network. Deep regulatory & operational expertise.', creds: 'B.Tech, IIT Delhi • Serial entrepreneur' },
  { role: 'Co-Founder & CTO', tag: 'AI researcher, 8+ years', avatar: '🧠', bg: 'from-accent-blue to-green-400', bio: 'PhD in Machine Learning. Built LLM systems at major tech companies. Leading Automobile LLM development.', creds: 'PhD, IIT Bombay • Published researcher' },
  { role: 'Advisory Board', tag: 'Industry veterans', avatar: '🎯', bg: 'from-green-400 to-purple-400', bio: 'Former executives from Ather, Hero MotoCorp, and leading Indian automotive firms.', creds: '50+ years combined • Government relationships' },
];

export default function InvestorsPage() {
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
              <span className="text-sm font-medium text-accent-cyan">Series A — Actively Raising</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Investment <span className="gradient-text">Opportunity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Powering India&apos;s trillion-dollar EV transformation with AI-first intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INVESTMENT THESIS ─── */}
      <section className="py-24 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">Why Invest</span>
            <h2 className="text-4xl md:text-5xl font-bold">Investment <span className="gradient-text">Thesis</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {thesis.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl group"
              >
                <div className="text-4xl font-black gradient-text mb-3">{t.num}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{t.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-1.5">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-accent-cyan">
                      <span className="w-1 h-1 rounded-full bg-accent-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARKET + TRACTION ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-widest mb-4 block">The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold">Market Opportunity <span className="gradient-text">& Traction</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Market */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-accent-cyan">Market Size by 2030</h3>
              <div className="space-y-6">
                {[
                  { label: 'Total Addressable (TAM)', value: '$50B+', pct: 100 },
                  { label: 'Serviceable (SAM)', value: '$5B+', pct: 33 },
                  { label: 'Target Year 5 (SOM)', value: '$500M+', pct: 8 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{bar.label}</span>
                      <span className="font-bold text-white">{bar.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar.pct}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2, duration: 1.2 }} className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs text-gray-400"><strong className="text-white">Growth Driver:</strong> EV adoption at 40% CAGR, regulatory requirements multiplying, operator need for efficiency increasing</p>
              </div>
            </motion.div>

            {/* Traction */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-accent-blue">Our Traction to Date</h3>
              <div className="space-y-3">
                {traction.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-accent-cyan/20 transition-all"
                  >
                    <span className="text-gray-300 flex items-center gap-3 text-sm">
                      <span className="text-xl">{m.icon}</span>
                      {m.label}
                    </span>
                    <span className="font-bold text-accent-cyan text-sm">{m.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            {team.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-2xl text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${m.bg} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>{m.avatar}</div>
                <h3 className="text-lg font-bold mb-1">{m.role}</h3>
                <p className="text-accent-cyan text-sm font-medium mb-3">{m.tag}</p>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{m.bio}</p>
                <p className="text-[11px] text-gray-500">{m.creds}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTOR RELATIONS ─── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Investor <span className="gradient-text">Relations</span></h2>
          </motion.div>

          <div className="space-y-5">
            {/* Contact */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-effect p-6 rounded-2xl">
              <h3 className="font-bold text-accent-cyan mb-3">Investment Inquiries</h3>
              <p className="text-sm text-gray-400 mb-4">We&apos;re actively seeking Series A funding to accelerate product development, market expansion, and team growth.</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:investors@go4garage.com" className="text-accent-cyan hover:text-accent-blue transition-colors">investors@go4garage.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-accent-cyan hover:text-accent-blue transition-colors">+91 9876 543 210</a></p>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-effect p-6 rounded-2xl">
              <h3 className="font-bold text-accent-blue mb-3">Available Documents</h3>
              <p className="text-sm text-gray-400 mb-4">Request our investor materials:</p>
              <div className="space-y-2">
                {[
                  { icon: '📊', label: 'Pitch Deck' },
                  { icon: '📈', label: 'Financial Projections' },
                  { icon: '📋', label: 'Executive Summary' },
                ].map((doc, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4, borderColor: 'rgba(0,229,255,0.3)' }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer transition-all"
                  >
                    <span className="text-xl">{doc.icon}</span>
                    <span className="text-sm text-gray-300">{doc.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-effect p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Discuss Investment?</h3>
              <p className="text-sm text-gray-400 mb-6">Schedule a call with our founder to learn more about the opportunity and vision.</p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,229,255,0.3)' }} whileTap={{ scale: 0.98 }} className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-xl font-semibold shadow-lg shadow-accent-cyan/10">
                  Schedule Meeting
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="py-8 bg-primary border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-[10px] text-gray-600 text-center leading-relaxed">
            This page contains forward-looking statements. Actual results may differ materially. This is not an offer to sell securities.
            Any investment will be through legally binding documents. Please consult legal and financial advisors.
          </p>
        </div>
      </section>
    </div>
  );
}
