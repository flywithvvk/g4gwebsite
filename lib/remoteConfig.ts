/**
 * Firebase Remote Config
 *
 * Lets you change hero CTA text, pricing visibility, promotional banners,
 * and feature flags WITHOUT redeploying the site.
 *
 * Set values in Firebase Console → Remote Config → Parameters.
 * On the next page load, the new values are fetched and cached for 1 hour.
 */

import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
  type RemoteConfig,
} from 'firebase/remote-config';
import { app } from './firebase';

// ─── Defaults ─────────────────────────────────────────────────────────────────
// These values are used when Remote Config can't be reached (offline, ad-blocker, etc.)

export const REMOTE_CONFIG_DEFAULTS: Record<string, string | number | boolean> = {
  hero_cta_primary_text: 'Book a Live Demo',
  hero_cta_secondary_text: 'Explore Products',
  hero_headline_suffix: "India's Automobile Future",
  pricing_visible: true,
  promotional_banner_enabled: false,
  promotional_banner_text: '',
  demo_urgency_label: 'Only a few slots left this week',
  show_investor_cta: true,
  show_blog_section: true,
  contact_response_promise: 'We respond within 2 hours',
  min_fetch_interval_ms: 3600000, // 1 hour
};

let remoteConfigInstance: RemoteConfig | null = null;
let fetchPromise: Promise<void> | null = null;
let fetched = false;

function getRC(): RemoteConfig | null {
  if (typeof window === 'undefined') return null;
  if (!remoteConfigInstance) {
    remoteConfigInstance = getRemoteConfig(app);
    remoteConfigInstance.defaultConfig = REMOTE_CONFIG_DEFAULTS;
    remoteConfigInstance.settings = {
      minimumFetchIntervalMillis: Number(REMOTE_CONFIG_DEFAULTS.min_fetch_interval_ms),
      fetchTimeoutMillis: 10000,
    };
  }
  return remoteConfigInstance;
}

/** Fetch + activate Remote Config once per session. Call from a useEffect. */
export async function initRemoteConfig(): Promise<void> {
  if (fetched) return;
  if (fetchPromise) return fetchPromise;

  const rc = getRC();
  if (!rc) return;

  fetchPromise = fetchAndActivate(rc)
    .then(() => { fetched = true; })
    .catch(() => { /* fail silently — defaults are used */ });

  return fetchPromise;
}

// ─── Typed getters ──────────────────────────────────────────────────────────

export function rcString(key: string): string {
  const rc = getRC();
  if (!rc) return String(REMOTE_CONFIG_DEFAULTS[key] ?? '');
  return getValue(rc, key).asString() || String(REMOTE_CONFIG_DEFAULTS[key] ?? '');
}

export function rcBoolean(key: string): boolean {
  const rc = getRC();
  if (!rc) return Boolean(REMOTE_CONFIG_DEFAULTS[key]);
  return getValue(rc, key).asBoolean();
}

export function rcNumber(key: string): number {
  const rc = getRC();
  if (!rc) return Number(REMOTE_CONFIG_DEFAULTS[key] ?? 0);
  return getValue(rc, key).asNumber() || Number(REMOTE_CONFIG_DEFAULTS[key] ?? 0);
}

// ─── Convenience exports ────────────────────────────────────────────────────

export const getHeroCTAPrimaryText    = () => rcString('hero_cta_primary_text');
export const getHeroCTASecondaryText  = () => rcString('hero_cta_secondary_text');
export const getDemoUrgencyLabel      = () => rcString('demo_urgency_label');
export const getContactResponsePromise = () => rcString('contact_response_promise');
export const isPricingVisible         = () => rcBoolean('pricing_visible');
export const isPromoBannerEnabled     = () => rcBoolean('promotional_banner_enabled');
export const getPromoBannerText       = () => rcString('promotional_banner_text');
export const isInvestorCTAVisible     = () => rcBoolean('show_investor_cta');
