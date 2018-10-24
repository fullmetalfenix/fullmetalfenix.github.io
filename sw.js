self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('portfolio-stuff').then(function(cache){
            return cache.addAll(
                [
                    'coffee.jpg',
                    'flexbox.jpg',
                    'blog.jpg',
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

