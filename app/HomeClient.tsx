'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ParticleBackground } from '@/components/ParticleBackground';
import { TypewriterText } from '@/components/TypewriterText';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsCard } from '@/components/StatsCard';
import { Testimonials } from '@/components/Testimonials';
import { TrustBar } from '@/components/TrustBar';
import { EVJourneyVisual } from '@/components/EVJourneyVisual';
import { SocialProofTicker } from '@/components/SocialProofTicker';
import { LivingComplianceMap } from '@/components/LivingComplianceMap';
import { trackCTAClick } from '@/lib/analytics';
import { productExternalUrls } from '@/lib/productLinks';
import { useRCString, useRCBoolean } from '@/lib/useRemoteConfig';

/* ─── Data ─── */

const products = [
  { name: 'URGAA (ऊर्जा)', tagline: 'Regulatory & Grid Intelligence', problems: 27, icon: 'bolt', color: 'bg-primary-container/15 border-primary/20', cf: 'primary', href: productExternalUrls.urgaa },
  { name: 'GST (Go4Garage Service Tools)', tagline: 'Workshop & Commerce Engine', problems: 17, icon: 'build', color: 'bg-secondary-container/15 border-secondary/20', cf: 'secondary', href: productExternalUrls.gstsaas },
  { name: 'Ignition App', tagline: 'Consumer Experience App', problems: 11, icon: 'smartphone', color: 'bg-tertiary-container/15 border-tertiary/20', cf: 'tertiary', href: productExternalUrls.ignition },
  { name: 'EV VIDYA ARJUN', tagline: 'Workforce Skilling Platform', problems: 9, icon: 'school', color: 'bg-secondary-container/15 border-secondary/20', cf: 'secondary', href: productExternalUrls.arjun },
  { name: 'KAILASH-AI', tagline: 'Document AI & Predictive Analytics', problems: 18, icon: 'analytics', color: 'bg-primary-container/15 border-primary/20', cf: 'primary', href: productExternalUrls['kailash-ai'] },
  { name: 'Eka-AI', tagline: 'Agent Orchestration & Q&A', problems: 3, icon: 'smart_toy', color: 'bg-tertiary-container/15 border-tertiary/20', cf: 'tertiary', href: productExternalUrls['eka-ai'] },
];

type ColorFamily = 'primary' | 'secondary' | 'tertiary';
const cfColor: Record<ColorFamily, { icon: string; iconBg: string; iconBgHover: string; bar: string; badge: string; badgeText: string; text: string }> = {
  primary:   { icon: 'text-primary',   iconBg: 'bg-primary-container/20',   iconBgHover: 'group-hover:bg-primary-container/30',   bar: 'bg-primary/70',   badge: 'bg-primary-container/15 border-primary/20',   badgeText: 'text-primary',   text: 'group-hover:text-primary'   },
  secondary: { icon: 'text-secondary', iconBg: 'bg-secondary-container/20', iconBgHover: 'group-hover:bg-secondary-container/30', bar: 'bg-secondary/70', badge: 'bg-secondary-container/15 border-secondary/20', badgeText: 'text-secondary', text: 'group-hover:text-secondary' },
  tertiary:  { icon: 'text-tertiary',  iconBg: 'bg-tertiary-container/20',  iconBgHover: 'group-hover:bg-tertiary-container/30',  bar: 'bg-tertiary/70',  badge: 'bg-tertiary-container/15 border-tertiary/20',  badgeText: 'text-tertiary',  text: 'group-hover:text-tertiary'  },
};

const problemLayers = [
  { layer: 'L1', title: 'Battery & Supply Chain', problems: 15, icon: 'battery_full', color: 'border-l-primary' },
  { layer: 'L2', title: 'Consumer Adoption Barriers', problems: 12, icon: 'people', color: 'border-l-secondary' },
  { layer: 'L3', title: 'Financing & Economics', problems: 8, icon: 'account_balance_wallet', color: 'border-l-tertiary' },
  { layer: 'L4', title: 'After-Sales & Service', problems: 18, icon: 'build_circle', color: 'border-l-primary' },
  { layer: 'L5', title: 'Skilled Workforce', problems: 8, icon: 'school', color: 'border-l-secondary' },
  { layer: 'L6', title: 'Battery Lifecycle', problems: 7, icon: 'recycling', color: 'border-l-tertiary' },
  { layer: 'L7', title: 'Grid & Energy Integration', problems: 12, icon: 'electrical_services', color: 'border-l-primary' },
  { layer: 'L8', title: 'Regulatory & Infrastructure', problems: 15, icon: 'gavel', color: 'border-l-secondary' },
];

