'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsCard } from '@/components/StatsCard';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';

/* ─── Data ─── */

const heroNumbers = [
  { value: 95, label: 'Problems Mapped', icon: 'search' },
  { value: 85, label: 'Solvable Today', icon: 'check_circle' },
  { value: 76, label: 'Features Built', icon: 'widgets' },
  { value: 6, label: 'Products Launched', icon: 'inventory_2' },
];

const coreValues = [
  { icon: 'smart_toy', title: 'AI-First Innovation', desc: 'Every solution starts with AI — our proprietary Automobile LLM powers every feature, every decision.', color: 'border-l-primary' },
  { icon: 'public', title: 'India-Focused Design', desc: 'Built ground-up for Indian regulations, operational realities, and workforce dynamics.', color: 'border-l-secondary' },
  { icon: 'hub', title: 'Ecosystem Thinking', desc: 'A unified platform that connects every stakeholder — not disconnected point solutions.', color: 'border-l-tertiary' },
  { icon: 'speed', title: 'Speed to Value', desc: 'From assessment to live in 4 weeks. Immediate, measurable ROI from day one.', color: 'border-l-primary' },
];

const milestones = [
  {
    year: '2023',
    title: 'Research & Discovery',
    color: 'primary',
    icon: 'search',
    bullets: [
      '95 EV industry problems mapped across 8 domains',
      '15+ stakeholder interviews conducted across India',
      'Market opportunity of ₹50B+ identified',
    ],
  },
  {
    year: '2024',
    title: 'Build & Pilot',
    color: 'secondary',
    icon: 'build',
    bullets: [
      'Platform development started',
      '6 products designed and built — URGAA, GSTSAAS, Ignition, ARJUN, KAILASH-AI, Eka-AI',
      'First pilot deployments with early customers',
      'KAILASH-AI intelligence engine development',
    ],
  },
  {
    year: '2025',
    title: 'Grow & Validate',
    color: 'tertiary',
    icon: 'trending_up',
    bullets: [
      'Enterprise customer onboarding',
      'Eka-AI multi-agent system development',
      'Pan-India compliance coverage expanded to 33 states',
      'AI agents trained on Indian automobile regulations',
    ],
  },
  {
    year: '2026',
    title: 'Scale',
    color: 'primary',
    icon: 'rocket_launch',
    bullets: [
      'Pan-India rollout underway',
      'Series A fundraise in progress',
      'Platform serving multiple enterprise clients',
      'Expanding to OEM and insurance verticals',
    ],
  },
];

const team = [
  {
    name: 'Vivek Raj',
    role: 'Founder & CEO',
    expertise: 'Automobile tech & EV ecosystem',
    icon: 'person',
    bg: 'from-primary to-primary-container',
    details: [
      'Deep expertise in automobile regulations and EV operations across India',
      'Built Go4Garage after mapping 95 pain points across the EV ecosystem',
      'Passionate about transforming India\'s automobile intelligence landscape',
    ],
  },
  {
    name: 'Engineering Team',
    role: 'Technology Leadership',
    expertise: 'AI / ML & Platform Engineering',
    icon: 'psychology',
    bg: 'from-secondary to-secondary-container',
    details: [
      'Building proprietary KAILASH-AI Automobile LLM from the ground up',
      'Expertise in ML, NLP, and large-scale distributed systems',
      'Developing Eka-AI multi-agent orchestration engine',
    ],
  },
  {
    name: 'Advisory Circle',
    role: 'Advisory Board',
    expertise: 'Industry & regulatory veterans',
    icon: 'groups',
    bg: 'from-tertiary to-tertiary-container',
    details: [
      'Deep domain expertise in automobile regulations and compliance',
      'Extensive experience across India\'s EV and automotive value chain',
      'Strategic guidance on policy, partnerships, and market expansion',
    ],
  },
];

