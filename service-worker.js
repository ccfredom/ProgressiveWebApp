let cacheName = 'weatherPWA-step-6-1';
let filesToCache = [];

self.addEventListener('install', function(e){
    console.log('[ServiceWorker] install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});