'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';

/**
 * Promotional Banner: appears at top of page (above Navigation).
 * Controlled by Firebase Remote Config:
 *   promotional_banner_enabled  : true/false
 *   promotional_banner_text     : the message
 *
 * Dismissed state stored in sessionStorage so it re-appears each session
 * unless the user dismissed it in this browser session.
 */

const DISMISS_KEY = 'g4g_promo_dismissed';

export function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    // Read from Firebase Remote Config (if available)
    const readRC = async () => {
      try {
        const { initRemoteConfig, rcBoolean, rcString } = await import('@/lib/remoteConfig');
        await initRemoteConfig();
        const enabled = rcBoolean('promotional_banner_enabled');
        const msg = rcString('promotional_banner_text');
        if (enabled && msg) {
          setText(msg);
          setVisible(true);
        }
      } catch {
        // Remote Config not available: banner stays hidden
      }
    };

    readRC();
  }, []);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, '1');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-[60] overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary via-primary-container to-secondary px-4 py-2.5 text-center">
            <div className="max-w-5xl mx-auto flex items-center justify-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-base"
              >
                🚀
              </motion.span>
              <p className="text-white text-sm font-medium leading-snug flex-1">{text}</p>
              <a
                href="/demo"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-full transition-colors shrink-0"
              >
                Claim Now
                <Icon name="arrow_forward" size={14} className="text-white" />
              </a>
              <button
                onClick={dismiss}
                className="p-0.5 text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <Icon name="close" size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
