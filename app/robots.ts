import type { MetadataRoute } from "next";

const baseUrl ="https://millitakimimiz.rofi.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/v2/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/v2/"],
      },
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
        disallow: ["/api/", "/v2/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/v2/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
