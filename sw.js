// Service worker AZARAKOR LOTO SYSTÈME
// Mise en cache de l'application pour un fonctionnement hors connexion complet.

const CACHE_NAME = 'azarakor-cache-v3';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './azarakor-192.png',
  './azarakor-512.png',
  './azarakor-touch.png',
  './azarakor-fav32.png',
  './azarakor-fav16.png'
];

// Installation : on met en cache tous les fichiers de l'application
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

// Activation : on nettoie les anciens caches si la version change
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Stratégie : cache d'abord, puis réseau si disponible (et mise à jour du cache)
// Les polices Google Fonts en ligne sont ignorées si hors connexion : l'appli
// bascule alors sur les polices système de secours (aucune fonctionnalité perdue).
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
