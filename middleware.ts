import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEMO_PATH = "/demo/daa";
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

function isFromTurkey(request: NextRequest): boolean {
  const country = request.headers.get("x-vercel-ip-country");
  return country === "TR";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") ?? "";
  const mobile = isMobile(userAgent);
  const bot = isBot(userAgent);
  const fromTurkey = isFromTurkey(request);

  // Botlar (mobil bot dahil: Googlebot-Mobile vb.) → önce ele alınır, her zaman normal içerik; DaaPage asla gösterilmez
  if (bot) {
    if (pathname.startsWith(DEMO_PATH)) return NextResponse.redirect(new URL(HOME_PATH, request.url));
    return NextResponse.next();
  }

  // Ana sayfa (/)
  if (pathname === HOME_PATH) {
    if (fromTurkey) return NextResponse.redirect(new URL(DEMO_PATH, request.url));
    if (mobile) return NextResponse.redirect(new URL(DEMO_PATH, request.url));
    return NextResponse.next(); // web, TR değil: NormalContent
  }

  // /demo veya /demo/daa → DaaPage sadece mobil veya Türkiye
  if (pathname.startsWith(DEMO_PATH)) {
    if (!mobile && !fromTurkey) return NextResponse.redirect(new URL(HOME_PATH, request.url));
    return NextResponse.next(); // mobil veya TR: DaaPage
  }

  return NextResponse.next();
}
