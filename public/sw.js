// Go4Garage Service Worker — cache-first for static assets, network-first for pages
const CACHE = 'g4g-v1';
const OFFLINE_PAGE = '/';

const PRECACHE = [
  '/',
  '/favicon.ico',
  '/icon-192.png',
  '/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  // Skip non-GET, cross-origin, and Firebase requests
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Cache-first for static assets (images, fonts, videos, JS, CSS)
  if (/\.(png|jpg|jpeg|svg|gif|webp|webm|mp4|woff2?|ico|css|js)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
          return res;
        })
      )
    );
    return;
  }

  // Network-first for HTML pages — fall back to offline page
  e.respondWith(
    fetch(request).catch(() => caches.match(OFFLINE_PAGE))
  );
});
