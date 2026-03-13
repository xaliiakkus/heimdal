import Link from "next/link";
import { LINK_BASE, IMG_BASE, SITE_URLS } from "@/lib/constants";
import type { CasinoItem } from "@/lib/types";
import { IconExternalLink } from "./icons";

interface CasinoListProps {
  title: string;
  items: CasinoItem[];
}

function CasinoRow({ item }: { item: CasinoItem }) {
  const href = item.href ?? SITE_URLS[item.slug] ?? `${LINK_BASE}/${item.slug}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center px-3 transition-all duration-300 group border-b border-white/5 last:border-b-0 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-transparent ${item.pinned ? "pt-4 pb-2.5" : "py-2.5"}`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-[120px] flex-shrink-0">
        <div className="relative h-[60px] w-[120px]">
          {item.pinned && (
            <div className="absolute -top-[59px] left-0 right-0 flex justify-center z-20 -translate-x-[2px]">
              <img
                src={`${IMG_BASE}/icons/pin${item.pinned}.svg`}
                alt={`Öne çıkan ${item.bonus} deneme bonusu - Bonus veren siteler`}
                className="w-28 h-28 object-contain drop-shadow-2xl"
              />
            </div>
          )}
          {item.stars != null && item.stars > 0 && !item.pinned && (
            <div className="absolute -top-2 left-0 right-0 flex justify-center gap-0.5 z-10">
              {Array.from({ length: item.stars }).map((_, i) => (
                <img key={i} src={`${IMG_BASE}/icons/star.webp`} alt="Yıldızlı deneme bonusu" className="w-3.5 h-3.5 object-contain drop-shadow-lg" />
              ))}
            </div>
          )}
          <div className="relative h-full w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-visible border border-white/10 group-hover:border-primary-500/30 transition-all duration-300">
            <img
              src={item.image}
              alt={item.alt ?? `${item.bonus} ${item.bonusType} - Deneme bonusu veren siteler`}
              className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-3 min-w-0">
        <span className="font-bold text-sm bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent truncate text-center mb-0.5">
          {item.bonus}
        </span>
        <span className="text-[11px] text-[var(--color-text-muted)] truncate text-center">{item.bonusType}</span>
      </div>
      <div className="flex-shrink-0">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 group-hover:from-primary-500 group-hover:to-primary-400 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-300 transform group-hover:scale-105">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] group-hover:animate-shimmer" />
          <div className="flex items-center gap-1 relative z-10">
            <span>Bonusu Al</span>
            <IconExternalLink size={10} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CasinoList({ title, items }: CasinoListProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-[var(--color-background-card)] border border-white/5 shadow-2xl">
      <div className="px-4 py-2 border-b border-white/5">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1">
            <img src={`${IMG_BASE}/icons/star.webp`} alt="Deneme bonusu" className="w-6 h-6 object-contain" />
            <img src={`${IMG_BASE}/icons/star.webp`} alt="Bonus veren siteler" className="w-6 h-6 object-contain" />
          </div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <div className="flex items-center gap-1">
            <img src={`${IMG_BASE}/icons/star.webp`} alt="Deneme bonusu siteleri" className="w-6 h-6 object-contain" />
            <img src={`${IMG_BASE}/icons/star.webp`} alt="Güvenilir casino" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl bg-[var(--color-background-card)] border border-white/5 shadow-2xl">
        {items.map((item) => (
          <CasinoRow key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
