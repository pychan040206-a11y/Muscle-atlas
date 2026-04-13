var CACHE_NAME="muscle-atlas-v1";
var ASSETS=["/","/index.html","/manifest.json","/icons/icon-192.png","/icons/icon-512.png",
"https://unpkg.com/react@18/umd/react.production.min.js",
"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@400;500;700&display=swap"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(ASSETS)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE_NAME}).map(function(k){return caches.delete(k)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
