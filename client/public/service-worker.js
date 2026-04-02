// Service Worker for PWA functionality

const CACHE_NAME = "vanshare-v1";
const urlsToCache = [
  "/",
  "/about",
  "/delivery",
  "/calculator",
  "/order",
  "/contact",
  "/faq",
  "/comparison",
  "/manifest.json",
  "/coal_in_bag.webp",
  "/coal_in_bag.png",
  "/Logo.png",
  "/Logo-Photoroom.png",
  "/Logo-Photoroom.webp",
];

self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version if available, otherwise fetch from network
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
