'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { saveInvestorLead } from '@/lib/firestore';


const thesis = [
  {
    icon: 'rocket_launch',
    title: '$50B+ TAM',
    subtitle: 'India\'s EV Market Opportunity',
    desc: 'India\'s automobile ecosystem will exceed $50B by 2030, driven by EV adoption at 40% CAGR (Source: NITI Aayog EV Mission 2030, India Energy Storage Alliance). The market is fragmented, inefficient, and ripe for AI disruption.',
    color: 'from-primary to-primary-container',
    points: [
      '2.5M+ charging points by 2030 (Source: Bureau of Energy Efficiency)',
      'Fastest-growing auto market globally',
      '40% CAGR in EV adoption (Source: CEEW, Bloomberg NEF India EV Outlook)',
    ],
  },
  {
    icon: 'shield',
    title: 'Unique Positioning',
    subtitle: 'No Integrated Platform Covers the Full EV Value Chain',
    desc: 'No single platform addresses the complete EV value chain across regulatory, operational, commercial, and workforce domains in India. We are first-movers in this integrated layer.',
    color: 'from-secondary to-secondary-container',
    points: ['Proprietary Automobile LLM', 'End-to-end value chain coverage', 'India-specific deep advantage'],
  },
  {
    icon: 'monitoring',
    title: 'Proven Unit Economics',
    subtitle: '$500K+ ARR, 35% MRR Growth',
    desc: 'Enterprise customers see significant cost reduction and measurable operational improvement. Rapid ROI for customers with payback driven by automation savings. High gross margin SaaS model.',
    color: 'from-tertiary to-[#00a34a]',
    points: [
      '$500K+ annual recurring revenue',
      'High gross margin SaaS model',
      'Rapid ROI for customers (based on cost savings from automation)',
    ],
  },
  {
    icon: 'gavel',
    title: 'Regulatory Tailwind',
    subtitle: 'Government Pushing EV Hard',
    desc: 'FAME-III, PM E-DRIVE, state subsidies, and new CPO regulations create a multi-year compounding runway. Compliance requirements are only increasing.',
    color: 'from-primary to-secondary',
    points: ['10-year regulatory runway', 'Mandatory compliance creating demand', 'Government-backed EV mission'],
  },
];

const tractionMetrics = [
  { label: 'Enterprise Customers', display: '15+', icon: 'group', color: 'text-primary' },
  { label: 'Annual Recurring Revenue', display: '$500K+', icon: 'payments', color: 'text-primary' },
  { label: 'MRR Growth', display: '35%', icon: 'trending_up', color: 'text-tertiary' },
  { label: 'Retention Rate', display: '98%', icon: 'verified', color: 'text-tertiary' },
  { label: 'NPS Score', display: '85+', icon: 'star', color: 'text-secondary' },
  { label: 'Products Live', display: '6', icon: 'apps', color: 'text-secondary' },
];

const growthTimeline = [
  {
    year: '2024',
    title: 'Foundation',
    items: [
      'Core platform architecture built ✓',
      '7 products developed ✓',
      'First pilot deployments ✓',
      'Team assembled ✓',
    ],
    icon: 'foundation',
    active: false,
    completed: true,
  },
  {
    year: '2025',
    title: 'Growth',
    items: [
      'Enterprise customer onboarding',
      'AI systems development (KAILASH-AI, Eka-AI)',
      'Pan-India regulatory coverage',
      'Revenue generation started',
    ],
    icon: 'trending_up',
    active: false,
    completed: true,
  },
  {
    year: '2026',
    title: 'Scale',
    items: [
      'Pan-India expansion',
      'Series A fundraise',
      'Platform API launch',
      'OEM and insurance vertical entry',
    ],
    icon: 'rocket_launch',
    active: true,
    completed: false,
  },
  {
    year: '2027',
    title: 'Market Leadership',
    items: [
      'Category-defining platform',
      '100+ enterprise customers target',
      'International expansion exploration',
    ],
    icon: 'public',
    active: false,
    completed: false,
  },
];

const team = [
  { name: 'Vivek Raj', role: 'CEO & Founder', tag: '10+ years in automotive tech', icon: 'person', bg: 'from-primary to-primary-container', bio: '10+ years in automotive technology. Founded Go4Garage to solve India\'s EV infrastructure challenges at scale.', creds: 'Serial entrepreneur' },
  { name: 'Engineering Team', role: 'Co-Founder & CTO', tag: 'AI researcher, 8+ years', icon: 'psychology', bg: 'from-secondary to-secondary-container', bio: 'Machine learning and LLM systems expertise. Leading the development of India\'s first Automobile LLM.', creds: 'Engineering background • AI researcher' },
  { name: 'Advisory Circle', role: 'Advisory Board', tag: 'EV & automotive industry veterans', icon: 'groups', bg: 'from-tertiary to-tertiary-container', bio: 'Industry advisors from leading EV companies and Indian automotive firms. Deep government and regulatory relationships.', creds: '50+ years combined experience' },
];


