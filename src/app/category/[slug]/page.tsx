import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopView } from "@/components/ecommerce/ShopView";
import { getCategoryBySlug } from "@/data/ecommerce";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "Category not found" };
  }
  return {
    title: category.name,
    description: `Shop ${category.name.toLowerCase()} from Derbyshire Suite Centre.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return <ShopView initialCategory={slug} />;
}
