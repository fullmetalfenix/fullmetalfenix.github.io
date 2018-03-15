
self.addEventListener('install', function(event){ // switched to install
    event.waitUntil(
        caches.open('coffee-4').then(function(cache){
            return cache.addAll([
              'index.html',
              '5.jpg',
              '6.jpg',
              '7.jpg',
              '10.jpg',
              '14.jpg',
              '16.jpg',
              '21.jpg',
              '22.jpg',
              'coffee.jpg',
              'index.html',
              'styles.css',
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/material-design-lite/material.min.css',
              'SVG/barista-icons_coffee-shop-sign.svg'
            ])
        })
    );



   });
   

   self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request).then(function(response){
            if(response.status == 404){ //if 404 - return this (please check repo notes about this)
                return new Response("Not Found! <a href='index.html'>Go Back</a>", {
                    headers: {'Content-Type': "text/html"}
                });
            }
            return response; //if not status 404, return response              
          });
        })
      );
    });