const whyNow = [
  { icon: 'policy', title: 'FAME-III Funding', desc: 'FAME-III: ₹10,000 Cr allocation for EV ecosystem development, creating massive demand for intelligent platforms.', source: 'Source: MHI, 2024' },
  { icon: 'account_balance', title: 'EV Sales Surge', desc: 'EV Sales: 1.67M units in FY2025, 40% YoY growth. The ecosystem infrastructure must scale 10x in 3 years — we\'re the picks and shovels.', source: 'Source: SMEV' },
  { icon: 'engineering', title: '100K+ Technician Shortage', desc: 'India faces a critical shortage of 100,000+ trained EV technicians needed by 2027. Our AI fills this gap with intelligent diagnostics and guided repairs.', source: 'Source: NSDC' },
  { icon: 'ev_station', title: 'Charging Infrastructure Gap', desc: '2.5M charging points needed by 2030. Massive infrastructure buildout requires intelligent CPO management and compliance platforms.', source: 'Source: NITI Aayog' },
];

const competitionAdvantages = [
  { competitor: 'ChargeZone / Statiq', scope: 'CPO charging management only', g4g: 'Full EV ecosystem — CPO + workshop + compliance + AI' },
  { competitor: 'Generic garage tools', scope: 'Single-domain workshop ops', g4g: 'Cross-domain: regulatory, operational, commercial, workforce' },
  { competitor: 'Analytics platforms', scope: 'Data reporting & dashboards', g4g: 'Actionable AI intelligence with Automobile LLM' },
  { competitor: 'Compliance tools', scope: 'Point-in-time documentation', g4g: 'Real-time regulatory AI across 33 states — full pan-India coverage' },
];

