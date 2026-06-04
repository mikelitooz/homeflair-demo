import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Mr Slators Furnishings | Quality Furniture & Carpets Since 1970 – Sheffield",
  description:
    "Explore sleigh beds, mattresses, suites, solid pine furniture, and fitted carpets from Mr Slators Furnishings – a family-run showroom in Sheffield since 1970."
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
