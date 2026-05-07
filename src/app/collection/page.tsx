import type { Metadata } from "next";
import { ShopView } from "@/components/ecommerce/ShopView";
import { getProducts, getCategories } from "@/data/ecommerce";

export const metadata: Metadata = {
  title: "Furniture Collection",
  description: "Browse sofas, recliners, dining sets, beds, wardrobes, coffee tables, living room furniture and decor."
};

export default async function CollectionPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return <ShopView products={products} categories={categories} />;
}
