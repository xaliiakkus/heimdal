export interface SliderItem {
  slug: string;
  image: string;
  alt: string;
  href?: string;
}

export interface CasinoItem {
  slug: string;
  image: string;
  bonus: string;
  bonusType: string;
  alt?: string;
  pinned?: 1 | 2;
  stars?: number;
  href?: string;
}

export interface GameChip {
  name: string;
  image: string;
  alt?: string;
  hot?: boolean;
}

export interface BannerItem {
  slug: string;
  image: string;
  alt?: string;
  href?: string;
}
