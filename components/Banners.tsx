import Link from "next/link";
import { LINK_BASE } from "@/lib/constants";
import { banners } from "@/lib/data";

export default function Banners() {
  return (
    <div className="flex justify-center gap-4 py-4 flex-wrap">
      {banners.map((b) => (
        <Link
          key={b.slug}
          href={`${LINK_BASE}/${b.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={b.image} alt="Banner" className="w-full max-w-[468px] h-auto" loading="lazy" />
        </Link>
      ))}
    </div>
  );
}
