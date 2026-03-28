import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEMO_PATH = "/deneme/bonusu";
const HOME_PATH = "/";
const DENEME_PATH = "/deneme/bonusu";

/**
 * Google ve diğer botlar için sunucu tarafı tazelik sinyali:
 * önbellek her istekte doğrulama yapar; Last-Modified istek anına yakın olur.
 */
function withSeoFreshnessHeaders(
  request: NextRequest,
  response: NextResponse
): NextResponse {
  const { pathname } = request.nextUrl;
  const isSeoHtmlPath =
    pathname === HOME_PATH ||
    pathname.startsWith(DENEME_PATH) ||
    pathname.startsWith(DEMO_PATH) ||
    pathname === DENEME_PATH;
  if (!isSeoHtmlPath) return response;

  const now = new Date();
  response.headers.set(
    "Cache-Control",
    "private, no-cache, must-revalidate, max-age=0, s-maxage=0"
  );
  response.headers.set("Last-Modified", now.toUTCString());
  response.headers.set("Expires", "0");
  return response;
}

function isMobile(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return (
    /android|webos|iphone|ipod|ipad|blackberry|iemobile|opera mini|mobile|tablet/i.test(ua) ||
    /mobile|android|iphone|ipad|phone/i.test(ua)
  );
}

/** Bot/crawler tespiti. Mobil botlar (Googlebot-Mobile vb.) da yakalanır — kontrol en başta yapılır. */
function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return (
    /go-http-client/i.test(ua)
  );
} 

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") ?? "";
  const mobile = isMobile(userAgent);
  const bot = isBot(userAgent);

  // Botlar (mobil bot dahil: Googlebot-Mobile vb.) → önce ele alınır, her zaman normal içerik; DaaPage asla gösterilmez
  if (bot) {
    if (pathname.startsWith(DEMO_PATH)) {
      return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
    return withSeoFreshnessHeaders(request, NextResponse.next());
  }

  // Tüm ülkeler aynı mantık: mobil → DaaPage, web (masaüstü) → NormalContent
  if (pathname === HOME_PATH) {
    if (mobile) {
      return NextResponse.redirect(new URL(DEMO_PATH, request.url));
    }
    return withSeoFreshnessHeaders(request, NextResponse.next());
  }

  if (pathname.startsWith(DEMO_PATH)) {
    if (!mobile) {
      return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
    return withSeoFreshnessHeaders(request, NextResponse.next());
  }

  if (pathname === DENEME_PATH || pathname.startsWith(`${DENEME_PATH}/`)) {
    return withSeoFreshnessHeaders(request, NextResponse.next());
  }

  return NextResponse.next();
}
