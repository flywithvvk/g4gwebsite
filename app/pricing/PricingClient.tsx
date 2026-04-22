'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

interface Tier {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  recommended?: boolean;
  gradient: string;
  accent: string;
  price?: string;
  priceNote?: string;
  billingAlt?: string;
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    tagline: 'For individual workshops & small CPOs',
    description: 'Get started with essential tools to digitize your operations and stay compliant.',
    features: [
      'Up to 5 charging stations or 1 workshop',
      'GSTSAAS or URGAA (ऊर्जा) (choose one)',
      'Basic analytics & reporting',
      'Email support',
      'Standard onboarding',
    ],
    icon: 'rocket_launch',
    gradient: 'from-primary/5 to-primary-container/5',
    accent: 'primary',
    price: '₹4,999/month',
    priceNote: 'per location, billed annually',
    billingAlt: 'Or ₹5,999/month billed monthly',
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    description: 'Full platform access with advanced AI features for scaling operations efficiently.',
    features: [
      'Up to 50 stations or 10 workshops',
      'Full platform access (all products)',
      'Advanced AI features (KAILASH-AI)',
      'Eka-AI conversational assistant',
      'Priority support + dedicated onboarding',
      'Advanced analytics & custom reports',
    ],
    icon: 'star',
    recommended: true,
    gradient: 'from-primary to-primary-container',
    accent: 'primary',
  },
  {
    name: 'Enterprise',
    tagline: 'For large CPOs, OEMs & Government',
    description: 'Unlimited scale with white-label options, custom AI models, and dedicated support.',
    features: [
      'Unlimited stations & workshops',
      'All products + white-label options',
      'Custom AI models & integrations',
      'Dedicated account manager',
      'SLA guarantees & 24/7 support',
      'Custom training & implementation',
    ],
    icon: 'corporate_fare',
    gradient: 'from-secondary/5 to-secondary-container/5',
    accent: 'secondary',
  },
];

interface ComparisonFeature {
  name: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    name: 'URGAA (ऊर्जा) — Regulatory Intelligence',
    starter: '1 state, basic compliance tracking',
    professional: 'Up to 5 states, full automation, DISCOM wizard',
    enterprise: 'All 33 states, custom rules, API access, white-label',
  },
  {
    name: 'GSTSAAS — Workshop Engine',
    starter: '1 location, basic job cards, GST invoicing',
    professional: 'Up to 5 locations, inventory, customer management',
    enterprise: 'Unlimited locations, multi-branch reporting, custom workflows',
  },
  {
    name: 'Ignition — Fleet Portal',
    starter: 'Basic vehicle health monitoring',
    professional: 'Full diagnostics, service booking, cost calculator',
    enterprise: 'Fleet management, white-label, OEM integration',
  },
  {
    name: 'EV VIDYA ARJUN — Training',
    starter: false,
    professional: 'Access to standard curriculum',
    enterprise: 'Custom curriculum, certification, bulk enrollment',
  },
  {
    name: 'KAILASH-AI — Advanced Analytics',
    starter: 'Basic analytics',
    professional: 'Predictive analytics, anomaly detection',
    enterprise: 'Custom models, API access, dedicated instance',
  },
  {
    name: 'Eka-AI — Conversational AI',
    starter: false,
    professional: 'Conversational AI, limited queries',
    enterprise: 'Full multi-agent orchestration, custom training, API',
  },
  { name: 'White-Label Options', starter: false, professional: false, enterprise: true },
  { name: 'API Access', starter: false, professional: true, enterprise: true },
  {
    name: 'Support',
    starter: 'Email, 48hr response',
    professional: 'Priority email + chat, 24hr response',
    enterprise: 'Dedicated account manager, 4hr SLA, phone support',
  },
  { name: 'SLA Guarantees', starter: false, professional: false, enterprise: true },
  { name: 'Onboarding', starter: 'Standard', professional: 'Dedicated', enterprise: 'Custom' },
];

const pricingFaqs = [
  {
    q: 'Can I switch between plans?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a 14-day free trial on the Starter plan. No credit card required. Enterprise trials available upon request.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit/debit cards, UPI, net banking, and NEFT/RTGS for enterprise customers. GST invoices provided.',
  },
  {
    q: 'Can I use only one product?',
    a: 'Absolutely. Start with any individual product — most customers begin with GSTSAAS or URGAA and expand over time.',
  },
  {
    q: "What's the minimum contract length?",
    a: 'Monthly plans available with no minimum commitment. Annual plans offer 2 months free (16% savings).',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes — annual billing saves approximately 16% compared to monthly billing (2 months free).',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees for Starter or Professional plans. Enterprise plans may include an onboarding fee depending on customization needs.',
  },
];

