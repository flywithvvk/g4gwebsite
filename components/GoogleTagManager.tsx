'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID, gtagPageView } from '@/lib/gtag';

/**
 * Loads Google's gtag.js (GA4 + Google Ads) and fires page-view events
 * on every client-side route change.
 *
 * GA4 ID  : G-KJ9Z06N7N5  (Firebase Analytics)
 * Ads ID  : set NEXT_PUBLIC_GOOGLE_ADS_ID env var when Google Ads account is ready
 */

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    gtagPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleTagManager() {
  const configSnippet = GOOGLE_ADS_ID
    ? `gtag('config', '${GOOGLE_ADS_ID}');`
    : '';

  return (
    <>
      {/* Load gtag.js once — configured for both GA4 and Google Ads */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  page_path: window.location.pathname,
  send_page_view: false,
  anonymize_ip: true,
  allow_google_signals: true,
  allow_ad_personalization_signals: true
});
${configSnippet}
          `.trim(),
        }}
      />
      {/* Track SPA route changes */}
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
