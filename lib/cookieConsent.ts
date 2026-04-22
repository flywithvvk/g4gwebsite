/**
 * Cookie Consent utilities
 * Stored in localStorage key: g4g_consent
 * Values: 'all' | 'necessary' | null (not set yet)
 */

export type ConsentLevel = 'all' | 'necessary';
const KEY = 'g4g_consent';

export function getConsent(): ConsentLevel | null {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(KEY);
  if (v === 'all' || v === 'necessary') return v;
  return null;
}

export function setConsent(level: ConsentLevel): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, level);
  // Notify gtag of consent update
  if (typeof window.gtag === 'function') {
    if (level === 'all') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    } else {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function hasFullConsent(): boolean {
  return getConsent() === 'all';
}
