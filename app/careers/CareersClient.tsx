'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

const benefits = [
  {
    icon: 'target',
    title: 'Mission-Driven Work',
    desc: 'Solving 95 real EV industry problems that matter: from regulatory compliance to workshop digitization.',
    color: 'border-l-primary',
  },
  {
    icon: 'smart_toy',
    title: 'Advanced AI',
    desc: 'Work with LLMs, multi-agent systems, and production AI powering KAILASH-AI and Eka-AI.',
    color: 'border-l-secondary',
  },
  {
    icon: 'public',
    title: 'Pan-India Impact',
    desc: 'Platform deployed across all 33 Indian states: real scale, real users, real infrastructure.',
    color: 'border-l-tertiary',
  },
  {
    icon: 'rocket_launch',
    title: 'Early Stage Upside',
    desc: 'Join at Series A stage with meaningful equity. Be part of the founding team shaping India\'s EV future.',
    color: 'border-l-primary-container',
  },
];

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  icon: string;
  accent: string;
  description: string;
}

const openPositions: Job[] = [
  {
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    icon: 'code',
    accent: 'primary',
    description: 'Build the products shaping India\'s EV industry',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI/ML',
    location: 'India | Bharat',
    type: 'Full-time',
    icon: 'model_training',
    accent: 'secondary',
    description: 'Work on KAILASH-AI and Eka-AI systems',
  },
  {
    title: 'Sales Executive (B2B SaaS)',
    department: 'Sales',
    location: 'Pan-India',
    type: 'Full-time',
    icon: 'handshake',
    accent: 'tertiary',
    description: 'Help EV businesses transform with our platform',
  },
  {
    title: 'EV Domain Expert',
    department: 'Consulting',
    location: 'Remote',
    type: 'Full-time',
    icon: 'engineering',
    accent: 'primary',
    description: 'Bring your regulatory or workshop expertise to product development',
  },
];

const culturePillars = [
  {
    icon: 'lightbulb',
    title: 'Innovation',
    desc: 'We question assumptions, experiment boldly, and build what hasn\'t been built before. Every engineer ships to production.',
    gradient: 'from-primary to-primary-container',
  },
  {
    icon: 'shield',
    title: 'Ownership',
    desc: 'You own what you build, end to end. No silos. Make decisions, take responsibility, and see impact immediately.',
    gradient: 'from-secondary to-secondary-container',
  },
  {
    icon: 'public',
    title: 'Impact',
    desc: 'Every line of code, every design decision, every partnership moves us closer to transforming India\'s EV ecosystem.',
    gradient: 'from-tertiary to-tertiary-container',
  },
];

const accentMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  primary: { bg: 'border-l-primary', text: 'text-primary', iconBg: 'bg-primary-container/15' },
  secondary: { bg: 'border-l-secondary', text: 'text-secondary', iconBg: 'bg-secondary-container/15' },
  tertiary: { bg: 'border-l-tertiary', text: 'text-tertiary', iconBg: 'bg-tertiary-container/15' },
};

export default function CareersClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7b41b3 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-secondary/20 bg-secondary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-sm font-medium text-secondary font-display">We&apos;re Hiring</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Build the Future of India&apos;s{' '}
              <span className="gradient-text">Automobile Industry</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Join a team of engineers, designers, and builders on a mission to transform India&apos;s
              automobile ecosystem with AI-powered intelligence.
            </p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <a
                href="#positions"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-on rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <Icon name="work" size={20} />
                View Open Positions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY JOIN US ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Why Go4Garage"
            title="Why Join"
            highlight="Us?"
            subtitle="We're building something that hasn't existed before, and we need extraordinary people to do it."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${b.color} shadow-sm hover:shadow-md transition-all group`}
              >
                <Icon name={b.icon} size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors font-display">
                  {b.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ─── */}
      <section id="positions" className="py-24 bg-surface scroll-mt-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Open Roles"
            title="Open"
            highlight="Positions"
            subtitle="Find your place on the team that's building India's automobile intelligence platform."
          />
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {openPositions.map((job, idx) => {
              const style = accentMap[job.accent] ?? accentMap.primary;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${style.bg} shadow-sm hover:shadow-md transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon name={job.icon} size={24} className={style.text} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1 font-display group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Icon name="business" size={14} /> {job.department}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="inline-flex items-center gap-1">
                          <Icon name="location_on" size={14} /> {job.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span>{job.type}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <a
                        href={`mailto:careers@go4garage.in?subject=Application: ${job.title}`}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-on rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                      >
                        Apply Now <Icon name="send" size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CULTURE ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Our Culture"
            title="What We"
            highlight="Stand For"
            subtitle="Three pillars that define how we work, build, and grow together."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {culturePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${pillar.gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5`}>
                    <Icon name={pillar.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{pillar.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-on mb-4 font-display">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-secondary-on/80 mb-8 max-w-xl mx-auto">
              We&apos;re always looking for exceptional people. Send us your resume and tell us how you
              want to make an impact.
            </p>
            <a
              href="mailto:careers@go4garage.in?subject=General Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-secondary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="mail" size={20} />
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
