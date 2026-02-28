import type { Metadata, Viewport } from "next";
import DaaPage from "@/components/DaaPage";

export const metadata: Metadata = {
  title: "www.amillitakimimiz.com",
  description: "Deneme Bonusu – Real Demo (React)",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

/** Statik üretim: sayfa build zamanında HTML olarak üretilir, sunucu anında cevap verir */
export const dynamic = "force-static";

export default function DemoDaaPage() {
  return (
    <div className="daa-demo min-h-screen bg-[var(--color-background-main)]" style={{ color: "var(--color-text-main)" }}>
      <DaaPage />
    </div>
  );
}
