# Cloaking Sistemi Demo

Gerçekte kullanılan **iki katmanlı cloaking** yapısının birebir kopyası. Analiz ve tespit mantığını daha iyi anlamak için kendi ortamınızda çalıştırıp inceleyebilirsiniz.

## Nasıl çalışır

| Katman | Rol |
|--------|-----|
| **Dış** (`/demo`) | Adres çubuğunda görünen sayfa: masum title (`wwv.cloaking-demo.local`), siyah arka plan, "Recycling" temalı kısa metin. |
| **Base tag** | `<base href="/v2/">` — Sayfadaki tüm göreli linkler `/v2/` altına çözülür. |
| **Script** | `/v2/off.js` — İçeriği `/v2/content`'tan çekip sayfaya enjekte eder (gerçek senaryodaki `off.php` benzeri). |
| **İç** (`/v2/content`) | Görünen asıl içerik: "Deneme Bonusu", casino listesi, bonus linkleri. Linkler `bonus.php`, `giris.php` vb. → tarayıcıda `/v2/bonus.php` olarak açılır. |

Sonuç: Kullanıcı `/demo` adresinde görünür ama okuduğu metin ve tıkladığı linkler tamamen `/v2/` kaynaklıdır.

## Çalıştırma

```bash
cd web
npm install
npm run dev
```

- Ana sayfa: http://localhost:3000  
- Cloaking demo (dış yüzey): http://localhost:3000/demo  

Demo sayfada geliştirici araçları (Network/Documents) ile `<base>`, script isteği ve içerik kaynağını inceleyebilirsiniz.
