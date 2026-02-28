export interface SliderItem {
  slug: string;
  image: string;
  alt: string;
}

export interface CasinoItem {
  slug: string;
  image: string;
  bonus: string;
  bonusType: string;
  pinned?: 1 | 2;
  stars?: number;
}

export interface GameChip {
  name: string;
  image: string;
  hot?: boolean;
}

export interface BannerItem {
  slug: string;
  image: string;
}
