"use client";

import { useState } from "react";
import SearchTabs, { type TabId } from "./SearchTabs";
import GameChips from "./GameChips";
import CasinoList from "./CasinoList";
import Banners from "./Banners";
import type { CasinoItem } from "@/lib/types";

interface SearchTabsWithContentProps {
  trendSiteler: CasinoItem[];
  populerSiteler: CasinoItem[];
}

export default function SearchTabsWithContent({
  trendSiteler,
  populerSiteler,
}: SearchTabsWithContentProps) {
  const [active, setActive] = useState<TabId>("all");

  const showTrend = active === "all" || active === "trend";
  const showPopular = active === "all" || active === "popular";

  return (
    <>
      <SearchTabs active={active} onTabChange={setActive} />
      <GameChips />
      <div className="space-y-4">
        {showTrend && <CasinoList title="Trend Siteler" items={trendSiteler} />}
        <Banners />
        {showPopular && (
          <CasinoList title="Popüler Bahis Siteleri" items={populerSiteler} />
        )}
      </div>
    </>
  );
}
