import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
import { app } from './firebase';

let analytics: Analytics | null = null;
let analyticsUnavailable = false;

function getAnalyticsInstance(): Analytics | null {
  if (typeof window === 'undefined') return null;
  if (analyticsUnavailable) return null;
  if (!analytics) {
    try {
      analytics = getAnalytics(app);
    } catch {
      analyticsUnavailable = true;
      return null;
    }
  }
  return analytics;
}

function safeLogEvent(eventName: string, params?: Record<string, unknown>) {
  const a = getAnalyticsInstance();
  if (!a) return;
  try {
    if (params) {
      logEvent(a, eventName, params);
      return;
    }
    logEvent(a, eventName);
  } catch {
    // Non-blocking: analytics failures should never affect UX flows
  }
}

export function trackPageView(pagePath: string, pageTitle: string) {
  safeLogEvent('page_view', {
    page_location: `https://go4garage.com${pagePath}`,
    page_path: pagePath,
    page_title: pageTitle,
  });
}

export function trackDemoBookingStarted(demoType: string) {
  safeLogEvent('begin_checkout', {
    item_name: demoType,
    currency: 'INR',
    value: 0,
  });
  safeLogEvent('demo_booking_started', { demo_type: demoType });
}

export function trackDemoBookingCompleted(demoType: string, slot: string) {
  safeLogEvent('purchase', {
    transaction_id: `demo_${Date.now()}`,
    value: 0,
    currency: 'INR',
    items: [{ item_name: demoType }],
  });
  safeLogEvent('demo_booking_completed', { demo_type: demoType, slot });
}

export function trackContactFormSubmit(interest: string) {
  safeLogEvent('generate_lead', {
    value: 0,
    currency: 'INR',
  });
  safeLogEvent('contact_form_submitted', { product_interest: interest });
}

export function trackProductView(productSlug: string, productName: string) {
  safeLogEvent('view_item', {
    currency: 'INR',
    value: 0,
    items: [{ item_id: productSlug, item_name: productName }],
  });
  safeLogEvent('product_viewed', { product_slug: productSlug, product_name: productName });
}

export function trackCTAClick(ctaLabel: string, destination: string) {
  safeLogEvent('select_content', {
    content_type: 'cta',
    content_id: ctaLabel,
  });
  safeLogEvent('cta_clicked', { cta_label: ctaLabel, destination });
}

export function trackScrollDepth(depth: number, pagePath: string) {
  safeLogEvent('scroll', { percent_scrolled: depth, page_path: pagePath });
}

export function trackSearch(searchTerm: string) {
  safeLogEvent('search', { search_term: searchTerm });
}
