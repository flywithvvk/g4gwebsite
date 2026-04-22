'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

/**
 * Floating Action Button — bottom-right.
 * Collapsed: single orange button with chat icon.
 * Expanded: reveals Book Demo + WhatsApp quick actions.
 */

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after 3s to avoid cluttering initial load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const actions = [
    {
      label: 'Book a Demo',
      icon: 'event',
      href: '/demo',
      bg: 'bg-primary',
      text: 'text-white',
      shadow: 'shadow-primary/30',
      isLink: true,
    },
    {
      label: 'WhatsApp Us',
      icon: 'chat',
      href: 'https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Go4Garage',
      bg: 'bg-[#25D366]',
      text: 'text-white',
      shadow: 'shadow-[#25D366]/30',
      isLink: false,
    },
    {
      label: 'Email Us',
      icon: 'mail',
      href: 'mailto:connect@go4garage.in?subject=Inquiry%20via%20Website',
      bg: 'bg-secondary',
      text: 'text-white',
      shadow: 'shadow-secondary/30',
      isLink: false,
    },
  ];

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[8000] flex flex-col items-end gap-3">
      {/* Action items */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((action, i) => (
              <motion.div
                key={action.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: (actions.length - i - 1) * 0.07, type: 'spring', stiffness: 300, damping: 25 } },
                }}
              >
                {action.isLink ? (
                  <Link
                    href={action.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 pl-4 pr-3 py-2.5 rounded-full ${action.bg} ${action.text} shadow-lg ${action.shadow} hover:opacity-90 transition-all active:scale-95`}
                  >
                    <span className="text-sm font-semibold whitespace-nowrap">{action.label}</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name={action.icon} size={16} className={action.text} />
                    </div>
                  </Link>
                ) : (
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 pl-4 pr-3 py-2.5 rounded-full ${action.bg} ${action.text} shadow-lg ${action.shadow} hover:opacity-90 transition-all active:scale-95`}
                  >
                    <span className="text-sm font-semibold whitespace-nowrap">{action.label}</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name={action.icon} size={16} className={action.text} />
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full bg-primary shadow-xl shadow-primary/30 flex items-center justify-center text-white relative"
        aria-label={open ? 'Close quick actions' : 'Open quick actions'}
      >
        {/* Pulse ring when closed */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-primary"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Icon name={open ? 'close' : 'support_agent'} size={26} className="text-white" />
        </motion.div>
      </motion.button>
    </div>
  );
}
