

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('rest-info').then(function(cache){
            return cache.addAll(
                [
                    '/',
                    'js/main.js',
                    'js/dbhelper.js',
                    'js/restaurant_info.js',
                    '/index.html',
                    '/restaurant.html',
                    'dist/styles.css',
                    'img/1.webp',
                    'img/2.webp',
                    'img/3.webp',
                    'img/4.webp',
                    'img/5.webp',
                    'img/6.webp',
                    'img/7.webp',
                    'img/8.webp',
                    'img/9.webp',
                    'img/10.webp',
                    'img/undefined.webp',
                    'js/idb.js',
                    'manifest.json'
                ]
            )
        })

    );
})

self.addEventListener('fetch', function(event){
event.respondWith(
caches.match(event.request).then(function(response){
    if(response) return response;
    return fetch(event.request)
})
);
});

