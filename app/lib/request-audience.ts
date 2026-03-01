/**
 * Bot/crawler tespiti. Googlebot, Bingbot vb. — metadata/layout ayrımı için.
 */
export function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return (
    /googlebot|googlebot-mobile|google-inspectiontool|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|yandexmobilebot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|applebot|whatsapp|telegrambot|petalbot|ahrefsbot|semrushbot|dotbot|mj12bot/i.test(
      ua
    ) || /bot|crawler|spider|scraper|headless|curl|wget|python-requests|go-http-client/i.test(ua)
  );
}

/**
 * İstek Türkiye'den mi? (Vercel/Cloudflare geo veya Accept-Language fallback)
 */
export function isTurkey(
  headersList: Headers
): boolean {
  const country =
    headersList.get("x-vercel-ip-country") ??
    headersList.get("cf-ipcountry") ??
    null;
  if (country) return country.toUpperCase() === "TR";
  const lang = headersList.get("accept-language") ?? "";
  return /^tr\b/i.test(lang) || /,tr\b/i.test(lang);
}
