'use client';

import { useEffect } from 'react';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { app } from '@/lib/firebase';

/**
 * Firebase App Check — prevents abuse of Firebase (Firestore, Remote Config).
 * Uses reCAPTCHA Enterprise (SCORE type) — site key: 6LdIq8UsAAAAADrnHJWFMO_o5ek0w4N6o1LIJTL_
 * Registered domains: go4garage.in, go4garage-d66fc.web.app, go4garage-d66fc.firebaseapp.com, localhost
 *
 * Production (go4garage.in):
 *   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdIq8UsAAAAADrnHJWFMO_o5ek0w4N6o1LIJTL_
 *
 * Development / CI:
 *   NEXT_PUBLIC_APPCHECK_DEBUG_TOKEN=<UUID4 shown when you created the debug token>
 *   Register the UUID4 at: Firebase Console → App Check → web app → Manage debug tokens
 *   The SHA-1 fingerprints visible in the Console are read-only; use the original UUID4.
 */

const RECAPTCHA_SITE_KEY   = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY   ?? '';
const DEBUG_TOKEN          = process.env.NEXT_PUBLIC_APPCHECK_DEBUG_TOKEN  ?? '';

let appCheckInitialised = false;

export function FirebaseAppCheck() {
  useEffect(() => {
    if (appCheckInitialised) return;

    // In development, activate debug token mode so Firestore/Remote Config
    // calls work without a real reCAPTCHA score.
    // The SDK logs the auto-generated UUID to the console on first run —
    // register that UUID in Firebase Console → App Check → Manage debug tokens.
    if (DEBUG_TOKEN) {
      // @ts-expect-error — FIREBASE_APPCHECK_DEBUG_TOKEN is a global injected before SDK init
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = DEBUG_TOKEN;
    } else if (process.env.NODE_ENV === 'development' && !RECAPTCHA_SITE_KEY) {
      // Auto-generate a debug token and log it; paste the UUID into Firebase Console
      // @ts-expect-error
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    if (!RECAPTCHA_SITE_KEY && !DEBUG_TOKEN && process.env.NODE_ENV !== 'development') return;

    appCheckInitialised = true;
    try {
      initializeAppCheck(app, {
        provider: RECAPTCHA_SITE_KEY
          ? new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY)
          : new ReCaptchaEnterpriseProvider('placeholder-replaced-by-debug-mode'),
        isTokenAutoRefreshEnabled: true,
      });
    } catch {
      // fail silently
    }
  }, []);

  return null;
}
