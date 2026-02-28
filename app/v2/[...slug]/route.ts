import { NextRequest } from "next/server";

/**
 * /v2/ altındaki göreli linkler (bonus.php, giris.php vb.) buraya düşer.
 * Base tag yüzünden tıklanınca adres çubuğu /v2/... olur; dış yüzey /demo'dur.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const path = slug?.join("/") || "index";

  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>İç katman - ${path}</title>
  <base href="${new URL(request.url).origin}/v2/">
</head>
<body style="background:#1a1a2e; color:#eee; font-family: system-ui; padding: 2rem;">
  <h1>İç katman sayfası</h1>
  <p>İstek: <code>/v2/${path}</code></p>
  <p>Bu sayfa base href ile /v2/ altında açıldı. Dış yüzey adresi /demo idi.</p>
  <p><a href="/demo">← Demo dış sayfaya dön</a></p>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
