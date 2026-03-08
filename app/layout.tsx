import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { getServerSiteUrl } from "./lib/site-url";
import { isBot, isTurkey } from "./lib/request-audience";
import { Analytics } from "@vercel/analytics/next"
// Bot ve Türkiye dışı → Googlebot vb. bunu görür
const MILLI_TAKIM_TITLE =
  "Deneme Bonusu Veren Siteler - Deneme Bonusu +200";
const MILLI_TAKIM_DESCRIPTION =
  "Deneme bonusu ve deneme bonusu 2026 güncel. Deneme bonusu veren siteler, deneme bonusu siteleri, deneme bonusu veren, bonus veren siteler. Deneme bonusu güncel ve 2026 deneme bonusu veren siteler rehberi.";

// Sadece yerel Türkiye kullanıcılarına gösterilen SEO
const SEO_TITLE =
  "Deneme Bonusu Veren Siteler - Deneme Bonusu +200";
const SEO_DESCRIPTION =
  "Deneme bonusu 2026 güncel. Deneme bonusu veren siteler, deneme bonusu siteleri, bonus veren siteler. Güncel 2026 deneme bonusu veren siteler rehberi. Ücretsiz. ";
const PAGE_KEYWORDS = [
  "en iyi casinolar 2026",
  "en iyi casinolar",
  "en iyi deneme bonusu siteleri 2026",
  "en iyi deneme bonusu siteleri",
  "en iyi deneme bonusu veren siteler",
  "en iyi deneme bonusu veren",
  "en iyi deneme bonusu siteleri güncel",
  "en iyi deneme bonusu güncel",
  "en iyi deneme bonusu veren siteler güncel",
  "en iyi deneme bonusu veren",
  "en güvenilir casino siteleri",
  "en güvenilir casino veren siteler",
  "en güvenilir casino veren",
  "en güvenilir casino siteleri güncel",
  "en güvenilir casino güncel",
  "en güvenilir casino veren siteler güncel",
  "en güvenilir casino siteleri 2026",
  "deneme bonusu",
  "deneme bonusu veren siteler",
  "deneme bonusu veren",
  "deneme bonusu siteleri 2026",
  "deneme bonusu siteleri",
  "deneme bonusu 2026",
  "deneme bonusu veren siteler güncel",
  "deneme bonusu güncel",
  "bonus veren siteler",
  "2026 deneme bonusu veren siteler",
];

/** Deneme bonusu metadata sadece Türkiye’den gelen gerçek kullanıcılara; botlar ve yurt dışı → Milli Takım */
function useDenemeBonusuMetadata(headersList: Headers): boolean {
  const ua = headersList.get("user-agent") ?? "";
  if (isBot(ua)) return false;
  return isTurkey(headersList);
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const siteUrl = getServerSiteUrl(headersList);
  const currentUrl = siteUrl.replace(/\/$/, "") || siteUrl;
  const showDeneme = useDenemeBonusuMetadata(headersList);

  if (showDeneme) {
    return {
      metadataBase: new URL(siteUrl),
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      authors: [{ name: "Deneme Bonusu Veren Siteler", url: siteUrl }],
      creator: "Deneme Bonusu Veren Siteler",
      publisher: "Deneme Bonusu",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        type: "website",
        locale: "tr_TR",
        alternateLocale: ["en_US"],
        url: currentUrl,
        siteName: "Deneme Bonusu Veren Siteler",
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        images: [
          {
            url: `${siteUrl}/SansCasino-logo-512x512.png`,
            width: 1200,
            height: 630,
            alt: "Deneme Bonusu 2026 - Deneme Bonusu Veren Siteler",
            type: "image/png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        images: [`${siteUrl}/SansCasino-logo-512x512.png`],
        creator: "@denemebonus",
        site: "@denemebonus",
      },
      alternates: {
        canonical: currentUrl,
        languages: {
          "tr-TR": currentUrl,
          "x-default": currentUrl,
        },
      },
      icons: {
        icon: [
          { url: `${siteUrl}/icon.svg`, type: "image/svg+xml" },
          { url: `${siteUrl}/favicon.ico`, sizes: "48x48", type: "image/x-icon" },
        ],
        shortcut: `${siteUrl}/favicon.ico`,
      },
      other: {
        "yandex-verification": "1cb8dbbe72296f40",
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "geo.region": "TR",
        "geo.placename": "Turkey",
      },
    };
  }

  // Botlar ve Türkiye dışı → Milli Takım (Googlebot vb. bunu görür)
  return {
    metadataBase: new URL(siteUrl),
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: currentUrl,
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
    },
    icons: {
      icon: [
        { url: `${siteUrl}/icon.svg`, type: "image/svg+xml" },
        { url: `${siteUrl}/favicon.ico`, sizes: "48x48", type: "image/x-icon" },
      ],
      shortcut: `${siteUrl}/favicon.ico`,
    },
    other: {
      "yandex-verification": "1cb8dbbe72296f40",
      "geo.region": "TR",
      "geo.placename": "Turkey",
    },
  };
}

// Structured Data: bot / Türkiye dışı → Milli Takım; sadece TR → Deneme Bonusu
function generateStructuredData(
  siteUrl: string,
  showDenemeBonusu: boolean
): object[] {
  const currentUrl = siteUrl.replace(/\/$/, "") || siteUrl;

  if (!showDenemeBonusu) {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        url: currentUrl,
        inLanguage: "tr-TR",
      },
    ];
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: currentUrl,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "tr-TR",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: currentUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Deneme bonus nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deneme bonus, casino ve bahis sitelerinin yeni üyelerine sunduğu ücretsiz bonus türüdür. Yatırım yapmadan bonus alabilir ve oyunları deneyebilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Deneme bonus nasıl alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deneme bonus almak için siteye üye olmanız yeterlidir. Bazı sitelerde canlı destek üzerinden talep etmeniz gerekebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Deneme bonus çekilebilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deneme bonus genellikle çevrim şartı tamamlandıktan sonra çekilebilir. Çevrim şartları siteye göre değişir.",
        },
      },
    ],
  };

  return [webPageSchema, breadcrumbSchema, faqSchema];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const siteUrl = getServerSiteUrl(headersList);
  const showDeneme = useDenemeBonusuMetadata(headersList);
  const structuredData = generateStructuredData(siteUrl, showDeneme);

  return (
    <html lang="tr">
      <head>
        {structuredData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
