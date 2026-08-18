import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anahtar Teslim Tadilat Sakarya",
  description:
    "Akova Dekorasyon ile Sakarya, Kocaeli ve Düzce'de anahtar teslim tadilat hizmetleri. Keşiften uygulamaya kadar tüm süreci tek merkezden yönetiyoruz.",
  alternates: {
    canonical: "/anahtar-teslim-tadilat",
  },
};

const steps = [
  {
    number: "01",
    title: "Keşif",
    description:
      "Mekânı inceliyor, ihtiyaçları ve yapılacak çalışmaları birlikte belirliyoruz.",
  },
  {
    number: "02",
    title: "Planlama",
    description:
      "Uygulama sırasını, malzeme ihtiyaçlarını ve proje kapsamını netleştiriyoruz.",
  },
  {
    number: "03",
    title: "Uygulama",
    description:
      "Tadilat ve dekorasyon çalışmalarını planlı ve düzenli şekilde gerçekleştiriyoruz.",
  },
  {
    number: "04",
    title: "Teslim",
    description:
      "Son kontroller tamamlandıktan sonra yaşam alanını kullanıma hazır şekilde teslim ediyoruz.",
  },
];

const services = [
  "İç mekân yenileme",
  "Boya ve alçıpan uygulamaları",
  "Mutfak yenileme",
  "Banyo yenileme",
  "Dekoratif uygulamalar",
  "Dış cephe çalışmaları",
];

export default function AnahtarTeslimTadilatPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-3xl font-black tracking-[-0.15em]">
              <span className="text-[#a71943]">A</span>
              <span className="text-[#2d6db8]">D</span>
            </div>

            <div>
              <p className="font-bold tracking-[0.2em]">AKOVA</p>
              <p className="text-[10px] tracking-[0.35em] text-white/45">
                DEKORASYON
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
          >
            ← Ana Sayfa
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute left-[-180px] top-[-80px] h-[460px] w-[460px] rounded-full bg-[#a71943]/20 blur-[140px]" />
        <div className="absolute right-[-180px] top-[100px] h-[460px] w-[460px] rounded-full bg-[#2d6db8]/20 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c32b58]">
              ANAHTAR TESLİM TADİLAT
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Sakarya&apos;da anahtar teslim
              <span className="mt-2 block bg-gradient-to-r from-[#c32858] to-[#3977c1] bg-clip-text text-transparent">
                tadilat çözümleri.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Akova Dekorasyon olarak Sakarya, Kocaeli ve Düzce&apos;de
              yaşam alanlarının yenileme sürecini keşiften uygulamaya kadar
              bütüncül şekilde yönetiyoruz.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/905324996165?text=Merhaba%2C%20anahtar%20teslim%20tadilat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#a71943] px-8 py-4 font-bold transition hover:-translate-y-1 hover:bg-[#bc1d4c]"
              >
                WhatsApp&apos;tan Bilgi Al
              </a>

              <Link
                href="/galeri"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold transition hover:bg-white/10"
              >
                Çalışmaları Gör
              </Link>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-white/10">
            <img
              src="/galeri/dis-cephe/1000073267.jpg"
              alt="Akova Dekorasyon anahtar teslim tadilat çalışması"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-sm tracking-[0.25em] text-white/50">
                GERÇEK ÇALIŞMAMIZ
              </p>
              <p className="mt-3 text-3xl font-bold">
                Baştan sona planlı yenileme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAPSAM */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#3977c1]">
            NELER YAPIYORUZ?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Tadilat sürecini tek merkezden yönetiyoruz.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a71943]/15 text-[#e04472]">
                    ✓
                  </span>
                  <p className="font-semibold">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c32b58]">
              ÇALIŞMA SÜRECİ
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Dört adımda proje süreci.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-5xl font-black text-white/[0.08]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-bold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMET BÖLGESİ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#3977c1]">
                HİZMET BÖLGELERİ
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Sakarya, Kocaeli ve Düzce.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/50">
                Projenin kapsamına göre Sakarya, Kocaeli ve Düzce&apos;de
                tadilat ve dekorasyon hizmetleri sunuyoruz. Keşif ve proje
                detayları için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["Sakarya", "Kocaeli", "Düzce"].map((city) => (
                <div
                  key={city}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-8 text-center font-bold"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-[#831535] to-[#284f85] px-7 py-16 text-center sm:px-12 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/65">
            PROJENİZİ KONUŞALIM
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Anahtar teslim tadilat için bizimle iletişime geçin.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
            İhtiyaçlarınızı birlikte değerlendirelim ve projenize uygun
            çözümü belirleyelim.
          </p>

          <a
            href="tel:+905324996165"
            className="mt-9 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-[#111319] transition hover:-translate-y-1"
          >
            0532 499 61 65
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Akova Dekorasyon. Tüm hakları saklıdır.</p>
          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-white/70">
              Tuğra Dündar
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}