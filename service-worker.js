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
self.addEventListener('activate', function(event){
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }));
        })
    );
    return self.clients.claim();
});