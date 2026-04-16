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

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

const thesis = [
  { num: '1', title: 'Massive Market Opportunity', desc: 'India will have 2.5M+ charging points by 2030, creating a $50B+ opportunity. The market is fragmented and inefficient — ripe for AI disruption.', points: ['TAM: $50B+ by 2030', 'SAM: $5B+ solvable with tech', 'Growing at 40% CAGR'] },
  { num: '2', title: 'No Real Competition', desc: 'Every incumbent is built for the old world. None combine regulatory expertise, operational efficiency, and AI intelligence. We\'re the first.', points: ['Zero direct competitors', 'Proprietary Automobile LLM', 'India-specific advantage'] },
  { num: '3', title: 'Proven Unit Economics', desc: 'Early customers see 95% cost reduction and 3x operational improvement. Payback period: 2-3 months. NPS: 70+.', points: ['$500K+ ARR per customer', '90%+ gross margins', '<3 month payback'] },
  { num: '4', title: 'Regulatory Tailwind', desc: 'Government mandates like EV2030, FAME II, and new CPO regulations create a 10-year runway. Compliance requirements only increasing.', points: ['Government backing', 'Regulatory momentum', '10-year growth runway'] },
];

const traction = [
  { label: 'Customers Onboarded', value: '15+', icon: 'group' },
  { label: 'Average Deal Size', value: '$500K+', icon: 'payments' },
  { label: 'Monthly Revenue Growth', value: '35%', icon: 'trending_up' },
  { label: 'Customer Retention', value: '100%', icon: 'verified' },
  { label: 'NPS Score', value: '70+', icon: 'star' },
  { label: 'Market Penetration', value: '<1%', icon: 'flag' },
];

const team = [
  { role: 'Founder & CEO', tag: '10+ years in automobile tech', icon: 'person', bg: 'from-primary to-primary-container', bio: 'Former Head of Operations at India\'s largest EV charging network. Deep regulatory & operational expertise.', creds: 'B.Tech, IIT Delhi • Serial entrepreneur' },
  { role: 'Co-Founder & CTO', tag: 'AI researcher, 8+ years', icon: 'psychology', bg: 'from-secondary to-secondary-container', bio: 'PhD in Machine Learning. Built LLM systems at major tech companies. Leading Automobile LLM development.', creds: 'PhD, IIT Bombay • Published researcher' },
  { role: 'Advisory Board', tag: 'Industry veterans', icon: 'groups', bg: 'from-tertiary to-tertiary-container', bio: 'Former executives from Ather, Hero MotoCorp, and leading Indian automotive firms.', creds: '50+ years combined • Government relationships' },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Series A — Actively Raising</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">Investment <span className="gradient-text">Opportunity</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">Powering India&apos;s trillion-dollar EV transformation with AI-first intelligence.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── INVESTMENT THESIS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Why Invest</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Investment <span className="gradient-text">Thesis</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {thesis.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className="text-4xl font-black gradient-text mb-3 font-display">{t.num}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">{t.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-1.5">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary">
                      <span className="w-1 h-1 rounded-full bg-primary" />
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
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">The Numbers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Market Opportunity <span className="gradient-text">& Traction</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-primary font-display">Market Size by 2030</h3>
              <div className="space-y-6">
                {[
                  { label: 'Total Addressable (TAM)', value: '$50B+', pct: 100 },
                  { label: 'Serviceable (SAM)', value: '$5B+', pct: 33 },
                  { label: 'Target Year 5 (SOM)', value: '$500M+', pct: 8 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-on-surface-variant">{bar.label}</span>
                      <span className="font-bold text-on-surface">{bar.value}</span>
                    </div>
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar.pct}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2, duration: 1.2 }} className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <p className="text-xs text-on-surface-variant"><strong className="text-on-surface">Growth Driver:</strong> EV adoption at 40% CAGR, regulatory requirements multiplying, operator need for efficiency increasing</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-secondary font-display">Our Traction to Date</h3>
              <div className="space-y-3">
                {traction.map((m, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ x: 4 }} className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/20 transition-all">
                    <span className="text-on-surface-variant flex items-center gap-3 text-sm">
                      <Icon name={m.icon} size={20} className="text-primary" />
                      {m.label}
                    </span>
                    <span className="font-bold text-primary text-sm">{m.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            {team.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-6 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${m.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={m.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1 font-display">{m.role}</h3>
                <p className="text-primary text-sm font-medium mb-3">{m.tag}</p>
                <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">{m.bio}</p>
                <p className="text-[11px] text-on-surface-variant/60">{m.creds}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTOR RELATIONS ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Investor <span className="gradient-text">Relations</span></h2>
          </motion.div>
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-bold text-primary mb-3 font-display">Investment Inquiries</h3>
              <p className="text-sm text-on-surface-variant mb-4">We&apos;re actively seeking Series A funding to accelerate product development, market expansion, and team growth.</p>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p><strong>Email:</strong> <a href="mailto:investors@go4garage.com" className="text-primary hover:underline">investors@go4garage.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-primary hover:underline">+91 9876 543 210</a></p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-bold text-secondary mb-3 font-display">Available Documents</h3>
              <p className="text-sm text-on-surface-variant mb-4">Request our investor materials:</p>
              <div className="space-y-2">
                {[
                  { icon: 'slideshow', label: 'Pitch Deck' },
                  { icon: 'analytics', label: 'Financial Projections' },
                  { icon: 'summarize', label: 'Executive Summary' },
                ].map((doc, i) => (
                  <motion.div key={i} whileHover={{ x: 4, borderColor: 'rgba(144,77,0,0.3)' }} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 cursor-pointer transition-all">
                    <Icon name={doc.icon} size={20} className="text-primary" />
                    <span className="text-sm text-on-surface-variant">{doc.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface-bright p-8 rounded-2xl text-center border border-outline-variant/30 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-display">Ready to Discuss Investment?</h3>
              <p className="text-sm text-on-surface-variant mb-6">Schedule a call with our founder to learn more about the opportunity and vision.</p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 bg-primary text-primary-on rounded-xl font-semibold shadow-md hover:shadow-lg transition-shadow">
                  Schedule Meeting
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="py-8 bg-surface border-t border-outline-variant/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-[10px] text-on-surface-variant/50 text-center leading-relaxed">
            This page contains forward-looking statements. Actual results may differ materially. This is not an offer to sell securities.
            Any investment will be through legally binding documents. Please consult legal and financial advisors.
          </p>
        </div>
      </section>
    </div>
  );
}
