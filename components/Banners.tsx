import Link from "next/link";
import { LINK_BASE, SITE_URLS } from "@/lib/constants";
import { banners } from "@/lib/data";

export default function Banners() {
  return (
    <div className="flex justify-center gap-4 py-4 flex-wrap">
      {banners.map((b) => (
        <Link
          key={b.slug}
          href={b.href ?? SITE_URLS[b.slug] ?? `${LINK_BASE}/${b.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={b.image} alt={b.alt ?? `${b.slug} deneme bonusu - Bonus veren siteler`} className="w-full max-w-[468px] h-[50px]" loading="lazy" />
        </Link>
      ))}
    </div>
  );
}
