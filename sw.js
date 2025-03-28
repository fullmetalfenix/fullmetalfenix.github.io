self.addEventListener('install', function(event){ 
    event.waitUntil(
        caches.open('portfolio-stuff').then(function(cache){
            return cache.addAll(
                [
                    '/',
                    'index.html',
                    './images/git-fep.jpg',
                    'images/bootstrap4.jpg',
                    'images/3d-trans.jpg',
                    'images/coffee.jpg',
                    'images/flexbox.jpg',
                    'images/blog.jpg',
                    'images/google-amp.jpg',
                    'images/angular.jpg',
                    'images/transforms.jpg',
                    'images/jquery-plugins.jpg',
                    'images/accessable.jpg',
                    'images/sass-project.jpg',
                    'images/side-menu.jpg',
                    'images/app.png',
                    'images/react-wordpress-headless.png',
                    '/images/mdl-pwa-proj.jpg',
                    '/images/php-site.png',
                    '/images/azure-cms-setup-2.jpg',
                    '/images/amp-local.PNG',
                    '/images/cloudflare-starter.jpg',
                    '/images/polaris-screenshot.JPG',
                    '/images/express-login.JPG',
                    './images/gatsby.JPG',
                    './images/exercise-tracker.JPG',
                    './images/url-shortener.JPG',
                    './images/neighborly-app.jpg',
                    './images/tailwindcss.JPG',
                    './images/AWS-AI-SERVICE.png',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
                    'https://fonts.googleapis.com/css?family=Prompt',
                    'manifest.json'	   
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
