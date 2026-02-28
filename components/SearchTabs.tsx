"use client";

import { IconSearch, IconLayers } from "./icons";

export type TabId = "all" | "trend" | "popular";

interface SearchTabsProps {
  active: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function SearchTabs({ active, onTabChange }: SearchTabsProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500/10 to-primary-500/20 rounded-2xl blur-lg opacity-60" />
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl border border-white/15 p-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="group relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 shrink-0 bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/15"
          >
            <IconSearch className="text-primary-400" size={16} />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex-1 flex overflow-x-auto scrollbar-hide gap-1.5">
            <button
              type="button"
              onClick={() => onTabChange("all")}
              className={`group relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg whitespace-nowrap text-[10px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation ${
                active === "all"
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <IconLayers size={10} className={active === "all" ? "text-white" : ""} />
              <span>Tumu</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange("trend")}
              className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap text-[10px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation ${
                active === "trend" ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white" : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              Trend Siteler
            </button>
            <button
              type="button"
              onClick={() => onTabChange("popular")}
              className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap text-[10px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation ${
                active === "popular" ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white" : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              Popüler Bahis Siteleri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
