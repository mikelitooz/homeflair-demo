import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Homeflair | Quality Furniture Since 1972 – Rotherham",
  description:
    "Explore fabric sofas, leather suites, rattan garden furniture and ex-display deals from Homeflair – a family-run showroom in Rotherham since 1972."
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
