"use client";
const services = [
  {
    number: "01",
    title: "Anahtar Teslim Tadilat",
    description:
      "Planlamadan uygulamaya kadar tüm yenileme sürecini tek merkezden profesyonel şekilde yönetiyoruz.",
    image:
        "/galeri/dis-cephe/1000073267.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "İç Dekorasyon",
    description:
      "Yaşam tarzınıza ve mekânın karakterine uygun, modern ve işlevsel iç mekân çözümleri tasarlıyoruz.",
    image:
      "/galeri/dekorasyon/WhatsApp Image 2026-08-14 at 23.52.25.jpeg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M4 19h16" />
        <path d="M6 19v-7h12v7" />
        <path d="M8 12V7h8v5" />
        <path d="M10 7V4h4v3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Mutfak Yenileme",
    description:
      "Estetik görünüm, güçlü malzeme ve doğru depolama çözümleriyle kullanışlı mutfaklar oluşturuyoruz.",
    image: "/galeri/mutfak/1000073412.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M4 10h16" />
        <path d="M10 10v10" />
        <path d="M7 7h2" />
        <path d="M13 14h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Banyo Yenileme",
    description:
      "Su yalıtımından seramik uygulamasına kadar uzun ömürlü ve şık banyolar hazırlıyoruz.",
    image: "/galeri/banyo/1000074045.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M4 13h16" />
        <path d="M5 13v2a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-2" />
        <path d="M7 13V6a2 2 0 0 1 4 0" />
        <path d="M10 6h3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Boya ve Alçıpan",
    description:
      "Pürüzsüz yüzeyler, dekoratif tavanlar ve mekâna uygun renk uygulamaları gerçekleştiriyoruz.",
    image:
      "/galeri/boya/1000073211.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M4 5h11v5H4z" />
        <path d="M15 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6" />
        <path d="M12 13v7" />
        <path d="M10 20h4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Özel Uygulamalar",
    description:
      "TV ünitesi, duvar paneli, niş, özel mobilya ve dekoratif detaylarla projeyi tamamlıyoruz.",
    image:
      "/galeri/dekorasyon/WhatsApp Image 2026-08-14 at 23.52.31 (1).jpeg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-7 w-7"
      >
        <path d="M5 4h14v16H5z" />
        <path d="M5 9h14" />
        <path d="M12 9v11" />
        <path d="M8 6h3" />
        <path d="M14 6h2" />
      </svg>
    ),
  },
];

const projects = [
  {
    category: "Dekorasyon",
    title: "İç Mekân Dekorasyon Çalışması",
    image:
      "/galeri/dekorasyon/WhatsApp Image 2026-08-14 at 23.52.25.jpeg",
  },
  {
    category: "Mutfak",
    title: "Mutfak Dekorasyon Çalışması",
    image: "/galeri/mutfak/1000073412.jpg",
  },
  {
    category: "Banyo",
    title: "Banyo Dekorasyon Çalışması",
    image: "/galeri/banyo/1000074045.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Keşif ve Analiz",
    description:
      "Mekânı inceliyor, ihtiyaçlarınızı dinliyor ve uygulanabilir çözümleri belirliyoruz.",
  },
  {
    number: "02",
    title: "Planlama ve Teklif",
    description:
      "İş kapsamını, kullanılacak malzemeleri, süreyi ve bütçeyi şeffaf biçimde planlıyoruz.",
  },
  {
    number: "03",
    title: "Profesyonel Uygulama",
    description:
      "Belirlenen plana bağlı kalarak tüm uygulamaları deneyimli ekibimizle gerçekleştiriyoruz.",
  },
  {
    number: "04",
    title: "Teslim ve Kontrol",
    description:
      "Son kontrolleri tamamlıyor, temiz ve kullanıma hazır şekilde projenizi teslim ediyoruz.",
  },
];

