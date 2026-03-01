import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEMO_PATH = "/deneme/bonusu";
const HOME_PATH = "/";

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
    /googlebot|googlebot-mobile|google-inspectiontool|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|yandexmobilebot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|showyoubot|outbrain|pinterest|slackbot|redditbot|applebot|whatsapp|flipboard|tumblr|bitlybot|discordbot|qwantify|pinterestbot|chrome-lighthouse|telegrambot|petalbot|ahrefsbot|semrushbot|dotbot|mj12bot/i.test(ua) ||
    /bot|crawler|spider|scraper|headless|curl|wget|python-requests|go-http-client/i.test(ua)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") ?? "";
  const mobile = isMobile(userAgent);
  const bot = isBot(userAgent);

  // Botlar (mobil bot dahil: Googlebot-Mobile vb.) → önce ele alınır, her zaman normal içerik; DaaPage asla gösterilmez
  if (bot) {
    if (pathname.startsWith(DEMO_PATH)) return NextResponse.redirect(new URL(HOME_PATH, request.url));
    return NextResponse.next();
  }

  // Tüm ülkeler aynı mantık: mobil → DaaPage, web (masaüstü) → NormalContent
  if (pathname === HOME_PATH) {
    if (mobile) return NextResponse.redirect(new URL(DEMO_PATH, request.url));
    return NextResponse.next(); // web: NormalContent
  }

  if (pathname.startsWith(DEMO_PATH)) {
    if (!mobile) return NextResponse.redirect(new URL(HOME_PATH, request.url));
    return NextResponse.next(); // mobil: DaaPage
  }

  return NextResponse.next();
}
