"use strict";var precacheConfig=[["/index.html","a730c434b0e893586d5d2c9c2a0dbf60"],["/static/js/main.6a45d12d.js","874f1652ec93159dca18c320568786e6"],["/static/media/NASA.adb899af.jpg","adb899af5a094a4f683e899bc1bd6e07"],["/static/media/campusmaps.efff0840.png","efff0840a3a333333595fb6e8ccc91c7"],["/static/media/coe.ceb0234e.png","ceb0234e0402b759b32f68b1bfb916e2"],["/static/media/facebook.aeef1860.png","aeef18600e4e36bbc5b64348d606dfc6"],["/static/media/gdtc.c5436cc6.jpg","c5436cc62ba83703769f47ef22c01cf1"],["/static/media/htmlcss.4d6744f8.jpg","4d6744f83a37d686df02aece12d737d3"],["/static/media/instacap.605d35ff.jpg","605d35ffb610910b7aa67a6431a2641f"],["/static/media/linkedin.39398a20.jpg","39398a20b4d535c1527a8082d34dc4f7"],["/static/media/messagepredict.45b88160.jpg","45b8816040e49d1696d13d5992ce9242"],["/static/media/peereducator.f0591520.jpg","f05915200636cc84f68039f32a91dc7a"],["/static/media/placeholder.7f220190.jpg","7f22019098d2acf8a55b1d3f0a0a5c41"],["/static/media/profile-photo.594a42b7.jpg","594a42b75754314f5366cf39b517d445"],["/static/media/resume.8ac8a00a.pdf","8ac8a00ae2c01f84a58c8f0a4708ea8f"],["/static/media/seclab.4ce396b2.png","4ce396b2788dcf31d3bc89214a8765a9"],["/static/media/spam.0b68ecb1.png","0b68ecb1b292b985e2bf7b5aa51bb8bf"],["/static/media/stripe.88618fc5.jpg","88618fc55725e009780358098936cc31"],["/static/media/swe.841d2c6b.jpg","841d2c6b892671b670a213940c703c77"],["/static/media/tunehouse.396196ce.jpeg","396196ce8f19a13c55625d73a089db82"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});