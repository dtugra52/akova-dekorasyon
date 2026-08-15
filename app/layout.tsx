import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akova Dekorasyon | Tadilat ve Dekorasyon",
    template: "%s | Akova Dekorasyon",
  },

  description:
    "Akova Dekorasyon; Sakarya, Kocaeli ve Düzce'de anahtar teslim tadilat, iç dekorasyon, mutfak ve banyo yenileme, boya, alçıpan ve özel dekorasyon uygulamaları sunar.",

  keywords: [
    "Akova Dekorasyon",
    "Sakarya dekorasyon",
    "Sakarya tadilat",
    "Kocaeli dekorasyon",
    "Kocaeli tadilat",
    "Düzce dekorasyon",
    "Düzce tadilat",
    "anahtar teslim tadilat",
    "iç dekorasyon",
    "mutfak yenileme",
    "banyo yenileme",
    "boya alçıpan",
  ],

  authors: [{ name: "Akova Dekorasyon" }],
  creator: "Akova Dekorasyon",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Akova Dekorasyon | Tadilat ve Dekorasyon",
    description:
      "Sakarya, Kocaeli ve Düzce'de anahtar teslim tadilat ve profesyonel dekorasyon çözümleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Akova Dekorasyon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}