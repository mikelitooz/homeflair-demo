import type { Metadata } from "next";
import { ShopView } from "@/components/ecommerce/ShopView";
import { getProducts, getCategories } from "@/data/ecommerce";

export const revalidate = 0;

type Props = {
  searchParams: Promise<{
    query?: string;
    category?: string;
    room?: string;
    offer?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Homeflair products by category, room, and offers."
};

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return (
    <ShopView
      products={products}
      categories={categories}
      initialQuery={params.query}
      initialCategory={params.category}
      initialRoom={params.room}
      offerOnly={params.offer === "true"}
    />
  );
}
