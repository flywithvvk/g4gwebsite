import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { GlobalStructuredData } from "@/components/StructuredData";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { FirebaseAppCheck } from "@/components/FirebaseAppCheck";
import { RemoteConfigInit } from "@/components/RemoteConfigInit";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const SITE_URL = "https://www.go4garage.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Go4Garage - The AI Platform Powering India's Automobile Future",
    template: "%s | Go4Garage",
  },
  description: "From regulatory chaos to operational excellence. One platform. Zero friction. India's first AI-powered automobile intelligence platform.",
  keywords: [
    "EV charging India", "automobile AI platform", "India EV infrastructure",
    "CPO management software", "automotive intelligence", "Go4Garage",
    "URGAA EV charging", "GST (Go4Garage Service Tools) GST compliance", "EV VIDYA ARJUN",
    "KAILASH-AI", "Eka-AI", "EV workshop management India",
    "electric vehicle compliance India", "fleet management EV India",
  ],
  authors: [{ name: "Go4Garage", url: SITE_URL }],
  creator: "Go4Garage",
  publisher: "Go4Garage Technologies Pvt. Ltd.",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Go4Garage - The AI Platform Powering India's Automobile Future",
    description: "India's first AI-powered automobile intelligence platform. 7 products. 85 problems solved. Zero friction.",
    url: SITE_URL,
    siteName: "Go4Garage",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Go4Garage: AI-Powered Automobile Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go4Garage - AI-Powered Automobile Intelligence",
    description: "India's first AI-powered automobile intelligence platform. 7 products solving 85 problems across India's EV ecosystem.",
    creator: "@go4garage",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    languages: {
      "en-IN": SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=3",
  },
  manifest: "/manifest.json",
  verification: {
    google: [
      "79ae55bd7d3253ab5b7880a6dcb07ee65bad2517",
      "5VlinGv18IbP9hldtwjXsfiU7SK0-YP9XyKlx4mPINQ",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* DNS prefetch + preconnect for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://firebase.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* Preload LCP image (logo) + critical font */}
        <link rel="preload" href="/logo.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" as="style" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=account_balance,account_balance_wallet,account_tree,analytics,apartment,api,apps,arrow_back,arrow_downward,arrow_forward,article,assignment,auto_awesome,auto_fix_high,auto_graph,auto_mode,auto_stories,bar_chart,battery_charging_full,battery_full,battery_horiz_075,battery_saver,bolt,bug_report,build,build_circle,business,calculate,calendar_month,calendar_today,campaign,cancel,chat,check,check_circle,checklist,chevron_left,chevron_right,close,cloud,code,computer,cookie,corporate_fare,currency_rupee,dashboard,description,domain,eco,electric_bolt,electric_car,electrical_services,emergency,engineering,error,ev_station,event,expand_more,explore,factory,feed,flag,foundation,garage,gavel,grade,group,groups,handshake,help,history,hourglass_empty,hub,info,insights,integration_instructions,inventory,inventory_2,keyboard_arrow_up,leaderboard,library_books,lightbulb,local_shipping,location_on,lock,mail,mail_outline,manage_search,map,menu_book,model_training,monitor_heart,monitoring,notifications_active,open_in_new,palette,payments,people,person,policy,precision_manufacturing,price_check,psychology,public,query_stats,quiz,receipt,receipt_long,recycling,remove,rocket_launch,rule,savings,schedule,school,science,search,search_off,security,send,sensors,settings,shield,smart_toy,smartphone,speed,star,storage,subscriptions,support_agent,swap_horiz,sync_alt,target,task_alt,timer,translate,travel_explore,trending_down,trending_up,troubleshoot,verified,verified_user,warning,warning_amber,wb_sunny,widgets,wifi,work,workspace_premium&display=swap" />
        <meta name="theme-color" content="#904d00" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <GlobalStructuredData />
        {/* Register service worker for offline caching */}
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});})}` }} />
      </head>
      <body className="font-sans antialiased bg-surface text-on-surface">
        <FirebaseAnalytics />
        <GoogleTagManager />
        <FirebaseAppCheck />
        <RemoteConfigInit />
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
        <ExitIntentModal />
      </body>
    </html>
  );
}