const personas = [
  { icon: 'ev_station', label: 'CPO Operators', challenge: 'Navigating 33-state compliance hurdles while scaling charging infrastructure', href: '/solutions' },
  { icon: 'build', label: 'Workshop Owners', challenge: 'Managing job cards, parts inventory, and GST filings with fragmented tools', href: '/solutions' },
  { icon: 'local_shipping', label: 'Fleet Owners', challenge: 'Optimising range, charging schedules, and energy costs across mixed EV fleets', href: '/solutions' },
  { icon: 'electric_car', label: 'EV Consumers', challenge: 'Finding certified service, tracking warranty, and understanding total cost of ownership', href: '/solutions' },
];

const howItWorks = [
  { step: '01', title: 'Assessment', desc: 'We analyze your current operations, compliance gaps, and workflow bottlenecks across the EV value chain.', icon: 'search' },
  { step: '02', title: 'Integration', desc: 'Platform setup with your existing systems: no disruption, no downtime, fully guided onboarding.', icon: 'integration_instructions' },
  { step: '03', title: 'Automation', desc: 'AI takes over compliance filings, document processing, workforce scheduling, and operational workflows.', icon: 'auto_fix_high' },
  { step: '04', title: 'Scale', desc: 'Grow with real-time intelligence, predictive analytics, and AI agents working 24/7 across all 33 states.', icon: 'trending_up' },
];

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
} as const;

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