const advantages = [
  "Kaliteli ve dayanıklı malzeme",
  "Şeffaf fiyatlandırma",
  "Planlı ve düzenli çalışma",
  "Temiz işçilik",
  "Zamanında teslim",
  "Proje boyunca iletişim",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* Arka plan */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[-180px] h-[600px] w-[600px] rounded-full bg-[#9f183f]/20 blur-[150px]" />
        <div className="absolute right-[-200px] top-[180px] h-[560px] w-[560px] rounded-full bg-[#235fa8]/20 blur-[160px]" />
        <div className="absolute bottom-[-300px] left-1/3 h-[600px] w-[600px] rounded-full bg-[#703c88]/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#ana-sayfa" className="flex items-center gap-3">
            <div className="flex h-12 w-14 items-center justify-center text-3xl font-black tracking-[-0.15em]">
              <span className="text-[#a71943]">A</span>
              <span className="text-[#2d6db8]">D</span>
            </div>

            <div>
              <p className="text-base font-bold tracking-[0.23em] sm:text-lg">
                AKOVA
              </p>
              <p className="text-[9px] tracking-[0.4em] text-white/45 sm:text-[10px]">
                DEKORASYON
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#ana-sayfa"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Ana Sayfa
            </a>
            <a
              href="#hizmetler"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Hizmetler
            </a>
            <a
              href="/galeri"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Projeler
            </a>
            <a
              href="#hakkimizda"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Hakkımızda
            </a>
            <a
              href="#iletisim"
              className="text-sm text-white/65 transition hover:text-white"
            >
              İletişim
            </a>
          </nav>

          <a
            href="#iletisim"
            className="hidden rounded-full bg-[#a71943] px-6 py-3 text-sm font-semibold shadow-[0_12px_40px_rgba(167,25,67,0.25)] transition hover:-translate-y-0.5 hover:bg-[#bc1d4c] sm:inline-flex"
          >
            Teklif Al
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>

            <div className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-[#101319] p-3 shadow-2xl">
              {[
                ["Ana Sayfa", "#ana-sayfa"],
                ["Hizmetler", "#hizmetler"],
                ["Projeler", "/galeri"],
                ["Hakkımızda", "#hakkimizda"],
                ["İletişim", "#iletisim"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section
        id="ana-sayfa"
        className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-24"
      >
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] tracking-[0.32em] text-white/60 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#a71943] shadow-[0_0_18px_rgba(167,25,67,0.9)]" />
            AKOVA DEKORASYON
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
            Mekânlarınıza
            <span className="mt-2 block bg-gradient-to-r from-[#c32858] via-[#9a4c82] to-[#3977c1] bg-clip-text text-transparent">
              değer katıyoruz.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Anahtar teslim tadilat, iç dekorasyon, mutfak, banyo,
            boya, alçıpan ve özel uygulamalarla yaşam alanlarınızı
            baştan tasarlıyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#a71943] px-8 py-4 font-semibold shadow-[0_16px_45px_rgba(167,25,67,0.25)] transition hover:-translate-y-1 hover:bg-[#bc1d4c]"
            >
              Ücretsiz Keşif
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>

            <a
              href="/galeri"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              Projeleri Gör
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-black sm:text-3xl">20+</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Yıllık deneyim
              </p>
            </div>

            <div className="border-l border-white/10 pl-4 sm:pl-7">
              <p className="text-2xl font-black sm:text-3xl">250+</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Tamamlanan proje
              </p>
            </div>

            <div className="border-l border-white/10 pl-4 sm:pl-7">
              <p className="text-2xl font-black sm:text-3xl">%100</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Memnuniyet hedefi
              </p>
            </div>
          </div>
        </div>

        {/* Hero sağ kart */}
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-[#a71943]/20 to-[#2d6db8]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.055] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="relative min-h-[540px] overflow-hidden rounded-[27px] border border-white/[0.07] bg-[#0c0f15] p-7 sm:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(45,109,184,0.28),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(167,25,67,0.26),transparent_35%)]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                  Premium işçilik
                </span>

                <div className="flex gap-1 text-[#d6a649]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <div className="relative z-10 mt-20">
                <p className="text-xs tracking-[0.28em] text-white/40">
                  AKOVA YAKLAŞIMI
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em]">
                  Hayalinizdeki mekânı birlikte oluşturalım.
                </h2>

                <p className="mt-5 leading-7 text-white/50">
                  Tasarım, malzeme seçimi, uygulama ve teslim süreçlerini
                  sizin için profesyonel şekilde yönetiyoruz.
                </p>
              </div>

              <div className="relative z-10 mt-14 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a71943]/15 text-[#e04472]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-6 w-6"
                    >
                      <path d="M4 19h16" />
                      <path d="M6 19V9l6-5 6 5v10" />
                    </svg>
                  </div>
                  <p className="mt-5 text-2xl font-black">250+</p>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Başarıyla tamamlanan uygulama
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d6db8]/15 text-[#5892d5]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-6 w-6"
                    >
                      <path d="m4 12 5 5L20 6" />
                    </svg>
                  </div>
                  <p className="mt-5 text-2xl font-black">15+</p>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Yıllık sektör tecrübesi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marka bandı */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8">
          {[
            "Modern Tasarım",
            "Kaliteli Malzeme",
            "Profesyonel İşçilik",
            "Zamanında Teslim",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 border-white/10 px-4 py-7 text-center text-xs font-medium tracking-[0.15em] text-white/45 sm:border-l"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#a71943] to-[#2d6db8]" />
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#c32b58]">
                HİZMETLERİMİZ
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Her detayı profesyonelce düşünüyoruz.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-white/50">
              Evinizin veya iş yerinizin ihtiyaç duyduğu tüm dekorasyon
              ve tadilat uygulamalarını tek bir ekip altında topluyoruz.
            </p>
                    </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#a71943]/10 to-[#2d6db8]/10 blur-3xl transition group-hover:scale-150" />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                    {service.icon}
                  </div>

                  <span className="text-sm font-medium text-white/25">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative z-10 mt-10 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-white/48">
                  {service.description}
                </p>

                <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={service.image}
                    alt={`Akova Dekorasyon ${service.title} çalışması`}
                    className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                    Gerçek Çalışmamız
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 rounded-[36px] border border-white/10 bg-white/[0.035] p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0f15] p-8">
            <img
  src="/galeri/dekorasyon/WhatsApp Image 2026-08-14 at 23.52.25.jpeg"
  alt="Akova Dekorasyon iç mekân çalışması"
  className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,25,67,0.3),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(45,109,184,0.3),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl font-black tracking-[-0.15em]">
                  <span className="text-[#a71943]">A</span>
                  <span className="text-[#2d6db8]">D</span>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50">
                  Sakarya • Kocaeli • Düzce
                </span>
              </div>

              <div>
                <p className="text-sm tracking-[0.28em] text-white/35">
                  AKOVA DEKORASYON
                </p>
                <p className="mt-5 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                  Mekânları yalnızca yenilemiyor, yaşam kalitesini artırıyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#3977c1]">
              HAKKIMIZDA
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Güvenilir işçilik, güçlü sonuçlar.
            </h2>

           <p className="mt-7 leading-8 text-white/50">
  Akova Dekorasyon olarak Sakarya, Kocaeli ve Düzce bölgelerinde
  dekorasyon, tadilat ve yenileme çalışmaları gerçekleştiriyoruz.
  Her projede mekânın ihtiyaçlarını dikkate alıyor; estetik,
  kullanışlı ve uzun ömürlü çözümler ortaya çıkarmayı hedefliyoruz.
</p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#a71943]/15 text-[#e04472]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <span className="text-sm text-white/65">{advantage}</span>
                </div>
              ))}
            </div>

            <a
              href="#iletisim"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              Bizimle iletişime geç
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c32b58]">
              ÇALIŞMA SÜRECİMİZ
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Dört adımda kusursuz dönüşüm.
            </h2>

            <p className="mt-6 leading-7 text-white/50">
              İlk görüşmeden anahtar teslimine kadar tüm süreci planlı,
              şeffaf ve düzenli biçimde yönetiyoruz.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-[26px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-5xl font-black text-white/[0.07]">
                  {step.number}
                </span>

                <div className="mt-8 h-px bg-gradient-to-r from-[#a71943] via-[#6a467c] to-transparent" />

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projeler */}
<section id="projeler" className="px-5 py-24 sm:px-8 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <div>
        <p className="text-xs font-semibold tracking-[0.3em] text-[#3977c1]">
          PROJELERİMİZ
        </p>

        <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
          İlham veren dönüşümler.
        </h2>
      </div>

      <div className="max-w-lg">
        <p className="leading-7 text-white/50">
          Gerçekleştirdiğimiz çalışmalar arasından seçtiğimiz bazı
          projeleri inceleyin. Tüm uygulamalarımızı görmek için galerimizi
          ziyaret edebilirsiniz.
        </p>

        <a
          href="/galeri"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          Tüm Çalışmaları Gör
          <span>→</span>
        </a>
      </div>
    </div>

    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <a
          key={project.title}
          href="/galeri"
          className="group relative min-h-[500px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0c0f15] shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
        >
          {/* Gerçek proje fotoğrafı */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />

          {/* Fotoğraf karartma */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

          {/* Hafif renk efekti */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#a71943]/10 via-transparent to-[#2d6db8]/10 opacity-60 transition duration-500 group-hover:opacity-90" />

          {/* Üst bilgiler */}
          <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-7">
            <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
              {project.category}
            </span>

            <span className="text-sm font-medium text-white/55">
              0{index + 1}
            </span>
          </div>

          {/* Alt bilgiler */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Akova Dekorasyon
            </p>

            <h3 className="max-w-sm text-3xl font-bold tracking-[-0.03em] text-white">
              {project.title}
            </h3>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-white/60">
                Galeride İncele
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Yorum */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center sm:p-14 lg:p-20">
          <div className="mx-auto flex w-fit gap-1 text-[#d6a649]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed tracking-[-0.025em] text-white/85 sm:text-3xl">
            “Kaliteli malzeme, temiz işçilik ve düzenli iletişimle
            hayalinizdeki yaşam alanını gerçeğe dönüştürüyoruz.”
          </blockquote>

          <div className="mt-9">
            <p className="font-bold">Akova Dekorasyon</p>
            <p className="mt-1 text-sm text-white/40">
              Tadilat ve iç dekorasyon çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[#0c0f15] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(167,25,67,0.22),transparent_36%)]" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#c32b58]">
                İLETİŞİM
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Projenizi konuşmaya başlayalım.
              </h2>

              <p className="mt-7 max-w-lg leading-8 text-white/50">
                Tadilat veya dekorasyon ihtiyacınız için bizimle iletişime
                geçin. Ücretsiz keşif sonrasında projenize özel çözüm ve
                fiyat teklifi hazırlayalım.
              </p>

              <div className="mt-10 space-y-5">
  {/* Telefon */}
  <a
    href="tel:+905324996165"
    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.07]"
  >
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71943]/15 text-[#e04472]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" />
      </svg>
    </span>

    <div>
      <p className="text-xs text-white/40">Telefon</p>
      <p className="mt-1 font-semibold">0532 499 61 65</p>
    </div>
  </a>

  {/* WhatsApp */}
<a
  href="https://wa.me/905324996165?text=Merhaba%2C%20Akova%20Dekorasyon%20web%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.%20Dekorasyon%20ve%20tadilat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-green-500/[0.07]"
>
  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
    >
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.5 8.2c.3 2.9 2.6 5.2 5.5 5.5" />
    </svg>
  </span>

  <div className="flex-1">
    <p className="text-xs text-white/40">WhatsApp</p>
    <p className="mt-1 font-semibold">WhatsApp&apos;tan Yazın</p>
  </div>

  <span className="text-xl text-white/40">→</span>
</a>

  {/* Hizmet Bölgesi */}
  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2d6db8]/15 text-[#5892d5]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </span>

    <div>
      <p className="text-xs text-white/40">Hizmet bölgesi</p>
      <p className="mt-1 font-semibold">
        Sakarya • Kocaeli • Düzce
      </p>
    </div>
  </div>
</div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
            <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const ad = formData.get("ad");
    const telefon = formData.get("telefon");
    const hizmet = formData.get("hizmet");
    const detay = formData.get("detay");

    const mesaj = `Merhaba, Akova Dekorasyon web siteniz üzerinden teklif talebi oluşturuyorum.

Ad Soyad: ${ad}
Telefon: ${telefon}
Hizmet: ${hizmet}
Proje Detayları: ${detay}`;

    const whatsappUrl = `https://wa.me/905324996165?text=${encodeURIComponent(
      mesaj
    )}`;

    window.open(whatsappUrl, "_blank");
  }}
>
  <div className="grid gap-5 sm:grid-cols-2">
    <label className="block">
      <span className="mb-2 block text-sm text-white/55">
        Adınız
      </span>

      <input
        type="text"
        name="ad"
        required
        placeholder="Ad Soyad"
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#a71943]/70 focus:bg-white/[0.06]"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm text-white/55">
        Telefon
      </span>

      <input
        type="tel"
        name="telefon"
        required
        placeholder="05XX XXX XX XX"
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#a71943]/70 focus:bg-white/[0.06]"
      />
    </label>
  </div>

  <label className="block">
    <span className="mb-2 block text-sm text-white/55">
      Hizmet
    </span>

    <select
      name="hizmet"
      required
      defaultValue=""
      className="h-14 w-full rounded-2xl border border-white/10 bg-[#11141a] px-5 text-white/70 outline-none transition focus:border-[#a71943]/70"
    >
      <option value="" disabled>
        Hizmet seçin
      </option>

      <option value="Anahtar Teslim Tadilat">
        Anahtar teslim tadilat
      </option>

      <option value="İç Dekorasyon">
        İç dekorasyon
      </option>

      <option value="Mutfak Yenileme">
        Mutfak yenileme
      </option>

      <option value="Banyo Yenileme">
        Banyo yenileme
      </option>

      <option value="Boya ve Alçıpan">
        Boya ve alçıpan
      </option>

      <option value="Diğer">
        Diğer
      </option>
    </select>
  </label>

  <label className="block">
    <span className="mb-2 block text-sm text-white/55">
      Proje detayları
    </span>

    <textarea
      name="detay"
      required
      rows={6}
      placeholder="Yapılmasını istediğiniz çalışmayı kısaca anlatın..."
      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#a71943]/70 focus:bg-white/[0.06]"
    />
  </label>

  <button
    type="submit"
    className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#a71943] to-[#7a3d7e] font-bold shadow-[0_16px_45px_rgba(167,25,67,0.22)] transition hover:-translate-y-1"
  >
    WhatsApp&apos;tan Teklif Talebi Gönder

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </button>

  <p className="text-center text-xs leading-5 text-white/30">
    Formu gönderdiğinizde bilgileriniz WhatsApp mesajına aktarılır.
  </p>
</form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#831535] to-[#284f85] px-7 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:px-12 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.12),transparent_30%)]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.3em] text-white/65">
              ÜCRETSİZ KEŞİF
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Yaşam alanınızı yenilemeye hazır mısınız?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
              Projenizi birlikte değerlendirelim, ihtiyaçlarınıza özel
              çözümü ve yol haritasını hazırlayalım.
            </p>

            <a
             href="tel:+905324996165"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#111319] shadow-xl transition hover:-translate-y-1"
            >
              Hemen Arayın
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 pb-8 pt-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="#ana-sayfa" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-14 items-center justify-center text-3xl font-black tracking-[-0.15em]">
                  <span className="text-[#a71943]">A</span>
                  <span className="text-[#2d6db8]">D</span>
                </div>

                <div>
                  <p className="text-lg font-bold tracking-[0.23em]">AKOVA</p>
                  <p className="text-[10px] tracking-[0.4em] text-white/45">
                    DEKORASYON
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-md leading-7 text-white/40">
                Anahtar teslim tadilat ve iç dekorasyon projelerinde
                kaliteli malzeme, profesyonel işçilik ve güvenilir hizmet.
              </p>
            </div>

            <div>
              <p className="font-bold">Hızlı Bağlantılar</p>

              <div className="mt-5 space-y-3 text-sm text-white/45">
                <a
                  href="#ana-sayfa"
                  className="block transition hover:text-white"
                >
                  Ana Sayfa
                </a>
                <a
                  href="#hizmetler"
                  className="block transition hover:text-white"
                >
                  Hizmetler
                </a>
                <a
                  href="#projeler"
                  className="block transition hover:text-white"
                >
                  Projeler
                </a>
                <a
                  href="#hakkimizda"
                  className="block transition hover:text-white"
                >
                  Hakkımızda
                </a>
              </div>
            </div>

            <div>
              <p className="font-bold">İletişim</p>

              <div className="mt-5 space-y-3 text-sm text-white/45">
                <p>+90 532 499 61 65</p>
                <p>Sakarya,Düzce,Kocaeli Türkiye</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Akova Dekorasyon. Tüm hakları
              saklıdır.
            </p>
            <p>Kaliteli mekânlar, güçlü yaşam alanları.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp sabit buton */}
      <a
        href="https://wa.me/905324996165"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden iletişim"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_15px_45px_rgba(37,211,102,0.3)] transition hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 sm:h-8 sm:w-8"
        >
          <path d="M12.04 2a9.84 9.84 0 0 0-8.46 14.85L2 22l5.28-1.54A9.91 9.91 0 1 0 12.04 2Zm0 17.98a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.13.91.93-3.05-.2-.31A8.06 8.06 0 1 1 12.04 20Zm4.43-6.04c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </main>
  );
}