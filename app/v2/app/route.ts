import { NextRequest } from "next/server";
import { readFileSync } from "fs";
import {
  DEMO_HTML_PATH,
  END_SCRIPT,
  replaceMamaUrls,
  getCasinoInnerRaw,
  getCleanHtml,
  injectCriticalCasinoCss,
} from "@/app/lib/cloaking";

/**
 * GET /v2/app — da.html ve daa.html tam halleriyle.
 * - ?clean=1 → da.html (A Milli Takım, temiz içerik) aynen.
 * - yoksa → daa.html inner (ilk </script> sonrası) aynen; sadece mama URL'leri origin ile değişir.
 *   daa.html yoksa demo.html inner fallback.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const origin = url.origin;
  const isClean = url.searchParams.get("clean") === "1";

  if (isClean) {
    try {
      const cleanHtml = getCleanHtml();
      return new Response(cleanHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    } catch {
      return new Response(
        "<!DOCTYPE html><html><body><p>da.html bulunamadı.</p></body></html>",
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }
  }

  let inner: string;
  try {
    inner = getCasinoInnerRaw();
  } catch {
    try {
      const fullHtml = readFileSync(DEMO_HTML_PATH, "utf-8");
      const afterScript = fullHtml.indexOf(END_SCRIPT);
      inner =
        afterScript === -1
          ? fullHtml.trim()
          : fullHtml.slice(afterScript + END_SCRIPT.length).trim();
    } catch {
      return new Response(
        "<!DOCTYPE html><html><body><p>daa.html ve demo.html bulunamadı.</p></body></html>",
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }
  }

  inner = replaceMamaUrls(inner, origin);
  inner = injectCriticalCasinoCss(inner);

  return new Response(inner, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
