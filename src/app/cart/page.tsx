import type { Metadata } from "next";
import { CartPageView } from "@/components/ecommerce/CartPageView";

export const metadata: Metadata = {
  title: "Cart",
  description: "View and manage your Mr Slators Furnishings basket."
};

export default function CartPage() {
  return <CartPageView />;
}
