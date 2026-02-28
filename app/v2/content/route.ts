import { NextRequest } from "next/server";

/**
 * İç katman HTML'i: "Deneme Bonusu" / casino affiliate temalı demo içerik.
 * Base tag sayesinde buradaki göreli linkler (bonus.php, giris.php vb.)
 * tarayıcıda /v2/ altında çözülür; adres çubuğu hâlâ /demo kalır.
 */
export async function GET(request: NextRequest) {
  const html = `
<div class="inner-content" style="background:#1a1a2e; color:#eee; padding:1.5rem; border-radius:8px; margin-top:1rem;">
  <h2 style="color:#f0c14b;">Deneme Bonusu Veren Siteler 2024</h2>
  <meta name="description" content="Deneme Bonusu ve casino listesi - güvenilir bahis siteleri">
  <p>En güncel deneme bonusu kampanyaları ve casino bonus listesi.</p>
  <ul style="line-height:1.8;">
    <li><a href="bonus.php">Hoş geldin bonusu</a> - Yeni üye bonusu</li>
    <li><a href="giris.php">Casino giriş</a> - Canlı bahis linkleri</li>
    <li><a href="slot.php">Slot oyunları</a> - Free spin kampanyaları</li>
    <li><a href="list.php">Bonus listesi</a> - Deneme bonusu karşılaştırma</li>
  </ul>
  <p style="color:#888; font-size:0.9rem;">Bu sayfa cloaking demo içeriğidir. Tıklanabilir linkler base href nedeniyle /v2/ altına gider.</p>
</div>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
