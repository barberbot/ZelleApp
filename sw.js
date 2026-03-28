// Este código es un requisito obligatorio para que el navegador apruebe la PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado correctamente');
});

self.addEventListener('fetch', (e) => {
  // Solo deja pasar las peticiones de red normalmente
  e.respondWith(fetch(e.request).catch(() => console.log('Fallo de red')));
});
