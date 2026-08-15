"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type GalleryImage = {
  id: string;
  src: string;
  category: string;
  categoryName: string;
  alt: string;
};

type Category = {
  slug: string;
  name: string;
};

type Props = {
  images: GalleryImage[];
  categories: Category[];
};

export default function GalleryClient({ images, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "tumu"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group">
            <div className="text-xl font-black tracking-tight md:text-2xl">
              <span className="text-[#7b2639]">A</span>
              <span className="text-[#2563a6]">D</span>
              <span className="ml-3 text-neutral-900">
                AKOVA DEKORASYON
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            ← Ana Sayfa
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#7b2639]/30 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#2563a6]/30 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
            Akova Dekorasyon
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Çalışmalarımız
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Gerçekleştirdiğimiz dekorasyon ve tadilat çalışmalarından
            seçilmiş uygulamaları inceleyin.
          </p>
        </div>
      </section>

      {/* GALERİ */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        {/* FİLTRELER */}
        <div className="mb-12 flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => changeCategory("tumu")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
              activeCategory === "tumu"
                ? "bg-neutral-950 text-white shadow-lg"
                : "border border-black/10 bg-white hover:border-black/30"
            }`}
          >
            Tümü
          </button>

          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => changeCategory(category.slug)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                activeCategory === category.slug
                  ? "bg-neutral-950 text-white shadow-lg"
                  : "border border-black/10 bg-white hover:border-black/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* BAŞLIK + SAYI */}
        <div className="mb-6">
          <p className="text-sm font-medium text-neutral-500">
            {activeCategory === "tumu"
              ? "Tüm Çalışmalar"
              : categories.find((c) => c.slug === activeCategory)?.name}
          </p>

          <h2 className="mt-1 text-2xl font-black">
            {filteredImages.length} Fotoğraf
          </h2>
        </div>

        {/* FOTOĞRAFLAR */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 text-left shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">
                    {image.categoryName}
                  </p>

                  <p className="mt-1 text-xs text-white/70">
                    Görüntülemek için tıklayın
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-black/20 bg-white px-6 py-20 text-center">
            <p className="text-xl font-bold">
              Bu kategoriye henüz fotoğraf eklenmedi.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Yeni çalışmalar yakında eklenecektir.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-12 text-center text-white md:px-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/40">
            Akova Dekorasyon
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black md:text-5xl">
            Hayalinizdeki yaşam alanını birlikte oluşturalım.
          </h2>

          <Link
            href="/#iletisim"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-bold text-neutral-950 transition hover:scale-105"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Akova Dekorasyon. Tüm hakları saklıdır.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-bold text-neutral-900">
              Tuğra Dündar
            </span>
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white hover:text-black"
            aria-label="Kapat"
          >
            ×
          </button>

          {filteredImages.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white hover:text-black md:left-8"
              aria-label="Önceki fotoğraf"
            >
              ‹
            </button>
          )}

          <div
            className="relative h-[75vh] w-[85vw] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {filteredImages.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white hover:text-black md:right-8"
              aria-label="Sonraki fotoğraf"
            >
              ›
            </button>
          )}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-center text-sm text-white backdrop-blur">
            <span className="font-bold">
              {selectedImage.categoryName}
            </span>

            <span className="mx-2 text-white/30">•</span>

            <span className="text-white/60">
              {selectedIndex + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}