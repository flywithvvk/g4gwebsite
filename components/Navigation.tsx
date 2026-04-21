'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`absolute inset-0 backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? 'bg-surface-bright shadow-md border-outline-variant/40' : 'bg-surface-bright shadow-sm border-outline-variant/30'}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <Image src="/icon.png" alt="Go4Garage" width={36} height={36} className="rounded-xl shadow-sm" />
              <Image src="/logo.jpg" alt="Go4Garage" width={150} height={40} className="h-9 w-auto object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
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

          {/* CTAs */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/demo"
              className="px-4 py-2.5 rounded-xl font-semibold text-sm text-primary border border-primary/30 hover:bg-primary-container/10 transition-all duration-200"
            >
              Book Demo
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-primary-on bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-surface-bright/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => {
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
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-1 px-4 py-3 rounded-xl font-semibold text-sm text-primary border border-primary/30 hover:bg-primary-container/10"
              >
                Book Demo
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
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
