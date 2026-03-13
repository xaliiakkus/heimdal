import BackgroundEffects from "./BackgroundEffects";
import AppHeader from "./AppHeader";
import BonusSlider from "./BonusSlider";
import SearchTabsWithContent from "./SearchTabsWithContent";
import AppNavigation from "./AppNavigation";
import FooterCta from "./FooterCta";
import PopupModalLazy from "./PopupModalLazy";
import { trendSiteler, populerSiteler } from "@/lib/data";

export default function DaaPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-background-main)]">
      <BackgroundEffects />
      <div className="relative flex-1 flex flex-col">
        <AppHeader />
        <BonusSlider />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-32 overflow-y-auto">
          <div className="py-1">
            <SearchTabsWithContent
              trendSiteler={trendSiteler}
              populerSiteler={populerSiteler}
            />
          </div>
        </main>
        <AppNavigation />
        <FooterCta />
      </div>
      <h1 className="sr-only">www.rofi.io</h1>
      <PopupModalLazy />
    </div>
  );
}
