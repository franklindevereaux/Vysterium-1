importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts("/uv/uv.sw.js");
importScripts("./nebula/osana/osana.worker.js");
const sw = new UVServiceWorker();


self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(location.origin + "/service/"))
      event.respondWith(UV.fetch(event));
});