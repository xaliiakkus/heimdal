import Link from "next/link";
import Image from "next/image";
import { headerCta } from "@/lib/data";

export default function AppHeader() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 shadow-lg bg-[var(--color-background-main)] app-header backdrop-blur-xl">
      <div className="max-w-7xl mx-auto p-1">
        <Link href={headerCta.href} target="_blank" rel="noopener noreferrer" className="block group">
          <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 rounded-xl p-2 relative overflow-hidden shadow-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center relative">
                  <Image src={headerCta.icon} alt={headerCta.alt} width={28} height={28} className="object-contain drop-shadow-lg" priority />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-none drop-shadow-md">{headerCta.title}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-white/90 text-primary-600 px-2 py-0.5 rounded-md text-[10px] font-semibold shadow-md group-hover:bg-white transition-all duration-300">
                <span>Bonusu Al</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
