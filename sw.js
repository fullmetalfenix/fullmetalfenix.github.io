self.addEventListener('install', function(event){ 
    event.waitUntil(
        caches.open('portfolio-stuff').then(function(cache){
            return cache.addAll(
                [
                    'images/blog.jpg',
               ]
            )
        })

    );
})


   self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request).then(function(response){
            if(response.status == 404){ 
                return new Response("Not Found! <a href='index.html'>Go Back</a>", {
                    headers: {'Content-Type': "text/html"}
                });
            }
            return response; //if not status 404, return response              
          });
        })
      );
    });
