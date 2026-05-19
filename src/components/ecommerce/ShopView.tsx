"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, SearchX } from "lucide-react";
import { Category, Product } from "@/data/ecommerce";
import { ProductCard } from "@/components/ecommerce/ProductCard";

type ShopViewProps = {
  products: Product[];
  categories: Category[];
  initialQuery?: string;
  initialCategory?: string;
  initialRoom?: string;
  offerOnly?: boolean;
};

export function ShopView({
  products,
  categories,
  initialQuery = "",
  initialCategory = "all",
  initialRoom = "all",
  offerOnly = false,
}: ShopViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [room, setRoom] = useState(initialRoom);
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let current: Product[] = [...products];
    if (category !== "all") current = current.filter((p) => p.category === category);
    if (room !== "all") current = current.filter((p) => p.room === room);
    if (offerOnly) current = current.filter((p) => p.offer);
    if (query.trim().length > 0) {
      const normalized = query.toLowerCase();
      current = current.filter(
        (p) =>
          p.name.toLowerCase().includes(normalized) ||
          p.shortDescription.toLowerCase().includes(normalized) ||
          p.category.toLowerCase().includes(normalized)
      );
    }

    if (sortBy === "price-low") current.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") current.sort((a, b) => b.price - a.price);
    if (sortBy === "name") current.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "featured")
      current.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return current;
  }, [category, offerOnly, query, room, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setRoom("all");
    setSortBy("featured");
  };

  const hasActiveFilters = query.length > 0 || category !== "all" || room !== "all";

  return (
    <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-charcoal sm:text-5xl">
        {offerOnly ? "Special Offers" : "Shop Furniture"}
      </h1>
      <p className="mt-2 text-sm text-taupe">
        {offerOnly
          ? "Handpicked offers on sofas, leather suites and garden furniture from Homeflair."
          : "Browse fabric sofas, leather suites, garden furniture and more from Homeflair."}
      </p>

      {/* ── Filter panel ─────────────────────────── */}
      <section className="mt-6 rounded-card border border-smoke/50 bg-white p-4 shadow-card md:p-5">
        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
          <SlidersHorizontal className="h-4 w-4 text-forest" />
          Filter &amp; sort
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="input-field"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="input-field"
          >
            <option value="all">All rooms</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Dining Room">Dining Room</option>
            <option value="Home Office">Home Office</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to high</option>
            <option value="price-high">Price: High to low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-3 text-xs font-semibold text-forest hover:text-forest-light transition-colors"
          >
            ✕ Clear all filters
          </button>
        )}
      </section>

      {/* ── Results ───────────────────────────────── */}
      <section className="mt-6">
        <p className="mb-4 text-sm font-medium text-taupe">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-card border border-dashed border-smoke bg-white p-12 text-center">
            <SearchX className="mx-auto h-10 w-10 text-smoke" />
            <p className="mt-4 font-display text-xl font-semibold text-charcoal">No products found</p>
            <p className="mt-2 text-sm text-taupe">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button type="button" onClick={clearFilters} className="btn-primary mt-5">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