function renderCellValue(value: string | boolean) {
  if (typeof value === 'string') {
    return <span className="text-sm font-medium text-on-surface">{value}</span>;
  }
  return value ? (
    <Icon name="check_circle" size={22} className="text-tertiary mx-auto" />
  ) : (
    <Icon name="remove" size={22} className="text-outline-variant mx-auto" />
  );
}

export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Pricing</span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Plans that grow with your business. No hidden fees, no surprises — just the tools you
              need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative bg-surface-bright rounded-3xl border shadow-sm hover:shadow-lg transition-all flex flex-col ${
                  tier.recommended
                    ? 'border-primary border-2 shadow-md'
                    : 'border-outline-variant/30'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-on rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                )}

                <div className={`p-8 pb-6 ${tier.recommended ? 'pt-10' : ''}`}>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      tier.recommended
                        ? 'bg-gradient-to-br from-primary to-primary-container'
                        : tier.accent === 'secondary'
                          ? 'bg-secondary-container/15'
                          : 'bg-primary-container/15'
                    }`}
                  >
                    <Icon
                      name={tier.icon}
                      size={28}
                      className={tier.recommended ? 'text-white' : tier.accent === 'secondary' ? 'text-secondary' : 'text-primary'}
                    />
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-1">{tier.name}</h3>
                  <p className="text-sm text-on-surface-variant mb-4">{tier.tagline}</p>
                  <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                    {tier.description}
                  </p>

                  {tier.price ? (
                    <div className="mb-5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold font-display text-on-surface">
                          {tier.price}
                        </span>
                      </div>
                      {tier.priceNote && (
                        <p className="text-xs text-on-surface-variant mt-0.5">{tier.priceNote}</p>
                      )}
                      {tier.billingAlt && (
                        <p className="text-xs text-on-surface-variant/70 mt-1">{tier.billingAlt}</p>
                      )}
                      <Link
                        href="/contact"
                        className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md bg-surface-container text-on-surface hover:bg-surface-container-high"
                      >
                        <Icon name="rocket_launch" size={18} />
                        Get Started
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md ${
                        tier.recommended
                          ? 'bg-primary text-primary-on hover:bg-primary/90'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      <Icon name="mail" size={18} />
                      Contact Sales
                    </Link>
                  )}
                </div>

                <div className="px-8 pb-8 pt-2 flex-1">
                  <div className="h-px bg-outline-variant/20 mb-6" />
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4 font-display">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <Icon name="check_circle" size={18} className="text-tertiary shrink-0 mt-0.5" />
                        <span className="text-on-surface-variant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE COMPARISON ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Compare Plans"
            title="Feature"
            highlight="Comparison"
            subtitle="A detailed look at what each plan includes."
          />
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <motion.table
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full text-left border-collapse min-w-[520px]"
            >
              <thead>
                <tr className="border-b-2 border-outline-variant/30">
                  <th className="py-4 pr-6 text-sm font-semibold font-display text-on-surface-variant w-2/5">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold font-display text-center w-1/5">
                    Starter
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold font-display text-center w-1/5 text-primary">
                    Professional
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold font-display text-center w-1/5">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-outline-variant/15 hover:bg-surface-container-lowest/50 transition-colors"
                  >
                    <td className="py-3.5 pr-6 text-sm text-on-surface">{f.name}</td>
                    <td className="py-3.5 px-4 text-center">{renderCellValue(f.starter)}</td>
                    <td className="py-3.5 px-4 text-center bg-primary/[0.02]">
                      {renderCellValue(f.professional)}
                    </td>
                    <td className="py-3.5 px-4 text-center">{renderCellValue(f.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* ─── PRICING FAQ ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Common Questions"
            title="Pricing"
            highlight="FAQ"
            subtitle="Quick answers to common pricing questions."
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest/50 transition-colors"
                  >
                    <span className="font-semibold text-on-surface pr-4 font-display">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <Icon
                        name="expand_more"
                        size={24}
                        className={`transition-colors ${isOpen ? 'text-primary' : 'text-on-surface-variant'}`}
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-outline-variant/20 mb-4" />
                          <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-on mb-4 font-display">
              Not Sure Which Plan? Let&apos;s Talk
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto">
              Our team will help you find the perfect plan for your business — with a custom quote
              tailored to your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="calendar_month" size={20} />
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
