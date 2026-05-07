import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Emmy's Shop | Quality Boutique Furniture Sheffield",
  description:
    "Explore sofas, beds, wardrobes, carpets, dining furniture and home styling from a polished demo website for Emmy's Shop."
};

import { getProducts, getCategories } from "@/data/ecommerce";

export const revalidate = 0;

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return <HomeView products={products} categories={categories} />;
}
