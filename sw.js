const cacheName = "jlpt-v3"; // 版本號升級到 v3
const assets = ["./", "./index.html", "./data.js", "./manifest.json"];

// 安裝時抓取最新資源
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("正在快取 v3 資源");
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

// 清除舊版本的快取 (重要：這會幫你刪掉 v2，強制手機讀取新版)
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
  // 讓新的 Service Worker 立即控制所有頁面
  return self.clients.claim();
});

// 攔截請求
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      // 優先從網路抓取，失敗才用快取（這樣可以更快看到更新）
      return fetch(e.request).catch(() => caches.match(e.request));
    })
  );
});
