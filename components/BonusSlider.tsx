import Link from "next/link";
import Image from "next/image";
import { LINK_BASE } from "@/lib/constants";
import { sliderItems } from "@/lib/data";
import { IconExternalLink } from "./icons";

export default function BonusSlider() {
  return (
    <div className="px-3 py-3 app-slider">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2.5 overflow-x-auto pb-6 scrollbar-hide">
          {sliderItems.map((item, i) => (
            <Link
              key={item.slug}
              href={`${LINK_BASE}/${item.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 block group cursor-pointer w-[178px]"
            >
              <div className="relative h-14 rounded-xl overflow-hidden bg-gradient-to-r from-white/10 to-white/5 border border-white/15 hover:border-primary-400/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={120}
                    height={40}
                    className="h-10 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading={i < 3 ? "eager" : "lazy"}
                    priority={i < 2}
                  />
                </div>
                <div className="absolute top-1 right-1.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary-500">
                  <IconExternalLink className="text-white" size={10} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
