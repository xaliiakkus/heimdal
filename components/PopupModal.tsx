"use client";

import { useState } from "react";
import Link from "next/link";
import { popupItems } from "@/lib/data";
import { IconX, IconPointer } from "./icons";

export default function PopupModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="h-screen flex items-start justify-center p-2 pt-4 overflow-y-auto">
        <div className="w-full max-w-[95vw] mx-auto animate-slide-down relative" style={{ maxWidth: "min(320px, 95vw)" }}>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute -top-2 -right-2 z-20 bg-red-500/90 hover:bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm border border-red-400/30"
            aria-label="Kapat"
          >
            <IconX size={14} />
          </button>
          <div className="flex flex-col gap-3">
            {popupItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="absolute bottom-3 left-3 z-10 animate-bounce">
                  <div className="bg-white/10 backdrop-blur-md text-white px-2 py-1 rounded-full text-[10px] font-medium shadow-lg flex items-center gap-1 border border-white/20">
                    <IconPointer className="flex-shrink-0 text-amber-400" size={10} />
                    <span>Tikla</span>
                  </div>
                </div>
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 hover:border-white/40">
                  <div className="p-1.5">
                    <div
                      className="w-full rounded-xl overflow-hidden"
                      style={{ aspectRatio: "280 / 560", maxHeight: "calc((100vh - 120px) / 3)" }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="transition-opacity duration-300 opacity-100 w-full h-full object-contain touch-manipulation"
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
