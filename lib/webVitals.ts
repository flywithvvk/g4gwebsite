/**
 * Core Web Vitals → Firebase Analytics
 *
 * Reports CLS, FID, LCP, FCP, TTFB, INP to GA4 so they appear
 * in Firebase Analytics and Google Search Console.
 *
 * Metrics map to standard GA4 event names for compatibility with
 * the CrUX (Chrome User Experience Report) dashboard.
 */

import type { Metric } from 'web-vitals';

export async function reportWebVitals(): Promise<void> {
  if (typeof window === 'undefined') return;

  const { onCLS, onLCP, onFCP, onTTFB, onINP } = await import('web-vitals');
  const { getAnalytics, logEvent } = await import('firebase/analytics');
  const { app } = await import('./firebase');

  function report(metric: Metric) {
    try {
      const analytics = getAnalytics(app);
      // Round to integers for cleaner GA4 data
      const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);

      // Standard GA4 timing event
      logEvent(analytics, 'web_vitals', {
        metric_name: metric.name,
        metric_value: value,
        metric_rating: metric.rating,   // 'good' | 'needs-improvement' | 'poor'
        metric_delta: Math.round(metric.delta),
        metric_id: metric.id,
        page_path: window.location.pathname,
      });

      // Also log to console in dev for debugging
      if (process.env.NODE_ENV === 'development') {
        const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
        console.info(`${color} [Web Vital] ${metric.name}: ${value}${metric.name === 'CLS' ? '' : 'ms'} (${metric.rating})`);
      }
    } catch {
      // fail silently
    }
  }

  onCLS(report);
  onLCP(report);
  onFCP(report);
  onTTFB(report);
  onINP(report);
}
