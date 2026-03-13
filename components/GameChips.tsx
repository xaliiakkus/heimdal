import { gameChips } from "@/lib/data";

export default function GameChips() {
  return (
    <div className="py-5 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 px-4">
        {gameChips.map((chip) => (
          <button
            key={chip.name}
            type="button"
            className="flex-shrink-0 flex flex-col items-center group"
          >
            <div className="relative">
              <div
                className={`relative w-16 h-16 rounded-xl p-[2px] transition-all duration-300 group-hover:scale-105 group-active:scale-95 ${
                  chip.hot
                    ? "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 shadow-[0_0_20px_rgba(251,146,60,0.5)]"
                    : "bg-gradient-to-br from-primary-400 via-primary-500 to-primary-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                }`}
              >
                <div className="w-full h-full rounded-[10px] border-2 border-[var(--color-background-main)] overflow-hidden bg-black">
                  <img
                    src={chip.image}
                    alt={chip.alt ?? `${chip.name} - Deneme bonusu ile oyna`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              {chip.hot && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-[var(--color-background-main)]">
                  <span className="text-[7px]">🔥</span>
                </div>
              )}
            </div>
            <span className="mt-1.5 text-[10px] font-medium text-[var(--color-text-secondary)] max-w-[64px] truncate group-hover:text-white transition-colors text-center">
              {chip.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