export default function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroCTAPrimary = useRCString('hero_cta_primary_text');
  const heroCTASecondary = useRCString('hero_cta_secondary_text');
  const showInvestorCTA = useRCBoolean('show_investor_cta');

  useEffect(() => {
    const timeout = setTimeout(() => setHeroSlide(1), 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO: Slide 0: EV Journey Video | Slide 1: Platform Message
          + 5-YEAR ANNIVERSARY BANNER (same section)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative mt-[6.25rem]">
        {/* ── Slides (full viewport height) ── */}
        <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlide === 0 ? (
            /* ── SLIDE 0: Full-screen EV Journey Video ── */
            <motion.div
              key="slide-0"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <EVJourneyVisual onComplete={() => { setTimeout(() => setHeroSlide(1), 2000); }} />
              <button
                onClick={() => setHeroSlide(1)}
                className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-sm font-medium hover:bg-black/60 hover:text-white transition-all border border-white/20"
              >
                Skip <span className="material-symbols-outlined text-base" style={{fontSize:'16px'}}>arrow_forward</span>
              </button>
            </motion.div>
          ) : (
            /* ── SLIDE 1: Headline + CTAs ── */
            <motion.div
              key="slide-1"
              className="absolute inset-0 flex items-center justify-center bg-[#fbfaf6]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ParticleBackground className="absolute inset-0 z-0 opacity-35" />

              {/* Gradient overlays */}
              <div className="absolute inset-0 z-[1]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(251,250,246,0.92)_48%,rgba(255,253,247,0.96))]" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className="absolute top-1/4 left-1/4 hidden sm:block w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
                />
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
                  transition={{ duration: 14, repeat: Infinity }}
                  className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-secondary-container/8 rounded-full blur-[150px]"
                />
              </div>

              {/* Dot grid */}
              <div className="absolute inset-0 z-[1] opacity-[0.018]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              <div className="container mx-auto px-6 relative z-10">
                <div className="mx-auto grid max-w-[1440px] items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] xl:gap-10">
                <motion.div initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left max-w-5xl mx-auto lg:mx-0">

                  {/* Animated badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary/20 bg-primary-container/10 backdrop-blur-sm"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    <span className="text-sm font-medium text-primary font-display">India&apos;s First AI-Powered Automobile Intelligence</span>
                  </motion.div>

                  {/* Headline */}
                  <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-on-surface mb-6 leading-[1.05] tracking-tight font-display">
                    The AI Platform{' '}
                    <br className="hidden md:block" />
                    Powering{' '}
                    <span className="gradient-text">India&apos;s</span>
                    <br className="hidden md:block" />
                    <span className="gradient-text">Automobile Future</span>
                  </h1>

                  {/* Typewriter */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-6">
                    <TypewriterText
                      texts={['Regulatory Intelligence', 'Operational Excellence', 'Workforce Development', 'Grid Optimization', 'Consumer Experience', 'Predictive Analytics']}
                      className="text-xl md:text-2xl font-semibold gradient-text font-display"
                    />
                  </motion.div>

                  {/* Sub-copy */}
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    95 problems identified across India&apos;s EV ecosystem. 85 addressable. 6 products. Zero friction.
                  </motion.p>

                  <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82 }} className="mb-8 grid grid-cols-3 gap-2 rounded-2xl border border-primary/15 bg-surface-bright/70 p-2 backdrop-blur-sm sm:gap-3 sm:p-3 lg:max-w-xl">
                    {[
                      ['33', 'states scanned'],
                      ['27', 'URGAA workflows'],
                      ['89.5%', 'automation layer'],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-xl border border-outline-variant/30 bg-surface/65 px-3 py-2 text-center lg:text-left">
                        <p className="font-display text-lg font-black gradient-text sm:text-2xl">{value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTAs */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <Link href="/contact" onClick={() => trackCTAClick('hero_schedule_demo', '/contact')}>
                      <motion.button
                        whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -12px rgba(144,77,0,0.35)' }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                      >
                        {heroCTAPrimary}
                      </motion.button>
                    </Link>
                    <Link href="/platform" onClick={() => trackCTAClick('hero_explore_platform', '/platform')}>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright/80 backdrop-blur-sm text-on-surface hover:border-primary/40 hover:bg-surface-container-low transition-all"
                      >
                        {heroCTASecondary}
                      </motion.button>
                    </Link>
                  </motion.div>

                  {/* Social proof ticker */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex justify-center lg:justify-start"
                  >
                    <SocialProofTicker />
                  </motion.div>
                </motion.div>

                <div className="hidden md:block">
                  <LivingComplianceMap />
                </div>
                </div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-outline-variant flex items-start justify-center p-1.5">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUST BAR
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <TrustBar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THE PROBLEM: 8 Layers
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-14 md:py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="The Challenge"
            title="8 Critical Layers of India's EV Challenge"
            highlight="8 Critical Layers"
            subtitle="95 problems mapped across the full EV value chain. Our platform addresses 85 of them."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          >
            {problemLayers.map((layer, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 border-l-4 ${layer.color} shadow-sm hover:shadow-lg transition-all group`}
              >
                <div className="flex items-center justify-end mb-4">
                  <span className="text-xs font-bold text-on-surface-variant/60 font-display">{layer.layer}</span>
                </div>
                <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors font-display leading-tight">{layer.title}</h3>
                <div className="text-2xl sm:text-3xl font-black gradient-text font-display">
                  <AnimatedCounter target={layer.problems} />
                  <span className="text-base font-semibold text-on-surface-variant ml-1">problems</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container/15 border border-primary/20">
              <span className="text-sm font-semibold text-primary"><span className="text-lg font-bold">85</span> Solvable by Go4Garage</span>
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container border border-outline-variant/30">
              <span className="text-sm text-on-surface-variant"><span className="text-lg font-bold">10</span> Macro / Systemic</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS BANNER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 relative overflow-hidden border-y border-outline-variant/15">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/8 via-secondary-container/5 to-tertiary-container/8" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard icon="verified" value={89.5} suffix="%" label="Compliance Automation" description="Regulatory filings handled by AI" />
            <StatsCard icon="speed" value={3} suffix="x" label="Faster Operations" description="Compared to manual workflows" />
            <StatsCard icon="savings" value={95} suffix="%" label="Cost Reduction" description="In compliance processing costs" />
            <StatsCard icon="public" value={100} suffix="%" label="India-Focused" description="Built for Indian regulations" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PRODUCT ECOSYSTEM
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 md:py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Platform Suite"
            title="6 Products, One Intelligence Layer"
            highlight="One Intelligence Layer"
            subtitle="Each product solves a distinct slice of the EV value chain. Together, they cover 85 problems end to end."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={fadeUp} custom={idx}>
                <a href={product.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className={`relative p-6 rounded-2xl border ${product.color} transition-all cursor-pointer group h-full bg-surface-bright shadow-sm hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${cfColor[product.cf as ColorFamily].iconBg} ${cfColor[product.cf as ColorFamily].iconBgHover} flex items-center justify-center transition-colors`}>
                        <Icon name={product.icon} size={24} className={cfColor[product.cf as ColorFamily].icon} />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        product.problems > 0
                          ? `${cfColor[product.cf as ColorFamily].badge} ${cfColor[product.cf as ColorFamily].badgeText}`
                          : 'bg-tertiary-container/15 text-tertiary border-tertiary/15'
                      }`}>
                        {product.problems > 0 ? `${product.problems} problems` : 'Orchestrator'}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${cfColor[product.cf as ColorFamily].text} transition-colors font-display`}>{product.name}</h3>
                    <p className="text-sm text-on-surface-variant">{product.tagline}</p>

                    {/* Progress bar showing relative problem coverage */}
                    <div className="mt-4 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max((product.problems / 48) * 100, 8)}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 1 }}
                        className={`h-full ${cfColor[product.cf as ColorFamily].bar} rounded-full`}
                      />
                    </div>

                    <div className={`mt-3 flex items-center gap-1 text-xs ${cfColor[product.cf as ColorFamily].badgeText} opacity-0 group-hover:opacity-100 transition-opacity font-medium`}>
                      <span>Visit product site</span>
                      <Icon name="arrow_forward" size={14} />
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Link href="/products">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 bg-primary text-primary-on rounded-2xl font-semibold shadow-md hover:shadow-lg transition-shadow">
                Explore All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 md:py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-0 hidden md:block w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[200px] -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading
            badge="How It Works"
            title="From Chaos to Intelligence in 4 Steps"
            highlight="4 Steps"
            subtitle="A structured approach to transforming your EV operations with AI-first intelligence."
          />

          <div className="max-w-4xl mx-auto mt-16">
            {howItWorks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative flex gap-6 mb-8 last:mb-0"
              >
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 rounded-2xl bg-primary-container/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name={item.icon} size={20} className="text-on-surface-variant" />
                  </motion.div>
                  {idx < howItWorks.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.4, duration: 0.5 }}
                      className="w-0.5 bg-gradient-to-b from-primary/30 to-primary/5 flex-1 mt-2"
                    />
                  )}
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex-1 bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all mb-2 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary/50 font-display">STEP {item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-display">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHO WE SERVE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 md:py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Solutions"
            title="Built for Every Stakeholder"
            highlight="Every Stakeholder"
            subtitle="Purpose-built solutions addressing the real challenges of every player in India's EV ecosystem."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          >
            {personas.map((persona, idx) => (
              <motion.div key={idx} variants={fadeUp} custom={idx}>
                <Link href={persona.href}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col gap-3 p-6 rounded-2xl border border-outline-variant/30 bg-surface-bright hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/25 transition-colors">
                      <Icon name={persona.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors font-display mb-1">{persona.label}</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{persona.challenge}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary font-semibold">
                      <span>See solutions</span>
                      <Icon name="arrow_forward" size={13} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          AI DIFFERENTIATOR: Why Go4Garage
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 md:py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 hidden md:block w-[400px] h-[400px] bg-primary-container/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">Why Go4Garage</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  The <span className="gradient-text">Intelligence</span> Behind India&apos;s Auto Industry
                </h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  We&apos;re not building tools; we&apos;re building intelligence. Our proprietary Automobile LLM
                  understands every regulation, workflow, and edge case in India&apos;s EV ecosystem.
                </p>

                <div className="space-y-4">
                  {[
                    'First AI platform trained on Indian automobile regulations',
                    'Automated compliance filings free your team to focus on growth, not paperwork',
                    'Real-time updates across all 33 states',
                    'End-to-end CPO operations + service + workforce',
                  ].map((item, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + idx * 0.1 }} className="flex items-start gap-3">
                      <span className="text-on-surface-variant flex-shrink-0 mt-0.5">•</span>
                      <span className="text-on-surface-variant text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* AI metrics card */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative">
                <div className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-lg">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 font-display">Platform Intelligence</div>

                  <div className="space-y-6">
                    {[
                      { label: 'Regulatory Coverage', value: 95, color: 'bg-primary' },
                      { label: 'Automation Rate', value: 89, color: 'bg-secondary' },
                      { label: 'Accuracy Score', value: 97, color: 'bg-tertiary' },
                    ].map((bar, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-on-surface-variant">{bar.label}</span>
                          <span className="text-on-surface font-semibold">{bar.value}%</span>
                        </div>
                        <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar.value}%` }} viewport={{ once: true }} transition={{ delay: 0.5 + idx * 0.2, duration: 1.2 }} className={`h-full ${bar.color} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-outline-variant/20">
                    {[
                      { val: 14, label: 'AI Agents', color: 'text-primary' },
                      { val: 76, label: 'Features', color: 'text-secondary' },
                      { val: 33, label: 'States', color: 'text-tertiary' },
                    ].map((m, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold font-display ${m.color}`}>
                          <AnimatedCounter target={m.val} />
                        </div>
                        <div className="text-xs text-on-surface-variant">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 px-4 py-2 bg-primary text-primary-on rounded-xl text-xs font-bold shadow-lg font-display">
                  Proprietary LLM
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 md:py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Early Access Feedback"
            title="What Our Users"
            highlight="Are Saying"
            subtitle="Businesses across India's EV ecosystem share their experience with Go4Garage."
          />
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-surface to-secondary-container/10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Ready to <span className="gradient-text">Transform</span> Your Operations?
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              Join the platform that&apos;s powering India&apos;s automobile future with AI-first intelligence across 33 states.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -12px rgba(144,77,0,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-primary text-primary-on rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              {showInvestorCTA && (
              <Link href="/investors">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-outline-variant bg-surface-bright text-on-surface hover:border-primary/40 hover:bg-surface-container-low transition-all"
                >
                  For Investors
                </motion.button>
              </Link>
              )}
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-xs text-on-surface-variant"
            >
              Enterprise-grade security • Setup in under 48 hours • Dedicated success team
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
