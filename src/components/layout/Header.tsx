"use client";

import Link from "next/link";
import { Heart, MapPin, Menu, Phone, Search, ShoppingBasket, Truck, UserRound, X, ChevronRight } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { promoBanners, type Category } from "@/data/ecommerce";
import { useCart } from "@/components/cart/CartProvider";
import { business } from "@/data/site";

export function Header({ categories = [] }: { categories: Category[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [promoIndex, setPromoIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { totalItems, openCart } = useCart();

  /* Rotate promo messages */
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((i) => (i + 1) % promoBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Detect scroll for subtle shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query.length === 0) {
      router.push("/shop");
      return;
    }
    router.push(`/shop?query=${encodeURIComponent(query)}`);
    setMobileOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* ── Layer 1: Utility Bar ──────────────────── */}
      <div className="bg-charcoal text-ivory/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] sm:px-6 lg:px-8">
          <p className="hidden items-center gap-1.5 sm:flex">
            <Phone className="h-3 w-3" />
            For help call us on <span className="font-semibold text-white">{business.phone}</span>
          </p>
          <p className="sm:hidden text-center w-full">
            Call <span className="font-semibold text-white">{business.phone}</span> for help
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/contact" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <MapPin className="h-3 w-3" /> Visit our showroom
            </Link>
            <Link href="/shop" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Truck className="h-3 w-3" /> Delivery info
            </Link>
            <span className="hover:text-white transition-colors cursor-pointer">Help</span>
          </div>
        </div>
      </div>

      {/* ── Layer 2: Main Bar ─────────────────────── */}
      <div className="border-b border-smoke/50">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-smoke lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="hidden lg:flex items-center gap-2">
            <span className="font-display text-3xl font-bold tracking-tight text-forest">Slators</span>
            <span className="font-display text-3xl font-light tracking-tight text-forest">Furniture</span>
          </Link>
          <Link href="/" className="lg:hidden">
            <span className="font-display text-2xl font-bold tracking-tight text-forest">Slators Furniture</span>
          </Link>

          {/* Search */}
          <form onSubmit={onSearchSubmit} className="hidden lg:block">
            <label htmlFor="global-search" className="sr-only">Search products</label>
            <div className="flex h-11 w-full max-w-lg items-center rounded-lg border border-smoke bg-cream px-4 transition-colors focus-within:border-forest focus-within:ring-1 focus-within:ring-forest">
              <Search className="h-4 w-4 text-taupe" />
              <input
                id="global-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sofas, beds, dining sets..."
                className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-taupe"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile search */}
            <form onSubmit={onSearchSubmit} className="lg:hidden">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <div className="flex h-10 items-center rounded-lg border border-smoke bg-cream px-3">
                <Search className="h-4 w-4 text-taupe" />
                <input
                  id="mobile-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-24 bg-transparent px-2 text-sm outline-none sm:w-40"
                />
              </div>
            </form>
            <button type="button" aria-label="Account" className="hidden text-charcoal hover:text-forest transition-colors lg:block">
              <UserRound className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Wishlist" className="hidden text-charcoal hover:text-forest transition-colors lg:block">
              <Heart className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="btn-primary relative !rounded-lg !px-4 !py-2"
            >
              <ShoppingBasket className="h-4 w-4" />
              <span className="hidden sm:inline">Basket</span>
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-wheat text-[11px] font-bold text-forest">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Layer 3: Category Nav ─────────────────── */}
      <nav className="hidden border-b border-smoke/30 lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-0 sm:px-6 lg:px-8">
          <Link href="/shop" className="whitespace-nowrap px-3 py-3 text-sm font-bold text-forest hover:bg-forest/5 rounded-t-lg transition-colors">
            Shop All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap px-3 py-3 text-sm font-medium text-charcoal hover:text-forest hover:bg-forest/5 rounded-t-lg transition-colors"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/shop?offer=true" className="whitespace-nowrap px-3 py-3 text-sm font-bold text-bronze hover:bg-bronze/5 rounded-t-lg transition-colors">
            Offers
          </Link>
        </div>
      </nav>

      {/* ── Layer 4: Promo Strip ──────────────────── */}
      <div className="bg-forest px-4 py-2.5 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-wheat transition-opacity duration-500">
          {promoBanners[promoIndex]}
        </p>
      </div>

      {/* ── Mobile Drawer ─────────────────────────── */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-smoke bg-white shadow-lg lg:hidden animate-slide-up">
          <div className="px-4 py-4">
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-cream px-3 py-2.5 text-sm text-taupe">
              <Truck className="h-4 w-4 text-forest" />
              Friendly delivery across South Yorkshire
            </div>
            <div className="grid gap-0.5">
              <Link href="/shop" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 font-semibold text-charcoal hover:bg-cream transition-colors">
                Shop All <ChevronRight className="h-4 w-4 text-taupe" />
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal/80 hover:bg-cream transition-colors"
                >
                  {c.name} <ChevronRight className="h-3.5 w-3.5 text-taupe" />
                </Link>
              ))}
              <hr className="my-2 border-smoke/50" />
              <Link href="/cart" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 font-semibold text-charcoal hover:bg-cream transition-colors">
                <ShoppingBasket className="h-4 w-4" /> Basket ({totalItems})
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-taupe hover:bg-cream transition-colors">
                <MapPin className="h-4 w-4" /> Visit our Sheffield showroom
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
