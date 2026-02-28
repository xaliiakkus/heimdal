import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloaking Demo",
  description: "İki katmanlı cloaking sistemi demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
