self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
  // 克隆请求以读取其头信息
  const requestClone = event.request.clone();

  // 仅处理 Content-Type 为 application/json 的请求
  if (requestClone.headers.get('Content-Type') === 'application/json') {
    console.log('Intercepting JSON request to:', event.request.url);

    // 打印请求信息
    requestClone.text().then(body => {
      const requestDetails = {
        url: event.request.url,
        method: event.request.method,
        headers: [...event.request.headers.entries()],
        body: body
      };
      console.log('Request details:', requestDetails);

      // 响应处理
      event.respondWith(
        fetch(event.request.clone())
          .then(response => {
            // 克隆响应以获取响应体
            const responseClone = response.clone();
            responseClone.text().then(responseBody => {
              const responseDetails = {
                status: response.status,
                headers: [...response.headers.entries()],
                body: responseBody
              };
              console.log('Response details:', responseDetails);

              // 将请求和响应信息发送到客户端
              self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                  client.postMessage({
                    request: requestDetails,
                    response: responseDetails
                  });
                });
              });
            });

            return response; // 返回原始响应
          })
          .catch(error => {
            console.error('Fetch error:', error);
            return new Response('Network error occurred', { status: 408 });
          })
      );
    });
  }
});
