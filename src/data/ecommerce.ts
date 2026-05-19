export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  materials: string;
  delivery: string;
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  offer?: boolean;
  room: "Living Room" | "Bedroom" | "Dining Room" | "Home Office" | "Bathroom";
  variantId?: string;
};

const media = {
  fabricA: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1500&q=85",
  fabricB: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1500&q=85",
  leatherA: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1500&q=85",
  leatherB: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1500&q=85",
  rattanA: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
  rattanB: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
  gardenA: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1500&q=85",
  showroom: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1500&q=85",
  cornerA: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1500&q=85",
  recliner: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=85",
};

export const categories: Category[] = [
  { slug: "fabric-sofas", name: "Fabric Sofas", description: "UK-made bespoke sofas in your choice of fabric", heroImage: media.fabricA },
  { slug: "leather-sofas", name: "Leather Sofas", description: "Italian-inspired leather suites and chairs", heroImage: media.leatherA },
  { slug: "garden", name: "Rattan Garden Furniture", description: "Exclusive outdoor dining and lounge sets", heroImage: media.rattanA },
  { slug: "ex-display", name: "Ex-Display Deals", description: "Premium showroom pieces at clearance prices", heroImage: media.showroom },
];

export const products: Product[] = [
  {
    slug: "buoyant-kennedy-3-seater",
    name: "Buoyant Kennedy 3 Seater Sofa",
    category: "fabric-sofas",
    price: 1195,
    compareAtPrice: 1495,
    badge: "Best Seller",
    shortDescription: "Classic 3-seater in premium woven fabric by Buoyant Upholstery.",
    description: "Handmade in the UK by Buoyant Upholstery. The Kennedy features generous cushioning, a solid hardwood frame, and a choice of over 100 fabrics. Fully assembled and delivered to your room of choice.",
    dimensions: "W 215cm x D 98cm x H 92cm",
    materials: "Hardwood Frame, Fibre-Filled Cushions, Woven Fabric",
    delivery: "Speedy Home Delivery – to your room of choice",
    images: [media.fabricA, media.fabricB],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "lebus-lucy-corner-sofa",
    name: "Lebus Lucy Corner Sofa",
    category: "fabric-sofas",
    price: 1695,
    shortDescription: "Spacious corner suite in soft touch fabric by Lebus Upholstery.",
    description: "A generous L-shaped design handmade by Lebus in the UK. Scatter-back cushions give a relaxed, contemporary look. Choose from a wide range of fabrics and left or right-hand configurations.",
    dimensions: "W 280cm x D 220cm x H 88cm",
    materials: "Kiln-Dried Hardwood, Foam & Fibre, Soft-Touch Polyester",
    delivery: "Speedy Home Delivery – to your room of choice",
    images: [media.cornerA, media.fabricA],
    featured: true,
    newArrival: true,
    room: "Living Room"
  },
  {
    slug: "red-rose-windsor-2-seater",
    name: "Red Rose Windsor 2 Seater Sofa",
    category: "fabric-sofas",
    price: 895,
    shortDescription: "Compact 2-seater with pillow-back comfort by Red Rose Sofas.",
    description: "British-made by Red Rose with traditional craftsmanship. The Windsor pairs contemporary style with classic comfort, featuring deep-filled fibre cushions and sleek tapered wooden legs.",
    dimensions: "W 165cm x D 92cm x H 90cm",
    materials: "Solid Beech Frame, Fibre-Filled Backs, Foam Seats",
    delivery: "Speedy Home Delivery",
    images: [media.fabricB, media.fabricA],
    room: "Living Room"
  },
  {
    slug: "newtrend-italia-leather-3-seater",
    name: "Newtrend Concepts Italia 3 Seater",
    category: "leather-sofas",
    price: 2495,
    compareAtPrice: 2995,
    badge: "Italian Design",
    shortDescription: "Luxury Italian leather suite with electric headrests.",
    description: "Imported from Newtrend Concepts in Italy. This power recliner sofa features adjustable headrests, top-grain Italian leather, and a chrome-finished steel frame for a truly premium living room centrepiece.",
    dimensions: "W 225cm x D 100cm x H 95cm",
    materials: "Top-Grain Italian Leather, Steel Recliner Mechanism, Foam",
    delivery: "White Glove Delivery & Setup",
    images: [media.leatherA, media.leatherB],
    featured: true,
    bestSeller: true,
    offer: true,
    room: "Living Room"
  },
  {
    slug: "lazboy-recliner-chair",
    name: "La-Z-Boy Staten Recliner Chair",
    category: "leather-sofas",
    price: 1299,
    shortDescription: "Iconic La-Z-Boy power recliner in smooth leather.",
    description: "The world-famous La-Z-Boy comfort experience. The Staten features a power reclining mechanism, lumbar support, and butter-soft leather upholstery. Perfect as an accent chair or your favourite reading spot.",
    dimensions: "W 88cm x D 95cm x H 105cm",
    materials: "Premium Leather, Power Recliner Motor, Foam Cushioning",
    delivery: "Speedy Home Delivery",
    images: [media.recliner, media.leatherA],
    room: "Living Room"
  },
  {
    slug: "halo-corner-set-firepit",
    name: "Halo Corner Sofa Set with Firepit Table",
    category: "garden",
    price: 1699,
    badge: "Exclusive",
    shortDescription: "Rattan corner dining set with gas firepit table – Homeflair Exclusive.",
    description: "Our exclusive Halo rattan set is perfect for entertaining. Features a large L-shaped sofa, a gas fire-pit dining table, and a compact side table. Built with UV-resistant flat weave rattan and shower-proof cushions.",
    dimensions: "L 260cm x W 200cm x Table H 65cm",
    materials: "PE Rattan, Aluminium Frame, Tempered Glass, Gas Firepit",
    delivery: "Speedy Delivery – booked time slot",
    images: [media.rattanA, media.rattanB],
    featured: true,
    bestSeller: true,
    room: "Dining Room"
  },
  {
    slug: "rattan-round-table-6-chairs",
    name: "Rattan Grey Dining Table + 6 Chairs Set",
    category: "garden",
    price: 1299,
    compareAtPrice: 1949,
    shortDescription: "Round rattan dining set seating 6 with lazy susan.",
    description: "A stunning outdoor dining experience. This grey rattan set includes a round table with built-in lazy susan and 6 matching highback chairs with weatherproof cushions. Perfect for al fresco summer dining.",
    dimensions: "Table Ø 130cm x H 74cm, Chairs W 60cm x H 90cm",
    materials: "PE Rattan, Aluminium Frame, Tempered Glass Top",
    delivery: "Speedy Delivery – booked time slot",
    images: [media.gardenA, media.rattanA],
    offer: true,
    room: "Dining Room"
  },
  {
    slug: "tammy-bistro-set",
    name: "Tammy Rattan Bistro Set – Table + 2 Chairs",
    category: "garden",
    price: 499,
    shortDescription: "Compact rattan bistro set perfect for small patios.",
    description: "The Tammy bistro set is ideal for balconies and smaller gardens. Features two stacking chairs and a round tempered glass table. Lightweight yet durable, with UV-stable grey rattan weave.",
    dimensions: "Table Ø 70cm x H 72cm, Chairs W 55cm x H 82cm",
    materials: "PE Rattan, Powder-Coated Steel, Tempered Glass",
    delivery: "Standard Delivery",
    images: [media.rattanB, media.gardenA],
    newArrival: true,
    room: "Dining Room"
  },
  {
    slug: "ex-display-buoyant-fantasia",
    name: "Ex-Display Buoyant Fantasia Corner Suite",
    category: "ex-display",
    price: 799,
    compareAtPrice: 1595,
    badge: "Clearance",
    shortDescription: "Showroom model – Buoyant Fantasia in teal fabric. One only!",
    description: "Straight from our Rotherham showroom floor. This Buoyant Fantasia corner suite is in excellent condition with minimal use. Features a contemporary design in bold teal fabric with scatter-back cushions. Grab a bargain – once it's gone, it's gone.",
    dimensions: "W 260cm x D 210cm x H 86cm",
    materials: "Hardwood Frame, Foam Seats, Polyester Fabric",
    delivery: "Collection or Local Delivery",
    images: [media.showroom, media.fabricB],
    offer: true,
    room: "Living Room"
  },
  {
    slug: "ex-display-leather-recliner-suite",
    name: "Ex-Display Leather Electric Recliner Suite",
    category: "ex-display",
    price: 1499,
    compareAtPrice: 2799,
    badge: "Half Price",
    shortDescription: "3+2 power recliner suite in dark brown leather – showroom model.",
    description: "An incredible showroom deal. This 3-seater + 2-seater electric recliner suite in rich dark brown leather has been on display for just 4 months. Full power recline, USB charging, and luxurious padded headrests.",
    dimensions: "3-Seater: W 210cm x D 98cm, 2-Seater: W 165cm x D 98cm",
    materials: "Top-Grain Leather, Power Motors, Steel Frame",
    delivery: "Collection or Local Delivery",
    images: [media.leatherB, media.leatherA],
    offer: true,
    bestSeller: true,
    room: "Living Room"
  }
];

export const promoBanners = [
  "Welcome to Homeflair – Quality furniture since 1972",
  "Visit our Rotherham showroom: Parkgate Complex, Rawmarsh Rd, S60 1RZ",
  "Speedy Delivery – our drivers book a time slot that suits you",
  "Ex-Display Clearance: Premium sofas at up to 50% off in store",
];

export const roomShop = [
  { name: "Living Room", image: media.fabricA, href: "/shop?category=fabric-sofas" },
  { name: "Garden & Outdoor", image: media.rattanA, href: "/shop?category=garden" },
  { name: "Showroom Deals", image: media.showroom, href: "/shop?category=ex-display" }
];

export function currency(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((category) => category.slug === slug);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return products.filter((product) => product.category === categorySlug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  return products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);
}
