'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { app } from '@/lib/firebase';
import { trackPageView } from '@/lib/analytics';
import { reportWebVitals } from '@/lib/webVitals';

export function FirebaseAnalytics() {
  const pathname = usePathname();
  const perfInitialised = useRef(false);

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

  return null;
}
