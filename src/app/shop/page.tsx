import type { Metadata } from "next";
import { ShopView } from "@/components/ecommerce/ShopView";

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
  description: "Browse Derbyshire Suite Centre products by category, room, and offers."
};

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <ShopView
      initialQuery={params.query}
      initialCategory={params.category}
      initialRoom={params.room}
      offerOnly={params.offer === "true"}
    />
  );
}