export default function InvestorsClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[180px]" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 15, repeat: Infinity, delay: 3 }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/8 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary font-display">Series A — Actively Raising</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Invest in India&apos;s Automobile{' '}
              <span className="gradient-text">Intelligence Future</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
              India&apos;s first AI-powered automobile intelligence platform. 95 problems identified, 85 solvable, 76 features built. Powering the $50B+ EV transformation.
            </p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 bg-primary text-primary-on rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm">
                  Schedule Investor Meeting
                </motion.button>
              </Link>
              <motion.a href="mailto:go4garageofficial@gmail.com?subject=Investor%20Deck%20Request" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary-container/10 transition-all text-sm">
                Request Pitch Deck
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INVESTMENT THESIS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Why Invest" title="Investment" highlight="Thesis" subtitle="Four compelling reasons Go4Garage is the defining investment in India's automobile intelligence space." />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {thesis.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }} className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={t.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-display">{t.title}</h3>
                    <p className="text-sm text-primary font-medium">{t.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-2">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                      <Icon name="check_circle" size={16} className="text-tertiary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARKET OPPORTUNITY ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Market Size" title="Market" highlight="Opportunity" subtitle="A massive, fast-growing market with clear paths to capture significant share." />
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
                {[
                  { label: 'TAM', value: '$50B', desc: 'Total Addressable Market', pct: 100, color: 'bg-primary' },
                  { label: 'SAM', value: '$8B', desc: 'Serviceable Addressable Market', pct: 55, color: 'bg-secondary' },
                  { label: 'SOM', value: '$800M', desc: 'Serviceable Obtainable Market', pct: 28, color: 'bg-tertiary' },
                ].map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }} className="flex flex-col items-center text-center">
                    <div className={`w-${m.pct === 100 ? '[180px] h-[180px]' : m.pct === 55 ? '[140px] h-[140px]' : '[100px] h-[100px]'} rounded-full ${m.color}/10 border-2 border-dashed ${m.color === 'bg-primary' ? 'border-primary/30' : m.color === 'bg-secondary' ? 'border-secondary/30' : 'border-tertiary/30'} flex items-center justify-center`}
                      style={{ width: m.pct === 100 ? 180 : m.pct === 55 ? 140 : 100, height: m.pct === 100 ? 180 : m.pct === 55 ? 140 : 100 }}
                    >
                      <div>
                        <div className={`text-2xl md:text-3xl font-black font-display ${m.color === 'bg-primary' ? 'text-primary' : m.color === 'bg-secondary' ? 'text-secondary' : 'text-tertiary'}`}>{m.value}</div>
                        <div className="text-xs font-bold text-on-surface-variant">{m.label}</div>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-3 max-w-[160px]">{m.desc}</p>
                    {i < 2 && (
                      <div className="hidden md:block">
                        <Icon name="arrow_forward" size={24} className="text-on-surface-variant/30 absolute" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: 'CAGR', value: '40%', icon: 'speed' },
                  { label: 'By Year', value: '2030', icon: 'calendar_today' },
                  { label: 'Our Penetration', value: '<1%', icon: 'flag' },
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1 }} className="text-center p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <Icon name={s.icon} size={20} className="text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold font-display">{s.value}</div>
                    <div className="text-xs text-on-surface-variant">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRACTION METRICS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="The Numbers" title="Traction" highlight="Metrics" subtitle="Real numbers from real customers. Early traction that proves product-market fit." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {tractionMetrics.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -4, scale: 1.02 }} className="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-container/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={m.icon} size={24} className={m.color} />
                </div>
                <div className={`text-3xl md:text-4xl font-black font-display ${m.color} mb-1`}>
                  {m.display}
                </div>
                <p className="text-sm text-on-surface-variant font-medium">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROWTH TRAJECTORY ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Roadmap" title="Growth" highlight="Trajectory" subtitle="A clear, executable path from platform launch to category leadership." />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {growthTimeline.map((phase, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className="relative">
                  {idx < growthTimeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] right-[-24px] h-0.5 bg-gradient-to-r from-primary/30 to-primary/5" />
                  )}
                  <motion.div whileHover={{ y: -4 }} className={`bg-surface-bright p-6 rounded-2xl border ${phase.active ? 'border-primary/40 shadow-md ring-1 ring-primary/10' : phase.completed ? 'border-tertiary/30 shadow-sm' : 'border-outline-variant/30 shadow-sm'} transition-all group h-full`}>
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${phase.active ? 'bg-primary text-white' : phase.completed ? 'bg-tertiary/15 text-tertiary' : 'bg-primary-container/15 text-primary'} group-hover:scale-110 transition-transform`}>
                      <Icon name={phase.icon} size={28} />
                    </div>
                    <div className="text-center mb-3">
                      <div className={`text-2xl font-black font-display ${phase.active ? 'text-primary' : phase.completed ? 'text-tertiary' : 'text-on-surface'}`}>{phase.year}</div>
                      <div className="text-sm font-semibold text-on-surface-variant">{phase.title}</div>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                          <Icon name={phase.active || phase.completed ? 'check_circle' : 'radio_button_unchecked'} size={14} className={`flex-shrink-0 mt-0.5 ${phase.active || phase.completed ? 'text-tertiary' : 'text-on-surface-variant/40'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {phase.active && (
                      <div className="mt-3 text-center">
                        <span className="text-[10px] font-bold text-primary bg-primary-container/15 px-2.5 py-1 rounded-full uppercase tracking-wider">Current</span>
                      </div>
                    )}
                    {phase.completed && !phase.active && (
                      <div className="mt-3 text-center">
                        <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">Completed</span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPETITION ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Competitive Landscape" title="First-Mover in Integrated" highlight="EV Intelligence" subtitle="Point solutions exist. No one has integrated the full stack — until now." />
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-sm mb-8">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Point solutions exist — ChargeZone and Statiq for CPO management, garage management tools for workshops, generic analytics platforms. No single platform integrates regulatory compliance, workshop operations, consumer experience, AI diagnostics, and workforce training into one intelligent system. That&apos;s Go4Garage&apos;s unique position.
              </p>
            </motion.div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider px-4 pb-1 border-b border-outline-variant/20">
                <span>Competitor</span>
                <span>Fragmented Scope</span>
                <span className="text-primary">Go4Garage Advantage</span>
              </div>
              {competitionAdvantages.map((row, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="grid grid-cols-3 gap-3 items-center bg-surface-bright p-4 rounded-xl border border-outline-variant/20 hover:border-primary/20 transition-all">
                  <span className="text-sm font-semibold text-on-surface">{row.competitor}</span>
                  <span className="text-xs text-on-surface-variant">{row.scope}</span>
                  <div className="flex items-center gap-2">
                    <Icon name="check_circle" size={14} className="text-tertiary flex-shrink-0" />
                    <span className="text-xs text-on-surface-variant">{row.g4g}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Leadership" title="Meet the" highlight="Team" subtitle="Experienced operators and technologists building India's automobile intelligence layer." />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }} className="bg-surface-bright p-7 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group">
                <h3 className="text-lg font-bold mb-1 font-display">{m.role}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{m.tag}</p>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{m.bio}</p>
                <div className="pt-3 border-t border-outline-variant/20">
                  <p className="text-[11px] text-on-surface-variant/60">{m.creds}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY NOW ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Timing" title="Why" highlight="Now?" subtitle="Multiple macro tailwinds are converging to create the perfect window for Go4Garage." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyNow.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="flex gap-4 bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary-container/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5 group-hover:text-primary transition-colors font-display">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTOR RELATIONS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading badge="Connect" title="Investor" highlight="Relations" />
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-bold text-lg text-primary mb-4 font-display">Investment Inquiries</h3>
              <p className="text-sm text-on-surface-variant mb-5">We&apos;re actively raising our Series A to accelerate product development, market expansion, and team growth across India.</p>
              <div className="space-y-3">
                <a href="mailto:go4garageofficial@gmail.com" className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
                  <Icon name="mail" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">go4garageofficial@gmail.com</div>
                    <div className="text-xs text-on-surface-variant">Investor relations email</div>
                  </div>
                </a>
                <a href="mailto:connect@go4garage.in" className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
                  <Icon name="mail" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">connect@go4garage.in</div>
                    <div className="text-xs text-on-surface-variant">Business inquiries</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-bold text-lg text-secondary mb-1 font-display">Request Investor Materials</h3>
              <p className="text-sm text-on-surface-variant mb-5">Submit your details and we&apos;ll send our investor materials within 24 hours.</p>
              <form className="space-y-3" onSubmit={e => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get('name') || '');
                const org = String(fd.get('org') || '');
                const email = String(fd.get('email') || '');
                const stage = String(fd.get('stage') || '');
                const msg = String(fd.get('message') || '');
                // Save to Firestore (non-blocking)
                saveInvestorLead({
                  name,
                  organization: org || undefined,
                  email,
                  investmentStage: stage || undefined,
                  message: msg || undefined,
                  source: 'investor_form',
                });
                (e.currentTarget as HTMLFormElement).reset();
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full text-sm px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50"
                />
                <input
                  type="text"
                  name="org"
                  placeholder="Fund / Organization"
                  className="w-full text-sm px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full text-sm px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50"
                />
                <select name="stage" className="w-full text-sm px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary/50 transition-colors text-on-surface-variant">
                  <option value="">Investment Stage</option>
                  <option value="angel">Angel</option>
                  <option value="pre-seed">Pre-Seed</option>
                  <option value="seed">Seed</option>
                  <option value="series-a">Series A</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  rows={2}
                  className="w-full text-sm px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-on-surface-variant/50"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 bg-secondary text-white rounded-xl font-semibold text-sm hover:shadow-md transition-all"
                >
                  Request Materials
                </motion.button>
                <p className="text-[11px] text-center text-on-surface-variant/50">Materials subject to NDA</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-surface-bright to-secondary/5 p-10 md:p-14 rounded-3xl border border-primary/20 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon name="handshake" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Ready to Shape the <span className="gradient-text">Future?</span>
            </h2>
            <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
              Join us in building India&apos;s automobile intelligence layer. Schedule a meeting with our founders to explore the opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 bg-primary text-primary-on rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                  Schedule Investor Meeting
                </motion.button>
              </Link>
              <motion.a href="mailto:go4garageofficial@gmail.com?subject=NDA%20Request%20-%20Investor%20Materials" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary-container/10 transition-all">
                Request NDA & Documents
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── LEGAL DISCLAIMER ─── */}
      <section className="py-10 bg-surface-container-low border-t border-outline-variant/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-surface-bright p-6 rounded-xl border border-outline-variant/20">
            <h4 className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wider font-display">Legal Disclaimer</h4>
            <p className="text-[11px] text-on-surface-variant/60 leading-relaxed">
              This page is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or any other product or service. Any securities offered will only be through definitive transaction documents, and any investment decisions should be made based solely on information contained in such documents. Past performance is not indicative of future results. Forward-looking statements are based on current expectations and involve risks and uncertainties. Actual results may differ materially from those expressed or implied. Go4Garage makes no representation or warranty, express or implied, regarding the accuracy or completeness of the information contained herein. Please consult your legal and financial advisors before making any investment decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
