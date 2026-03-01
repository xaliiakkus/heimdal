import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Türkiye A Milli Futbol Takımı - Tarihçe, Başarılar ve Detaylı Bilgiler",
  description: "Türkiye A Milli Futbol Takımı hakkında kapsamlı bilgiler. Tarihçe, başarılar, ünlü futbolcular, teknik direktörler ve unutulmaz maçlar. Ay-yıldızlı forma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <meta name="yandex-verification" content="1cb8dbbe72296f40" />
      <body>{children}</body>
    </html>
  );
}
