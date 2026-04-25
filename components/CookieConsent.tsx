'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { setConsent, hasConsented } from '@/lib/cookieConsent';

/**
 * GDPR-compliant cookie consent banner.
 * Appears at bottom of screen on first visit.
 * Choices: Accept All | Necessary Only | Customize (expands detail)
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on top of page load
    const t = setTimeout(() => {
      if (!hasConsented()) setVisible(true);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  function accept() {
    setConsent('all');
    setVisible(false);
  }

  function necessary() {
    setConsent('necessary');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[9000] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[480px]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-surface-container-highest border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden">
            {/* Accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-container to-secondary" />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center shrink-0">
                  <Icon name="cookie" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-on-surface text-sm leading-snug">We use cookies 🍪</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    We use cookies for analytics, personalised ads, and to improve your experience.
                    See our{' '}
                    <a href="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</a>.
                  </p>
                </div>
              </div>

              {/* Expandable details */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-2 mb-4 pt-2">
                      {[
                        { name: 'Necessary', desc: 'Site functionality, security. Always on.', locked: true, icon: 'lock' },
                        { name: 'Analytics', desc: 'Firebase Analytics + GA4: helps us improve.', locked: false, icon: 'bar_chart' },
                        { name: 'Marketing', desc: 'Google Ads conversions & retargeting.', locked: false, icon: 'campaign' },
                        { name: 'Performance', desc: 'Firebase Performance Monitoring.', locked: false, icon: 'speed' },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface-container/50">
                          <Icon name={item.icon} size={16} className="text-primary shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-on-surface">{item.name}</p>
                            <p className="text-xs text-on-surface-variant">{item.desc}</p>
                          </div>
                          {item.locked
                            ? <span className="text-[10px] font-semibold text-on-surface-variant px-2 py-0.5 rounded-full bg-surface-container-high">Required</span>
                            : <span className="text-[10px] font-semibold text-tertiary px-2 py-0.5 rounded-full bg-tertiary-container/15">Included</span>
                          }
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 mt-1">
                <button
                  onClick={accept}
                  className="flex-1 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={necessary}
                  className="flex-1 px-4 py-2.5 bg-surface-container border border-outline-variant/40 text-on-surface rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setExpanded((e) => !e)}
                  className="px-3 py-2.5 text-on-surface-variant hover:text-on-surface transition-colors rounded-xl hover:bg-surface-container"
                  aria-label="Customize preferences"
                >
                  <Icon name={expanded ? 'expand_less' : 'tune'} size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
