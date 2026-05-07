"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/data/ecommerce";
import { currency } from "@/data/ecommerce";
import { useCart } from "@/components/cart/CartProvider";

type ProductCardProps = {
  product: Product;
  showQuickView?: boolean;
};

export function ProductCard({ product, showQuickView = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quickView, setQuickView] = useState(false);

  /* Close on Escape */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setQuickView(false);
  }, []);

  useEffect(() => {
    if (quickView) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [quickView, handleKeyDown]);

  return (
    <>
      <article className="group overflow-hidden rounded-card border border-smoke/50 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="relative overflow-hidden">
          <Link href={`/product/${product.slug}`} className="block">
            <div className="relative aspect-[4/3]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-md bg-wheat px-2.5 py-1 text-xs font-bold text-forest">
              {product.badge}
            </span>
          )}
          {showQuickView && (
            <button
              type="button"
              onClick={() => setQuickView(true)}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-charcoal opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <Eye className="h-3.5 w-3.5" />
              Quick view
            </button>
          )}
        </div>

        <div className="p-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-taupe">
            {product.category.replace(/-/g, " ")}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="mt-1.5 block text-sm font-semibold leading-snug text-charcoal transition-colors hover:text-forest"
          >
            {product.name}
          </Link>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-taupe">{product.shortDescription}</p>
          <div className="mt-3 flex items-end gap-2">
            <p className="text-lg font-bold text-charcoal">{currency(product.price)}</p>
            {product.compareAtPrice && (
              <p className="text-sm text-taupe line-through">{currency(product.compareAtPrice)}</p>
            )}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href={`/product/${product.slug}`} className="btn-secondary !px-3 !py-2 !text-xs">
              View details
            </Link>
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="btn-primary !px-3 !py-2 !text-xs"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Add
            </button>
          </div>
        </div>
      </article>

      {/* ── Quick View Modal ────────────────────── */}
      {quickView && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) setQuickView(false); }}
        >
          <div className="grid w-full max-w-3xl gap-0 overflow-hidden rounded-card bg-white shadow-showroom md:grid-cols-2 animate-slide-up">
            <div className="relative min-h-64">
              <Image
                src={product.images[1] ?? product.images[0]}
                alt={product.name}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="relative p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setQuickView(false)}
                aria-label="Close quick view"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg text-taupe hover:bg-cream hover:text-charcoal transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-taupe">
                {product.category.replace(/-/g, " ")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{product.description}</p>
              <p className="mt-4 text-2xl font-bold text-charcoal">{currency(product.price)}</p>
              {product.compareAtPrice && (
                <p className="mt-1 text-sm text-taupe line-through">{currency(product.compareAtPrice)}</p>
              )}
              <div className="mt-6 grid gap-2">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product, 1);
                    setQuickView(false);
                  }}
                  className="btn-primary"
                >
                  <ShoppingCart className="h-4 w-4" /> Add to basket
                </button>
                <Link
                  href={`/product/${product.slug}`}
                  onClick={() => setQuickView(false)}
                  className="btn-secondary text-center"
                >
                  View full details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
