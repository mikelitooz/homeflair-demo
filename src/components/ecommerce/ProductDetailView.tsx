"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ShieldCheck,
  Truck,
  Star,
  Check,
  Heart,
  Phone,
  RotateCcw,
  MapPin,
  Calendar,
  Info
} from "lucide-react";
import type { Product } from "@/data/ecommerce";
import { currency } from "@/data/ecommerce";
import { ProductCard } from "@/components/ecommerce/ProductCard";
import { useCart } from "@/components/cart/CartProvider";

// Local static data for Lebus Oscar customizations
const swatches = [
  { name: "Beige", hex: "#E6DEC9" },
  { name: "Charcoal", hex: "#2F2F2F" },
  { name: "Cinnamon", hex: "#8A4A32" },
  { name: "Hunter Green", hex: "#1C352D" },
  { name: "Marine", hex: "#1E3B46" }
];

const feetFinishes = [
  { name: "Oak", description: "Natural Light Oak" },
  { name: "Mahogany", description: "Rich Deep Mahogany" }
];

const configurations: { name: string; price: number; compareAtPrice?: number; dimensions: string; sku: string; }[] = [
  { name: "3-Seater Sofa", price: 899, dimensions: "W 214cm x D 99cm x H 95cm", sku: "LEB-OSC-3S" },
  { name: "2-Seater Sofa", price: 799, dimensions: "W 184cm x D 99cm x H 95cm", sku: "LEB-OSC-2S" },
  { name: "Love Chair", price: 499, dimensions: "W 114cm x D 99cm x H 95cm", sku: "LEB-OSC-LC" },
  { name: "Footstool", price: 249, dimensions: "W 85cm x D 60cm x H 46cm", sku: "LEB-OSC-FS" }
];

const mockReviews = [
  {
    author: "Sarah M.",
    location: "Rotherham",
    rating: 5,
    date: "12 May 2026",
    title: "Outstanding quality and service",
    comment: "We ordered the Oscar 3-seater in Hunter Green with Mahogany feet. It arrived right on the 7-week mark. The delivery team set it up in our living room and even took away the packaging. Incredibly comfortable!"
  },
  {
    author: "David T.",
    location: "Sheffield",
    rating: 5,
    date: "28 April 2026",
    title: "Very friendly family-run store",
    comment: "Excellent service from Homeflair. Visited their Parkgate showroom to sit on the Oscar before ordering. Staff were very helpful, no hard sell. The sofa looks beautiful in Beige."
  },
  {
    author: "Arthur P.",
    location: "Doncaster",
    rating: 4,
    date: "14 April 2026",
    title: "Very comfortable, premium fabric",
    comment: "Very comfortable sofa, fabric feels very premium and hardwearing. Highly recommend Homeflair for local customer support and reliable delivery."
  }
];

