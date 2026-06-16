import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopView } from "@/components/ecommerce/ShopView";
import { getCategoryBySlug, getProducts, getCategories } from "@/data/ecommerce";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return { title: "Category not found" };
  }
  return {
    title: category.name,
    description: `Shop ${category.name.toLowerCase()} from Homeflair.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return <ShopView products={products} categories={categories} initialCategory={slug} />;
}
