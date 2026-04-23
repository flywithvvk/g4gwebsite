'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

type FAQCategory = 'General' | 'Products' | 'Implementation' | 'Pricing' | 'Technical';

interface FAQItem {
  q: string;
  a: string;
  category: FAQCategory;
}

const faqCategories: FAQCategory[] = ['General', 'Products', 'Implementation', 'Pricing', 'Technical'];

const categoryIcons: Record<FAQCategory, string> = {
  General: 'info',
  Products: 'widgets',
  Implementation: 'engineering',
  Pricing: 'payments',
  Technical: 'code',
};

const faqs: FAQItem[] = [
  // General
  {
    q: 'What is Go4Garage?',
    a: 'Go4Garage is India\'s first AI-powered automobile intelligence platform. We solve 84 problems across the EV ecosystem with 7 products, 12 AI industry branches, and 32+ ML models — covering everything from regulatory compliance and workshop operations to workforce training and fleet management.',
    category: 'General',
  },
  {
    q: 'Who is Go4Garage for?',
    a: 'Go4Garage serves CPO (Charge Point Operator) operators, automobile workshops and service centers, fleet operators, EV technicians seeking certification, government agencies overseeing EV infrastructure, and OEMs looking to streamline their value chain.',
    category: 'General',
  },
  {
    q: 'How is Go4Garage different from other platforms?',
    a: 'Go4Garage is the only platform covering the full EV value chain with a proprietary Automobile LLM. While others offer point solutions, we provide an integrated ecosystem of 7 products that share data and intelligence — delivering 89.5% compliance automation and real operational impact across 33 Indian states.',
    category: 'General',
  },
  // Products
  {
    q: 'What is URGAA (ऊर्जा)?',
    a: 'URGAA (ऊर्जा) is our Regulatory & Grid Intelligence platform. It handles 48 compliance problems across 33 states — automating DISCOM approvals, MNRE subsidies, state EV policy tracking, grid connectivity, and more. It reduces compliance overhead by up to 89.5%.',
    category: 'Products',
  },
  {
    q: 'What is GST (Go4Garage Service Tools)?',
    a: 'GST (Go4Garage Service Tools) is our Workshop & Commerce Engine designed for automobile service operations. It covers digital job cards, spare parts inventory, automated billing with GST compliance, customer management, and operational analytics — transforming paper-based workshops into digital-first operations.',
    category: 'Products',
  },
  {
    q: 'What is EV VIDYA ARJUN?',
    a: 'EV VIDYA ARJUN is our Workforce Skilling platform for EV technician training and certification. It provides structured learning modules, hands-on assessments, and industry-aligned certification — helping close India\'s 100K+ EV technician gap with a 4-week certification cycle and 92% placement rate.',
    category: 'Products',
  },
  {
    q: 'What is KAILASH-AI?',
    a: 'KAILASH-AI is our AI/ML engine powering advanced diagnostics, predictive maintenance, battery State-of-Health (SoH) grading, document intelligence, and anomaly detection across the platform. It\'s the intelligence layer that makes every product smarter.',
    category: 'Products',
  },
  {
    q: 'What is Eka-AI?',
    a: 'Eka-AI is our conversational AI assistant available across the platform. It handles natural language Q&A, guided actions, contextual help, and intelligent recommendations — making the platform accessible to users of all technical levels.',
    category: 'Products',
  },
  // Implementation
  {
    q: 'How long does implementation take?',
    a: 'Typical implementation takes 4 weeks from kickoff to go-live. This includes platform setup, data migration, team training, and a supervised launch period. For enterprise deployments with custom requirements, timelines may extend to 6-8 weeks.',
    category: 'Implementation',
  },
  {
    q: 'Do you provide training?',
    a: 'Yes, we provide comprehensive onboarding including hands-on training sessions for all user roles, documentation, video tutorials, and ongoing support. Every customer gets a dedicated onboarding specialist during the initial period.',
    category: 'Implementation',
  },
  {
    q: 'Can I use only one product?',
    a: 'Absolutely. Each product — URGAA (ऊर्जा), GST (Go4Garage Service Tools), EV VIDYA ARJUN, and others — works independently as a standalone solution. However, products are designed to work better together, sharing data and intelligence for maximum impact.',
    category: 'Implementation',
  },
  // Pricing
  {
    q: 'How is Go4Garage priced?',
    a: 'Go4Garage follows a SaaS model with plans based on usage volume and features required. We offer a Free tier (no credit card required), plus Starter, Professional, and Enterprise tiers to fit businesses of all sizes. Contact our sales team for a customized quote based on your specific needs.',
    category: 'Pricing',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer guided pilot programs rather than self-serve free trials. This ensures you get the full experience with proper setup, training, and support — so you can evaluate the platform with real results, not just a sandbox.',
    category: 'Pricing',
  },
  // Technical
  {
    q: 'What technology does Go4Garage use?',
    a: 'Go4Garage is built on a modern, cloud-native stack including AI/ML pipelines, our proprietary Automobile LLM (KAILASH-AI), React/Next.js frontend, Node.js microservices, MongoDB, and scalable cloud infrastructure. We use 14 specialized AI sub-agents for different operational domains.',
    category: 'Technical',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We implement enterprise-grade security with end-to-end encryption (at rest and in transit), role-based access controls, regular security audits, and compliance with industry standards. Your data is isolated, backed up, and never shared with third parties.',
    category: 'Technical',
  },
];

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('General');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filteredFAQs = faqs.filter((f) => f.category === activeCategory);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[150px]"
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
              <span className="text-sm font-medium text-primary font-display">FAQ</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to know about Go4Garage, our products, and how we can help your
              business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ CONTENT ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIdx(null);
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-on border-primary shadow-md'
                      : 'bg-surface-bright text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  <Icon name={categoryIcons[cat]} size={18} />
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredFAQs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <motion.div
                      key={faq.q}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ delay: idx * 0.04 }}
                      className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(idx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest/50 transition-colors"
                      >
                        <span className="font-semibold text-on-surface pr-4 font-display">
                          {faq.q}
                        </span>
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
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS? ─── */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
              <Icon name="help" size={32} className="text-primary-on" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-on mb-4 font-display">
              Still Have Questions?
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="chat" size={20} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
