'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';

/**
 * Scroll-to-Top button — appears after scrolling 350px.
 * Smooth scroll on click.
 */
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[5.5rem] right-6 z-[7900] w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/40 shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:bg-primary-container/10 transition-colors"
          aria-label="Scroll to top"
        >
          <Icon name="keyboard_arrow_up" size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
