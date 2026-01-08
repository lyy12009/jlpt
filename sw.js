const cacheName = "jlpt-v2"; // 版本號改為 v2
const assets = ["./", "./index.html", "./data.js", "./manifest.json"];

// 安裝時抓取最新資源
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("正在快取最新資源");
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); // 強制跳過等待，立即啟用新版
});

// 清除舊版本的快取
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});

// 攔截請求
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