/* ─── Stagger animation variants ─── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1 — SPLIT HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[130px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Story */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/20 bg-primary-container/10"
              >
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span className="text-sm font-medium text-primary font-display">Our Story</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight font-display">
                Born from the Trenches of India&apos;s{' '}
                <span className="gradient-text">EV Revolution</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                We didn&apos;t start with a pitch deck — we started with pain.
                After years inside India&apos;s fragmented automobile ecosystem, we saw 95 problems
                that no one was solving holistically. So we built Go4Garage: the AI-powered intelligence
                backbone that connects, automates, and transforms the entire value chain.
              </p>
            </motion.div>

            {/* Right — Key Number Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4"
            >
              {heroNumbers.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-surface-bright/80 backdrop-blur-sm p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group"
                >
                  <Icon name={item.icon} size={24} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-1 font-display">
                    <AnimatedCounter target={item.value} />
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2 — MISSION & VISION
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Purpose" title="Driving" highlight="Change" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center mb-5">
                <Icon name="flag" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Accelerate EV adoption and charging/service scale in India by reducing compliance friction,
                improving uptime, and improving unit economics.
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/20">
                <Icon name="auto_awesome" size={16} className="text-primary" />
                <p className="text-primary font-semibold text-sm">95 problems identified. 85 solved. One platform.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-5">
                <Icon name="visibility" size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                To be the intelligence backbone of India&apos;s $50B+ automobile transformation — powering
                every operator, technician, and stakeholder with AI-driven insights and automation.
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/20">
                <Icon name="auto_awesome" size={16} className="text-secondary" />
                <p className="text-secondary font-semibold text-sm">The intelligence layer for India&apos;s automobile industry.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3 — CORE VALUES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="What Drives Us" title="Our Core" highlight="Values" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
          >
            {coreValues.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${v.color} shadow-sm hover:shadow-lg transition-all group cursor-default`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center mb-4 group-hover:bg-primary-container/25 transition-colors">
                  <Icon name={v.icon} size={24} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors font-display">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4 — JOURNEY TIMELINE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="The Journey" title="Our" highlight="Milestones" />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line on left */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-primary/60 via-secondary/40 to-tertiary/30" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-10"
            >
              {milestones.map((m) => {
                const isSecondary = m.color === 'secondary';
                const isTertiary = m.color === 'tertiary';
                const dotClass = isTertiary
                  ? 'border-tertiary text-tertiary bg-tertiary-container/30'
                  : isSecondary
                  ? 'border-secondary text-secondary bg-secondary-container/30'
                  : 'border-primary text-primary bg-primary-container/30';
                const badgeClass = isTertiary
                  ? 'bg-tertiary/15 text-tertiary border border-tertiary/30'
                  : isSecondary
                  ? 'bg-secondary/15 text-secondary border border-secondary/30'
                  : 'bg-primary/15 text-primary border border-primary/30';
                const bulletClass = isTertiary ? 'bg-tertiary' : isSecondary ? 'bg-secondary' : 'bg-primary';
                return (
                  <motion.div key={m.year} variants={fadeUp} className="relative flex gap-6 pl-14 items-start">
                    {/* Dot marker */}
                    <div
                      className={`absolute left-0 top-1 w-10 h-10 rounded-full border-2 ${dotClass} flex items-center justify-center shadow-md z-10 flex-shrink-0`}
                    >
                      <Icon name={m.icon} size={18} />
                    </div>
                    {/* Content card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="flex-1 bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-sm font-black px-4 py-1.5 rounded-full font-display ${badgeClass}`}>
                          {m.year}
                        </span>
                        <h3 className="text-xl font-bold font-display">{m.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {m.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2.5 leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full ${bulletClass} mt-1.5 flex-shrink-0`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5 — TEAM
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Leadership" title="Meet the" highlight="Team" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.role}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-surface-bright p-7 rounded-2xl text-center border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className={`w-18 h-18 w-[72px] h-[72px] mx-auto mb-5 bg-gradient-to-br ${member.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all`}>
                  <Icon name={member.icon} size={32} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider mb-1">{member.name}</p>
                <h3 className="text-xl font-bold mb-1 font-display">{member.role}</h3>
                <p className="text-primary text-sm font-semibold mb-5">{member.expertise}</p>
                <div className="space-y-2.5 text-left">
                  {member.details.map((d, i) => (
                    <p key={i} className="text-sm text-on-surface-variant flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center text-on-surface-variant text-sm max-w-2xl mx-auto"
          >
            We&apos;re a passionate team of automobile tech and AI specialists.{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">Connect with us</Link>
            {' '}to learn more about the team, or{' '}
            <Link href="/careers" className="text-secondary font-semibold hover:underline">explore open positions</Link>.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6 — NUMBERS THAT MATTER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Impact" title="Numbers That" highlight="Matter" />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <StatsCard
              icon="search"
              value={95}
              label="Problems Mapped"
              description="EV industry problems identified"
            />
            <StatsCard
              icon="check_circle"
              value={85}
              label="Solvable Today"
              description="Problems the platform solves"
            />
            <StatsCard
              icon="widgets"
              value={76}
              label="Features Built"
              description="Across all products"
            />
            <StatsCard
              icon="inventory_2"
              value={6}
              label="Products Launched"
              description="Live in the ecosystem"
            />
            <StatsCard
              icon="public"
              value={33}
              label="States Covered"
              description="Pan-India regulatory coverage"
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 7 — CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/12 via-surface to-secondary-container/12" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/8 rounded-full blur-[180px]"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Join Us in Building{' '}
              <span className="gradient-text">India&apos;s Automobile Future</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re an operator looking to transform operations, an investor seeking
              the next big opportunity, or a partner who shares our vision — let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow font-display"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright text-on-surface hover:bg-surface-container-low hover:border-primary/30 transition-all font-display"
                >
                  Explore Platform
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
