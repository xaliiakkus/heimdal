import { IMG_BASE, SITE_URLS } from "./constants";
import type { SliderItem, CasinoItem, GameChip, BannerItem } from "./types";

/** public/ klasöründeki logolar (Next.js root'tan sunulur) */
const LOGO = {
  sanscasino: "/SansCasino-logo-512x512.png",
  casinolevant: "/Levant-logo-512x512.png",
  vidobet: "/VidoBet-logo-512x512.png",
  ikasbet: "/ikasbet-logo-515x512.png",
} as const;

export const headerCta = {
  href: SITE_URLS.sanscasino,
  title: "ŞansCasino 2.500 TL Bonus",
  icon: `${IMG_BASE}/icons/header.webp`,
  alt: "ŞansCasino deneme bonusu - Güncel deneme bonusu veren siteler 2026",
};

export const sliderItems: SliderItem[] = [
  { slug: "sanscasino", image: LOGO.sanscasino, alt: "ŞansCasino 5.500 TL deneme bonusu - En iyi deneme bonusu veren siteler", href: SITE_URLS.sanscasino },
  { slug: "casinolevant", image: LOGO.casinolevant, alt: "CasinoLevant 4.400 TL deneme bonusu - Bonus veren siteler güncel", href: SITE_URLS.casinolevant },
  { slug: "vidobet", image: LOGO.vidobet, alt: "VidoBet 2.500 TL deneme bonusu - Güvenilir casino siteleri", href: SITE_URLS.vidobet },
  { slug: "ikasbet", image: LOGO.ikasbet, alt: "İkasBet 2.500 TL deneme bonusu - Deneme bonusu siteleri 2026", href: SITE_URLS.ikasbet },
];

export const gameChips: GameChip[] = [
  { name: "Canlı Blackjack", image: `${IMG_BASE}/game/profile/blackjack.jpg`, alt: "Canlı Blackjack - Deneme bonusu ile oyna", hot: true },
  { name: "Canlı Rulet", image: `${IMG_BASE}/game/profile/lightning-roulette.jpg`, alt: "Canlı Rulet - Bonus veren sitelerde oyna", hot: true },
  { name: "Sweet Bonanza", image: `${IMG_BASE}/game/profile/sweet.gif`, alt: "Sweet Bonanza slot - Deneme bonusu veren siteler", hot: true },
  { name: "Gates of Olympus", image: `${IMG_BASE}/game/profile/gatesof.gif`, alt: "Gates of Olympus - En iyi deneme bonusu siteleri", hot: true },
  { name: "Big Bass", image: `${IMG_BASE}/game/profile/bigbass.webp`, alt: "Big Bass - Casino deneme bonusu ile oyna", hot: true },
  { name: "Crazy Time", image: `${IMG_BASE}/game/profile/crazytime.gif`, alt: "Crazy Time canlı oyun - Deneme bonusu 2026" },
  { name: "Aviator", image: `${IMG_BASE}/game/profile/aviator.gif`, alt: "Aviator crash oyunu - Bonus veren siteler" },
  { name: "Starlight Princess", image: `${IMG_BASE}/game/profile/starlight.gif`, alt: "Starlight Princess slot - Güncel deneme bonusu" },
  { name: "Dog House", image: `${IMG_BASE}/game/profile/doghouse.webp`, alt: "Dog House - En güvenilir casino siteleri" },
];

export const trendSiteler: CasinoItem[] = [
  { slug: "sanscasino", image: LOGO.sanscasino, bonus: "5.500 ₺", bonusType: "Deneme Bonusu", alt: "ŞansCasino 5.500 TL deneme bonusu - Öne çıkan bonus veren site", pinned: 1, href: SITE_URLS.sanscasino },
  { slug: "casinolevant", image: LOGO.casinolevant, bonus: "4.400 ₺", bonusType: "Deneme Bonusu", alt: "CasinoLevant 4.400 TL deneme bonusu - Trend siteler", pinned: 2, href: SITE_URLS.casinolevant },
  { slug: "vidobet", image: LOGO.vidobet, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", alt: "VidoBet 2.500 TL deneme bonusu - Güvenilir bahis siteleri", stars: 5, href: SITE_URLS.vidobet },
  { slug: "ikasbet", image: LOGO.ikasbet, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", alt: "İkasBet 2.500 TL deneme bonusu - En iyi casino siteleri", stars: 5, href: SITE_URLS.ikasbet },
];

export const populerSiteler: CasinoItem[] = [
  { slug: "sanscasino", image: LOGO.sanscasino, bonus: "5.500 ₺", bonusType: "Deneme Bonusu", alt: "ŞansCasino deneme bonusu - Popüler bonus veren siteler", stars: 5, href: SITE_URLS.sanscasino },
  { slug: "casinolevant", image: LOGO.casinolevant, bonus: "4.400 ₺", bonusType: "Deneme Bonusu", alt: "CasinoLevant deneme bonusu - Güncel deneme bonusu siteleri", stars: 5, href: SITE_URLS.casinolevant },
  { slug: "vidobet", image: LOGO.vidobet, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", alt: "VidoBet deneme bonusu - 2026 deneme bonusu veren siteler", stars: 5, href: SITE_URLS.vidobet },
  { slug: "ikasbet", image: LOGO.ikasbet, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", alt: "İkasBet deneme bonusu - Deneme bonusu veren siteler güncel", stars: 5, href: SITE_URLS.ikasbet },
];

export const banners: BannerItem[] = [
  { slug: "sanscasino", image: LOGO.sanscasino, alt: "ŞansCasino 5.500 TL deneme bonusu - Deneme bonusu veren siteler rehberi", href: SITE_URLS.sanscasino },
  { slug: "casinolevant", image: LOGO.casinolevant, alt: "CasinoLevant 4.400 TL deneme bonusu - Bonus veren siteler 2026", href: SITE_URLS.casinolevant },
  { slug: "vidobet", image: LOGO.vidobet, alt: "VidoBet 2.500 TL deneme bonusu - Güvenilir casino siteleri listesi", href: SITE_URLS.vidobet },
  { slug: "ikasbet", image: LOGO.ikasbet, alt: "İkasBet 2.500 TL deneme bonusu - En iyi deneme bonusu siteleri", href: SITE_URLS.ikasbet },
];

export const footerCta = {
  href: SITE_URLS.sanscasino,
  title: "ŞansCasino 2.500 TL Bonus",
  icon: `${IMG_BASE}/icons/footer.webp`,
  alt: "ŞansCasino deneme bonusu - Güncel bonus veren siteler",
};

export const popupData = {
  href: SITE_URLS.sanscasino,
  image: LOGO.sanscasino,
  alt: "ŞansCasino 5.500 TL deneme bonusu kampanyası - Deneme bonusu veren siteler",
};

/** public/gif klasöründeki tüm GIF'ler popup için */
export const popupItems = [
  { href: SITE_URLS.sanscasino, image: "/gif/SansCasino.gif", alt: "ŞansCasino 5.500 TL deneme bonusu - Güncel deneme bonusu veren siteler" },
  { href: SITE_URLS.casinolevant, image: "/gif/Levant.gif", alt: "CasinoLevant 4.400 TL deneme bonusu - Bonus veren siteler 2026" },
  { href: SITE_URLS.vidobet, image: "/gif/VidoBet.gif", alt: "VidoBet 2.500 TL deneme bonusu - Güvenilir casino siteleri" },
];
