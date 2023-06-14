const staticCacheName = 'site-static';
const dynamicCache = 'site-dynamic';

const assets = [
    '/',
    '/index.html',
    '/index.css',
    '/pages/Fallback.html',
    '/index.js',
    '/notifications/index.js',
    '/firebase/index.js',
    '/db/index.js',
    '/auth/index.js',
    '/types/types.js',
    '/manifest.json',
    '/img/anubis.jpg',
    '/img/comp.jpg',
    '/img/comp2.jpg',
    '/img/desk_top.jpg',
    '/img/mail.png',
    '/img/medical.png',
    '/img/server.jpg',
    '/img/type.jpeg'
]

//installing service worker
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('assests been added')
            cache.addAll(assets);
        })
    )
});

//cache limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > size) {
                cache.delete(keys[0]
                    .then(limitCacheSize(name, size)))
            }
        })
    })
}

//activate service worker.
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== staticCacheName && key !== dynamicCache)
                .map(key => caches.delete(key))
            )
        })
    )
});

//fetch event
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(async fetchRes => {
                const cache = await caches.open(dynamicCache);
                cache.put(evt.request.url, fetchRes.clone());
                return fetchRes;
            })
        }).catch(() => {
            if (evt.request.url.indexOf('.html') > -1) {
                return caches.match('/fallback');
            }
        })
    )
});
