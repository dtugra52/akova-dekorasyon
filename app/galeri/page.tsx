import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

const categories = [
  { slug: "dis-cephe", name: "Dış Cephe" },
  { slug: "mutfak", name: "Mutfak" },
  { slug: "dekorasyon", name: "Dekorasyon" },
  { slug: "banyo", name: "Banyo" },
  { slug: "boya", name: "Boya" },
  { slug: "italyan-boya", name: "İtalyan Boya" },
];

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export default function GalleryPage() {
  const galleryPath = path.join(process.cwd(), "public", "galeri");

  const images = categories.flatMap((category) => {
    const categoryPath = path.join(galleryPath, category.slug);

    if (!fs.existsSync(categoryPath)) {
      return [];
    }

    return fs
      .readdirSync(categoryPath)
      .filter((file) =>
        allowedExtensions.includes(path.extname(file).toLowerCase())
      )
      .map((file, index) => ({
        id: `${category.slug}-${index}`,
        src: `/galeri/${category.slug}/${file}`,
        category: category.slug,
        categoryName: category.name,
        alt: `Akova Dekorasyon ${category.name} çalışması ${index + 1}`,
      }));
  });

  return <GalleryClient images={images} categories={categories} />;
}