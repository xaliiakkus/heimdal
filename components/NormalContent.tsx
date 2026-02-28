"use client";

/**
 * Normal içerik: da.html benzeri "A Milli Takım" tarzı masum sayfa.
 * Middleware ile yönlendirilmeyen (web + dil en + TR dışı) kullanıcılara gösterilir.
 */
export default function NormalContent() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202122] font-sans antialiased">
      {/* Header */}
      <header className="bg-white border-b border-[#a2a9b1]">
        <div className="bg-[#e30a17] border-b-2 border-white py-1.5">
          <div className="max-w-[1200px] mx-auto px-6 text-center text-white text-sm font-semibold">
            🇹🇷 A MİLLİ TAKIM ANSİKLOPEDİSİ 🇹🇷
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <a href="/" className="text-2xl font-bold text-[#e30a17] no-underline flex items-center gap-2 font-serif">
            ⚽ A Milli Takımımız
          </a>
          <div className="flex items-center border border-[#a2a9b1] rounded-sm bg-white">
            <input
              type="text"
              placeholder="Futbolcu, maç ara..."
              className="border-0 py-1.5 px-3 text-sm w-60 outline-none"
            />
            <button type="button" className="bg-[#f8f9fa] border-l border-[#a2a9b1] py-1.5 px-3 cursor-pointer">
              🔍
            </button>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-[#f0f0f0] border-b border-[#a2a9b1]">
        <ul className="max-w-[1200px] mx-auto px-6 py-0 flex flex-wrap list-none gap-0">
          {[
            { href: "#", label: "🏠 Ana Sayfa" },
            { href: "#tarihce", label: "📜 Tarihçe" },
            { href: "#basarilar", label: "🏆 Başarılar" },
            { href: "#unlu-futbolcular", label: "👥 Futbolcular" },
            { href: "#teknik-direktorler", label: "👔 TD'ler" },
            { href: "#onemli-maclar", label: "⭐ Unutulmaz Maçlar" },
            { href: "#istatistikler", label: "📊 İstatistikler" },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-2.5 px-3.5 text-sm text-[#202122] no-underline border-r border-[#d0d0d0] hover:bg-[#e30a17] hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main */}
      <div className="max-w-[1200px] mx-auto bg-white min-h-[calc(100vh-200px)]">
        <div className="p-6">
          <h1 className="font-serif text-3xl font-normal border-b border-[#a2a9b1] pb-2 mb-4 text-[#202122]">
            Türkiye Millî Futbol Takımı
          </h1>

          {/* Infobox */}
          <div className="float-right w-80 border border-[#a2a9b1] bg-[#f8f9fa] text-sm my-0 mx-0 mb-4 ml-4 max-md:float-none max-md:w-full max-md:mx-0 max-md:my-4">
            <div className="bg-[#e30a17] text-white py-3 text-center font-bold text-lg">
              TÜRKİYE
            </div>
            <div className="h-44 bg-gradient-to-br from-[#e30a17] to-[#c70d14] flex items-center justify-center text-6xl border-b border-[#a2a9b1]">
              🇹🇷
            </div>
            <div className="p-3">
              {[
                { label: "Lakap:", value: "Ay-Yıldızlılar" },
                { label: "Federasyon:", value: "TFF (1923)" },
                { label: "Konfederasyon:", value: "UEFA (Avrupa)" },
                { label: "Teknik Direktör:", value: "Vincenzo Montella" },
                { label: "Kaptan:", value: "Hakan Çalhanoğlu" },
                { label: "En Fazla Maç:", value: "Rüştü Reçber (120)" },
                { label: "En Fazla Gol:", value: "Hakan Şükür (51)" },
                { label: "İlk Maç:", value: "1923 (Romanya)" },
              ].map(({ label, value }) => (
                <div key={label} className="flex py-2 border-b border-[#e8e9ea] last:border-b-0">
                  <span className="font-bold w-28 shrink-0 text-[#54595d]">{label}</span>
                  <span className="flex-1">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mb-4">
            <strong>Türkiye Millî Futbol Takımı</strong> (kısaca <strong>A Millî Takım</strong>), Türkiye&apos;yi uluslararası futbol müsabakalarında temsil eden ve Türkiye Futbol Federasyonu (TFF) tarafından yönetilen millî futbol takımıdır. Takım, kırmızı-beyaz renkli formasıyla tanınır ve &quot;Ay-Yıldızlılar&quot; lakabıyla anılır.
          </p>
          <p className="mb-4">
            Türkiye Millî Takımı, 2002 FIFA Dünya Kupası&apos;nda üçüncülük elde ederek tarihin en büyük başarısını yakalamıştır. Ayrıca 2008 UEFA Avrupa Futbol Şampiyonası&apos;nda yarı finale yükselmiştir.
          </p>

          {/* İçindekiler */}
          <div className="border border-[#a2a9b1] bg-[#f8f9fa] p-4 my-6 inline-block min-w-[350px]">
            <div className="font-bold mb-3 text-center text-lg">İçindekiler</div>
            <ul className="list-none ml-4">
              {[
                { id: "tarihce", label: "Tarihçe" },
                { id: "basarilar", label: "Başarılar ve Turnuvalar" },
                { id: "unlu-futbolcular", label: "Ünlü Futbolcuları" },
                { id: "teknik-direktorler", label: "Teknik Direktörler" },
                { id: "onemli-maclar", label: "Unutulmaz Maçlar" },
                { id: "istatistikler", label: "İstatistikler" },
              ].map(({ id, label }, i) => (
                <li key={id} className="my-1.5">
                  <a href={`#${id}`} className="text-[#0645ad] no-underline hover:underline">
                    {i + 1}. {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <section id="tarihce" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">Tarihçe</h2>
            <p>İlk millî maç 26 Ekim 1923&apos;te İstanbul&apos;da Romanya ile oynanmış ve 2-2 berabere sonuçlanmıştır. 2002 FIFA Dünya Kupası&apos;nda Şenol Güneş yönetiminde tarihi üçüncülük elde edilmiştir.</p>
          </section>

          <section id="basarilar" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">Başarılar ve Turnuvalar</h2>
            <div className="bg-[#fef6e4] border-l-4 border-[#f5c842] p-4 my-4">
              <strong>🏆 En Büyük Başarı:</strong> 2002 FIFA Dünya Kupası — 3. lük (Güney Kore/Japonya)
            </div>
            <ul className="list-disc ml-8 leading-loose">
              <li><strong>2002:</strong> 🥉 3. lük — Dünya Kupası</li>
              <li><strong>2008:</strong> 🏅 Yarı final — EURO</li>
              <li><strong>2024:</strong> Çeyrek final — EURO</li>
            </ul>
          </section>

          <section id="unlu-futbolcular" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">Ünlü Futbolcuları</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4 text-sm">
                <thead>
                  <tr>
                    <th className="border border-[#a2a9b1] p-2 text-left bg-[#eaecf0] font-bold">Futbolcu</th>
                    <th className="border border-[#a2a9b1] p-2 text-left bg-[#eaecf0] font-bold">Maç</th>
                    <th className="border border-[#a2a9b1] p-2 text-left bg-[#eaecf0] font-bold">Gol</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hakan Şükür", "112", "51"],
                    ["Rüştü Reçber", "120", "0"],
                    ["Arda Turan", "100", "17"],
                    ["Hakan Çalhanoğlu", "90+", "19+"],
                  ].map(([name, mac, gol]) => (
                    <tr key={name} className="hover:bg-[#f8f9fa]">
                      <td className="border border-[#a2a9b1] p-2 font-bold">{name}</td>
                      <td className="border border-[#a2a9b1] p-2">{mac}</td>
                      <td className="border border-[#a2a9b1] p-2">{gol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="teknik-direktorler" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">Teknik Direktörler</h2>
            <ul className="list-disc ml-8 leading-loose">
              <li><strong>Şenol Güneş</strong> — 2002 Dünya Kupası 3.lüğü</li>
              <li><strong>Fatih Terim</strong> — En uzun süre görev yapan</li>
              <li><strong>Vincenzo Montella</strong> — Güncel teknik direktör</li>
            </ul>
          </section>

          <section id="onemli-maclar" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">Unutulmaz Maçlar</h2>
            <ul className="list-disc ml-8 leading-loose">
              <li><strong>2002 WC 3. lük:</strong> Güney Kore 2–3 Türkiye | Hakan Şükür 11. saniye golü</li>
              <li><strong>EURO 2008:</strong> Çekya 2–3 Türkiye | 0-2&apos;den dönüş</li>
            </ul>
          </section>

          <section id="istatistikler" className="mt-8">
            <h2 className="font-serif text-2xl font-normal border-b border-[#a2a9b1] pb-1 mb-4 text-[#202122]">İstatistikler</h2>
            <ul className="list-disc ml-8 leading-loose">
              <li><strong>En Fazla Gol:</strong> Hakan Şükür — 51</li>
              <li><strong>En Fazla Maç:</strong> Rüştü Reçber — 120</li>
              <li><strong>En Büyük Galibiyet:</strong> 7-0 vs San Marino</li>
            </ul>
          </section>

          <div className="mt-8 p-4 bg-[#e8f4f8] border border-[#b8d4e5] rounded text-sm">
            <strong>💡 Not:</strong> Bu sayfa düzenli olarak güncellenmektedir.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f8f9fa] border-t border-[#a2a9b1] py-6 mt-8 text-sm text-[#54595d]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p>Bu sayfa en son güncellenmiştir.</p>
          <p className="mt-2">
            <a href="#tarihce" className="text-[#0645ad] no-underline hover:underline">Tarihçe</a>
            {" | "}
            <a href="#unlu-futbolcular" className="text-[#0645ad] no-underline hover:underline">Futbolcular</a>
            {" | "}
            <a href="#istatistikler" className="text-[#0645ad] no-underline hover:underline">İstatistikler</a>
          </p>
          <p className="mt-4 text-[#e30a17] font-bold">🇹🇷 Ay-Yıldızlı Formayı Her Zaman Gururla Taşıdık 🇹🇷</p>
          <p className="mt-2">© amillitakimimiz.com — Türk Futbolu Ansiklopedisi</p>
        </div>
      </footer>
    </div>
  );
}
