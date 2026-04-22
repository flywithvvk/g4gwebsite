'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

const categories = ['All', 'Regulatory', 'Workshop', 'Charging', 'AI & Tech', 'Policy'] as const;

type Category = (typeof categories)[number];

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: Exclude<Category, 'All'>;
  readTime: string;
  icon: string;
  slug: string;
}

const featuredArticle = {
  title: "India's EV Revolution: How AI is Transforming Compliance",
  excerpt:
    'The EV ecosystem in India is growing at an unprecedented pace. But with growth comes regulatory complexity — across 33 states, multiple ministries, and evolving policies. Learn how AI-powered intelligence is cutting through the chaos to deliver 89.5% compliance automation.',
  date: 'Jan 2026',
  category: 'Regulatory' as const,
  readTime: '8 min read',
};

const articles: Article[] = [
  {
    title: 'Complete Guide to DISCOM Applications for EV Charging Stations in India',
    excerpt:
      'A step-by-step walkthrough of DISCOM application processes across all Indian states — timelines, documentation, and common pitfalls to avoid.',
    date: 'Jan 2026',
    category: 'Regulatory',
    readTime: '8 min read',
    icon: 'policy',
    slug: 'discom-applications-ev-charging-india',
  },
  {
    title: 'How Indian EV Workshops Can Automate GST Compliance in 2026',
    excerpt:
      'GST complexity in EV servicing is real — from input credits to workshop billing. Discover how automation reduces compliance burden by 80%.',
    date: 'Jan 2026',
    category: 'Workshop',
    readTime: '6 min read',
    icon: 'receipt_long',
    slug: 'ev-workshops-gst-compliance-automation-2026',
  },
  {
    title: '33-State EV Charging Regulations: What CPOs Need to Know',
    excerpt:
      'Charge Point Operators face a patchwork of state-level rules. This comprehensive guide covers every state\'s requirements in one place.',
    date: 'Dec 2025',
    category: 'Regulatory',
    readTime: '10 min read',
    icon: 'verified',
    slug: '33-state-ev-charging-regulations-cpos',
  },
  {
    title: 'Predictive Maintenance for EV Fleets: AI-Powered Approach',
    excerpt:
      'How AI and IoT sensor data can predict component failures before they happen — reducing downtime and extending battery life for fleet operators.',
    date: 'Dec 2025',
    category: 'AI & Tech',
    readTime: '7 min read',
    icon: 'model_training',
    slug: 'predictive-maintenance-ev-fleets-ai',
  },
  {
    title: 'EV Technician Certification: Why Standardization Matters for India',
    excerpt:
      'India needs 100,000+ certified EV technicians by 2030. Here\'s why a national certification standard is critical and what it should include.',
    date: 'Nov 2025',
    category: 'Workshop',
    readTime: '5 min read',
    icon: 'engineering',
    slug: 'ev-technician-certification-india',
  },
  {
    title: "Understanding India's EV Subsidy Landscape: State vs Central Schemes",
    excerpt:
      'From FAME to state-level incentives — navigating India\'s EV subsidy ecosystem can unlock significant savings for buyers and operators alike.',
    date: 'Nov 2025',
    category: 'Policy',
    readTime: '9 min read',
    icon: 'account_balance',
    slug: 'india-ev-subsidy-state-vs-central',
  },
];

const categoryColors: Record<string, string> = {
  Regulatory: 'bg-primary/10 text-primary',
  Workshop: 'bg-secondary/10 text-secondary',
  Charging: 'bg-tertiary/10 text-tertiary',
  'AI & Tech': 'bg-primary-container/20 text-on-surface',
  Policy: 'bg-secondary-container/20 text-secondary',
};

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:connect@go4garage.in?subject=Blog Newsletter Subscription&body=Please add me to the Go4Garage blog newsletter.%0AEmail: ${encodeURIComponent(email)}`;
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px]"
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
              <span className="text-sm font-medium text-primary font-display">Blog</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              Insights &amp; <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Deep dives into India&apos;s EV ecosystem — regulatory intelligence, AI-powered
              operations, and the future of mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─── */}
      <section className="py-16 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block max-w-5xl mx-auto bg-surface-bright rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden group"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary to-primary-container p-10 md:p-12 flex flex-col justify-center">
                <span className="text-primary-on/80 text-sm font-medium mb-4 font-display uppercase tracking-widest">
                  Featured Article
                </span>
                <Icon name="auto_stories" size={48} className="text-primary-on/90 mb-6" />
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-primary-on/70 text-sm">{featuredArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-primary-on/40" />
                  <span className="text-primary-on/70 text-sm">{featuredArticle.readTime}</span>
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[featuredArticle.category]}`}>
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                  {featuredArticle.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-container/60 text-sm font-medium italic">
                  <Icon name="schedule" size={16} /> Full article coming soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Latest Articles"
            title="Explore Our"
            highlight="Blog"
            subtitle="Filter by category to find the topics that matter most to you."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-on border-primary shadow-md'
                    : 'bg-surface-bright text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ─── BLOG GRID ─── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((article, idx) => (
                <motion.div
                  key={article.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.06 }}
                  className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm transition-all flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-on-surface-variant">{article.readTime}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center mb-4">
                      <Icon name={article.icon} size={22} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-display leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-outline-variant/20">
                      <span className="text-xs text-on-surface-variant">{article.date}</span>
                      <span className="inline-flex items-center gap-1 text-on-surface-variant/50 text-xs italic">
                        <Icon name="schedule" size={14} /> Coming soon
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-on-surface-variant py-12"
            >
              No articles in this category yet. Check back soon!
            </motion.p>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-container/15 flex items-center justify-center mx-auto mb-6">
              <Icon name="mail" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Stay <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Get the latest insights on India&apos;s EV ecosystem delivered straight to your inbox.
              No spam, just value.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-xl border border-outline-variant/30 bg-surface-bright text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-on rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-tertiary font-medium flex items-center justify-center gap-2"
                >
                  <Icon name="check_circle" size={20} /> You&apos;re subscribed!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
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
              Want to See the Platform in Action?
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and discover how Go4Garage can transform your operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="calendar_month" size={20} />
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
