'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { trackPricingViewConversion } from '@/lib/gtag';

/* ─── Product chips ──────────────────────────────────────────────────────── */
interface ProductChip {
  name: string;
  icon: string;
  color: string;       // Tailwind bg class
  textColor: string;   // Tailwind text class
}

const PRODUCTS: Record<string, ProductChip> = {
  urgaa:    { name: 'URGAA (ऊर्जा)',    icon: 'electric_bolt',           color: 'bg-[#006e2f]/12', textColor: 'text-[#006e2f]' },
  gstsaas:  { name: 'GST (Go4Garage Service Tools)', icon: 'receipt_long', color: 'bg-[#904d00]/12', textColor: 'text-[#904d00]' },
  ignition: { name: 'Ignition App',     icon: 'garage',                  color: 'bg-[#7b41b3]/12', textColor: 'text-[#7b41b3]' },
  arjun:    { name: 'EV VIDYA ARJUN',   icon: 'school',                  color: 'bg-[#1565C0]/12', textColor: 'text-[#1565C0]' },
  kailash:  { name: 'KAILASH-AI',       icon: 'psychology',              color: 'bg-[#B71C1C]/12', textColor: 'text-[#B71C1C]' },
  ekaai:    { name: 'Eka-AI',           icon: 'smart_toy',               color: 'bg-[#00695C]/12', textColor: 'text-[#00695C]' },
};

/* ─── Tier Data ─────────────────────────────────────────────────────────── */
interface Tier {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  recommended?: boolean;
  accent: 'primary' | 'secondary';
  productKeys: string[];
  productNote?: string;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: 'Free',
    tagline: 'Evaluate before you commit',
    description: 'Explore the Go4Garage platform at zero cost. Limited daily AI queries; no credit card required.',
    icon: 'explore',
    accent: 'primary',
    productKeys: ['gstsaas', 'ekaai'],
    productNote: '2 products, limited usage',
    features: [
      'Up to 5 Eka-AI queries per day',
      'GST invoicing (up to 10 invoices/month)',
      '1 workshop or 1 charging station',
      'Community support (forum + docs)',
      'No credit card required',
    ],
  },
  {
    name: 'Starter',
    tagline: 'Individual workshops & small CPOs',
    description: 'Start with the product that matters most to you: digitize compliance or operations in weeks.',
    icon: 'rocket_launch',
    accent: 'primary',
    productKeys: ['urgaa', 'gstsaas'],
    features: [
      'Up to 5 charging stations or 1 workshop',
      'Basic analytics & reporting dashboard',
      'Email support (48-hour response)',
      'Standard onboarding & training',
      'GST-compliant invoicing',
    ],
  },
  {
    name: 'Professional',
    tagline: 'Growing businesses scaling fast',
    description: 'Full platform access: every product working together to automate and grow your EV business.',
    icon: 'star',
    recommended: true,
    accent: 'primary',
    productKeys: ['urgaa', 'gstsaas', 'ignition', 'kailash', 'ekaai'],
    productNote: 'All 5 core products included',
    features: [
      'Up to 50 stations or 10 workshops',
      'Advanced AI features (KAILASH-AI)',
      'Eka-AI conversational assistant',
      'Priority email + chat support (24hr)',
      'Dedicated onboarding manager',
      'Advanced analytics & custom reports',
      'API access for integrations',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Large CPOs, OEMs & Government',
    description: 'Unlimited scale with white-label options, custom AI models, and a dedicated success team.',
    icon: 'corporate_fare',
    accent: 'secondary',
    productKeys: ['urgaa', 'gstsaas', 'ignition', 'arjun', 'kailash', 'ekaai'],
    productNote: 'All 7 products + white-label options',
    features: [
      'Unlimited stations & workshops',
      'White-label deployment for partners',
      'Custom AI models & integrations',
      'Dedicated account manager',
      '24/7 support with 4-hour SLA',
      'Custom training & implementation',
      'Multi-region data residency options',
    ],
  },
];

