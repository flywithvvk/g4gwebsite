'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';

/**
 * Social Proof Ticker — displays rotating proof points with urgency signals.
 * Appears as a subtle notification/ticker in the page (typically above fold).
 */

const PROOFS = [
  { icon: 'schedule', text: '3 demos booked in the last 24 hours', color: 'text-primary', bg: 'bg-primary-container/10' },
  { icon: 'business', text: '500+ EV businesses on our waitlist', color: 'text-secondary', bg: 'bg-secondary-container/10' },
  { icon: 'map', text: 'Active in 33 states across India 🇮🇳', color: 'text-tertiary', bg: 'bg-tertiary-container/10' },
  { icon: 'verified', text: '89.5% compliance automation — verified by customers', color: 'text-primary', bg: 'bg-primary-container/10' },
  { icon: 'bolt', text: 'Average go-live in 4 weeks, zero downtime', color: 'text-secondary', bg: 'bg-secondary-container/10' },
  { icon: 'school', text: '1,200+ EV technicians certified via ARJUN', color: 'text-tertiary', bg: 'bg-tertiary-container/10' },
  { icon: 'star', text: 'Early access pricing — limited slots remaining', color: 'text-primary', bg: 'bg-primary-container/10' },
];

interface Props {
  className?: string;
}

export function SocialProofTicker({ className = '' }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PROOFS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const proof = PROOFS[idx];

  return (
    <div className={`overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/20 ${proof.bg}`}
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-current shrink-0"
          />
          <Icon name={proof.icon} size={15} className={`${proof.color} shrink-0`} />
          <span className={`text-xs font-medium ${proof.color}`}>{proof.text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
