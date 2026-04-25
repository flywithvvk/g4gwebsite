'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { trackSearch } from '@/lib/analytics';

const RESULTS = [
  { title: 'URGAA (ऊर्जा): Regulatory Intelligence', desc: 'End-to-end EV charging compliance across 33 states', href: '/products/urgaa', icon: 'bolt', tag: 'Product' },
  { title: 'GST (Go4Garage Service Tools): Workshop & Commerce Engine', desc: 'Digital job cards, GST billing, inventory management', href: '/products/gstsaas', icon: 'build', tag: 'Product' },
  { title: 'Ignition App: Consumer Experience', desc: 'EV consumer app for charging, service, and support', href: '/products/ignition', icon: 'smartphone', tag: 'Product' },
  { title: 'EV VIDYA ARJUN: Workforce Skilling', desc: '4-week EV technician certification, 92% placement rate', href: '/products/arjun', icon: 'school', tag: 'Product' },
  { title: 'KAILASH-AI: Predictive Analytics', desc: 'Battery SoH grading, document AI, anomaly detection', href: '/products/kailash-ai', icon: 'analytics', tag: 'Product' },
  { title: 'Eka-AI: Agent Orchestration', desc: 'Conversational AI for guided operations and Q&A', href: '/products/eka-ai', icon: 'smart_toy', tag: 'Product' },
  { title: 'Book a Live Demo', desc: 'Schedule a demo: workshop, charging, or full platform tour', href: '/demo', icon: 'event', tag: 'Action' },
  { title: 'Pricing', desc: 'Starter, Professional, and Enterprise plans', href: '/pricing', icon: 'payments', tag: 'Page' },
  { title: 'Platform Overview', desc: 'How all 7 products work together', href: '/platform', icon: 'dashboard', tag: 'Page' },
  { title: 'Who We Serve', desc: 'CPO operators, workshops, fleets, government, OEMs', href: '/solutions', icon: 'lightbulb', tag: 'Page' },
  { title: 'Impact & Metrics', desc: '85 problems solved, 89.5% compliance automation', href: '/impact', icon: 'trending_up', tag: 'Page' },
  { title: 'About Go4Garage', desc: "India's first AI automobile intelligence platform", href: '/about', icon: 'info', tag: 'Page' },
  { title: 'Investors', desc: 'Investment thesis, traction, and partnership opportunities', href: '/investors', icon: 'account_balance', tag: 'Page' },
  { title: 'Careers', desc: 'Join the team building the future of Indian EVs', href: '/careers', icon: 'work', tag: 'Page' },
  { title: 'FAQ', desc: 'Common questions about products, implementation, pricing', href: '/faq', icon: 'help', tag: 'Page' },
  { title: 'Contact', desc: 'Reach the Go4Garage team', href: '/contact', icon: 'mail', tag: 'Page' },
  { title: 'ROI Calculator', desc: 'Calculate your savings with Go4Garage', href: '/roi', icon: 'calculate', tag: 'Tool' },
  { title: 'Blog', desc: 'EV industry insights, product updates, case studies', href: '/blog', icon: 'article', tag: 'Page' },
  { title: 'Case Studies', desc: 'Real results from Go4Garage deployments', href: '/case-studies', icon: 'psychology', tag: 'Page' },
  { title: '33 States Compliance', desc: 'DISCOM approvals, MNRE subsidies, state EV policy tracking', href: '/products/urgaa', icon: 'gavel', tag: 'Feature' },
  { title: 'GST Billing & Invoicing', desc: 'Automated GST-compliant billing for workshops', href: '/products/gstsaas', icon: 'receipt', tag: 'Feature' },
  { title: 'Battery SoH Grading', desc: 'AI-powered battery state-of-health assessment', href: '/products/kailash-ai', icon: 'battery_charging_full', tag: 'Feature' },
];

const TAG_COLORS: Record<string, string> = {
  Product:  'bg-primary-container/15 text-primary border-primary/20',
  Action:   'bg-tertiary-container/15 text-tertiary border-tertiary/20',
  Page:     'bg-surface-container-high text-on-surface-variant border-outline-variant/30',
  Feature:  'bg-secondary-container/15 text-secondary border-secondary/20',
  Tool:     'bg-primary-container/15 text-primary border-primary/20',
};

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? RESULTS.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.desc.toLowerCase().includes(query.toLowerCase()) ||
        r.tag.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : RESULTS.filter((r) => r.tag === 'Action' || r.tag === 'Product').slice(0, 6);

  const openSearch = useCallback(() => {
    setOpen(true);
    setQuery('');
    setActiveIdx(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && filtered[activeIdx]) {
      if (query) trackSearch(query);
      window.location.href = filtered[activeIdx].href;
      setOpen(false);
    }
  }

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  return (
    <>
      {/* Search trigger button: in nav or wherever mounted */}
      <button
        onClick={openSearch}
        className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface-variant text-sm hover:bg-surface-container-high transition-colors"
        aria-label="Search (Ctrl+K)"
      >
        <Icon name="search" size={16} />
        <span>Search…</span>
        <span className="ml-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] font-mono">⌘K</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9800] flex items-start justify-center pt-[12vh] px-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="w-full max-w-xl bg-surface-container-high border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-outline-variant/30">
                <Icon name="search" size={20} className="text-on-surface-variant shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search products, pages, features…"
                  className="flex-1 bg-transparent text-on-surface text-sm placeholder-on-surface-variant/60 outline-none"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-on-surface-variant hover:text-on-surface">
                    <Icon name="close" size={18} />
                  </button>
                )}
                <span className="text-[11px] text-on-surface-variant px-1.5 py-0.5 rounded bg-surface-container-highest border border-outline-variant/30 font-mono">Esc</span>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[380px] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="py-12 text-center">
                    <Icon name="search_off" size={32} className="text-on-surface-variant/40 mb-2" />
                    <p className="text-sm text-on-surface-variant">No results for &ldquo;{query}&rdquo;</p>
                  </div>
                ) : (
                  <>
                    {!query && (
                      <p className="px-4 py-1 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Quick Links</p>
                    )}
                    {filtered.map((item, i) => (
                      <Link
                        key={item.href + item.title}
                        href={item.href}
                        data-active={i === activeIdx}
                        onClick={() => { if (query) trackSearch(query); setOpen(false); }}
                        onMouseEnter={() => setActiveIdx(i)}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${i === activeIdx ? 'bg-primary-container/10' : 'hover:bg-surface-container-highest'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${i === activeIdx ? 'bg-primary-container/20' : 'bg-surface-container-highest'}`}>
                          <Icon name={item.icon} size={18} className={i === activeIdx ? 'text-primary' : 'text-on-surface-variant'} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-on-surface truncate">{item.title}</p>
                          <p className="text-xs text-on-surface-variant truncate">{item.desc}</p>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${TAG_COLORS[item.tag] ?? ''}`}>
                          {item.tag}
                        </span>
                      </Link>
                    ))}
                  </>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2.5 border-t border-outline-variant/20 flex items-center gap-3 text-[11px] text-on-surface-variant">
                <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-surface-container-highest border border-outline-variant/30">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-surface-container-highest border border-outline-variant/30">↵</kbd> open</span>
                <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-surface-container-highest border border-outline-variant/30">Esc</kbd> close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
