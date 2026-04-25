'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { app } from '@/lib/firebase';
import { trackPageView, trackScrollDepth } from '@/lib/analytics';
import { reportWebVitals } from '@/lib/webVitals';
import { hasFullConsent } from '@/lib/cookieConsent';

export function FirebaseAnalytics() {
  const pathname = usePathname();
  const perfInitialised = useRef(false);
  const scrollMilestonesRef = useRef<Set<number>>(new Set());

  // Initialise Analytics + Performance only when consent is granted
  useEffect(() => {
    function initFirebase() {
      if (perfInitialised.current) return;
      perfInitialised.current = true;
      try {
        const a = getAnalytics(app);
        getPerformance(app);
        // Set user properties for segmentation in GA4
        const { setUserProperties } = require('firebase/analytics') as typeof import('firebase/analytics');
        setUserProperties(a, {
          platform: 'web',
          user_type: 'visitor',
          site_version: '1.0',
        });
      } catch {
        // Analytics/Performance unavailable (e.g. ad-blocker) — fail silently
      }
      reportWebVitals().catch(() => {});
    }

    if (hasFullConsent()) {
      initFirebase();
    }

    // React to consent being granted in this tab (from CookieConsent banner)
    const onConsentChanged = (e: Event) => {
      if ((e as CustomEvent).detail?.level === 'all') initFirebase();
    };
    // React to consent being granted in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'g4g_consent' && e.newValue === 'all') initFirebase();
    };

    window.addEventListener('g4g:consent-changed', onConsentChanged);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('g4g:consent-changed', onConsentChanged);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Track page view on every route change (Analytics SDK respects consent state internally)
  useEffect(() => {
    try {
      trackPageView(pathname, document.title);
    } catch {
      // fail silently
    }
  }, [pathname]);

  // Track scroll depth milestones (25%, 50%, 75%, 90%)
  useEffect(() => {
    scrollMilestonesRef.current = new Set();
    const milestones = [25, 50, 75, 90];
    const handleScroll = () => {
      try {
        const scrolled = window.scrollY;
        const total = document.body.scrollHeight - window.innerHeight;
        if (total <= 0) return;
        const pct = Math.round((scrolled / total) * 100);
        for (const m of milestones) {
          if (pct >= m && !scrollMilestonesRef.current.has(m)) {
            scrollMilestonesRef.current.add(m);
            trackScrollDepth(m, pathname);
          }
        }
      } catch { /* fail silently */ }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}
