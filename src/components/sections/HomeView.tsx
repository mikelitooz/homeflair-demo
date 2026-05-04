"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, Sofa, Truck, CreditCard, Clock } from "lucide-react";
import { ProductCard } from "@/components/ecommerce/ProductCard";
import { categories, products, roomShop } from "@/data/ecommerce";

/* ── Data ───────────────────────────────────────── */

const trending = products.slice(0, 8);
const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);
const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);
const specialOffers = products.filter((p) => p.offer).slice(0, 4);

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=2000&q=85",
    alt: "Luxury corner sofa in styled living room",
    tag: "New collection",
    headline: "Handpicked furniture for Derbyshire homes",
    copy: "Sofas, beds, dining and decor curated for the way you live. Visit our Chesterfield showroom or shop online.",
    primaryCta: { label: "Shop all furniture", href: "/shop" },
    secondaryCta: { label: "View offers", href: "/shop?offer=true" },
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern upholstered bedroom furniture",
    tag: "Bedroom event",
    headline: "Upholstered beds from £549",
    copy: "Statement headboards and storage beds crafted for restful bedrooms. Free local delivery available.",
    primaryCta: { label: "Shop beds", href: "/category/beds" },
    secondaryCta: { label: "Shop wardrobes", href: "/category/wardrobes" },
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85",
    alt: "Oak dining table with upholstered chairs",
    tag: "Dining inspiration",
    headline: "Dining sets built for everyday hosting",
    copy: "Extendable tables, bench sets and statement chairs in warm oak and modern finishes.",
    primaryCta: { label: "Shop dining", href: "/category/dining" },
    secondaryCta: { label: "Shop all", href: "/shop" },
  },
];

const trustSignals = [
  { icon: ShieldCheck, label: "Quality craftsmanship" },
  { icon: Truck, label: "Free local delivery" },
  { icon: CreditCard, label: "0% finance available" },
  { icon: Clock, label: "Open 7 days a week" },
];

/* ── Slider Variants ────────────────────────────── */

const slideVariants = {
  enter: { opacity: 0, scale: 1.02 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ── Component ──────────────────────────────────── */

export function HomeView() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  /* Autoplay */
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <main className="bg-ivory pb-10">
      {/* ══════════════════════════════════════════
          HERO SLIDER
         ══════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[700px] overflow-hidden bg-charcoal md:h-[70vh]">
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
            />
            {/* Gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Text overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div key={current} className="max-w-xl" initial="hidden" animate="visible" exit="hidden">
              <motion.p
                custom={0}
                variants={textVariants}
                className="mb-4 inline-block rounded-md bg-wheat/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-forest"
              >
                {slide.tag}
              </motion.p>
              <motion.h1
                custom={1}
                variants={textVariants}
                className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                {slide.headline}
              </motion.h1>
              <motion.p
                custom={2}
                variants={textVariants}
                className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base"
              >
                {slide.copy}
              </motion.p>
              <motion.div custom={3} variants={textVariants} className="mt-6 flex flex-wrap gap-3">
                <Link href={slide.primaryCta.href} className="btn-primary !py-3.5 !px-7 !text-base">
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {slide.secondaryCta.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-wheat" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST STRIP
         ══════════════════════════════════════════ */}
      <section className="border-b border-smoke/50 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {trustSignals.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5 text-sm text-charcoal">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest/10">
                <t.icon className="h-4 w-4 text-forest" />
              </div>
              <span className="font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BROWSE BY CATEGORY
         ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">Shop by Category</h2>
          <Link href="/shop" className="btn-ghost text-sm">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group overflow-hidden rounded-card border border-smoke/50 bg-white shadow-card transition hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.heroImage}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="px-3 py-3 text-sm font-semibold text-charcoal">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRENDING PRODUCTS
         ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">Trending This Week</h2>
          <Link href="/shop?sort=price-high" className="btn-ghost text-sm">
            Shop trending <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROMO BANNER
         ══════════════════════════════════════════ */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-card bg-forest px-8 py-10 text-center md:py-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=30')] bg-cover bg-center opacity-15" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-wheat">Derbyshire Suite Centre</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Furnish your whole home with one basket
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/70">
              Mix categories and unlock bundle pricing. Sofas, beds, dining and decor — all in one place.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/shop" className="inline-flex items-center gap-2 rounded-lg bg-wheat px-6 py-3 text-sm font-bold text-forest transition-colors hover:bg-wheat/90">
                <Sofa className="h-4 w-4" /> Shop the collection
              </Link>
              <Link href="/shop?offer=true" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                View offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SHOP BY ROOM
         ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-display text-3xl font-bold text-charcoal sm:text-4xl">Shop by Room</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {roomShop.map((r) => (
            <Link key={r.name} href={r.href} className="group relative overflow-hidden rounded-card">
              <div className="relative aspect-[5/4]">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-display text-xl font-bold text-white">{r.name}</p>
                <p className="mt-1 text-xs font-semibold text-wheat opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop now →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW / BEST / OFFERS — 3 COLUMN
         ══════════════════════════════════════════ */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article>
          <h3 className="mb-4 font-display text-2xl font-bold text-charcoal">New Arrivals</h3>
          <div className="space-y-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.slug} product={p} showQuickView={false} />
            ))}
          </div>
        </article>
        <article>
          <h3 className="mb-4 font-display text-2xl font-bold text-charcoal">Best Sellers</h3>
          <div className="space-y-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.slug} product={p} showQuickView={false} />
            ))}
          </div>
        </article>
        <article>
          <h3 className="mb-4 font-display text-2xl font-bold text-charcoal">Special Offers</h3>
          <div className="space-y-4">
            {specialOffers.map((p) => (
              <ProductCard key={p.slug} product={p} showQuickView={false} />
            ))}
          </div>
        </article>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER
         ══════════════════════════════════════════ */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-card bg-linen px-6 py-10 text-center sm:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-forest">Stay inspired</p>
          <h3 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            First access to new collections & offers
          </h3>
          <p className="mt-2 text-sm text-taupe">
            Sign up for product drops, room inspiration and seasonal sale updates from Derbyshire Suite Centre.
          </p>
          <form className="mx-auto mt-6 flex max-w-md gap-2">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Email address"
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
