'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { app } from '@/lib/firebase';
import { trackPageView, trackScrollDepth } from '@/lib/analytics';
import { reportWebVitals } from '@/lib/webVitals';

export function FirebaseAnalytics() {
  const pathname = usePathname();
  const perfInitialised = useRef(false);
  const scrollMilestonesRef = useRef<Set<number>>(new Set());

  // Initialise Analytics, Performance Monitoring, and Web Vitals once on mount
  useEffect(() => {
    if (perfInitialised.current) return;
    perfInitialised.current = true;
    try {
      getAnalytics(app);
      getPerformance(app);
    } catch {
      // Analytics/Performance unavailable (e.g. ad-blocker) — fail silently
    }
    // Report Core Web Vitals to Firebase Analytics
    reportWebVitals().catch(() => {});
  }, []);

  // Track page view on every route change
  useEffect(() => {
    try {
      const title = document.title;
      trackPageView(pathname, title);
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
