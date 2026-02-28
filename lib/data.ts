import { IMG_BASE, LINK_BASE } from "./constants";
import type { SliderItem, CasinoItem, GameChip, BannerItem } from "./types";

export const headerCta = {
  href: `${LINK_BASE}/spinco`,
  title: "Spinco 2.500 TL Bonus",
  icon: `${IMG_BASE}/icons/header.webp`,
};

export const sliderItems: SliderItem[] = [
  { slug: "slotella", image: `${IMG_BASE}/dec1/slotella.jpg`, alt: "3.000 ₺" },
  { slug: "pashagaming", image: `${IMG_BASE}/nov4/pashagaming.jpeg`, alt: "2.500 ₺" },
  { slug: "betsin", image: `${IMG_BASE}/nov4/betsin.png`, alt: "2.500 ₺" },
  { slug: "b1bahis", image: `${IMG_BASE}/dec2/b1.png`, alt: "20.000 ₺" },
  { slug: "ritzbet", image: `${IMG_BASE}/dec2/ritz.png`, alt: "4.444 ₺" },
  { slug: "damabet", image: `${IMG_BASE}/nov4/damabet.png`, alt: "2.500 ₺" },
  { slug: "grandpashabet", image: `${IMG_BASE}/nov6/grand.jpg`, alt: "20.000 ₺" },
];

export const gameChips: GameChip[] = [
  { name: "Canlı Blackjack", image: `${IMG_BASE}/game/profile/blackjack.jpg`, hot: true },
  { name: "Canlı Rulet", image: `${IMG_BASE}/game/profile/lightning-roulette.jpg`, hot: true },
  { name: "Sweet Bonanza", image: `${IMG_BASE}/game/profile/sweet.gif`, hot: true },
  { name: "Gates of Olympus", image: `${IMG_BASE}/game/profile/gatesof.gif`, hot: true },
  { name: "Big Bass", image: `${IMG_BASE}/game/profile/bigbass.webp`, hot: true },
  { name: "Crazy Time", image: `${IMG_BASE}/game/profile/crazytime.gif` },
  { name: "Aviator", image: `${IMG_BASE}/game/profile/aviator.gif` },
  { name: "Starlight Princess", image: `${IMG_BASE}/game/profile/starlight.gif` },
  { name: "Dog House", image: `${IMG_BASE}/game/profile/doghouse.webp` },
];

export const trendSiteler: CasinoItem[] = [
  { slug: "grandpashabet", image: `${IMG_BASE}/nov6/grand.jpg`, bonus: "20.000 ₺", bonusType: "Deneme Bonusu", pinned: 1 },
  { slug: "meritbet", image: `${IMG_BASE}/dec3/mmeritbet.jpg`, bonus: "%50", bonusType: "Kayıp Bonusu", pinned: 2 },
  { slug: "betasus", image: `${IMG_BASE}/nov6/betasus.png`, bonus: "4.400 ₺", bonusType: "Deneme Bonusu", stars: 5 },
  { slug: "cratosroyal", image: `${IMG_BASE}/nov6/cratosroyal.webp`, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", stars: 5 },
  { slug: "spinco", image: `${IMG_BASE}/nov4/spinco.png`, bonus: "2.500 ₺", bonusType: "Deneme Bonusu", stars: 4 },
  { slug: "maxwin", image: `${IMG_BASE}/nov4/maxwin.jpeg`, bonus: "5.555 ₺", bonusType: "Deneme Bonusu", stars: 5 },
];

export const populerSiteler: CasinoItem[] = [
  { slug: "robobet", image: `${IMG_BASE}/dec2/robo.png`, bonus: "1.000 ₺", bonusType: "Deneme Bonusu", stars: 4 },
  { slug: "yekbet", image: `${IMG_BASE}/dec2/yekbet.jpg`, bonus: "4.000 ₺", bonusType: "Deneme Bonusu", stars: 5 },
  { slug: "grandpashabet", image: `${IMG_BASE}/nov6/grand.jpg`, bonus: "20.000 ₺", bonusType: "Hoşgeldin Bonusu", stars: 5 },
  { slug: "betasus", image: `${IMG_BASE}/nov6/betasus.png`, bonus: "4.400 ₺", bonusType: "Deneme Bonusu", stars: 5 },
];

export const banners: BannerItem[] = [
  { slug: "cratosroyal", image: `${IMG_BASE}/nov8/3.gif` },
  { slug: "radissonbet", image: `${IMG_BASE}/nov8/2.gif` },
  { slug: "casinofast", image: `${IMG_BASE}/nov8/5.gif` },
];

export const footerCta = {
  href: `${LINK_BASE}/betasus`,
  title: "Betasus 2.500 TL Bonus",
  icon: `${IMG_BASE}/icons/footer.webp`,
};

export const popupData = {
  href: `${LINK_BASE}/grandpashabet`,
  image: `${IMG_BASE}/dec3/n2.gif`,
  alt: "Big Bonus Offer",
};
