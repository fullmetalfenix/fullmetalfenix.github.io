self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('portfolio-stuff').then(function(cache){
            return cache.addAll(
                [
                    '/',
                    'index.html',
                    '/index.html',
                    'https://fullmetalfenix.github.io',
                    'https://fullmetalfenix.github.io/index.html',
                    'bootstrap4.jpg',
                    '3d-trans.jpg',
                    'coffee.jpg',
                    'flexbox.jpg',
                    'blog.jpg',
                    'google-amp.jpg',
                    'angular.jpg',
                    'transforms.jpg',
                    'jquery-plugins.jpg',
                    'accessable.jpg',
                    'sass-project.jpg',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
                    'https://fonts.googleapis.com/css?family=Prompt',
                    '/manifest.json'	                ]
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

