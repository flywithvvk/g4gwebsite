'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Impact', href: '/impact' },
    { label: 'About', href: '/about' },
    { label: 'Investors', href: '/investors' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass effect background */}
      <div className="absolute inset-0 glass-effect" />

      {/* Navigation content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all duration-300">
                <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
                <path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6v1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V20c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3c1 0 1.9-.5 2.5-1.2.7 1.2 2 2.2 3.5 2.2 2.5 0 4.5-2 4.5-4.5V20c0-6.6-5.4-12-12-12z" fill="white"/>
                <defs><linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#00E5FF"/><stop offset="1" stopColor="#0066FF"/></linearGradient></defs>
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 leading-tight">
                  Go4Garage
                </span>
                <span className="text-[9px] text-gray-400 tracking-[0.2em] uppercase leading-tight">Powering India&apos;s EV Future</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 hover:bg-white/5 group relative"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Button (Desktop) */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => (window.location.href = 'mailto:contact@go4garage.com')}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-accent-cyan to-accent-blue hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Contact Us</span>
            </button>
          </motion.div>

          {/* Hamburger Menu (Mobile) */}
          <motion.button
            className="md:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 right-0 glass-effect border-t border-white/10"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {/* Mobile Navigation Links */}
              <motion.div
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.label} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                    >
                      <span className="relative">
                        <span>{link.label}</span>
                        <motion.span
                          className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue group-hover:w-full transition-all duration-300"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Button (Mobile) */}
              <motion.button
                variants={mobileLinkVariants}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = 'mailto:contact@go4garage.com';
                }}
                className="w-full px-4 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-accent-cyan to-accent-blue hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 mt-4 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 100 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Us</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
