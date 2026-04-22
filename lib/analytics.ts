import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
import { app } from './firebase';

let analytics: Analytics | null = null;

function getAnalyticsInstance(): Analytics | null {
  if (typeof window === 'undefined') return null;
  if (!analytics) {
    analytics = getAnalytics(app);
  }
  return analytics;
}

export function trackPageView(pagePath: string, pageTitle: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'page_view', {
    page_location: `https://www.go4garage.in${pagePath}`,
    page_path: pagePath,
    page_title: pageTitle,
  });
}

export function trackDemoBookingStarted(demoType: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'begin_checkout', {
    item_name: demoType,
    currency: 'INR',
    value: 0,
  });
  logEvent(a, 'demo_booking_started', { demo_type: demoType });
}

export function trackDemoBookingCompleted(demoType: string, slot: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'purchase', {
    transaction_id: `demo_${Date.now()}`,
    value: 0,
    currency: 'INR',
    items: [{ item_name: demoType }],
  });
  logEvent(a, 'demo_booking_completed', { demo_type: demoType, slot });
}

export function trackContactFormSubmit(interest: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'generate_lead', {
    value: 0,
    currency: 'INR',
  });
  logEvent(a, 'contact_form_submitted', { product_interest: interest });
}

export function trackProductView(productSlug: string, productName: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'view_item', {
    currency: 'INR',
    value: 0,
    items: [{ item_id: productSlug, item_name: productName }],
  });
  logEvent(a, 'product_viewed', { product_slug: productSlug, product_name: productName });
}

export function trackCTAClick(ctaLabel: string, destination: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'select_content', {
    content_type: 'cta',
    content_id: ctaLabel,
  });
  logEvent(a, 'cta_clicked', { cta_label: ctaLabel, destination });
}

export function trackScrollDepth(depth: number, pagePath: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'scroll', { percent_scrolled: depth, page_path: pagePath });
}

export function trackSearch(searchTerm: string) {
  const a = getAnalyticsInstance();
  if (!a) return;
  logEvent(a, 'search', { search_term: searchTerm });
}
