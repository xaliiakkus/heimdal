export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary-main)/15%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-primary-main)/10%,transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,var(--color-primary-main)/8%,transparent_40%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary-main)]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[var(--color-primary-main)]/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[radial-gradient(at_50%_50%,var(--color-text-main)/10%,var(--color-background-main)/50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,var(--color-background-main)/40%_150%)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary-main)]/10 to-transparent animate-pulse" style={{ backgroundSize: "100% 400px", backgroundPosition: "0px -100px" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary-main)]/10 to-transparent animate-pulse-slow" style={{ backgroundSize: "400px 100%", backgroundPosition: "-100px 0px" }} />
      </div>
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[var(--color-primary-main)]/20 to-transparent blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-[var(--color-primary-main)]/10 to-transparent blur-3xl animate-pulse" />
    </div>
  );
}
