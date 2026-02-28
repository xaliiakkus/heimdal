import { NextRequest } from "next/server";

/**
 * Gerçek off.php mantığı: İç katman HTML'ini alıp tüm sayfayı onunla değiştirir.
 * document.write kullanımı – sayfa adresi /demo kalır, görünen içerik tamamen /v2/ kaynaklıdır.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const origin = url.origin;
  const appUrl = `${origin}/v2/app`;

  const js = `
(function() {
  fetch('${appUrl}')
    .then(function(r) { return r.text(); })
    .then(function(html) {
      document.open();
      document.write(html);
      document.close();
    })
    .catch(function() {
      document.body.innerHTML = '<p style="color:#c00;">İçerik yüklenemedi.</p>';
    });
})();
`.trim();

  return new Response(js, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
