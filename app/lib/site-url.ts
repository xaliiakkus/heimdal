/**
 * Request headers'dan site base URL'ini üretir (canonical, openGraph vb. için).
 */
export function getServerSiteUrl(headersList: Headers): string {
  const host = headersList.get("host") ?? "localhost:3000";
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}