export function ProductDetailView({ product, related }: { product: Product; related: Product[] }) {
  // Option states
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(swatches[0].name);
  const [selectedFeet, setSelectedFeet] = useState(feetFinishes[0].name);
  const [selectedConfig, setSelectedConfig] = useState(configurations[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const { addToCart } = useCart();

  // Price calculation based on dynamic configuration selections
  const currentPrice = selectedConfig ? selectedConfig.price : product.price;
  const currentComparePrice = selectedConfig ? selectedConfig.compareAtPrice : product.compareAtPrice;
  const currentDimensions = selectedConfig ? selectedConfig.dimensions : product.dimensions;
  const currentSku = selectedConfig ? selectedConfig.sku : product.sku || "LEB-OSC";

  // Finance calculation (36 months interest free)
  const monthlyFinance = Math.floor(currentPrice / 36);

  // Monitor scroll for the mobile sticky add-to-basket bar
  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById("add-to-basket-trigger");
      if (trigger) {
        const triggerPos = trigger.getBoundingClientRect().bottom;
        setShowStickyBar(triggerPos < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync selected image if product changes
  useEffect(() => {
    setSelectedImage(product.images[0]);
  }, [product]);

  // Construct dynamic product item payload for cart state
  const handleAddToBasket = () => {
    const customizedProduct: Product = {
      ...product,
      name: `${product.name} (${selectedConfig.name} - ${selectedColor} / ${selectedFeet} Feet)`,
      price: currentPrice,
      compareAtPrice: currentComparePrice,
      dimensions: currentDimensions,
      sku: currentSku,
      variantId: product.variantId || "gid://shopify/ProductVariant/mock-oscar"
    };
    addToCart(customizedProduct, quantity);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────── */}
      <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-xs font-medium text-taupe">
        <Link href="/" className="hover:text-forest transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3 text-smoke" />
        <Link href="/shop" className="hover:text-forest transition-colors">Shop</Link>
        <ChevronRight className="h-3 w-3 text-smoke" />
        <Link href="/shop?category=sofas-living" className="hover:text-forest transition-colors">Sofas</Link>
        <ChevronRight className="h-3 w-3 text-smoke" />
        <span className="text-charcoal font-semibold">{product.brand || "Lebus"}</span>
        <ChevronRight className="h-3 w-3 text-smoke" />
        <span className="text-charcoal/60">{product.name}</span>
      </nav>

      {/* ── Main Two-Column Layout ─────────────────── */}
      <section className="grid gap-10 lg:grid-cols-12">
        {/* Left Column: Visual Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/11] overflow-hidden rounded-card border border-smoke bg-cream">
            <Image
              src={selectedImage}
              alt={`${product.name} in ${selectedColor} fabric`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-all duration-300"
              priority
            />
            {currentComparePrice && (
              <span className="absolute left-4 top-4 rounded-md bg-bronze px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                Clearance Sale
              </span>
            )}
            {/* Lead Time Badge */}
            <span className="absolute right-4 top-4 rounded-md bg-white/90 backdrop-blur-sm border border-smoke px-3 py-1 text-xs font-semibold text-charcoal shadow-sm flex items-center gap-1">
              <Calendar className="h-3 w-3 text-forest" />
              {product.leadTimeType === "made_to_order" ? "Made to Order" : "In Stock"}
            </span>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setSelectedImage(img)}
                aria-label={`View product image ${idx + 1}`}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border bg-cream transition-all duration-200 ${
                  selectedImage === img
                    ? "border-forest ring-2 ring-forest/20 scale-[0.98]"
                    : "border-smoke hover:border-taupe opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Configuring & Buying */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Specs */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-forest bg-forest/5 px-2.5 py-1 rounded">
                {product.brand || "UK Crafted"}
              </span>
              <span className="text-xs font-medium text-taupe">SKU: {currentSku}</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl leading-tight">
              {product.name}
            </h1>
            
            {/* Reviews Summary rating */}
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex text-forest">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal">(4.8 / 5.0)</span>
              <span className="text-xs text-taupe">• 12 Customer Reviews</span>
            </div>
          </div>

          {/* Price block */}
          <div className="p-5 rounded-card border border-smoke/70 bg-cream/50 space-y-3">
            <div className="flex items-baseline gap-3">
              <p className="text-4xl font-extrabold text-charcoal tracking-tight">
                {currency(currentPrice)}
              </p>
              {currentComparePrice && (
                <>
                  <p className="text-lg text-taupe line-through font-medium">
                    {currency(currentComparePrice)}
                  </p>
                  <p className="text-xs font-bold text-white bg-bronze px-2 py-0.5 rounded uppercase">
                    Save {currency(currentComparePrice - currentPrice)}
                  </p>
                </>
              )}
            </div>
            <div className="border-t border-smoke/50 pt-2.5 flex items-center justify-between text-xs text-charcoal">
              <span className="font-semibold text-charcoal/90">Interest-Free Finance Options</span>
              <span className="font-bold text-forest">From {currency(monthlyFinance)}/month</span>
            </div>
            <p className="text-[10px] text-taupe">
              Spread the cost up to 36 months at 0% APR. Showroom consultation required for finance setups.
            </p>
          </div>

          {/* Options Selectors */}
          <section className="space-y-5 border-t border-smoke pt-5">
            <h2 className="sr-only">Choose Your Options</h2>

            {/* Sizes / Configurations */}
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  1. Size & Configuration
                </h3>
                <span className="text-xs text-taupe font-medium">{selectedConfig.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {configurations.map((cfg) => (
                  <button
                    key={cfg.name}
                    type="button"
                    onClick={() => setSelectedConfig(cfg)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                      selectedConfig.name === cfg.name
                        ? "border-forest bg-forest/5 ring-1 ring-forest"
                        : "border-smoke bg-white hover:border-taupe"
                    }`}
                  >
                    <p className="text-xs font-bold text-charcoal">{cfg.name}</p>
                    <div className="flex justify-between items-baseline mt-1">
                      <p className="text-sm font-extrabold text-forest">{currency(cfg.price)}</p>
                      {cfg.compareAtPrice && (
                        <p className="text-[10px] text-taupe line-through">{currency(cfg.compareAtPrice)}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Selector */}
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  2. Fabric / Colour
                </h3>
                <span className="text-xs text-taupe font-medium">{selectedColor} Selection</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {swatches.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() => setSelectedColor(swatch.name)}
                    aria-label={`Select color ${swatch.name}`}
                    className={`group relative h-12 w-12 rounded-full border border-smoke/70 transition-all duration-200 ${
                      selectedColor === swatch.name
                        ? "ring-2 ring-forest ring-offset-2 scale-105"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {selectedColor === swatch.name && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className="h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                      </span>
                    )}
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-charcoal text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-10 shadow">
                      {swatch.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Wood Feet Option */}
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  3. Feet Finish
                </h3>
                <span className="text-xs text-taupe font-medium">{selectedFeet}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {feetFinishes.map((feet) => (
                  <button
                    key={feet.name}
                    type="button"
                    onClick={() => setSelectedFeet(feet.name)}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                      selectedFeet === feet.name
                        ? "border-forest bg-forest/5 text-forest"
                        : "border-smoke bg-white text-charcoal hover:border-taupe"
                    }`}
                  >
                    {feet.name}
                    <span className="block text-[10px] font-normal text-taupe mt-0.5">{feet.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Basket Trigger Hook */}
          <div id="add-to-basket-trigger"></div>

          {/* Checkout Controls */}
          <div className="space-y-3 pt-4 border-t border-smoke">
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-smoke bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-taupe hover:text-charcoal font-bold transition"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-2 text-sm font-bold text-charcoal w-8 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-taupe hover:text-charcoal font-bold transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToBasket}
                className="btn-primary flex-1 py-3 px-6 text-sm font-bold flex items-center justify-center gap-2 hover:bg-forest-light active:scale-[0.99] transition-transform"
              >
                Add to basket
              </button>

              <button
                type="button"
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-3 rounded-lg border transition-colors ${
                  isWishlist
                    ? "border-bronze bg-bronze/5 text-bronze"
                    : "border-smoke bg-white text-taupe hover:text-charcoal hover:border-taupe"
                }`}
                aria-label={isWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`h-5 w-5 ${isWishlist ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Direct Consultation / Reserve */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                href="tel:01709376633"
                className="py-2.5 px-3 rounded-lg border border-smoke bg-white text-charcoal hover:bg-cream hover:border-taupe transition flex items-center justify-center gap-1.5 font-bold"
              >
                <Phone className="h-3.5 w-3.5 text-forest" />
                Call Showroom
              </a>
              <Link
                href="/contact"
                className="py-2.5 px-3 rounded-lg border border-smoke bg-white text-charcoal hover:bg-cream hover:border-taupe transition flex items-center justify-center gap-1.5 font-bold"
              >
                <MapPin className="h-3.5 w-3.5 text-forest" />
                Enquire Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs & Details Sections ────────────────── */}
      <section className="mt-16 grid gap-10 lg:grid-cols-12 border-t border-smoke/70 pt-12">
        <div className="sr-only">Detailed Overview & Specifications</div>

        {/* Overview Tab Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Overview</h2>
            <h3 className="text-sm font-semibold text-charcoal/80 mb-3 italic">
              {product.shortDescription}
            </h3>
            <p className="text-sm leading-7 text-taupe">
              {product.description}
            </p>
          </div>

          <div className="p-5 rounded-card bg-linen border border-smoke/40 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Key Features & Benefits
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-xs text-charcoal/90">
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Made by Lebus Upholstery
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Robust Hardwood Timber Frame
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                High-Density Comfort Foam Seats
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Feather-Filled Scatter Cushions
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Reversible Comfort Back Cushions
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Elegant Solid Wood Feet finish
              </li>
            </ul>
          </div>
        </div>

        {/* Specifications & Dimensions Right panel */}
        <div className="lg:col-span-5 space-y-8">
          {/* Specifications */}
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Specifications</h2>
            
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Dimensions & Size Guide
              </h3>
              {/* Dimensions Table */}
              <div className="overflow-hidden border border-smoke rounded-lg bg-white">
                <table className="min-w-full text-xs text-left text-charcoal">
                  <tbody>
                    <tr className="border-b border-smoke">
                      <td className="px-4 py-2.5 font-bold bg-cream/60 w-1/3">Configuration</td>
                      <td className="px-4 py-2.5">{selectedConfig.name}</td>
                    </tr>
                    <tr className="border-b border-smoke">
                      <td className="px-4 py-2.5 font-bold bg-cream/60">Overall Width</td>
                      <td className="px-4 py-2.5">{currentDimensions.split("x")[0]?.trim() || "214cm"}</td>
                    </tr>
                    <tr className="border-b border-smoke">
                      <td className="px-4 py-2.5 font-bold bg-cream/60">Overall Depth</td>
                      <td className="px-4 py-2.5">{currentDimensions.split("x")[1]?.trim() || "99cm"}</td>
                    </tr>
                    <tr className="border-b border-smoke">
                      <td className="px-4 py-2.5 font-bold bg-cream/60">Overall Height</td>
                      <td className="px-4 py-2.5">{currentDimensions.split("x")[2]?.trim() || "95cm"}</td>
                    </tr>
                    <tr className="border-b border-smoke">
                      <td className="px-4 py-2.5 font-bold bg-cream/60">Seat Height</td>
                      <td className="px-4 py-2.5">49cm</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold bg-cream/60">Arm Height</td>
                      <td className="px-4 py-2.5">65cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Materials & Construction
              </h3>
              <div className="space-y-2 text-xs leading-5 text-taupe">
                <p>
                  <strong className="text-charcoal">Frame: </strong> 
                  Handmade hardwood frames, pinned and glued for ultimate structural strength.
                </p>
                <p>
                  <strong className="text-charcoal">Suspension: </strong> 
                  Tempered steel serpentine springs for resilient comfort.
                </p>
                <p>
                  <strong className="text-charcoal">Fillings: </strong> 
                  High-density foam cores with luxury fibre wrap, retaining shape and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery & Availability ────────────────── */}
      <section className="mt-12 border-t border-smoke/70 pt-12 space-y-6">
        <h2 className="font-display text-2xl font-bold text-charcoal">Delivery & Availability</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-5 rounded-card border border-smoke bg-white space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-forest/10 text-forest">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-charcoal">Lead Time & Stock</h3>
            </div>
            {product.leadTimeType === "made_to_order" ? (
              <p className="text-xs leading-5 text-taupe">
                <strong>Made to order — typically 6–8 weeks, confirmed after order.</strong> Every Lebus Oscar suite is custom-built at the UK workshop. Our local showroom will call you to schedule delivery as soon as your items pass inspection.
              </p>
            ) : (
              <p className="text-xs leading-5 text-taupe">
                <strong>In Stock — delivered within ~1 week.</strong> This product is currently in our Rotherham warehouse. Delivery will be scheduled within 5–7 business days of placing your order.
              </p>
            )}
          </div>

          <div className="p-5 rounded-card border border-smoke bg-white space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-forest/10 text-forest">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-charcoal">Mainland UK Delivery Details</h3>
            </div>
            <p className="text-xs leading-5 text-taupe">
              Flat <strong>£89 delivery</strong> across mainland UK. Delivered by our friendly two-man local white-glove service straight to your room of choice, unpackaged, and set up for you. Mainland UK delivery only.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Buy From Homeflair ─────────────────── */}
      <section className="mt-12 border-t border-smoke/70 pt-12 space-y-6">
        <h2 className="font-display text-2xl font-bold text-charcoal">Why Buy From Homeflair</h2>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-charcoal">Est. 1972 — Over 50 Years of Trust</h3>
            <p className="text-xs leading-5 text-taupe">
              We have been supplying high-quality sofas, carpets, and bedroom furniture to families in Rotherham and South Yorkshire for over half a century.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-charcoal">Visit Our Rotherham Showroom</h3>
            <p className="text-xs leading-5 text-taupe">
              Test the comfort of our suites before you buy. Visit us at the Parkgate Complex, Rawmarsh Road to see fabric samples and chat with our helpful showroom team.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-charcoal">5-Star Personal Service</h3>
            <p className="text-xs leading-5 text-taupe">
              No pushy salespeople or automated call centres. Speak to a real human directly on 01709 376633 for any inquiries, configurations, or custom sizes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Customer Reviews ───────────────────────── */}
      <section className="mt-12 border-t border-smoke/70 pt-12 space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">Customer Reviews</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-forest">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-charcoal">4.8 out of 5 stars</span>
              <span className="text-xs text-taupe">(Based on 12 verified buyers)</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="sr-only">What Our Customers Say</h3>
          {mockReviews.map((review, idx) => (
            <div key={idx} className="border-b border-smoke pb-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-charcoal">{review.author}</span>
                  <span className="text-xs text-taupe">({review.location})</span>
                  <span className="inline-flex items-center gap-1 rounded bg-forest/10 px-1.5 py-0.5 text-[9px] font-bold text-forest uppercase">
                    Verified Buyer
                  </span>
                </div>
                <span className="text-xs text-taupe">{review.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-forest">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < review.rating ? "fill-current" : "text-smoke"
                    }`}
                  />
                ))}
                <span className="text-xs font-bold text-charcoal ml-2">{review.title}</span>
              </div>
              <p className="text-xs leading-5 text-taupe">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related products ──────────────────────── */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-smoke/70 pt-12">
          <h2 className="mb-6 font-display text-2xl font-bold text-charcoal">
            You May Also Like
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      )}

      {/* ── Sticky Mobile Add-to-Basket Bar ────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-smoke p-3.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 lg:hidden transform ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative h-10 w-12 rounded bg-cream overflow-hidden border border-smoke flex-shrink-0">
              <Image src={selectedImage} alt="" fill className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-charcoal truncate">{product.name}</p>
              <p className="text-[10px] text-taupe truncate">
                {selectedConfig.name} • {selectedColor}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-charcoal">{currency(currentPrice)}</p>
            <button
              type="button"
              onClick={handleAddToBasket}
              className="bg-forest text-white py-2 px-4 rounded-lg text-xs font-bold hover:bg-forest-light transition-colors active:scale-95"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
