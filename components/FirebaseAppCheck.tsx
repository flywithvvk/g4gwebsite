'use client';

import { useEffect } from 'react';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { app } from '@/lib/firebase';

/**
 * Firebase App Check — prevents abuse of Firebase services.
 * Uses reCAPTCHA v3 (invisible, no user interaction required).
 *
 * Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in environment:
 *  1. Go to https://www.google.com/recaptcha/admin → Create site (reCAPTCHA v3)
 *  2. Set allowed domain: go4garage.in
 *  3. Copy the site key → NEXT_PUBLIC_RECAPTCHA_SITE_KEY
 *
 * In Firebase Console → App Check → Register app → reCAPTCHA v3 → same site key
 */

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

let appCheckInitialised = false;

export function FirebaseAppCheck() {
  useEffect(() => {
    if (appCheckInitialised || !RECAPTCHA_SITE_KEY) return;
    appCheckInitialised = true;
    try {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
        isTokenAutoRefreshEnabled: true,
      });
    } catch {
      // fail silently in dev / when key not set
    }
  }, []);

  return null;
}
