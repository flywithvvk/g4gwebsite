'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';

interface CaseStudy {
  badge: string;
  title: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  icon: string;
  gradient: string;
  borderColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    badge: 'Regulatory Intelligence',
    title: 'How a Multi-State CPO Achieved 89.5% Compliance Automation',
    challenge:
      'Managing compliance across 12 states manually — different regulations, forms, timelines, and approval bodies. A team of 8 spent 40+ hours/week on paperwork alone.',
    solution:
      'URGAA (ऊर्जा) Regulatory Intelligence Engine automated compliance tracking, form generation, deadline management, and status monitoring across all 12 states simultaneously.',
    results: [
      { label: 'Compliance Automation', value: '89.5%' },
      { label: 'Faster Approvals', value: '70%' },
      { label: 'Annual Savings', value: '₹2Cr' },
    ],
    icon: 'verified',
    gradient: 'from-primary to-primary-container',
    borderColor: 'border-l-primary',
  },
  {
    badge: 'Workshop Digitization',
    title: 'Transforming a 50-Bay Workshop to Digital-First Operations',
    challenge:
      'Paper job cards, manual inventory tracking, billing errors, and zero visibility into operational efficiency. Revenue leakage was estimated at 15-20%.',
    solution:
      'GSTSAAS complete workshop digitization — digital job cards, real-time inventory, automated billing with GST compliance, and operational analytics dashboard.',
    results: [
      { label: 'Throughput Increase', value: '3x' },
      { label: 'Billing Accuracy', value: '95%' },
      { label: 'Revenue Leakage', value: 'Zero' },
    ],
    icon: 'build',
    gradient: 'from-secondary to-secondary-container',
    borderColor: 'border-l-secondary',
  },
  {
    badge: 'Workforce Training',
    title: 'Training 200+ EV Technicians in 6 Months',
    challenge:
      'India faces a 100K+ technician shortage with no standardized EV curriculum. Traditional training takes 3-6 months and lacks industry alignment.',
    solution:
      'EV VIDYA ARJUN certification pipeline with structured modules, hands-on labs, AI-assisted assessments, and industry-aligned certification standards.',
    results: [
      { label: 'Technicians Certified', value: '200+' },
      { label: 'Placement Rate', value: '92%' },
      { label: 'Certification Cycle', value: '4 weeks' },
    ],
    icon: 'school',
    gradient: 'from-tertiary to-tertiary-container',
    borderColor: 'border-l-tertiary',
  },
  {
    badge: 'Fleet Optimization',
    title: 'Fleet Operator Reduces Charging Costs by 40%',
    challenge:
      'Peak-hour charging inflating energy costs, no visibility into Total Cost of Ownership (TCO), and manual scheduling across 50+ vehicles.',
    solution:
      'Ignition Fleet Portal + URGAA (ऊर्जा) Smart Charging — AI-optimized charging schedules based on grid pricing, route planning, and real-time TCO analytics.',
    results: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'TCO Visibility', value: 'Real-time' },
      { label: 'Scheduling', value: 'Optimized' },
    ],
    icon: 'local_shipping',
    gradient: 'from-primary to-secondary',
    borderColor: 'border-l-primary',
  },
];

const keyMetrics = [
  { value: 89.5, suffix: '%', label: 'Compliance Automation' },
  { value: 200, suffix: '+', label: 'Technicians Certified' },
  { value: 40, suffix: '%', label: 'Cost Reduction' },
  { value: 4, suffix: ' weeks', label: 'Avg. Implementation' },
];

export default function CaseStudiesClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-tertiary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-tertiary-container/10 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #006e2f 1px, transparent 1px)',
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-tertiary/20 bg-tertiary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="text-sm font-medium text-tertiary font-display">Case Studies</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Real Results, <span className="gradient-text">Real Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              See how businesses across India&apos;s EV ecosystem are transforming operations with
              Go4Garage&apos;s AI-powered platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── KEY METRICS ─── */}
      <section className="py-12 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {keyMetrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-display text-primary">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-sm text-on-surface-variant mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Success Stories"
            title="Proven"
            highlight="Results"
            subtitle="From compliance automation to workforce training — real stories from real businesses."
          />
          <div className="space-y-10 max-w-5xl mx-auto">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-surface-bright rounded-3xl border border-outline-variant/30 border-l-4 ${cs.borderColor} shadow-sm hover:shadow-lg transition-all overflow-hidden`}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left — Header */}
                  <div className={`bg-gradient-to-br ${cs.gradient} p-8 md:p-10 flex flex-col justify-center`}>
                    <span className="text-white/70 text-xs font-medium uppercase tracking-widest mb-3 font-display">
                      {cs.badge}
                    </span>
                    <Icon name={cs.icon} size={44} className="text-white/90 mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display leading-snug">
                      {cs.title}
                    </h3>
                  </div>

                  {/* Right — Content */}
                  <div className="md:col-span-2 p-8 md:p-10">
                    <div className="space-y-5 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-display flex items-center gap-2">
                          <Icon name="error" size={16} /> Challenge
                        </h4>
                        <p className="text-on-surface-variant leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-tertiary uppercase tracking-wider mb-2 font-display flex items-center gap-2">
                          <Icon name="lightbulb" size={16} /> Solution
                        </h4>
                        <p className="text-on-surface-variant leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
                      {cs.results.map((r, rIdx) => (
                        <div key={rIdx} className="text-center">
                          <div className="text-xl md:text-2xl font-bold font-display text-primary">
                            {r.value}
                          </div>
                          <p className="text-xs text-on-surface-variant mt-1">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-tertiary to-tertiary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tertiary-on mb-4 font-display">
              See How We Can Help Your Business
            </h2>
            <p className="text-tertiary-on/80 mb-8 max-w-xl mx-auto">
              Ready to achieve similar results? Let&apos;s discuss how Go4Garage can transform your
              operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-tertiary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="calendar_month" size={20} />
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
