"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { currency } from "@/data/ecommerce";
import { useCart } from "@/components/cart/CartProvider";

export function CartPageView() {
  const { lines, removeFromCart, updateQuantity, subtotal, checkoutUrl } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-charcoal sm:text-5xl">Your Basket</h1>

      {lines.length === 0 ? (
        <div className="mt-8 rounded-card border border-dashed border-smoke bg-white p-12 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-smoke" />
          <p className="mt-4 font-display text-xl font-semibold text-charcoal">Your basket is empty</p>
          <p className="mt-2 text-sm text-taupe">Browse our collection and add your favourite pieces.</p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex">Continue shopping</Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-3">
            {lines.map((line) => {
              const product = line.merchandise.product;
              if (!product) return null;
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              return (
                <article key={line.id} className="rounded-card border border-smoke/50 bg-white p-4 shadow-card">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href={`/product/${product.handle}`} className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg">
                      <Image src={product.images.edges[0]?.node.url || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"} alt={product.title} fill sizes="112px" className="object-cover" />
                    </Link>
                    <div className="flex-1">
                      <Link href={`/product/${product.handle}`} className="text-base font-semibold text-charcoal hover:text-forest transition-colors">{product.title}</Link>
                      <p className="mt-1 text-sm text-taupe">{currency(price)} each</p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center rounded-lg border border-smoke">
                          <button type="button" onClick={() => updateQuantity(line.id, line.quantity - 1)} className="px-3 py-1.5 text-taupe hover:text-charcoal" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                          <span className="w-9 text-center text-sm font-semibold text-charcoal">{line.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(line.id, line.quantity + 1)} className="px-3 py-1.5 text-taupe hover:text-charcoal" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                        </div>
                        <button type="button" onClick={() => removeFromCart(line.id)} className="inline-flex items-center gap-1 text-sm text-taupe hover:text-red-600 transition-colors"><Trash2 className="h-4 w-4" /> Remove</button>
                      </div>
                    </div>
                    <p className="text-right text-lg font-bold text-charcoal sm:self-start">{currency(price * line.quantity)}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <aside className="h-fit rounded-card border border-smoke/50 bg-white p-5 shadow-card">
            <h3 className="text-lg font-bold text-charcoal">Order Summary</h3>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-taupe">Subtotal</span><span className="font-semibold text-charcoal">{currency(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-taupe">Delivery</span><span className="font-semibold text-charcoal">Calculated at checkout</span></div>
            </div>
            <hr className="my-4 border-smoke/50" />
            <div className="flex justify-between"><span className="font-semibold text-charcoal">Estimated total</span><span className="text-xl font-bold text-charcoal">{currency(subtotal)}</span></div>
            {checkoutUrl ? (
              <a href={checkoutUrl} className="btn-primary mt-5 w-full justify-center">Proceed to checkout</a>
            ) : (
              <button disabled className="btn-primary mt-5 w-full justify-center opacity-50 cursor-not-allowed">Proceed to checkout</button>
            )}
            <Link href="/shop" className="btn-ghost mt-2 w-full justify-center text-xs">Continue shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
}
