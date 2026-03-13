import Link from "next/link";
import { IMG_BASE } from "@/lib/constants";

const navItems = [
  { id: "home", label: "Anasayfa", icon: `${IMG_BASE}/icons/home.webp`, active: true },
  { id: "winners", label: "Kazananlar", icon: `${IMG_BASE}/icons/win.webp` },
  { id: "wheel", label: "Çark", icon: `${IMG_BASE}/icons/wheel.webp` },
  { id: "giveaway", label: "Çekilişler", icon: `${IMG_BASE}/icons/giveaway.webp` },
  { id: "telegram", label: "Telegram", icon: `${IMG_BASE}/icons/telegram.webp`, href: "https://t.me/heimdal_bonuslar", external: true },
  { id: "contact", label: "İletişim", icon: `${IMG_BASE}/icons/plus.png` },
];

export default function AppNavigation() {
  return (
    <div className="app-navigation fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="px-4 pb-1">
        <div className="max-w-md mx-auto pointer-events-auto">
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-3xl shadow-2xl border border-white/20 p-0.5 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-primary-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-60" />
            <div className="relative grid grid-cols-6 gap-0 h-14 items-center">
              {navItems.map((item) => {
                const content = (
                  <>
                    <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain drop-shadow-lg" />
                    <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
                  </>
                );
                const baseClass = "flex flex-col items-center justify-center h-full rounded-2xl transition-all duration-300";
                const activeClass = item.active ? "bg-white/20 text-white scale-105" : "text-white/70 hover:text-white hover:bg-white/10";
                const telegramClass = item.id === "telegram" ? "text-[#229ED9] hover:text-[#1a8cc4] hover:bg-white/10" : "";

                if (item.external && item.href) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseClass} ${telegramClass}`}
                    >
                      {content}
                    </Link>
                  );
                }
                return (
                  <button key={item.id} type="button" className={`${baseClass} ${activeClass} ${telegramClass}`}>
                    {content}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
