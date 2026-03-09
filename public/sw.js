// Service Worker — eneflorin.com PWA
const CACHE_NAME = "ef-tutoriale-v1";
const PRECACHE_URLS = [
    "/",
    "/index.html",
    "/tutorials/blockchain",
    "/icon-192.png",
    "/icon-512.png",
];

// Install — pre-cache core assets
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

// Activate — clean up old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((names) =>
                Promise.all(
                    names
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                )
            )
            .then(() => self.clients.claim())
    );
});

// Fetch — network first, fallback to cache
self.addEventListener("fetch", (event) => {
    // Skip non-GET and cross-origin requests
    if (event.request.method !== "GET") return;
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone and cache the fresh response
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => {
                // Network failed — try cache
                return caches.match(event.request).then((cached) => {
                    return cached || caches.match("/");
                });
            })
    );
});