/* ─── Comparison Features ────────────────────────────────────────────────── */
interface CompRow {
  feature: string;
  free: string | boolean;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

const comparisonRows: CompRow[] = [
  { feature: 'URGAA: Regulatory Intelligence',    free: false,              starter: '1 state',           professional: 'Up to 5 states',         enterprise: 'All 33 states'       },
  { feature: 'GST (Go4Garage Service Tools): Workshop Engine', free: '10 invoices/mo', starter: '1 location',        professional: 'Up to 5 locations',      enterprise: 'Unlimited locations' },
  { feature: 'Ignition: Fleet Portal',            free: false,              starter: false,               professional: true,                     enterprise: true                  },
  { feature: 'EV VIDYA ARJUN: Training',          free: false,              starter: false,               professional: false,                    enterprise: true                  },
  { feature: 'KAILASH-AI: Analytics',             free: false,              starter: 'Basic',             professional: 'Predictive AI',          enterprise: 'Custom models'       },
  { feature: 'Eka-AI: Conversational AI',         free: '5 queries/day',    starter: false,               professional: 'Limited queries',        enterprise: 'Full orchestration'  },
  { feature: 'White-Label Options',                free: false,              starter: false,               professional: false,                    enterprise: true                  },
  { feature: 'API Access',                         free: false,              starter: false,               professional: true,                     enterprise: true                  },
  { feature: 'SLA Guarantees',                     free: false,              starter: false,               professional: false,                    enterprise: true                  },
  { feature: 'Support',                            free: 'Community',        starter: 'Email 48hr',        professional: 'Chat + Email 24hr',      enterprise: 'Dedicated 4hr SLA'   },
];

/* ─── FAQ ────────────────────────────────────────────────────────────────── */
const pricingFaqs = [
  { q: 'How is pricing determined?',        a: 'Pricing is customised to your scale, number of locations, products selected, and contract term. Contact us for a tailored quote that fits your business.' },
  { q: 'Can I start with a single product?', a: 'Absolutely. Most customers begin with GST (Go4Garage Service Tools) or URGAA and expand over time as they see results. You only pay for what you use.' },
  { q: 'Is there a free tier?',             a: 'Yes: our Free tier gives you 5 Eka-AI queries per day and up to 10 GST invoices per month with no credit card required. It\'s designed to let you evaluate the platform before committing to a paid plan.' },
  { q: 'Is there a paid trial?',             a: 'We also offer a 14-day pilot on the Starter plan at no cost. Enterprise pilots are available on request with dedicated support.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, UPI, net banking, and NEFT/RTGS for enterprise customers. GST-compliant invoices are always provided.' },
  { q: 'Can I upgrade or change plans?',     a: 'Yes: upgrades take effect immediately; downgrades at the next billing cycle. Our team will guide you through the transition at no extra cost.' },
  { q: 'Are there setup or onboarding fees?', a: 'No setup fees for Free, Starter, or Professional plans. Enterprise plans may include an implementation fee depending on customisation scope and deployment size.' },
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function CellValue({ v }: { v: string | boolean }) {
  if (v === false) return <Icon name="remove" size={20} className="text-outline-variant mx-auto" />;
  if (v === true)  return <Icon name="check_circle" size={20} className="text-tertiary mx-auto" />;
  return <span className="text-xs font-medium text-on-surface text-center block">{v}</span>;
}

export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    trackPricingViewConversion();
  }, []);

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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">Flexible Plans</span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Plans Built Around <span className="gradient-text">Your Products</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Start with the product you need most. Scale to the full platform as your EV business grows.
              Custom pricing tailored to your scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto items-stretch">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative bg-surface-bright rounded-3xl border shadow-sm hover:shadow-xl transition-all flex flex-col ${
                  tier.recommended ? 'border-primary border-2 shadow-md' : 'border-outline-variant/30'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-on rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 pb-5 ${tier.recommended ? 'pt-10' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    tier.recommended ? 'bg-gradient-to-br from-primary to-primary-container' : tier.accent === 'secondary' ? 'bg-secondary-container/15' : 'bg-primary-container/15'
                  }`}>
                    <Icon name={tier.icon} size={28} className={tier.recommended ? 'text-white' : tier.accent === 'secondary' ? 'text-secondary' : 'text-primary'} />
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-1">{tier.name}</h3>
                  <p className="text-sm text-on-surface-variant mb-3">{tier.tagline}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{tier.description}</p>

                  {/* Product chips */}
                  <div className="mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-3 font-display">
                      {tier.productNote}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tier.productKeys.map((key) => {
                        const p = PRODUCTS[key];
                        return (
                          <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${p.color} ${p.textColor}`}>
                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{p.icon}</span>
                            {p.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 pb-6">
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md ${
                      tier.recommended
                        ? 'bg-primary text-primary-on hover:bg-primary/90'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/30'
                    }`}
                  >
                    <Icon name="mail_outline" size={18} />
                    Get a Custom Quote
                  </Link>
                </div>

                {/* Features list */}
                <div className="px-8 pb-8 pt-0 flex-1">
                  <div className="h-px bg-outline-variant/20 mb-5" />
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 font-display">What&apos;s included</p>
                  <ul className="space-y-3">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <Icon name="check_circle" size={17} className="text-tertiary shrink-0 mt-0.5" />
                        <span className="text-on-surface-variant">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE COMPARISON: responsive stacked on mobile ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Compare Plans" title="Product" highlight="Coverage" subtitle="See exactly which products and capabilities are included in each plan." />

          <div className="max-w-6xl mx-auto">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-outline-variant/30">
                    <th className="py-4 pr-6 text-sm font-semibold font-display text-on-surface-variant w-[38%]">Feature / Product</th>
                    <th className="py-4 px-3 text-sm font-semibold font-display text-center w-[15%]">Free</th>
                    <th className="py-4 px-3 text-sm font-semibold font-display text-center w-[15%]">Starter</th>
                    <th className="py-4 px-3 text-sm font-semibold font-display text-center text-primary w-[16%]">Professional</th>
                    <th className="py-4 px-3 text-sm font-semibold font-display text-center w-[16%]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-outline-variant/15 hover:bg-surface-container-lowest/50 transition-colors">
                      <td className="py-3.5 pr-6 text-sm font-medium text-on-surface">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center"><CellValue v={row.free} /></td>
                      <td className="py-3.5 px-3 text-center"><CellValue v={row.starter} /></td>
                      <td className="py-3.5 px-3 text-center bg-primary/[0.02]"><CellValue v={row.professional} /></td>
                      <td className="py-3.5 px-3 text-center"><CellValue v={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }}
                  className="bg-surface-bright rounded-2xl border border-outline-variant/20 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-on-surface mb-3">{row.feature}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-center">
                    {[
                      { label: 'Free',         v: row.free },
                      { label: 'Starter',      v: row.starter },
                      { label: 'Professional', v: row.professional },
                      { label: 'Enterprise',   v: row.enterprise },
                    ].map(({ label, v }) => (
                      <div key={label} className="rounded-xl bg-surface-container-low p-2">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide mb-1.5">{label}</p>
                        <CellValue v={v} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVENUE STREAMS ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Partnership Models" title="6 Ways to" highlight="Partner With Us" subtitle="Go4Garage supports multiple commercial models: from SaaS subscriptions to white-label deployments and data partnerships." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { icon: 'subscriptions',    title: 'SaaS Subscription',         desc: 'Monthly or annual plans per product, tenant, and usage band. Free → Starter → Professional → Enterprise.',      color: 'text-primary',   bg: 'bg-primary-container/10' },
              { icon: 'build_circle',     title: 'Implementation & Integration', desc: 'Deployment, onboarding, and custom integration fees for URGAA and GST (Go4Garage Service Tools) enterprise rollouts.',          color: 'text-secondary', bg: 'bg-secondary-container/10' },
              { icon: 'swap_horiz',       title: 'Transaction-Linked Revenue',   desc: 'Per-transaction fees on invoice reconciliation, financing routing, insurance claims, and marketplace orders.', color: 'text-tertiary',  bg: 'bg-tertiary-container/10' },
              { icon: 'auto_awesome',     title: 'Premium Intelligence',         desc: 'Advanced KAILASH-AI and Eka Brain modules: predictive models, custom ML, and deep fleet analytics for Pro/Enterprise.', color: 'text-primary', bg: 'bg-primary-container/10' },
              { icon: 'school',           title: 'Training & Certification',     desc: 'EV VIDYA ARJUN course fees, technician certification programs, and LMS licensing for training centres.',   color: 'text-secondary', bg: 'bg-secondary-container/10' },
              { icon: 'domain',           title: 'White-Label & Enterprise',     desc: 'Fully branded deployments for state agencies, CPO networks, and OEM groups. Dedicated infra + support.',    color: 'text-tertiary',  bg: 'bg-tertiary-container/10' },
            ].map((stream, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-surface-bright rounded-2xl border border-outline-variant/20 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stream.bg}`}>
                  <Icon name={stream.icon} size={24} className={stream.color} />
                </div>
                <h3 className="font-bold text-on-surface mb-2 font-display">{stream.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Common Questions" title="Pricing" highlight="FAQ" subtitle="Quick answers to common questions about plans and pricing." />
          <div className="max-w-3xl mx-auto space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden"
                >
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest/50 transition-colors"
                  >
                    <span className="font-semibold text-on-surface pr-4 font-display">{faq.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
                      <Icon name="expand_more" size={24} className={isOpen ? 'text-primary' : 'text-on-surface-variant'} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-on mb-4 font-display">
              Let&apos;s Build Your Custom Plan
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto">
              Tell us your scale, products, and goals, and we&apos;ll put together a quote tailored exactly to your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all">
              <Icon name="calendar_month" size={20} />
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

