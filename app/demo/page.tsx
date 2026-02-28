import type { Metadata, Viewport } from "next";
import DaaPage from "@/components/DaaPage";

export const metadata: Metadata = {
  title: "www.amillitakimimiz.com",
  description: "Deneme Bonusu – Demo",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

/** /demo: Middleware ile yönlendirilen (mobil / tr / TR) kullanıcılara bonus arayüzü. */
export default function DemoPage() {
  return (
    <div className="daa-demo min-h-screen bg-[var(--color-background-main)]" style={{ color: "var(--color-text-main)" }}>
      <DaaPage />
    </div>
  );
}
