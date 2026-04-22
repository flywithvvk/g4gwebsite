/**
 * Google Ads (AdWords) + gtag.js utilities
 *
 * GA4 Measurement ID : G-KJ9Z06N7N5  (Firebase Analytics)
 * Google Ads ID      : set NEXT_PUBLIC_GOOGLE_ADS_ID env var when account is ready
 *
 * Usage:
 *   trackGAdsConversion('AW-XXXX/YYY') — fire a specific conversion action
 *   trackGAdsPageView()                — fire Ads page-view ping
 */

export const GA_MEASUREMENT_ID = 'G-KJ9Z06N7N5';
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? '';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag(...args);
  } catch {
    // fail silently
  }
}

// ─── Page view ───────────────────────────────────────────────────────────────

export function gtagPageView(url: string) {
  gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  if (GOOGLE_ADS_ID) {
    gtag('config', GOOGLE_ADS_ID, { page_path: url });
  }
}

// ─── Google Ads conversions ───────────────────────────────────────────────────

/**
 * Fire a Google Ads conversion event.
 * @param conversionLabel  The label portion of the conversion action, e.g. 'AW-123456789/AbCdEfGhIj'
 * @param value            Optional conversion value in INR
 */
export function trackGAdsConversion(conversionLabel: string, value = 0) {
  if (!conversionLabel) return;
  gtag('event', 'conversion', {
    send_to: conversionLabel,
    value,
    currency: 'INR',
  });
}

/** Fire on Demo Booking — highest-value conversion */
export function trackDemoConversion(value = 500) {
  const label = process.env.NEXT_PUBLIC_GADS_DEMO_CONVERSION ?? '';
  if (label) trackGAdsConversion(label, value);
}

/** Fire on Contact Form submit — lead conversion */
export function trackLeadConversion(value = 200) {
  const label = process.env.NEXT_PUBLIC_GADS_LEAD_CONVERSION ?? '';
  if (label) trackGAdsConversion(label, value);
}

/** Fire on Pricing page visit */
export function trackPricingViewConversion() {
  const label = process.env.NEXT_PUBLIC_GADS_PRICING_CONVERSION ?? '';
  if (label) trackGAdsConversion(label, 0);
}

// ─── Enhanced ecommerce events (Google Ads compatible) ───────────────────────

export function trackViewItem(itemId: string, itemName: string, value = 0) {
  gtag('event', 'view_item', {
    currency: 'INR',
    value,
    items: [{ item_id: itemId, item_name: itemName, item_category: 'SaaS Product' }],
  });
}

export function trackAddToCart(itemId: string, itemName: string, value = 0) {
  gtag('event', 'add_to_cart', {
    currency: 'INR',
    value,
    items: [{ item_id: itemId, item_name: itemName }],
  });
}

export function trackBeginCheckout(demoType: string) {
  gtag('event', 'begin_checkout', {
    currency: 'INR',
    value: 0,
    items: [{ item_id: demoType, item_name: demoType, item_category: 'Demo' }],
  });
}

export function trackPurchase(transactionId: string, demoType: string) {
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency: 'INR',
    value: 0,
    items: [{ item_id: demoType, item_name: demoType }],
  });
}
