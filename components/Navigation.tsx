'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { trackCTAClick } from '@/lib/analytics';
import { useRCBoolean } from '@/lib/useRemoteConfig';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const pricingVisible = useRCBoolean('pricing_visible');
  const showInvestorCTA = useRCBoolean('show_investor_cta');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '/platform', icon: 'dashboard' },
    { label: 'Products', href: '/products', icon: 'inventory_2' },
    { label: 'Solutions', href: '/solutions', icon: 'lightbulb' },
    { label: 'Impact', href: '/impact', icon: 'trending_up' },
    { label: 'Pricing', href: '/pricing', icon: 'payments' },
    { label: 'About', href: '/about', icon: 'info' },
    { label: 'Investors', href: '/investors', icon: 'account_balance' },
  ];

  const visibleNavLinks = navLinks.filter(link => {
    if (link.href === '/pricing' && !pricingVisible) return false;
    if (link.href === '/investors' && !showInvestorCTA) return false;
    return true;
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── Announcement Ticker ── */}
      <div className="w-full bg-black overflow-hidden border-b border-white/10">
        <div className="flex items-center h-9 overflow-hidden">
          <div className="g4g-ticker flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <span key={i} aria-hidden={i === 1} className="text-white text-xs font-medium px-10 inline-flex items-center gap-3">
                🎉 Go4Garage: 5 Years of Innovation (2021–2026)
                <span className="text-white/40">•</span>
                ⚡ India&apos;s First AI-Powered EV Intelligence Platform
                <span className="text-white/40">•</span>
                📊 1 Lakh+ DISCOM Applications Processed
                <span className="text-white/40">•</span>
                🗓 Book Your Demo Today →
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav bar (backdrop scoped here) ── */}
      <div className="relative">
        <div className={`absolute inset-0 backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? 'bg-surface-bright shadow-md border-outline-variant/40' : 'bg-surface-bright shadow-sm border-outline-variant/30'}`} />

        <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center self-center group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <Image src="/logo.jpg" alt="Go4Garage" width={150} height={40} className="block h-8 w-auto object-contain xl:h-9" />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {visibleNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container/20 text-primary font-semibold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/60'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Resources dropdown */}
          <div className="hidden items-center xl:flex">
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-sm font-medium text-on-surface-variant transition-all duration-200 hover:bg-surface-container-high/60 hover:text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
                Resources
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-44 bg-surface-bright rounded-xl border border-outline-variant/30 shadow-lg py-1 z-50"
                  >
                    {[
                      { label: 'Blog', href: '/blog' },
                      { label: 'News', href: '/news' },
                      { label: 'Case Studies', href: '/case-studies' },
                      { label: 'FAQ', href: '/faq' },
                    ].map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high/60 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            className="hidden shrink-0 items-center gap-2 lg:flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/demo"
              onClick={() => trackCTAClick('nav_book_demo', '/demo')}
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-xl border border-primary/30 px-4 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary-container/10 xl:h-11 xl:px-5"
            >
              Book Demo
            </Link>
            <Link
              href="/contact"
              onClick={() => trackCTAClick('nav_contact_us', '/contact')}
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-xl bg-primary px-5 text-sm font-semibold text-primary-on shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg xl:h-11 xl:px-6"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-surface-container-high xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <motion.span
              className="w-5 h-0.5 bg-on-surface rounded-full"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-on-surface rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-on-surface rounded-full"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 right-0 top-[6.25rem] border-b border-outline-variant/30 bg-surface-bright/95 shadow-lg backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {visibleNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary-container/20 text-primary'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/60'
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{link.icon}</span>
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile Resources links */}
              {[
                { label: 'Blog', href: '/blog', icon: 'article' },
                { label: 'News', href: '/news', icon: 'newspaper' },
                { label: 'Case Studies', href: '/case-studies', icon: 'cases' },
                { label: 'FAQ', href: '/faq', icon: 'help' },
              ].map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-on-surface-variant hover:text-primary hover:bg-surface-container-high/60">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/demo"
                onClick={() => { setIsOpen(false); trackCTAClick('nav_mobile_book_demo', '/demo'); }}
                className="block w-full text-center mt-1 px-4 py-3 rounded-xl font-semibold text-sm text-primary border border-primary/30 hover:bg-primary-container/10"
              >
                Book Demo
              </Link>
              <Link
                href="/contact"
                onClick={() => { setIsOpen(false); trackCTAClick('nav_mobile_contact_us', '/contact'); }}
                className="block w-full text-center mt-2 px-4 py-3 rounded-xl font-semibold text-sm text-primary-on bg-primary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
