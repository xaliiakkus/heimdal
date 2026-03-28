import type { Metadata, Viewport } from "next";
import DaaPage from "@/components/DaaPage";
import { headers } from "next/headers";
import { getServerSiteUrl } from "../lib/site-url";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  viewportFit: "cover",
};
// Force dynamic rendering
export const dynamic = 'force-dynamic';

// SEO – tamamen hedef anahtar kelimelere odaklı
const SEO_TITLE = 'Deneme Bonusu | Deneme Bonusu 2026 ve Deneme Bonusu Siteleri Güncel';
const SEO_DESCRIPTION = 'Deneme bonusu ve deneme bonusu 2026 güncel. Deneme bonusu veren siteler, deneme bonusu siteleri, deneme bonusu veren, bonus veren siteler. Deneme bonusu güncel ve 2026 deneme bonusu veren siteler rehberi.';
const PAGE_KEYWORDS = [
  'deneme bonusu',
  'deneme bonusu veren siteler',
  'deneme bonusu veren',
  'deneme bonusu siteleri 2026',
  'deneme bonusu siteleri',
  'deneme bonusu 2026',
  'deneme bonusu veren siteler güncel',
  'deneme bonusu güncel',
  'bonus veren siteler',
  '2026 deneme bonusu veren siteler',
  'dene bonusu veren siteler',
  'deneme bonusu veren sitelerine',
  'denene bonusu veren siteler',
  'denenme bonusu veren siteler',
  'dene bonusu',
  'deneme bonusu dene',
  'denene bonusu',
  'denenme bonus',
  'bonus dene bonus site',
  'denene bonusu veren',
  'deneme bonusu verem',
  'deneme bonusu verem site',
];

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const siteUrl = getServerSiteUrl(headersList);
  const currentUrl = `${siteUrl}/deneme-bonus`;
  const modifiedTime = new Date().toISOString();
  const publishedTime = "2024-01-01T00:00:00.000Z";

  return {
    metadataBase: new URL(siteUrl),
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: [...PAGE_KEYWORDS],
    authors: [
      { name: 'Deneme Bonusu Veren Siteler', url: siteUrl },
    ],
    creator: 'Deneme Bonusu Veren Siteler',
    publisher: 'Deneme Bonusu',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      alternateLocale: ['en_US'],
      url: currentUrl,
      siteName: 'Deneme Bonusu Veren Siteler',
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: [
        {
          url: `${siteUrl}/heimdal512x512.png`,
          width: 1200,
          height: 630,
          alt: 'Deneme Bonusu 2026 - Deneme Bonusu Veren Siteler',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: [`${siteUrl}/heimdal512x512.png`],
      creator: '@denemebonus',
      site: '@denemebonus',
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'tr-TR': currentUrl,
        'x-default': currentUrl,
      },
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'og:updated_time': modifiedTime,
    },
  };
}

// Structured Data for SEO
function generateStructuredData(siteUrl: string) {
  const currentUrl = `${siteUrl}/deneme-bonus`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Deneme Bonusu | Deneme Bonusu 2026 ve Deneme Bonusu Siteleri Güncel',
    description: SEO_DESCRIPTION,
    url: currentUrl,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    inLanguage: 'tr-TR',
  };

  const homeUrl = `${siteUrl.replace(/\/$/, '')}/deneme-bonus-veren-siteler`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Deneme Bonusu',
        item: currentUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Deneme bonus nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deneme bonus, casino ve bahis sitelerinin yeni üyelerine sunduğu ücretsiz bonus türüdür. Yatırım yapmadan bonus alabilir ve oyunları deneyebilirsiniz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Deneme bonus nasıl alınır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deneme bonus almak için siteye üye olmanız yeterlidir. Bazı sitelerde canlı destek üzerinden talep etmeniz gerekebilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Deneme bonus çekilebilir mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deneme bonus genellikle çevrim şartı tamamlandıktan sonra çekilebilir. Çevrim şartları siteye göre değişir.',
        },
      },
    ],
  };

  return [webPageSchema, breadcrumbSchema, faqSchema];
}
/** /deneme/bonus: Middleware ile yönlendirilen (mobil / tr / TR) kullanıcılara bonus arayüzü. */
export default async function DemoPage() {
  const headersList = await headers();
  const siteUrl = getServerSiteUrl(headersList);
  const structuredData = generateStructuredData(siteUrl);
  return (
    <div className="daa-demo min-h-screen bg-[var(--color-background-main)]" style={{ color: "var(--color-text-main)" }}>
      <DaaPage />
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
