'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { trackContactFormSubmit } from '@/lib/analytics';
import { trackLeadConversion } from '@/lib/gtag';
import { saveNewsletterSubscriber } from '@/lib/firestore';

/**
 * Exit Intent Newsletter / Lead Capture Modal.
 * Triggers when the user's cursor moves toward the top of the browser
 * (suggesting they're about to leave the page).
 * Shows once per session.
 */

const SHOWN_KEY = 'g4g_exit_shown';

const INTEREST_OPTIONS = [
  'EV Charging (CPO)',
  'Workshop Management',
  'Fleet Operations',
  'EV Training & Skilling',
  'Regulatory Compliance',
  'Just Exploring',
];

export function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    // Trigger on mouse near top of viewport (exit intent)
    const onMouseOut = (e: MouseEvent) => {
      if (hasTriggered.current) return;
      if (e.clientY < 20 && e.relatedTarget === null) {
        hasTriggered.current = true;
        sessionStorage.setItem(SHOWN_KEY, '1');
        // Small delay so it feels intentional
        setTimeout(() => setVisible(true), 200);
      }
    };

    // Fallback: show after 45s of inactivity on page
    const fallback = setTimeout(() => {
      if (!hasTriggered.current && !sessionStorage.getItem(SHOWN_KEY)) {
        hasTriggered.current = true;
        sessionStorage.setItem(SHOWN_KEY, '1');
        setVisible(true);
      }
    }, 45000);

    document.addEventListener('mouseout', onMouseOut);
    return () => {
      document.removeEventListener('mouseout', onMouseOut);
      clearTimeout(fallback);
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    // Save to Firestore (non-blocking)
    saveNewsletterSubscriber({
      email,
      interest: interest || undefined,
      source: 'exit_intent',
    });

    trackContactFormSubmit(interest || 'newsletter');
    trackLeadConversion(50);
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9500] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setVisible(false); }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative bg-surface rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
          >
            {/* Top gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary-container to-secondary" />

            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Close"
            >
              <Icon name="close" size={20} />
            </button>

            <div className="p-8">
              {!submitted ? (
                <>
                  {/* Headline */}
                  <div className="text-center mb-6">
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-primary-container/15 items-center justify-center mb-4">
                      <Icon name="rocket_launch" size={28} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-on-surface mb-2 font-display">
                      Wait: Before You Go 🇮🇳
                    </h2>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Join <strong className="text-primary">500+ EV businesses</strong> already on our early-access waitlist.
                      Get product updates, launch offers, and India&apos;s EV industry insights.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      />
                      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                    </div>

                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="">What describes you best?</option>
                      {INTEREST_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon name="mail" size={18} className="text-white" />
                      Get Early Access
                    </button>
                  </form>

                  <p className="text-xs text-center text-on-surface-variant mt-3">
                    No spam. Unsubscribe anytime. 🔒 Your data is safe.
                  </p>
                </>
              ) : (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="inline-flex w-16 h-16 rounded-full bg-tertiary-container/20 items-center justify-center mb-4"
                  >
                    <Icon name="check_circle" size={32} className="text-tertiary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">You&apos;re on the list! 🎉</h3>
                  <p className="text-sm text-on-surface-variant">
                    We&apos;ll reach out with updates and exclusive early-access offers.
                    Welcome to the Go4Garage family!
                  </p>
                  <button
                    onClick={() => setVisible(false)}
                    className="mt-5 px-6 py-2.5 bg-surface-container-high rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-highest transition-colors"
                  >
                    Continue Exploring
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
